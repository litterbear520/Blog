"""抹掉封闭图形（气泡、方框）里的文字，保留图形本身的边框。
做法：在给定矩形里，把和底色差别大的像素按 8 连通分成一块块笔画；碰到矩形边缘的那几块是边框，留着；
其余的是文字，连同外扩 2 像素的抗锯齿边一起涂成底色。输出 src/all-code-is-slop/<名字>-clean.png，规格文件的 src 指向它，
对应的项写 noPatch: true、手工给 x / y。用法（在 figure-l10n 目录）：uv run --with pillow --with numpy python specs/all-code-is-slop/clean.py"""
import numpy as np
from PIL import Image

# 名字 -> [(x0, y0, x1, y1, 底色)]：矩形要把整段文字框进去，边框可以和矩形边缘相交；底色写 None 时取框内出现最多的颜色
JOBS = {
    'formal-verification': [(176, 252, 402, 332, (252, 252, 252)), (420, 252, 652, 332, (252, 252, 252))],
    'read-the-code': [(272, 128, 680, 236, None)],
    'unsolicited-markdown': [(492, 132, 680, 254, None), (92, 360, 246, 420, None)],
}

# 名字 -> [(x0, y0, x1, y1, dy)]：有纹理的底（纸纹）上的文字。框内和底色差别大的像素外扩 2 像素后，
# 换成同一列 dy 像素外的原图像素（那里要是没有文字的纹理），纹理就接得上，不会补出一块平涂
SHIFT = {
    'each-copy': [(60, 88, 1372, 172, -86), (92, 720, 380, 768, 44), (836, 720, 1064, 774, 44)],
}

# 名字 -> (取样矩形, [文字矩形])：底是蜡笔排线这类没法借上下方的纹理时，把框内的深色笔画（亮度低于 120）外扩 6 像素
# （字周围有一圈没涂排线的浅边，要一起换掉）后，
# 换成取样矩形里按坐标平铺的纹理。取样矩形要选一块没有文字、没有线条的底
TILE = {
    'slop-vs-craft': ((560, 175, 750, 300), [
        (155, 86, 655, 146), (768, 86, 1334, 146),
        (116, 176, 352, 246), (320, 234, 510, 304), (403, 318, 592, 388), (453, 403, 657, 472),
        (1113, 176, 1347, 246), (901, 241, 1160, 308), (753, 316, 1012, 386), (783, 403, 1002, 472),
    ]),
}

def tile(a, src, box, grow=6):
    sx0, sy0, sx1, sy1 = src
    t = a[sy0:sy1, sx0:sx1].copy()
    th, tw = t.shape[:2]
    x0, y0, x1, y1 = box
    reg = a[y0:y1, x0:x1].astype(int)
    m = reg.mean(2) < 120
    for _ in range(grow):
        g = m.copy()
        g[1:] |= m[:-1]; g[:-1] |= m[1:]; g[:, 1:] |= m[:, :-1]; g[:, :-1] |= m[:, 1:]
        m = g
    ys, xs = np.nonzero(m)
    fill = t[(ys + y0 - sy0) % th, (xs + x0 - sx0) % tw].astype(int)
    # 取样区的排线和标签附近的深浅不一样：按框内没抹掉的像素的平均色整体偏移，补出来的纹理才不显成色斑
    fill = fill - t.reshape(-1, 3).mean(0) + reg[~m].mean(0)
    reg[ys, xs] = np.clip(fill, 0, 255)
    a[y0:y1, x0:x1] = reg
    return int(m.sum())

def shift(a, box, thr=60):
    x0, y0, x1, y1, dy = box
    reg = a[y0:y1, x0:x1].astype(int)
    cols, cnt = np.unique((reg // 8).reshape(-1, 3), axis=0, return_counts=True)
    bg = cols[cnt.argmax()] * 8 + 4
    m = np.abs(reg - bg).sum(2) > thr
    for _ in range(2):
        g = m.copy()
        g[1:] |= m[:-1]; g[:-1] |= m[1:]; g[:, 1:] |= m[:, :-1]; g[:, :-1] |= m[:, 1:]
        m = g
    src = a[y0 + dy:y1 + dy, x0:x1].copy()
    reg[m] = src[m]
    a[y0:y1, x0:x1] = reg
    return int(m.sum())

def clean(a, box, thr=30):
    x0, y0, x1, y1, bg = box
    reg = a[y0:y1, x0:x1].astype(int)
    if bg is None:
        cols, cnt = np.unique(reg.reshape(-1, 3), axis=0, return_counts=True)
        bg = tuple(int(v) for v in cols[cnt.argmax()])
    ink = np.abs(reg - np.array(bg)).sum(2) > thr
    h, w = ink.shape
    lab = np.zeros((h, w), int)
    n = 0
    keep = set()
    for sy in range(h):
        for sx in range(w):
            if ink[sy, sx] and not lab[sy, sx]:
                n += 1
                stack = [(sy, sx)]
                lab[sy, sx] = n
                edge = False
                while stack:
                    y, x = stack.pop()
                    if y in (0, h - 1) or x in (0, w - 1):
                        edge = True
                    for dy in (-1, 0, 1):
                        for dx in (-1, 0, 1):
                            Y, X = y + dy, x + dx
                            if 0 <= Y < h and 0 <= X < w and ink[Y, X] and not lab[Y, X]:
                                lab[Y, X] = n
                                stack.append((Y, X))
                if edge:
                    keep.add(n)
    text = (lab > 0) & ~np.isin(lab, list(keep))
    border = np.isin(lab, list(keep))
    # 文字外扩 2 像素，盖住抗锯齿的灰边，但不碰边框
    grown = text.copy()
    for _ in range(2):
        g = grown.copy()
        g[1:] |= grown[:-1]; g[:-1] |= grown[1:]; g[:, 1:] |= grown[:, :-1]; g[:, :-1] |= grown[:, 1:]
        grown = g
    grown &= ~border
    reg[grown] = bg
    a[y0:y1, x0:x1] = reg
    return int(text.sum())

for name in sorted(set(JOBS) | set(SHIFT) | set(TILE)):
    a = np.asarray(Image.open(f'src/all-code-is-slop/{name}.png').convert('RGB')).copy()
    for b in JOBS.get(name, []):
        print(name, b[:4], '抹掉文字像素', clean(a, b))
    for b in SHIFT.get(name, []):
        print(name, b[:4], '借纹理补回像素', shift(a, b))
    if name in TILE:
        src, boxes = TILE[name]
        for b in boxes:
            print(name, b, '平铺纹理补回像素', tile(a, src, b))
    Image.fromarray(a.astype(np.uint8)).save(f'src/all-code-is-slop/{name}-clean.png')
