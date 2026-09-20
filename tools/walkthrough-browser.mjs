// Actual built / deployed React pages, not a CSS fixture. No npm dependencies.
// node tools/walkthrough-browser.mjs
// WALKTHROUGH_BASE_URL=https://huangsitao.fun node tools/walkthrough-browser.mjs
import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import { createReadStream, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const live = process.env.WALKTHROUGH_BASE_URL;
const output = join(repo, 'test-results', live ? 'walkthrough-live' : 'walkthrough-local');
mkdirSync(output, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const dataURL = (text) => `data:text/javascript;base64,${Buffer.from(text).toString('base64')}`;
const read = (path) => readFileSync(join(repo, path), 'utf8');
const snapshotURL = dataURL(read('src/data/codeWalkthroughs/commerce.files.js'));
const commerceURL = dataURL(read('src/data/commerceAgentLoopLesson.js').replace(
  "'./codeWalkthroughs/commerce.files.js'", JSON.stringify(snapshotURL),
));
const mcpPath = '/docs/MCP/Model Context Protocol：高级主题/核心 MCP 功能/';
const lessons = [
  { name: 'commerce', path: '/roadmap/commerce-agents/一个文件，一段对话/the-agent-loop', data: (await import(commerceURL)).default },
  ...await Promise.all(['notifications', 'roots', 'sampling'].map(async (name) => ({
    name, path: `${mcpPath}${name}-walkthrough/`,
    data: (await import(dataURL(read(`src/data/mcpWalkthroughs/${name}.js`)))).default,
  }))),
];
const scenarios = [
  { name: 'desktop-dark', width: 1440, height: 1000, theme: 'dark' },
  { name: 'desktop-light', width: 1440, height: 1000, theme: 'light' },
  { name: 'tablet-light', width: 768, height: 1024, theme: 'light', touch: true },
  { name: 'phone-dark', width: 390, height: 844, theme: 'dark', touch: true },
  { name: 'phone-light', width: 390, height: 844, theme: 'light', touch: true },
  { name: 'phone-small', width: 320, height: 640, theme: 'dark', touch: true },
  { name: 'phone-landscape', width: 844, height: 390, theme: 'dark', touch: true },
  { name: 'phone-large-text', width: 390, height: 844, theme: 'light', touch: true, fontSize: 20 },
];

function startChrome() {
  const candidates = process.env.CHROMIUM_BIN ? [process.env.CHROMIUM_BIN]
    : ['chromium', 'chromium-browser', 'google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'];
  const bin = candidates.find((candidate) => {
    try { execFileSync(candidate, ['--version'], { stdio: 'ignore', timeout: 5000 }); return true; } catch { return false; }
  });
  assert.ok(bin, 'Chrome/Chromium is required; E2E tests must not silently skip');
  const dir = mkdtempSync(join(tmpdir(), 'walkthrough-e2e-'));
  const child = spawn(bin, ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    '--no-first-run', '--disable-background-networking', '--disable-extensions', '--no-startup-window',
    `--user-data-dir=${dir}`, '--remote-debugging-pipe'],
  { detached: process.platform !== 'win32', stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  const closed = new Promise((r) => child.once('close', r));
  const pending = new Map();
  const errors = new Map();
  let id = 0, buffer = '', stderr = '';
  const fail = (error) => {
    for (const entry of pending.values()) { clearTimeout(entry.timer); entry.reject(error); }
    pending.clear();
  };
  child.stderr.on('data', (data) => { stderr = (stderr + data).slice(-4000); });
  child.on('error', fail);
  child.on('exit', () => fail(new Error(`Chrome exited: ${stderr}`)));
  child.stdio[4].setEncoding('utf8');
  child.stdio[4].on('data', (data) => {
    buffer += data;
    let end;
    while ((end = buffer.indexOf('\0')) !== -1) {
      const msg = JSON.parse(buffer.slice(0, end)); buffer = buffer.slice(end + 1);
      if (msg.method === 'Runtime.exceptionThrown') {
        const list = errors.get(msg.sessionId) || [];
        list.push(msg.params.exceptionDetails); errors.set(msg.sessionId, list);
      }
      const entry = pending.get(msg.id);
      if (!entry) continue;
      pending.delete(msg.id); clearTimeout(entry.timer);
      if (msg.error) entry.reject(new Error(JSON.stringify(msg.error))); else entry.resolve(msg.result);
    }
  });
  const call = (method, params = {}, sessionId) => new Promise((resolveCall, reject) => {
    const seq = ++id;
    const timer = setTimeout(() => { pending.delete(seq); reject(new Error(`Timed out: ${method}`)); }, 30000);
    pending.set(seq, { resolve: resolveCall, reject, timer });
    child.stdio[3].write(JSON.stringify({ id: seq, method, params, sessionId }) + '\0');
  });
  return { call, errors, close: async () => {
    const kill = setTimeout(() => {
      try { if (process.platform === 'win32') child.kill('SIGKILL'); else process.kill(-child.pid, 'SIGKILL'); } catch {}
    }, 5000);
    try { await call('Browser.close').catch(() => {}); await closed; }
    finally { clearTimeout(kill); fail(new Error('Browser closed')); rmSync(dir, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 }); }
  } };
}

async function serveBuild() {
  const root = join(repo, 'build');
  assert.ok(existsSync(root), 'Run npm run build first');
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css',
    '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' };
  const server = createServer((req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const base = resolve(root, '.' + pathname);
      if (base !== root && !base.startsWith(root + sep)) { res.writeHead(403).end(); return; }
      const file = [base, join(base, 'index.html'), base + '.html'].find((p) => existsSync(p) && statSync(p).isFile());
      if (!file) { res.writeHead(404).end(); return; }
      res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
      createReadStream(file).pipe(res);
    } catch { res.writeHead(400).end(); }
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  return { url: `http://127.0.0.1:${server.address().port}`, close: () => new Promise((r) => server.close(r)) };
}

// Run inside the real page. Scroll clipping at the LIST edge is intentional;
// clipping within an individual step/header/body is a defect.
function inspectStep(expected, index) {
  const root = document.querySelector('[data-guided-walkthrough]');
  const list = root.querySelector('[data-walkthrough-steps]');
  const rows = [...list.children];
  const row = rows[index];
  const header = row.querySelector('button');
  const body = document.getElementById(header.getAttribute('aria-controls'));
  const viewer = root.querySelector('[data-project-code-viewer]');
  const failures = [];
  let checks = 0;
  const check = (ok, message) => { checks++; if (!ok) failures.push(message); };
  check(header.getAttribute('aria-expanded') === 'true' && !body.hidden, 'current explanation expanded');
  check(rows.filter((r) => r.querySelector('button').getAttribute('aria-expanded') === 'true').length === 1, 'only one expanded step');
  check(header.textContent.includes(expected.title), 'correct step heading');
  const normalized = (s) => s.replaceAll('`', '').replace(/\s+/g, '');
  for (const block of expected.body) {
    for (const text of block.type === 'list' ? block.items : [block.text]) {
      check(normalized(body.textContent).includes(normalized(text)), 'complete explanation text');
    }
  }
  for (const item of rows) {
    const rect = item.getBoundingClientRect();
    check(item.scrollHeight <= item.clientHeight + 1, `step ${item.dataset.walkthroughStep}: content not cropped`);
    const button = item.querySelector('button');
    check(button.getBoundingClientRect().bottom <= rect.bottom + 1, 'header not cropped');
    const walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.textContent.trim() || node.parentElement.closest('[hidden]')) continue;
      const range = document.createRange(); range.selectNodeContents(node);
      for (const textRect of range.getClientRects()) {
        check(textRect.top >= rect.top - 1 && textRect.bottom <= rect.bottom + 1, 'full glyph height inside step');
      }
    }
  }
  const listRect = list.getBoundingClientRect();
  const headerRect = header.getBoundingClientRect();
  check(headerRect.top >= listRect.top - 1 && headerRect.bottom <= listRect.bottom + 1, 'active heading revealed in inner list');
  check(body.scrollWidth <= body.clientWidth + 1, 'explanation wraps on narrow screens');
  check(document.documentElement.scrollWidth <= innerWidth + 1, 'no horizontal page overflow');
  check(viewer.querySelector('select').value === expected.file, 'correct source file selected');
  const focus = [...viewer.querySelectorAll('[data-focus]')];
  const lineNumbers = focus.map((line) => Number(line.dataset.line));
  const end = expected.endLine ?? expected.line;
  check(JSON.stringify(lineNumbers) === JSON.stringify(Array.from({ length: end - expected.line + 1 }, (_, n) => expected.line + n)), 'exact source lines highlighted');
  if (focus.length) {
    const codeScroll = viewer.querySelector('pre').parentElement;
    const codeRect = codeScroll.getBoundingClientRect();
    const first = focus[0].getBoundingClientRect();
    check(first.top < codeRect.bottom && first.bottom > codeRect.top, 'highlight scrolled into code viewport');
  }
  const nav = root.querySelector('[data-walkthrough-nav]').children;
  check(nav[0].disabled === (index === 0), 'previous boundary');
  check(nav[1].disabled === (index === rows.length - 1), 'next boundary');
  return { failures, checks, viewerHeight: viewer.getBoundingClientRect().height, pageY: scrollY };
}

