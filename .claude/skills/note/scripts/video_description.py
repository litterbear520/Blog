"""把 YouTube 视频的简介原样转成笔记开头的 <ReadMore id="简介"> 折叠块，打印到标准输出。

用法：python3 .claude/skills/note/scripts/video_description.py <视频 ID 或链接>

用 agent-browser 打开视频页、展开简介，再按页面上 <a> 的真实 href 补全截断的链接
（显示文字相同的截断链接按出现顺序依次对应），视频卡片换成完整标题，章节时间戳链到对应时刻。
用独立的浏览器会话，不会关掉别人正在用的默认会话。
"""
import argparse
import json
import os
import re
import subprocess
import sys
import urllib.parse
import urllib.request

READ_JS = r"""(() => {
  document.querySelector('#description-inline-expander #expand')?.click();
  const box = document.querySelector('#description-inline-expander');
  if (!box) return JSON.stringify({error: '页面上没有简介区域（可能是同意页、人机验证，或页面还没加载完）'});
  const links = [...box.querySelectorAll('a')].map(a => {
    let h = a.href;
    try { const u = new URL(h); if (u.pathname === '/redirect') h = u.searchParams.get('q'); } catch (e) {}
    return [a.innerText.trim(), h];
  });
  const text = (box.querySelector('yt-attributed-string') || box).innerText;
  return JSON.stringify({text, links});
})()"""

# 链接在空白或全角标点处截止，免得把“，欢迎”吞进链接
URL = re.compile(r'https?://[^\s，。、；：！？（）「」『』【】]+')
TIMESTAMP = re.compile(r'(\d{1,2}:\d{2}(?::\d{2})?)\s+(.*)')


def browser(*args, session):
    env = dict(os.environ, AGENT_BROWSER_SESSION=session)
    try:
        return subprocess.run(['agent-browser', *args], capture_output=True, text=True, check=True, env=env).stdout
    except FileNotFoundError:
        sys.exit('找不到 agent-browser 命令')
    except subprocess.CalledProcessError as e:
        sys.exit(f'agent-browser {args[0]} 失败：{(e.stderr or e.stdout).strip()[:300]}')


def video_id(arg):
    """从视频 ID 或各种 YouTube 链接（watch?v=、youtu.be/、shorts/、live/、embed/）里取出 11 位 ID。"""
    m = re.search(r'(?:[?&]v=|youtu\.be/|/shorts/|/live/|/embed/)([\w-]{11})', arg)
    vid = m[1] if m else arg
    if not re.fullmatch(r'[\w-]{11}', vid):
        sys.exit(f'认不出视频 ID：{arg}')
    return vid


def drop_pp(url):
    """去掉 YouTube 链接上的 pp 跟踪参数；别的网站的链接原样保留（aff 参数、优惠码都在 query 里）。"""
    try:
        u = urllib.parse.urlsplit(url)
    except ValueError:
        return url
    host = u.hostname or ''
    if not (host == 'youtu.be' or host == 'youtube.com' or host.endswith('.youtube.com')):
        return url
    query = [(k, v) for k, v in urllib.parse.parse_qsl(u.query, keep_blank_values=True) if k != 'pp']
    return urllib.parse.urlunsplit(u._replace(query=urllib.parse.urlencode(query, safe=':/')))


def video_title(vid):
    url = f'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json'
    return json.load(urllib.request.urlopen(url, timeout=20))['title']


def escape(text):
    """简介里的纯文本按 MDX 转义：{ } < 会被当成 JSX；* _ ` 会变成强调和行内代码；
    行首的 # > - + 和“1.”“1)”会变成标题、引用、列表。"""
    text = re.sub(r'([{}<*_`])', r'\\\1', text)
    text = re.sub(r'^([#>+-])', r'\\\1', text)
    return re.sub(r'^(\d+)([.)])(\s)', r'\1\\\2\3', text)


def render(raw, title, title_of=video_title):
    """把页面上读到的 {text, links} 转成 ReadMore 块。不碰浏览器，方便离线测。"""
    hrefs = {}
    for k, h in raw['links']:
        # 去掉 YouTube 加的 pp 跟踪参数
        hrefs.setdefault(k.replace('\xa0', ' '), []).append(drop_pp(h))
    used = {}

    def href(k):
        i = used.get(k, 0)
        used[k] = i + 1
        return hrefs[k][min(i, len(hrefs[k]) - 1)]

    def linkify(text):
        out, pos = [], 0
        for m in URL.finditer(text):
            shown = m[0]
            real = href(shown) if shown in hrefs else shown
            if real.endswith('...'):
                print(f'截断的链接找不到真实地址，照原样留着：{shown}', file=sys.stderr)
                out.append(escape(text[pos:m.end()]))
            else:
                out.append(escape(text[pos:m.start()]) + f'[{real}]({real})')
            pos = m.end()
        return ''.join(out) + escape(text[pos:])

    lines = []
    for line in raw['text'].replace('\xa0', ' ').splitlines():
        t = line.strip()
        m = TIMESTAMP.fullmatch(t)
        if m and m[1] in hrefs:
            lines.append(f'[{m[1]}]({href(m[1])}) {escape(m[2])}')
        elif t.startswith('•') and t in hrefs and (v := re.search(r'v=([\w-]+)', href(t))):
            lines.append(f'• [{escape(title_of(v[1]))}](https://www.youtube.com/watch?v={v[1]})')
        else:
            lines.append(linkify(t))

    # 段内用反斜杠硬换行，原简介里的空行分段
    paras, cur = [], []
    for l in lines + ['']:
        if l:
            cur.append(l)
        elif cur:
            paras.append('\\\n'.join(cur))
            cur = []
    # JSX 属性的字符串里不能转义引号，标题带 " 时改写成 {"..."} 表达式
    attr = 'title={%s}' % json.dumps(title, ensure_ascii=False) if '"' in title else f'title="{title}"'
    return f'<ReadMore id="简介" label="简介" {attr}>\n\n' + '\n\n'.join(paras) + '\n\n</ReadMore>'


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('video', help='视频 ID 或 YouTube 链接（ID 以 - 开头时写在 -- 后面）')
    ap.add_argument('--session', default='video-description', help='agent-browser 会话名（默认 video-description）')
    args = ap.parse_args()
    vid = video_id(args.video)

    # 不管中途哪一步失败都关掉浏览器，免得无头 Chrome 一直占着内存
    try:
        browser('open', f'https://www.youtube.com/watch?v={vid}', session=args.session)
        browser('wait', '4000', session=args.session)
        browser('eval', READ_JS, session=args.session)  # 第一次点开“展开”
        browser('wait', '1500', session=args.session)
        raw = json.loads(json.loads(browser('eval', READ_JS, session=args.session)))
    finally:
        try:
            browser('close', session=args.session)
        except SystemExit:
            pass
    if 'error' in raw:
        sys.exit(raw['error'])
    print(render(raw, video_title(vid)))


if __name__ == '__main__':
    main()
