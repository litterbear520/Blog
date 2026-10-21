"""截 YouTube 视频几个时刻前后的画面，把底部的烧录字幕裁成长条拼成一张图，读原话核对识别错误。

用法（要 Pillow，用 uv 临时装）：
  uv run --no-project --with pillow python subtitle_frames.py <视频 ID> <秒数>... [--span 12] [--step 2] [--out 目录]
  uv run --no-project --with pillow python subtitle_frames.py --frames <帧.png>... [--out 目录]   # 只拼图

每个秒数输出一张 sheet-<秒数>.png：前后各 --span 秒、每 --step 秒一帧，左边标着秒数。秒数用 locate.py 估。
几个疑点一次传进来：重叠的时间段只截一次，seek 次数少，晚一点才被限流。要跑几分钟，放后台。
--out 不给就建一个临时目录（路径会打印出来），别让截图落进仓库。视频 ID 以 - 开头时写在 -- 后面。

几处坑（最后一次实测 2026-10-21）：
- agent-browser 默认 UA 带 HeadlessChrome，YouTube 会报 “Something went wrong” 不给播，脚本换成普通 Chrome UA；
  AGENT_BROWSER_ARGS 一旦设置就会覆盖默认参数，所以 --no-sandbox 要自己带上，否则 Chrome 起不来。
- 先让广告播完（只点“跳过”按钮，不动广告本身）。
- 同一天 seek 几十次以后，正片会一直卡在缓冲（state=3），换视频也一样。脚本每截一帧前都查播放状态，
  卡住就退出（退出码 3，已截到的帧照样拼图），这时别再试，把疑点和时间点交给用户去听。
- 裁切位置按无限芝士频道的字幕量的（画面高 85.5%–95.5%、宽 18%–82%），别的频道先看一帧，再用 --crop 改。
"""
import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
import time

UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36'
ARGS = '--no-sandbox,--disable-blink-features=AutomationControlled,--autoplay-policy=no-user-gesture-required'
CROP = (0.18, 0.855, 0.82, 0.955)  # 左、上、右、下，占画面的比例


def ab(*args):
    env = dict(os.environ, AGENT_BROWSER_USER_AGENT=UA, AGENT_BROWSER_ARGS=ARGS, AGENT_BROWSER_SESSION='subtitles')
    r = subprocess.run(['agent-browser', *args], capture_output=True, text=True, env=env)
    if r.returncode:
        sys.exit(f'agent-browser {args[0]} 失败：{r.stderr.strip()[:300]}')
    return r.stdout.strip()


def js(code):
    out = ab('eval', code)
    try:
        return json.loads(out)
    except json.JSONDecodeError:
        return out


STATE = """(() => { const p = document.getElementById('movie_player'); const v = document.querySelector('video');
  p.mute(); if (p.getPlayerState() !== 1) p.playVideo();
  document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button')?.click();
  return JSON.stringify({ad: !!document.querySelector('.ad-showing'), state: p.getPlayerState(), rs: v ? v.readyState : 0}); })()"""


class Throttled(Exception):
    """正片一直卡在缓冲，多半被 YouTube 限流。"""


def wait_for_main(timeout=240, patience=6):
    """等广告（包括中插广告）放完、正片真正播起来；连续 patience 次（每次 5 秒）没播起来就算被限流。"""
    stuck = 0
    for _ in range(timeout // 5):
        s = json.loads(js(STATE))
        if not s['ad']:
            if s['state'] == 1 and s['rs'] >= 2:
                return
            stuck += 1
            if stuck >= patience:
                raise Throttled
        time.sleep(5)
    sys.exit('等了 4 分钟广告还没放完')


def grab(video, seconds, span, step, out):
    """截下所有要用的帧，返回 {秒数: 帧文件}。重叠的时间段只截一次；被限流时返回已截到的部分。"""
    times = sorted({t for c in seconds for t in range(max(c - span, 0), c + span + 1, step)})
    ab('close')  # 旧会话可能是默认 UA 起的
    ab('open', f'https://www.youtube.com/watch?v={video}&t={times[0]}s')
    ab('set', 'viewport', '1920', '1300')
    frames = {}
    try:
        wait_for_main()
        js("(() => { const p = document.getElementById('movie_player'); p.setPlaybackQualityRange?.('hd1080', 'hd1080'); return 1; })()")
        for t in times:
            js(f"(() => {{ const p = document.getElementById('movie_player'); p.seekTo({t}, true); p.playVideo(); return 1; }})()")
            time.sleep(2.5)  # 让画面和字幕跟上 seek
            wait_for_main(patience=3)  # 中插广告放完；seek 后卡在缓冲就是被限流了
            js("(() => { document.getElementById('movie_player').pauseVideo(); return 1; })()")
            time.sleep(0.4)
            f = os.path.join(out, f'frame-{t}.png')
            ab('screenshot', '#movie_player', f)
            frames[t] = f
    except Throttled:
        print(f'正片一直卡在缓冲，多半被 YouTube 限流（截到 {len(frames)}/{len(times)} 帧）：'
              '剩下的疑点和时间点交给用户去听。', file=sys.stderr)
    finally:
        ab('close')
    return frames, len(frames) < len(times)


def sheet(frames, path, crop=CROP):
    from PIL import Image, ImageDraw

    strips = []
    for f in frames:
        im = Image.open(f).convert('RGB')
        w, h = im.size
        s = im.crop((int(w * crop[0]), int(h * crop[1]), int(w * crop[2]), int(h * crop[3])))
        s = s.resize((int(s.width * 0.6), int(s.height * 0.6)))
        row = Image.new('RGB', (s.width + 120, s.height), 'white')
        row.paste(s, (120, 0))
        label = re.findall(r'\d+', os.path.basename(f))
        ImageDraw.Draw(row).text((6, s.height // 2 - 6), label[-1] if label else '', fill='black')
        strips.append(row)
    out = Image.new('RGB', (max(r.width for r in strips), sum(r.height for r in strips)), 'white')
    y = 0
    for r in strips:
        out.paste(r, (0, y))
        y += r.height
    out.save(path)
    return path


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('video', nargs='?', help='视频 ID')
    ap.add_argument('seconds', nargs='*', type=int, help='疑点大约在第几秒')
    ap.add_argument('--span', type=int, default=12, help='前后各截多少秒（默认 12）')
    ap.add_argument('--step', type=int, default=2, help='几秒一帧（默认 2；字幕约 1.5–3 秒一换）')
    ap.add_argument('--out', help='帧和拼图放哪（默认新建临时目录；建议用 scratchpad）')
    ap.add_argument('--crop', default=','.join(map(str, CROP)), help='字幕区域占画面的比例：左,上,右,下')
    ap.add_argument('--frames', nargs='+', help='已有的帧，只拼图不开浏览器')
    args = ap.parse_args()
    out = args.out or tempfile.mkdtemp(prefix='subtitle-frames-')
    os.makedirs(out, exist_ok=True)
    crop = tuple(float(x) for x in args.crop.split(','))

    if args.frames:
        print(sheet(args.frames, os.path.join(out, 'sheet.png'), crop))
        return
    if not args.video or not args.seconds:
        ap.error('要给视频 ID 和至少一个秒数，或者用 --frames')
    frames, throttled = grab(args.video, args.seconds, args.span, args.step, out)
    for c in sorted(args.seconds):
        mine = [frames[t] for t in range(max(c - args.span, 0), c + args.span + 1, args.step) if t in frames]
        if mine:
            print(sheet(mine, os.path.join(out, f'sheet-{c}.png'), crop))
    if throttled:
        sys.exit(3)


if __name__ == '__main__':
    main()
