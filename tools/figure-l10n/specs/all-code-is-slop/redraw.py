"""重画两页“大字压在淡化金字塔上”的幻灯片（code-is-memory、verification-step）。
原图是把 poteto 金字塔那页淡化成背景，再写一行大字；盖字没法干净处理，所以用汉化后的金字塔重新合成。
先渲染 poteto-pyramid，再在本目录（figure-l10n）跑：uv run --with pillow python specs/all-code-is-slop/redraw.py"""
from PIL import Image, ImageDraw, ImageFont

BG = (252, 252, 252)
FADE = 0.18          # 淡化后线条的深浅，照原图量出来的约 16%～20%
FONT = 'fonts/Xiaolai-Regular.ttf'
PAGES = {
    'code-is-memory': (['代码就是记忆'], 128),
    'verification-step': (['验证是', '最重要的一步'], 124),
}

base = Image.open('out/all-code-is-slop/poteto-pyramid.png').convert('RGB')
faded = Image.blend(Image.new('RGB', base.size, BG), base, FADE)
for name, (lines, size) in PAGES.items():
    im = faded.copy()
    d = ImageDraw.Draw(im)
    f = ImageFont.truetype(FONT, size)
    lh = size * 1.25
    cx, cy = 732, 422     # 原图大字的中心
    top = cy - lh * (len(lines) - 1) / 2
    for k, line in enumerate(lines):
        d.text((cx, top + k * lh), line, font=f, fill=(13, 13, 13), anchor='mm', stroke_width=1, stroke_fill=(13, 13, 13))
    # 右下角的 @poteto 水印在原图里没有淡化，从原图贴回来
    box = (1350, 770, 1466, 815)
    im.paste(Image.open(f'src/all-code-is-slop/{name}.png').convert('RGB').crop(box), box[:2])
    im.save(f'out/all-code-is-slop/{name}.png')
    print('写出', name)
