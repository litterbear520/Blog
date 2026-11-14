#!/usr/bin/env python3
"""动图汉化：python3 gif.py <slug>/figNN [--frames 0,60,120] [--debug]
读 src/<slug>/figNN.gif 和规格 specs/<slug>/figNN.py，逐帧盖住英文、写上中文，输出 out/<slug>/figNN.gif，帧时长和循环照原图。
--frames 只输出这几帧的 PNG（out/<slug>/figNN-fNNNN.png），用来核对；--debug 在这些帧上画出遮盖框。
依赖 Pillow、numpy 和 ffmpeg，平时用 ./rgif 在 Mac 上跑。

规格文件是一段 Python，定义 ITEMS（列表），可选定义 hook(i, im, T)。ITEMS 的字段和 render.html 的同名字段一致：
  r, t, size, weight, anchor, dx, dy, lh, pad, thr, color, bg
另有动图专用的字段：
  fill    'ring'（默认，用框外一圈的中位色整块盖住）| 'above' | 'below'（逐列复制遮盖区上方 / 下方一行，
          底色左右渐变或逐步填色时用）
  ref     取几何位置的帧号；不写就用文字最清楚的那一帧
每一帧里，框内找不到文字（和底色的最大色差小于 min，默认 15）就不盖也不写；找得到时，遮盖位置固定（取自 ref 帧），
文字颜色取这一帧原文字迹的颜色，所以原文渐显、换色时中文跟着变。
hook 在逐项处理之后调用，im 是这一帧的 RGB 图（PIL.Image，可原地改），T 提供 font()、text()、arr()、put() 等工具。
"""
import argparse, os, runpy, shutil, subprocess, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
FONT = os.path.join(HERE, 'fonts', 'NotoSansSC.ttf')

ap = argparse.ArgumentParser()
ap.add_argument('fig'); ap.add_argument('--frames'); ap.add_argument('--debug', action='store_true')
a = ap.parse_args()

spec = runpy.run_path(os.path.join(HERE, 'specs', a.fig + '.py'))
ITEMS, HOOK = spec.get('ITEMS', []), spec.get('hook')
src = Image.open(os.path.join(HERE, 'src', a.fig + '.gif'))
frames, durs = [], []
for i in range(src.n_frames):
    src.seek(i); frames.append(np.asarray(src.convert('RGB')).copy()); durs.append(src.info.get('duration', 100))
H, W = frames[0].shape[:2]

_fonts = {}
def font(size, weight=400):
    k = (size, weight)
    if k not in _fonts:
        f = ImageFont.truetype(FONT, size)
        f.set_variation_by_axes([weight])
        _fonts[k] = f
    return _fonts[k]

def text(draw, x, y, s, size, weight=400, color=(0, 0, 0), anchor='start', lh=1.3):
    """y 是第一行的中线，和 render.html 的 textBaseline=middle 对齐（汉字字面中心约在基线上方 0.38em）"""
    f = font(size, weight); ha = {'start': 'l', 'middle': 'm', 'end': 'r'}[anchor]
    for k, line in enumerate(s.split('\n')):
        draw.text((x, y + k * lh * size + 0.38 * size), line, font=f, fill=color if isinstance(color, int) else tuple(int(v) for v in color), anchor=ha + 's')

def width(s, size, weight=400):
    return font(size, weight).getlength(s)

def ring(f, r, m=3):
    x0, y0, x1, y1 = r
    xs0, xs1, ys0, ys1 = max(x0 - m, 0), min(x1 + m, W - 1), max(y0 - m, 0), min(y1 + m, H - 1)
    pts = np.concatenate([f[ys0, xs0:xs1 + 1], f[ys1, xs0:xs1 + 1], f[ys0:ys1 + 1, xs0], f[ys0:ys1 + 1, xs1]])
    return np.median(pts, axis=0)

def ink(f, it):
    """返回 (bg, maxd, 字迹框, 字迹色)"""
    x0, y0, x1, y1 = it['r']
    reg = f[y0:y1 + 1, x0:x1 + 1].astype(float)
    fill = it.get('fill', 'ring')
    if 'bg' in it:
        bg = np.array(it['bg'], float)
    elif fill == 'ring':
        bg = ring(f, it['r'])
    else:   # 逐列：每列和遮盖区上方 / 下方那一行比（底色在变时不把底色当成字）
        bg = f[y0 - 1 if fill == 'above' else y1 + 1, x0:x1 + 1].astype(float)[None]
    d = np.sqrt(((reg - bg) ** 2).sum(2)); maxd = d.max()
    m = d > it.get('thr', 40)
    if not m.any():
        return bg, maxd, None, None
    ys, xs = np.where(m)
    col = reg[d >= 0.8 * maxd].mean(0)
    return bg, maxd, (x0 + xs.min(), y0 + ys.min(), x0 + xs.max(), y0 + ys.max()), col

