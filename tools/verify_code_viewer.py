"""Real production-page browser validation; no app or dependency edits.
Run after npm run build with Python Playwright and system Chrome.
Reports distinguish local production builds from the public HTTPS origin.
"""
import json
import os
import re
import shutil
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import quote
from playwright.sync_api import sync_playwright, expect

ROOT = Path.cwd()
OUT = ROOT / 'viewer-validation'
OUT.mkdir(exist_ok=True)
BUILD = ROOT / 'build'
PAGES = {
    'unittest': '/docs/python/unittest/',
    'sampling': '/docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/sampling-walkthrough/',
    'notifications': '/docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/notifications-walkthrough/',
    'roots': '/docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/roots-walkthrough/',
    'commerce': '/roadmap/commerce-agents/一个文件，一段对话/the-agent-loop/',
}
class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass
server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(BUILD)))
threading.Thread(target=server.serve_forever, daemon=True).start()
LOCAL = f'http://127.0.0.1:{server.server_port}'
results = []


def scenario(browser, name, width, height, touch, theme, origin=LOCAL, full=True):
    result = dict(page=name, width=width, height=height, touch=touch, theme=theme,
                  origin=origin, checks=[], status='running')
    context = browser.new_context(viewport={'width': width, 'height': height},
                                  is_mobile=touch, has_touch=touch, color_scheme=theme,
                                  permissions=['clipboard-read', 'clipboard-write'])
    page = context.new_page()
    page.set_default_timeout(9000)
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    tag = f'{name}-{width}x{height}-{theme}-' + ('build' if origin == LOCAL else 'live')
    def check(condition, message):
        if not condition:
            raise AssertionError(message)
        result['checks'].append(message)
    def act(locator):
        locator.tap() if touch else locator.click()
    def computed(locator, prop):
        return locator.evaluate('(e,p)=>getComputedStyle(e)[p]', prop)
    def current_text(viewer):
        # Prism renders a newline sentinel inside an otherwise empty line span.
        # Remove that sentinel, not real source indentation or blank source rows.
        return viewer.locator('[data-line]').evaluate_all(r'ns=>ns.map(n=>n.querySelector("[class*=lineContent]").textContent).map(s=>s === "\n" ? "" : s).join("\n")')
    try:
        response = page.goto(origin + quote(PAGES[name], safe='/'), wait_until='networkidle', timeout=25000)
        check(response is not None and response.status == 200, 'page HTTP 200')
        viewer = page.locator('[data-project-code-viewer]').first
        expect(viewer).to_be_visible()
        page.wait_for_function('''() => {
          const b = document.querySelector('[data-project-code-viewer] button');
          return b && Object.keys(b).some(k => k.startsWith('__reactProps'));
        }''')
        check(True, 'actual React page hydrated')
        # Use the real navbar, not an assumed localStorage key: Docusaurus
        # namespaces that key (currently theme-3a6) for this deployment.
        for _ in range(3):
            if page.locator('html').get_attribute('data-theme') == theme:
                break
            act(page.locator('.navbar button[class*=toggleButton]:visible').first)
            page.wait_for_timeout(100)
        expect(page.locator('html')).to_have_attribute('data-theme', theme)
        check(True, 'requested theme selected through real controls')
        viewer.scroll_into_view_if_needed()
        base_height = viewer.bounding_box()['height']
        check(page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'), 'no horizontal page overflow')
        check(viewer.locator('aside').is_visible() == (width >= 640), 'responsive file tree')
        check(viewer.locator('select').is_visible() == (width < 640), 'small-screen file picker')
        check(computed(viewer.locator('pre'), 'borderTopWidth') == '0px', 'no nested code border')
        check(computed(viewer.locator('pre'), 'borderRadius') == '0px', 'no nested code radius')
        check(computed(viewer, 'borderRadius') == '12px', 'single rounded outer frame')
        check(viewer.locator('[class*=tabs] svg').count() > 0, 'Symbols icons in tabs')
        check(not any(c in viewer.inner_text() for c in ['📄', '📁', '📂']), 'no old emoji file icons')
        focus = viewer.locator('[data-focus]')
        if focus.count():
            check(computed(focus.first, 'backgroundColor') == 'rgba(109, 167, 236, 0.14)', 'original MCP blue focus')
        group = viewer.get_by_role('group', name='代码操作')
        copy = group.locator('button').last
        if touch:
            check(computed(group, 'opacity') == '1', 'touch actions always visible')
            box = copy.bounding_box()
            check(box['width'] >= 44 and box['height'] >= 44, '44px copy touch target')
            check(computed(viewer.locator('button[aria-label^="关闭 "]').first, 'opacity') == '1', 'touch tab close visible')
        else:
            page.mouse.move(0, 0)
            expect(group).to_have_css('opacity', '0')
            viewer.locator('[class*=codeShell]').hover()
            expect(group).to_have_css('opacity', '1')
            check(True, 'desktop hover reveals actions')
            page.mouse.move(0, 0)
            expect(group).to_have_css('opacity', '0')
            viewer.locator('button[aria-label^="关闭 "]').last.focus()
            page.keyboard.press('Tab')
            expect(group).to_have_css('opacity', '1')
            check(page.evaluate('document.activeElement.matches("button[class*=codeActionButton]:focus-visible")'), 'keyboard discovers code actions')
        visible = current_text(viewer)
        act(copy)
        expect(copy).to_have_attribute('aria-label', '已复制')
        copied = page.evaluate('navigator.clipboard.readText()')
        if copied.removesuffix('\n') != visible:
            result['copy_mismatch'] = {'clipboard_prefix': repr(copied[:180]), 'rendered_prefix': repr(visible[:180])}
        check(copied.removesuffix('\n') == visible, 'real clipboard contains code without line numbers or diff markers')
        result['copied_characters'] = len(copied)
        # Scroll the actual rendered code, verifying that the overlay stays put.
        scroll = viewer.locator('[class*=codeScroll]')
        before = group.bounding_box()
        dimensions = scroll.evaluate('e=>({x:e.scrollWidth-e.clientWidth,y:e.scrollHeight-e.clientHeight})')
        scroll.evaluate('e=>{e.scrollTop=e.scrollHeight;e.scrollLeft=e.scrollWidth}')
        after = group.bounding_box()
        check(abs(before['x']-after['x']) < 1 and abs(before['y']-after['y']) < 1, 'code scrolling does not move action overlay')
        if dimensions['y'] > 0:
            check(scroll.evaluate('e=>e.scrollTop') > 0, 'long source scrolls vertically inside viewer')
        if dimensions['x'] > 0:
            check(scroll.evaluate('e=>e.scrollLeft') > 0, 'wide source scrolls horizontally inside viewer')
        if full:
            paths = viewer.locator('select option').evaluate_all('ns=>ns.map(n=>n.value).filter(Boolean)')
            chosen = list(dict.fromkeys([paths[0], paths[-1]] + [p for p in paths if p.endswith('__init__.py')][:1]))
            for path in chosen:
                if width < 640:
                    viewer.locator('select').select_option(path)
                else:
                    act(viewer.locator('aside button[aria-pressed][title=' + json.dumps(path) + ']'))
                expect(viewer.locator('[class*=tabs] button[aria-pressed=true]')).to_have_attribute('title', path)
                check(abs(viewer.bounding_box()['height'] - base_height) < 1, f'stable height switching to {path}')
            closes = viewer.locator('button[aria-label^="关闭 "]')
            while closes.count():
                if not touch:
                    closes.last.locator('..').hover()
                act(closes.last)
            expect(viewer.get_by_text('没有打开的文件', exact=True)).to_be_visible()
            check(abs(viewer.bounding_box()['height'] - base_height) < 1, 'closing all tabs keeps viewport height')
            if width < 640:
                viewer.locator('select').select_option(paths[0])
            else:
                act(viewer.locator('aside button[aria-pressed][title=' + json.dumps(paths[0]) + ']'))
            expect(viewer.locator('pre')).to_be_visible()
            check(True, 'reopen file after closing all tabs')
            if name != 'unittest':
                parent = viewer.locator('..')
                nav = parent.get_by_role('button', name=re.compile('下一步')).last
                act(nav)
                expect(viewer.locator('pre')).to_be_visible()
                if name != 'commerce':
                    expect(viewer.locator('[data-focus]').first).to_be_attached()
                    check(computed(viewer.locator('[data-focus]').first, 'backgroundColor') == 'rgba(109, 167, 236, 0.14)', 'guided next-step blue highlight')
                    toggle = parent.locator('button[aria-controls]').first
                    act(toggle)
                    expect(toggle).to_have_attribute('aria-expanded', 'true')
                    check(True, 'MCP accordion navigation works')
                else:
                    act(nav)
                    expect(viewer.locator('[data-focus]').first).to_be_attached()
                    check(computed(viewer.locator('[data-focus]').first, 'backgroundColor') == 'rgba(109, 167, 236, 0.14)', 'roadmap uses shared blue focus')
            else:
                second = page.locator('[data-project-code-viewer]').nth(1)
                diff = second.get_by_role('button', name='显示改动', exact=True)
                if not touch:
                    second.locator('[class*=codeShell]').hover()
                expect(diff).to_have_attribute('aria-pressed', 'true')
                check(second.locator('[data-change]').count() > 0, 'unittest diff rows present')
                act(diff)
                expect(diff).to_have_attribute('aria-pressed', 'false')
                expect(second.locator('[data-change]')).to_have_count(0)
                act(diff)
                expect(diff).to_have_attribute('aria-pressed', 'true')
                check(True, 'diff toggle restores changes')
                run = page.get_by_role('button', name='运行', exact=True).first
                act(run)
                expect(page.locator('[class*=termOutput]').first).to_be_visible()
                check(True, 'prerecorded terminal opens')
            if name == 'roots':
                group = viewer.get_by_role('group', name='代码操作')
                copy = group.locator('button').last
                page.evaluate("window.savedWrite=navigator.clipboard.writeText.bind(navigator.clipboard);navigator.clipboard.writeText=async()=>{throw new DOMException('denied','NotAllowedError')}")
                if not touch:
                    viewer.locator('[class*=codeShell]').hover()
                act(copy)
                expect(copy).to_have_attribute('aria-label', re.compile('复制失败'))
                page.evaluate('navigator.clipboard.writeText=window.savedWrite')
                act(copy)
                expect(copy).to_have_attribute('aria-label', '已复制')
                check(True, 'simulated clipboard denial can be retried')
        viewer.scroll_into_view_if_needed()
        page.screenshot(path=str(OUT / f'{tag}.png'))
        check(not errors, 'no uncaught page JavaScript errors')
        result['status'] = 'passed'
    except Exception as error:
        result['status'] = 'failed'
        result['error'] = str(error)
        result['page_errors'] = errors
        try:
            page.screenshot(path=str(OUT / f'{tag}-failure.png'))
        except Exception:
            pass
    finally:
        context.close()
        results.append(result)
        print(json.dumps(result, ensure_ascii=False), flush=True)

try:
    with sync_playwright() as p:
        exe = shutil.which('google-chrome') or shutil.which('chromium')
        browser = p.chromium.launch(executable_path=exe, args=['--no-sandbox', '--disable-dev-shm-usage'])
        for name in PAGES:
            for theme in ['light', 'dark']:
                scenario(browser, name, 1440, 900, False, theme)
                scenario(browser, name, 390, 844, True, theme)
        for w, h, touch in [(360,640,True),(375,667,True),(430,932,True),(639,700,True),
                            (640,700,True),(844,390,True),(1024,768,False),(1920,1080,False)]:
            scenario(browser, 'roots', w, h, touch, 'dark', full=False)
        for name in PAGES:
            for width, height, touch in [(1440,900,False),(390,844,True)]:
                scenario(browser, name, width, height, touch, 'dark', origin='https://huangsitao.fun', full=False)
        browser.close()
finally:
    server.shutdown()
    report = {'commit': os.environ.get('GITHUB_SHA'), 'results': results,
              'passed': sum(r['status'] == 'passed' for r in results),
              'failed': sum(r['status'] == 'failed' for r in results),
              'assertions_passed': sum(len(r['checks']) for r in results),
              'limits': 'Chromium desktop and mobile/touch emulation; not physical iOS/Android devices or Safari.'}
    (OUT / 'report.json').write_text(json.dumps(report, ensure_ascii=False, indent=2))
    print('SUMMARY', json.dumps({k: v for k, v in report.items() if k != 'results'}, ensure_ascii=False), flush=True)
if report['failed']:
    raise SystemExit(1)
