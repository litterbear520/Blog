// Dependency-free Chromium layout regression for the two project viewers.
// Run: CHROMIUM_BIN=/path/to/chromium node --test tools/code-viewer-layout.test.mjs
// Uses the real component CSS with the DOM hierarchy from each index.jsx.
// This is a layout fixture, not a React/Docusaurus end-to-end test.
import assert from 'node:assert/strict';
import { execFileSync, spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

const cssFor = (name) => readFileSync(new URL(`../src/components/${name}/styles.module.css`, import.meta.url), 'utf8');
const css = Object.fromEntries(['CodeWalkthrough', 'McpWalkthrough'].map((name) => [name, cssFor(name)]));
const candidates = process.env.CHROMIUM_BIN
  ? [process.env.CHROMIUM_BIN]
  : ['chromium', 'chromium-browser', 'google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'];
const browser = candidates.find((bin) => {
  try { execFileSync(bin, ['--version'], { stdio: 'ignore', timeout: 5000 }); return true; }
  catch { return false; }
});
if (process.env.CHROMIUM_BIN && !browser) throw new Error('CHROMIUM_BIN cannot be executed');

// Font/layout resets and the relevant global pre rules used by the site.
const baseCSS = `
  * { box-sizing: border-box; }
  body { margin: 0; line-height: 1.65; }
  button { font-family: inherit; line-height: inherit; }
  :root {
    --ifm-color-emphasis-300: #ccc; --ifm-background-surface-color: #fcfcfb;
    --ifm-color-emphasis-100: #f3f3f0; --ifm-color-content-secondary: #898781;
    --ifm-font-color-base: #52514e; --ifm-font-family-monospace: monospace;
    --ifm-font-family-base: sans-serif; --ifm-global-radius: 0.5rem;
    --th-line: rgba(11,11,11,.1);
  }
  [data-theme='dark'] {
    --ifm-color-emphasis-300: #383835; --ifm-background-surface-color: #20201f;
    --ifm-color-emphasis-100: #20201f; --ifm-font-color-base: #c3c2b7;
    --th-line: rgba(255,255,255,.1);
  }
  pre { background: var(--ifm-background-surface-color) !important;
    border: 1px solid var(--th-line) !important; border-radius: 8px !important; }
  [data-theme='dark'] pre { background: #181818 !important;
    border: 1px solid #262626 !important; border-radius: 8px !important; }
  .preview { width: calc(100% - 32px); margin: 16px; }
`;

// Executed in Chromium; iframe dimensions supply exact mobile/desktop viewports.
async function runCases(styles, globals) {
  const results = [];
  const sizes = [[1440, 900, 16], [1024, 700, 16], [640, 500, 16], [639, 700, 16],
    [360, 640, 16], [390, 844, 16], [844, 390, 16], [1280, 800, 20]];
  for (const name of Object.keys(styles)) {
    for (const theme of ['light', 'dark']) {
      for (const [width, height, fontSize] of sizes) {
        const frame = document.createElement('iframe');
        frame.style.cssText = `display:block;width:${width}px;height:${height}px;border:0`;
        document.body.append(frame);
        const doc = frame.contentDocument;
        doc.open(); doc.write('<!doctype html><html><head></head><body></body></html>'); doc.close();
        doc.documentElement.dataset.theme = theme;
        doc.documentElement.style.fontSize = `${fontSize}px`;
        const style = doc.createElement('style'); style.textContent = globals + styles[name]; doc.head.append(style);
        const isCW = name === 'CodeWalkthrough';
        const actions = isCW ? '<div class="codeActions"><button class="codeActionButton" aria-label="显示改动"></button><button class="codeActionButton" aria-label="复制代码"></button></div>' : '';
        doc.body.innerHTML = `<div class="preview"><div class="root"><div class="editor">
          <aside class="fileTree"><h4 class="fileTreeHeading">文件</h4><div class="treeScroll"></div></aside>
          <div class="editorMain">${isCW ? '<div class="editorToolbar">' : ''}<div class="tabs"></div>${isCW ? '</div><div class="codeShell">' : ''}
          ${actions}<div class="codeScroll"><pre class="pre"></pre></div>${isCW ? '</div>' : ''}</div>
          </div><p id="following">Following article paragraph</p></div></div>`;
        const q = (selector) => doc.querySelector(selector);
        const rect = (selector) => q(selector).getBoundingClientRect();
        const check = (condition, message) => { if (!condition) throw new Error(message); };
        const close = (a, b) => Math.abs(a - b) < 1;
        const metrics = () => [rect('.editor').height, rect('#following').top, rect('.codeScroll, .empty').top, rect('.codeScroll, .empty').height];
        let checks = 0;
        const verify = (condition, message) => { check(condition, message); checks++; };
        const setRows = (count, long = false) => {
          const pane = q('.codeScroll, .empty'); pane.className = 'codeScroll';
          pane.innerHTML = '<pre class="pre"></pre>';
          for (let i = 0; i < Math.max(count, 1); i++) {
            const line = doc.createElement('div'); line.className = 'line';
            line.innerHTML = `<span class="lineNo">${i + 1}</span>${isCW ? '<span class="lineSign"></span>' : ''}<span class="lineContent"></span>`;
            line.lastElementChild.textContent = count === 0 ? '' : long ? `value_${i} = "${'x'.repeat(200)}"` : `value_${i} = ${i}`;
            q('.pre').append(line);
          }
        };
        const setTabs = (count) => {
          q('.tabs').innerHTML = Array.from({ length: count }, (_, i) => `<div class="tab"><button class="tabBtn">${i ? 'long_file_name_' + i : 'main'}.py</button><button class="tabClose" aria-label="关闭">×</button></div>`).join('');
        };
        const setTree = (count) => {
          q('.treeScroll').innerHTML = Array.from({ length: count }, (_, i) => `<button class="treeItem"><span class="treeName">file_${i}.py</span></button>`).join('');
        };
        try {
          setTabs(1); setTree(3); setRows(2);
          const baseline = metrics();
          const narrow = width < 640;
          const expected = Math.max((narrow ? 16 : 20) * fontSize, Math.min(height * (narrow ? .6 : .65), (narrow ? 24 : 32) * fontSize));
          verify(close(baseline[0], expected), 'responsive outer height is incorrect');
          const stable = (label) => verify(metrics().every((n, i) => close(n, baseline[i])), label);
          verify(q('.codeScroll').scrollHeight === q('.codeScroll').clientHeight, 'two-line file should not require vertical scrolling');
          const startWidth = q('.codeScroll').clientWidth;
          setRows(150, true); stable('long file moves the viewer or following paragraph');
          verify(q('.codeScroll').scrollHeight > q('.codeScroll').clientHeight, 'long code is not internally scrollable');
          verify(q('.codeScroll').scrollWidth > q('.codeScroll').clientWidth, 'wide code is not internally scrollable');
          verify(q('.codeScroll').clientWidth === startWidth, 'vertical scrollbar changes code width');
          const overlay = isCW ? rect('.codeActions').toJSON() : null;
          q('.codeScroll').scrollTop = 200; q('.codeScroll').scrollLeft = 120;
          verify(q('.codeScroll').scrollTop > 0 && q('.codeScroll').scrollLeft > 0, 'code scrolling does not work');
          if (isCW) verify(close(rect('.codeActions').top, overlay.top) && close(rect('.codeActions').right, overlay.right), 'scroll moves floating buttons');
          setRows(1); stable('one-line file changes the frame');
          setRows(0); stable('empty file changes the frame');
          setRows(2); setTree(120); stable('expanded file tree changes the frame');
          if (!narrow) {
            verify(q('.treeScroll').scrollHeight > q('.treeScroll').clientHeight, 'file tree is not internally scrollable');
            q('.treeScroll').scrollTop = 100;
            verify(q('.treeScroll').scrollTop > 0, 'tree scrolling does not work');
            verify(close(rect('.fileTreeHeading').bottom, rect('.codeScroll').top), 'tree header and tabs are not aligned');
          }
          setTree(1); stable('collapsed file tree changes the frame');
          setTabs(30); stable('overflowing tabs change the viewport height');
          verify(q('.tabs').scrollWidth > q('.tabs').clientWidth, 'tabs are not horizontally scrollable');
          const tabTop = rect('.tabBtn').top, tabBottom = rect('.tabBtn').bottom;
          verify(tabTop >= rect('.tabs').top && tabBottom <= rect('.tabs').bottom, 'tab button is clipped');
          setTabs(0); q('.codeScroll').className = 'empty'; q('.empty').innerHTML = '<div><p>没有打开的文件</p><p class="emptySub">在左侧文件树里选择一个文件</p></div>';
          q('.codeActions')?.remove(); stable('closing all tabs collapses the frame');
          setTabs(1); setRows(2); stable('reopening a file changes the frame');
          if (isCW) verify(close(rect('.line').top - rect('.codeScroll').top, fontSize * .5), 'top spacer has returned');
          verify(doc.documentElement.scrollWidth <= width, 'viewer causes horizontal page overflow');
          results.push({ name, theme, width, height, fontSize, viewerHeight: baseline[0], checks });
        } catch (error) { results.push({ name, theme, width, height, fontSize, error: error.message }); }
        frame.remove();
      }
    }
  }
  return results;
}

// Chrome DevTools pipe avoids a local server, open debugging port, and npm dependencies.
function connectChrome(dir) {
  const child = spawn(browser, ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    '--no-first-run', '--disable-background-networking', '--disable-extensions', '--no-startup-window',
    `--user-data-dir=${join(dir, 'profile')}`, '--remote-debugging-pipe'],
  { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  let sequence = 0, buffer = '', errors = '';
  const pending = new Map();
  const failAll = (error) => { for (const entry of pending.values()) { clearTimeout(entry.timer); entry.reject(error); } pending.clear(); };
  child.stderr.on('data', (data) => { errors = (errors + data).slice(-4000); });
  child.on('error', failAll);
  child.on('exit', () => failAll(new Error(`Chromium exited before replying: ${errors}`)));
  child.stdio[4].setEncoding('utf8');
  child.stdio[4].on('data', (data) => {
    buffer += data;
    let end;
    while ((end = buffer.indexOf('\0')) !== -1) {
      const message = JSON.parse(buffer.slice(0, end)); buffer = buffer.slice(end + 1);
      const entry = pending.get(message.id);
      if (!entry) continue;
      pending.delete(message.id); clearTimeout(entry.timer);
      if (message.error) entry.reject(new Error(JSON.stringify(message.error)));
      else entry.resolve(message.result);
    }
  });
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++sequence;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`Timed out: ${method}\n${errors}`)); }, 20000);
    pending.set(id, { resolve, reject, timer });
    child.stdio[3].write(JSON.stringify({ id, method, params, sessionId }) + '\0');
  });
  return { send, stop: () => { failAll(new Error('Browser stopped')); child.kill('SIGKILL'); } };
}

test('project viewers keep their geometry when content, tabs, and folders change', { skip: browser ? false : 'Install Chromium or set CHROMIUM_BIN' }, async () => {
  const dir = mkdtempSync(join(tmpdir(), 'code-viewer-layout-'));
  const chrome = connectChrome(dir);
  try {
    const { targetId } = await chrome.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await chrome.send('Target.attachToTarget', { targetId, flatten: true });
    const result = await chrome.send('Runtime.evaluate', {
      expression: `(${runCases.toString()})(${JSON.stringify(css)},${JSON.stringify(baseCSS)})`,
      awaitPromise: true, returnByValue: true,
    }, sessionId);
    assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails));
    const results = result.result.value;
    assert.equal(results.length, 32);
    assert.deepEqual(results.filter((r) => r.error), []);
    console.log(`${results.length} viewport/theme cases; ${results.reduce((n, r) => n + r.checks, 0)} geometry assertions passed`);
    await chrome.send('Browser.close');
  } finally { chrome.stop(); rmSync(dir, { recursive: true, force: true }); }
});
