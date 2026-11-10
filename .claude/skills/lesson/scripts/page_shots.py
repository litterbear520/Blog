#!/usr/bin/env python3
"""把上线后的课文页截成 1280 宽的分段图，和 Academy 截图并排看。

用法（在仓库根目录，CI 部署完成后）：
    python3 .claude/skills/lesson/scripts/page_shots.py <页面 URL> [...] [--theme light|dark] [--out 目录]

- 每页从上到下按 1100px 一段截成 <序号>-<主题>-<段>.png，用 Read 逐张看；Academy 的同课型截图在
  ~/workspace/academy-research/shots/（cut-samp-*、cut-roots-*、api-ts-*、mcp-sampling-walk 等，也是 1280 宽）。
- 还会把页面里每张配图（figure 和 Markdown 图片）单独截一张 fig-<序号>-<主题>-<张>.png，看图里的字和留白。
- 截图前先从上到下逐段滚一遍，让滚到视口附近才加载的图片都加载出来。
- 这台机器内存小：可用内存不到 400MB 时不启动浏览器。Chrome 加 --no-proxy-server，不碰代理变量。
"""
import argparse
import glob
import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path


def mem_available_mb():
    try:
        for line in open('/proc/meminfo'):
            if line.startswith('MemAvailable:'):
                return int(line.split()[1]) // 1024
    except OSError:
        pass
    return 0


SCRIPT = r"""
const { chromium } = require(%(core)s);
const [out, theme, urls] = [%(out)s, %(theme)s, %(urls)s];
(async () => {
  const browser = await chromium.launch({ executablePath: %(chrome)s, args: ['--no-proxy-server', '--disable-gpu', '--disable-dev-shm-usage'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: theme });
  // 主题用 ?docusaurus-theme= 指定：站点开头的内联脚本先读它，再读 localStorage
  const page = await context.newPage();
  for (const [i, url] of urls.entries()) {
    const sep = url.includes('?') ? '&' : '?';
    await page.goto(url + sep + 'docusaurus-theme=' + theme, { waitUntil: 'networkidle', timeout: 90000 });
    await page.waitForTimeout(800);
    // 图片滚到视口附近才加载：先逐段滚到底，等图片加载完再回到顶部截图
    for (let y = 0; y < await page.evaluate(() => document.documentElement.scrollHeight); y += 800) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await page.waitForTimeout(200);
    }
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0, k = 0; y < height; y += 1100, k++) {
      await page.screenshot({ path: `${out}/${i}-${theme}-${k}.png`, clip: { x: 0, y, width: 1280, height: Math.min(1100, height - y) }, fullPage: true });
    }
    // 单张配图比视口高时，固定的导航栏会盖住图的顶部；截配图前让导航栏回到文档流里
    await page.addStyleTag({ content: '.navbar { position: static !important; }' });
    // Markdown 图片被 src/theme/MDXComponents/Img 包在 span 里，不在 figure 里，要单独选
    const figures = await page.$$('article figure, article .markdown img');
    for (const [k, figure] of figures.entries()) await figure.screenshot({ path: `${out}/fig-${i}-${theme}-${k}.png` });
    console.log(`${url}  ${Math.ceil(height / 1100)} 段，${figures.length} 张配图`);
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
"""


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('urls', nargs='+')
    parser.add_argument('--theme', choices=('light', 'dark'), default='light')
    parser.add_argument('--out', default=os.path.join(tempfile.gettempdir(), 'lesson-pages'))
    args = parser.parse_args()
    chrome = next((p for p in ('/opt/google/chrome/chrome', '/usr/bin/chromium', '/usr/bin/google-chrome') if os.path.exists(p)), None)
    core = sorted(glob.glob(os.path.expanduser('~/.npm/_npx/*/node_modules/playwright-core')))
    if not chrome or not core:
        print('没找到 Chrome 或 playwright-core，截不了图。')
        return 1
    if mem_available_mb() < 400:
        print(f'可用内存只有 {mem_available_mb()}MB，不启动浏览器；等内存够了再截。')
        return 1
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    script = SCRIPT % {k: json.dumps(v) for k, v in
                       {'core': core[-1], 'out': str(out), 'theme': args.theme, 'urls': args.urls, 'chrome': chrome}.items()}
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
        f.write(script)
    try:
        subprocess.run(['node', f.name], check=True, timeout=600)
    finally:
        os.unlink(f.name)
    print(out)
    return 0


if __name__ == '__main__':
    sys.exit(main())