# 第一遍：每项取文字最清楚的一帧，定下遮盖范围和锚点
geo = []
for it in ITEMS:
    best = None
    cand = [it['ref']] if 'ref' in it else range(len(frames))
    for i in cand:
        bg, maxd, box, col = ink(frames[i], it)
        if box and (best is None or maxd > best[0]):
            best = (maxd, box, i)
    if best is None:
        sys.exit(f'找不到字迹：{it.get("t")} {it["r"]}')
    _, box, i = best
    pad = it.get('pad', 6)
    patch = it.get('patch', (box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad))
    geo.append({'box': box, 'patch': patch, 'ref': i})

class T:
    font, text, width, ring = staticmethod(font), staticmethod(text), staticmethod(width), staticmethod(ring)
    W, H, frames = W, H, frames

def render(i, debug=False):
    f = frames[i]
    im = Image.fromarray(f.copy()); dr = ImageDraw.Draw(im)
    out = np.asarray(im).copy()
    jobs = []
    for it, g in zip(ITEMS, geo):
        bg, maxd, _, col = ink(f, it)
        if maxd < it.get('min', 15):
            continue
        if col is None:   # 字迹很淡、低于 thr：取最远的那些像素当颜色
            x0, y0, x1, y1 = it['r']; reg = f[y0:y1 + 1, x0:x1 + 1].astype(float)
            d = np.sqrt(((reg - bg) ** 2).sum(2)); col = reg[d >= 0.8 * maxd].mean(0)
        if 'color' in it:
            col = np.array(it['color'], float)
        px0, py0, px1, py1 = g['patch']
        fill = it.get('fill', 'ring')
        if not debug:
            if fill == 'ring':
                out[py0:py1 + 1, px0:px1 + 1] = bg
            else:
                ry = py0 - 1 if fill == 'above' else py1 + 1
                out[py0:py1 + 1, px0:px1 + 1] = f[ry, px0:px1 + 1][None]
        jobs.append((it, g, col))
    im = Image.fromarray(out); dr = ImageDraw.Draw(im)
    for it, g, col in jobs:
        if debug:
            dr.rectangle(g['patch'], outline=(255, 0, 255), width=2); continue
        if not it.get('t'):
            continue
        b = g['box']; anchor = it.get('anchor', 'start'); size = it['size']; lh = it.get('lh', 1.3)
        n = it['t'].count('\n') + 1
        x = it.get('x', b[0] if anchor == 'start' else b[2] if anchor == 'end' else (b[0] + b[2]) / 2)
        y = it.get('y', (b[1] + b[3]) / 2 - (n - 1) * lh * size / 2)
        text(dr, x + it.get('dx', 0), y + it.get('dy', 0), it['t'], size, it.get('weight', 400), col, anchor, lh)
    if HOOK:
        HOOK(i, im, T)
    return im

outdir = os.path.join(HERE, 'out', os.path.dirname(a.fig)); os.makedirs(outdir, exist_ok=True)
name = os.path.basename(a.fig)
if a.frames:
    for i in map(int, a.frames.split(',')):
        p = os.path.join(outdir, f'{name}-f{i:04d}{"-debug" if a.debug else ""}.png')
        render(i, a.debug).save(p); print('写出', p)
    sys.exit()

tmp = os.path.join(outdir, name + '-frames'); shutil.rmtree(tmp, ignore_errors=True); os.makedirs(tmp)
for i in range(len(frames)):
    render(i).save(os.path.join(tmp, f'{i:04d}.png'))
if len(set(durs)) != 1:
    sys.exit(f'帧时长不一致 {sorted(set(durs))}，需要逐帧写时长')
gif = os.path.join(outdir, name + '.gif')
loop = src.info.get('loop', 0)
subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-framerate', f'1000/{durs[0]}', '-i', os.path.join(tmp, '%04d.png'),
                '-vf', 'split[a][b];[a]palettegen=stats_mode=full[p];[b][p]paletteuse=dither=none:diff_mode=rectangle',
                '-loop', str(loop), gif], check=True)
shutil.rmtree(tmp)
print('写出', gif, f'{os.path.getsize(gif) // 1024} KB，{len(frames)} 帧，每帧 {durs[0]} ms')
