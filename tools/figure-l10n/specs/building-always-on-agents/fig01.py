# 运行周期动图：上方时间轴横向滚动，下方四步卡片轮流高亮，事件到达时上方弹出气泡。
# 下半部分的文字位置固定，用 ITEMS；时间轴和气泡在 hook 里逐帧重画。
import numpy as np
from PIL import Image, ImageDraw

ITEMS = [
    {'r': [55, 294, 105, 322], 't': '运行', 'size': 22, 'weight': 600},
    {'r': [112, 300, 232, 322], 't': '短暂醒来', 'size': 16},
    {'r': [55, 398, 256, 426], 't': '事件到达', 'size': 22, 'weight': 500},
    {'r': [336, 398, 534, 426], 't': '会话开始', 'size': 22, 'weight': 500},
    {'r': [617, 398, 863, 428], 't': 'Agent 循环运行', 'size': 22, 'weight': 500, 'dy': -3},
    {'r': [898, 398, 1143, 426], 't': '运行写回结果', 'size': 22, 'weight': 500},
    {'r': [444, 488, 490, 509], 't': '读取', 'size': 16, 'weight': 600},
    {'r': [1004, 488, 1055, 509], 't': '写入', 'size': 16, 'weight': 600},
    {'r': [55, 548, 205, 578], 't': '持久状态', 'size': 22, 'weight': 600},
    {'r': [213, 553, 443, 576], 't': '在多次运行之间保留', 'size': 17, 'x': 158},
]

GRAY = np.array([221, 219, 210], float)   # 时间轴“休眠”段的底色
PERIOD, BLOCK = 400, 60                    # 橙色块每 400 像素一个，宽 60
BAND = (160, 214)                          # 时间轴里文字所在的行
ASLEEP_DX, NOTE_DX = 87, 181               # 原文 Asleep、no tokens spent 的起点相对橙色块左缘
CALLOUTS = {209: '收到一个 webhook', 149: '定时器触发', 281: '用户发来一条消息'}   # 气泡宽度 → 译文
ORANGE = np.array([213, 94, 0], float)


def runs(mask):
    out, start = [], None
    for x, v in enumerate(list(mask) + [False]):
        if v and start is None:
            start = x
        elif not v and start is not None:
            out.append((start, x - 1)); start = None
    return out


def ink_color(reg, bg):
    d = np.sqrt(((reg.astype(float) - bg) ** 2).sum(2))
    if d.max() < 15:
        return None
    return reg[d >= 0.8 * d.max()].astype(float).mean(0)


def strip(i, a, T):
    f = T.frames[i]
    row = f[156].astype(int)
    blocks = [r for r in runs((row[:, 0] - row[:, 2]) > 40) if r[1] - r[0] >= BLOCK - 4]
    L = min(blocks, key=lambda r: abs((r[0] + r[1]) / 2 - 600))[0]
    # 原文文字颜色：取离中间最近、完整的一组标签
    ks = range(-3, 4)
    k0 = min(ks, key=lambda k: abs(L + k * PERIOD + ASLEEP_DX + 40 - 600) if 150 < L + k * PERIOD + ASLEEP_DX < 900 else 1e9)
    x0 = L + k0 * PERIOD
    c_big = ink_color(f[174:201, x0 + ASLEEP_DX:x0 + ASLEEP_DX + 86], GRAY)
    c_small = ink_color(f[178:199, x0 + NOTE_DX:x0 + NOTE_DX + 138], GRAY)
    # 抹掉文字：逐列复制时间轴上沿的颜色（保留两端的白色渐隐）
    a[BAND[0]:BAND[1]] = f[156][None]
    # 中文写进一张遮罩，再按每列的渐隐程度混合
    mask = Image.new('L', (T.W, T.H), 0); md = ImageDraw.Draw(mask)
    mask2 = Image.new('L', (T.W, T.H), 0); md2 = ImageDraw.Draw(mask2)
    big, small = '休眠', '不消耗 token'
    for k in range(-4, 5):
        x = L + k * PERIOD + ASLEEP_DX
        if x < -300 or x > T.W:
            continue
        T.text(md, x, 186, big, 22, 600, 255)
        T.text(md2, x + T.width(big, 22, 600) + 12, 187, small, 15, 400, 255)
    bgrow = f[156].astype(float)
    gray_col = np.abs(bgrow[:, 0] - bgrow[:, 2]) < 25
    w = np.clip((bgrow.mean(1) - GRAY.mean()) / (255 - GRAY.mean()), 0, 1) * gray_col
    for m, c in ((mask, c_big), (mask2, c_small)):
        if c is None:
            continue
        al = np.asarray(m, float)[BAND[0]:BAND[1]] / 255 * (1 - w)[None]
        seg = a[BAND[0]:BAND[1]].astype(float)
        a[BAND[0]:BAND[1]] = np.clip(seg + al[..., None] * (c - GRAY), 0, 255).round().astype(np.uint8)


def callout(i, a, T):
    f = T.frames[i]
    reg = f[68:105, 440:761].astype(int)
    if reg.min() > 248:
        return
    cols = np.where((f[88, 440:761].astype(int) < 245).any(1))[0]
    if len(cols) == 0:
        return
    wid = cols.max() - cols.min() + 1
    key = min(CALLOUTS, key=lambda k: abs(k - wid))
    alpha = np.clip((255 - f[70, 600, 1]) / (255 - 94), 0, 1)
    # 擦掉原气泡（留下中间往下的箭头）
    a[66:110, 440:761] = 255
    a[104:110, 590:611] = f[114, 590:611][None]   # 箭头上端从下面一行接回来
    t = CALLOUTS[key]; size = 17
    pw = T.width(t, size, 600) + 40; S = 4
    W2, H2 = int(pw) + 8, 44
    layer = Image.new('RGBA', (W2 * S, H2 * S), (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
    col = tuple(int(v) for v in ORANGE) + (int(255 * alpha),)
    d.rounded_rectangle([4 * S, 4 * S, (4 + pw) * S, 40 * S], radius=18 * S, fill=(255, 255, 255, 255), outline=col, width=2 * S)
    layer = layer.resize((W2, H2), Image.LANCZOS)
    rgba = Image.fromarray(a).convert('RGBA'); rgba.alpha_composite(layer, (int(round(600 - pw / 2 - 4)), 66))
    tc = 255 + (ORANGE - 255) * alpha
    T.text(ImageDraw.Draw(rgba), 600, 88, t, size, 600, tc, 'middle')
    a[:] = np.asarray(rgba.convert('RGB'))


def hook(i, im, T):
    a = np.asarray(im).copy()
    strip(i, a, T)
    callout(i, a, T)
    im.paste(Image.fromarray(a))