let server, chrome;
const report = { target: live || 'production build on localhost', cases: [], assertions: 0 };
try {
  server = live ? null : await serveBuild();
  const baseURL = live || server.url;
  const revision = process.env.GITHUB_SHA;
  if (!live && revision) writeFileSync(join(repo, 'build', 'walkthrough-revision.json'), JSON.stringify({ revision }));
  if (live) {
    const deadline = Date.now() + Number(process.env.WALKTHROUGH_WAIT_SECONDS || 300) * 1000;
    let ready = false;
    while (Date.now() < deadline) {
      try {
        if (revision) {
          const marker = await fetch(new URL(`/walkthrough-revision.json?verify=${Date.now()}`, baseURL), { signal: AbortSignal.timeout(15000) });
          if (!marker.ok || (await marker.json()).revision !== revision) { await sleep(5000); continue; }
        }
        const response = await fetch(new URL(encodeURI(lessons[0].path) + `?verify=${Date.now()}`, baseURL), { signal: AbortSignal.timeout(15000) });
        const html = await response.text();
        if (response.ok && html.includes('data-walkthrough-steps') && !html.includes('参考资料：')) { ready = true; break; }
      } catch {}
      await sleep(5000);
    }
    assert.ok(ready, 'New article did not reach the public domain before the deployment timeout');
  }
  chrome = startChrome();
  for (const lesson of lessons) for (const scenario of scenarios) {
    const label = `${lesson.name}-${scenario.name}`;
    const { targetId } = await chrome.call('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await chrome.call('Target.attachToTarget', { targetId, flatten: true });
    const call = (method, params) => chrome.call(method, params, sessionId);
    const evaluate = async (expression) => {
      const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      assert.ok(!result.exceptionDetails, `${label}: ${JSON.stringify(result.exceptionDetails)}`);
      return result.result.value;
    };
    const waitFor = async (expression, timeout = 15000) => {
      const deadline = Date.now() + timeout;
      while (Date.now() < deadline) { if (await evaluate(expression)) return; await sleep(60); }
      throw new Error(`${label}: timeout waiting for ${expression}`);
    };
    const click = async (selector) => {
      // Let layout AND the compositor consume scrolling before native input.
      // Unlike HTMLElement.click(), CDP touch events use browser hit testing.
      await evaluate(`(() => { const e=document.querySelector(${JSON.stringify(selector)}); if(!e) throw Error('Missing button'); e.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'}); })()`);
      await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
      const point = await evaluate(`(() => {
        const e=document.querySelector(${JSON.stringify(selector)}), r=e.getBoundingClientRect();
        const x=r.x+r.width/2, y=r.y+r.height/2, hit=document.elementFromPoint(x,y);
        if(!hit || !(hit===e || e.contains(hit))) throw Error('Button is covered: '+(hit?.outerHTML || 'outside viewport'));
        return {x,y,pageY:scrollY};
      })()`);
      if (scenario.touch) {
        await call('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: point.x, y: point.y }] });
        await call('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      } else {
        await call('Input.dispatchMouseEvent', { type: 'mousePressed', x: point.x, y: point.y, button: 'left', clickCount: 1 });
        await call('Input.dispatchMouseEvent', { type: 'mouseReleased', x: point.x, y: point.y, button: 'left', clickCount: 1 });
      }
      return point;
    };
    const capture = async (suffix) => {
      await evaluate("document.querySelector('[data-guided-walkthrough]')?.scrollIntoView({block:'start',behavior:'instant'}); window.scrollBy({top:-80,behavior:'instant'})");
      const image = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      writeFileSync(join(output, `${label}-${suffix}.png`), Buffer.from(image.data, 'base64'));
    };
    try {
      await call('Page.enable'); await call('Runtime.enable');
      await call('Emulation.setDeviceMetricsOverride', { width: scenario.width, height: scenario.height, deviceScaleFactor: 1, mobile: !!scenario.touch });
      await call('Emulation.setTouchEmulationEnabled', { enabled: !!scenario.touch });
      await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: scenario.theme }, { name: 'prefers-reduced-motion', value: 'reduce' }] });
      // Use Docusaurus' documented theme query, not internal storage key names.
      await call('Page.navigate', { url: new URL(encodeURI(lesson.path) + `?verify=${process.env.GITHUB_SHA || 'local'}&docusaurus-theme=${scenario.theme}`, baseURL).href });
      await waitFor("document.readyState === 'complete' && !!document.querySelector('[data-walkthrough-nav]')");
      await evaluate('document.fonts.ready.then(() => true)');
      if (scenario.fontSize) await evaluate(`document.documentElement.style.fontSize='${scenario.fontSize}px'`);
      await evaluate("[...document.querySelectorAll('[data-guided-walkthrough] button')].find(b=>b.textContent==='跳过').setAttribute('data-e2e-skip','')");
      await click('[data-e2e-skip]');
      await waitFor("!document.querySelector('[data-e2e-skip]')");
      assert.equal(await evaluate('document.documentElement.dataset.theme'), scenario.theme, `${label}: theme`);
      if (lesson.name === 'commerce') {
        assert.equal(await evaluate("!!document.querySelector('article a[href*=\"academy.claude.com\"], article a[href*=\"platform.claude.com\"]')"), false, 'reference links removed');
      }
      let height;
      for (const [index, step] of lesson.data.steps.entries()) {
        const before = index ? await click('[data-walkthrough-nav] button:last-child') : null;
        await waitFor(`document.querySelector('[data-walkthrough-step="${index}"] > button').getAttribute('aria-expanded') === 'true'`);
        await sleep(80);
        const result = await evaluate(`(${inspectStep.toString()})(${JSON.stringify(step)},${index})`);
        assert.deepEqual(result.failures, [], `${label} step ${index + 1}`);
        if (height === undefined) height = result.viewerHeight;
        assert.ok(Math.abs(result.viewerHeight - height) < 1, `${label}: stable code viewport`);
        if (before && lesson.name === 'commerce') assert.ok(Math.abs(result.pageY - before.pageY) < 2, `${label} step ${index + 1}: navigation moved article from ${before.pageY} to ${result.pageY}`);
        report.assertions += result.checks + 1;
        if (index === 1) await capture('step-2');
      }
      // Previous, direct selection, collapse, then keyboard re-open.
      await click('[data-walkthrough-nav] button:first-child');
      const previous = lesson.data.steps.length - 2;
      await waitFor(`document.querySelector('[data-walkthrough-step="${previous}"] > button').getAttribute('aria-expanded') === 'true'`);
      await click('[data-walkthrough-step="0"] > button');
      await waitFor(`document.querySelector('[data-walkthrough-step="0"] > button').getAttribute('aria-expanded') === 'true'`);
      await click('[data-walkthrough-step="0"] > button');
      await waitFor("document.querySelector('[data-walkthrough-step=" + '"0"' + "] > button').getAttribute('aria-expanded') === 'false'");
      await evaluate("document.querySelector('[data-walkthrough-step=" + '"0"' + "] > button').focus({preventScroll:true})");
      await call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, text: '\r', unmodifiedText: '\r' });
      await call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
      await waitFor("document.querySelector('[data-walkthrough-step=" + '"0"' + "] > button').getAttribute('aria-expanded') === 'true'");
      // Negative control: recreating the old shrink rule must reproduce clipping.
      if (lesson.name === 'commerce' && scenario.name === 'desktop-dark') {
        const clipped = await evaluate(`(() => { const rows=[...document.querySelectorAll('[data-walkthrough-step]')]; rows.forEach(r=>r.style.flexShrink='1'); const bad=rows.filter(r=>r.scrollHeight>r.clientHeight+1).length; rows.forEach(r=>r.style.removeProperty('flex-shrink')); return bad; })()`);
        assert.ok(clipped > 0, 'negative control reproduces the original clipped text');
        report.negativeControlClippedSteps = clipped;
      }
      assert.deepEqual(chrome.errors.get(sessionId) || [], [], `${label}: no uncaught page errors`);
      report.cases.push({ lesson: lesson.name, ...scenario, steps: lesson.data.steps.length, status: 'passed' });
      console.log(`PASS ${label}: ${lesson.data.steps.length} steps; mouse/touch, navigation, exact highlights, glyph bounds, stable viewport`);
    } catch (error) {
      await capture('failure').catch(() => {});
      report.cases.push({ lesson: lesson.name, ...scenario, status: 'failed', error: error.stack });
      console.error(`FAIL ${label}: ${error.stack}`);
    } finally { await chrome.call('Target.closeTarget', { targetId }); }
  }
  const failed = report.cases.filter((entry) => entry.status === 'failed');
  assert.equal(failed.length, 0, `${failed.length} of ${report.cases.length} actual-page scenarios failed`);
  console.log(`PASS ${report.cases.length} actual-page scenarios; ${report.assertions} assertions; target=${report.target}`);
} catch (error) {
  report.error = error.stack;
  process.exitCode = 1;
  console.error(error);
} finally {
  writeFileSync(join(output, 'results.json'), JSON.stringify(report, null, 2));
  if (chrome) await chrome.close();
  if (server) await server.close();
}
