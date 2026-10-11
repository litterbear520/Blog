#!/usr/bin/env python3
"""按博客的真实令牌和 Diagram 样式，把 src/data/diagrams/ 里的图渲染成深浅两张预览，画完图自己看一眼。

用法（在仓库根目录）：
    python3 .claude/skills/lesson/scripts/preview_diagrams.py <variant> [...] [--out 目录] [--width 702] [--shot]

- --width 是正文列宽：1280 宽的屏幕上左侧栏和目录都在，正文列约 702px，图按这个宽度缩放后才是读者看到的字号。

- 不加 --shot：只生成 preview-light.html / preview-dark.html，任何浏览器都能打开。
- 加 --shot：再用无头 Chrome 截成 preview-light.png / preview-dark.png（用 Read 直接看图）。
  这台机器内存小，可用内存不到 400MB 时不启动浏览器，只给 HTML；Chrome 加 --no-proxy-server，不碰代理变量。
"""
import argparse
import glob
import json
import os
import re
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path.cwd()


def svg_of(variant):
    source = (ROOT / 'src/data/diagrams' / f'{variant}.js').read_text()
    return source[source.index('`') + 1:source.rindex('`')]


def page(theme, svgs, width):
    css = (ROOT / 'src/css/custom.css').read_text()
    diagram = re.sub(r':global\(([^)]*)\)', r'\1',
                     (ROOT / 'src/components/Diagram/styles.module.css').read_text())
    fonts = ROOT / 'static/fonts/google-fonts.css'
    font_link = f'<link rel="stylesheet" href="{fonts.as_uri()}">' if fonts.exists() else ''
    figures = '\n'.join(
        f'<p class="name">{name}</p><figure class="figure"><div class="scroller">{svg}</div></figure>'
        for name, svg in svgs)
    return f"""<!doctype html><html data-theme="{theme}"><head><meta charset="utf-8">{font_link}
<style>{css}</style><style>{diagram}</style>
<style>body{{margin:0;padding:24px;background:var(--th-page);font-family:var(--ifm-font-family-base)}}
.wrap{{width:{width}px}} .name{{margin:16px 0 4px;color:var(--th-text-3);font:12px monospace}}</style></head>
<body><div class="wrap">{figures}</div></body></html>"""


def mem_available_mb():
    try:
        for line in open('/proc/meminfo'):
            if line.startswith('MemAvailable:'):
                return int(line.split()[1]) // 1024
    except OSError:
        pass
    return 0


def shoot(htmls):
    chrome = next((p for p in ('/opt/google/chrome/chrome', '/usr/bin/chromium', '/usr/bin/google-chrome') if os.path.exists(p)), None)
    core = sorted(glob.glob(os.path.expanduser('~/.npm/_npx/*/node_modules/playwright-core')))
    if not chrome or not core:
        print('没找到 Chrome 或 playwright-core，只生成了 HTML。')
        return
    if mem_available_mb() < 400:
        print(f'可用内存只有 {mem_available_mb()}MB，不启动浏览器，只生成了 HTML。')
        return
    script = f"""
const {{ chromium }} = require({json.dumps(core[-1])});
(async () => {{
  const browser = await chromium.launch({{ executablePath: {json.dumps(chrome)}, args: ['--no-proxy-server', '--disable-gpu'] }});
  const page = await browser.newPage({{ viewport: {{ width: 900, height: 600 }} }});
  for (const html of {json.dumps([str(h) for h in htmls])}) {{
    await page.goto('file://' + html);
    await page.screenshot({{ path: html.replace(/\\.html$/, '.png'), fullPage: true }});
  }}
  await browser.close();
}})().catch((e) => {{ console.error(e); process.exit(1); }});
"""
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
        f.write(script)
    try:
        subprocess.run(['node', f.name], check=True, timeout=120)
        for h in htmls:
            print(h.with_suffix('.png'))
    finally:
        os.unlink(f.name)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('variants', nargs='+')
    parser.add_argument('--out', default=os.path.join(tempfile.gettempdir(), 'lesson-preview'))
    parser.add_argument('--width', type=int, default=702)
    parser.add_argument('--shot', action='store_true')
    args = parser.parse_args()
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    svgs = [(v, svg_of(v)) for v in args.variants]
    htmls = []
    for theme in ('light', 'dark'):
        html = out / f'preview-{theme}.html'
        html.write_text(page(theme, svgs, args.width))
        htmls.append(html)
        print(html)
    if args.shot:
        shoot(htmls)


if __name__ == '__main__':
    sys.exit(main())
