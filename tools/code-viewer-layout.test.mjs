// Actual shared CSS + matching DOM fixture; not a React/Docusaurus E2E test.
// Run: CHROMIUM_BIN=/path/to/chromium node --test tools/code-viewer-layout.test.mjs
import assert from 'node:assert/strict';
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
const css = readFileSync(new URL('../src/components/ProjectCodeViewer/styles.module.css', import.meta.url), 'utf8');
const globalsPath = new URL('../src/css/custom.css', import.meta.url);
// The fallback permits isolated CSS checks without downloading a full checkout.
const fallback = `
:root { --ifm-background-surface-color:#fcfcfb; --ifm-color-emphasis-100:#f3f3f0;
 --ifm-color-emphasis-200:#eae9e4; --ifm-color-emphasis-300:#e1e0d9;
 --ifm-font-color-base:#52514e; --ifm-color-content-secondary:#898781;
 --ifm-font-family-monospace:monospace; --ifm-global-radius:.5rem; --th-line:rgba(11,11,11,.1);
 --th-code-added-bg:#1F8A651F; --th-code-removed-bg:#d1242f1a; }
[data-theme=dark] { --ifm-background-surface-color:#20201f; --ifm-color-emphasis-100:#20201f;
 --ifm-color-emphasis-200:#2c2c2a; --ifm-color-emphasis-300:#383835; --ifm-font-color-base:#c3c2b7; }
pre { background:var(--ifm-background-surface-color) !important; border:1px solid var(--th-line) !important; border-radius:8px !important; }
[data-theme=dark] pre { background:#181818 !important; border:1px solid #262626 !important; border-radius:8px !important; }
`;
const globals = existsSync(globalsPath) ? readFileSync(globalsPath, 'utf8') : fallback;
const candidates = process.env.CHROMIUM_BIN ? [process.env.CHROMIUM_BIN]
  : ['chromium', 'chromium-browser', 'google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'];
const browser = candidates.find((bin) => {
  try { execFileSync(bin, ['--version'], { stdio: 'ignore', timeout: 5000 }); return true; }
  catch { return false; }
});
if (process.env.CHROMIUM_BIN && !browser) throw new Error('CHROMIUM_BIN cannot be executed');

function runCases(css, globals) {
  const results = [];
  for (const theme of ['light', 'dark']) {
    for (const [width, height, fontSize] of [[1440,900,16],[1024,700,16],[640,500,16],[639,700,16],
      [360,640,16],[390,844,16],[844,390,16],[1280,800,20]]) {
      const frame = document.createElement('iframe');
      frame.style.cssText = `width:${width}px;height:${height}px;border:0`;
      document.body.append(frame);
      const doc = frame.contentDocument;
      doc.open(); doc.write('<!doctype html><html><head></head><body></body></html>'); doc.close();
      doc.documentElement.dataset.theme = theme;
      doc.documentElement.style.fontSize = `${fontSize}px`;
      const style = doc.createElement('style');
      style.textContent = globals + css + `*{box-sizing:border-box}body{margin:0}button{font:inherit} .preview{margin:16px} .codeShell{background:${theme==='dark'?'#181818':'#fcfcfb'}}`;
      doc.head.append(style);
      doc.body.innerHTML = `<div class="preview"><div class="editor">
        <aside class="fileTree"><h4 class="fileTreeHeading">文件</h4><div class="treeScroll"></div></aside>
        <div class="editorMain"><label class="mobilePicker"><span>文件</span><select><option>main.py</option></select></label>
        <div class="editorToolbar"><div class="tabs"></div></div>
        <div class="codeShell"><div class="codeActions"><button class="codeActionButton">C</button></div>
        <div class="codeScroll"><pre class="pre"></pre></div></div></div>
        </div><p id="following">Following article</p><pre id="ordinary">ordinary code</pre></div>`;
      const q = (s) => doc.querySelector(s);
      const rect = (s) => q(s).getBoundingClientRect();
      const computed = (s) => frame.contentWindow.getComputedStyle(q(s));
      let checks = 0;
      const verify = (condition, message) => { if (!condition) throw new Error(`${theme} ${width}x${height}: ${message}`); checks++; };
      const close = (a, b) => Math.abs(a - b) < 1;
      const metrics = () => [rect('.editor').height, rect('#following').top, rect('.codeScroll, .empty').top, rect('.codeScroll, .empty').height];
      const setRows = (count, long = false) => {
        const pane = q('.codeScroll, .empty'); pane.className = 'codeScroll'; pane.innerHTML = '<pre class="pre"></pre>';
        for (let i = 0; i < Math.max(1, count); i++) {
          const row = doc.createElement('div'); row.className = 'line';
          row.innerHTML = `<span class="lineNo">${i+1}</span><span class="lineSign"></span><span class="lineContent"></span>`;
          row.lastChild.textContent = count === 0 ? ' ' : long ? 'x'.repeat(240) : 'print("hello")';
          q('.pre').append(row);
        }
      };
      const setTabs = (count) => {
        q('.tabs').innerHTML = '';
        for (let i = 0; i < count; i++) {
          const tab = doc.createElement('div'); tab.className = 'tab';
          tab.innerHTML = `<button class="tabBtn">file_${i}.py</button><button class="tabClose">×</button>`;
          q('.tabs').append(tab);
        }
      };
      setTabs(1); setRows(2);
      const initial = metrics();
      const expected = width < 640 ? Math.max(16*fontSize, Math.min(height*.6,24*fontSize))
        : Math.max(20*fontSize,Math.min(height*.65,32*fontSize));
      verify(close(initial[0], expected), 'responsive outer height');
      verify(close(rect('.line').top-rect('.codeScroll').top, .5*fontSize), 'first line has no action spacer');
      verify(computed('.pre').borderTopWidth === '0px', 'no nested pre border');
      verify(computed('.pre').borderRadius === '0px', 'no nested pre radius');
      verify(computed('.pre').backgroundColor === 'rgba(0, 0, 0, 0)', 'one code background');
      verify(computed('.editor').borderRadius === '12px', 'outer radius retained');
      verify(computed('#ordinary').borderRadius === '8px', 'ordinary code unaffected');
      verify(computed('#ordinary').borderTopWidth === '1px', 'ordinary code border unaffected');
      verify((computed('.mobilePicker').display !== 'none') === (width < 640), 'mobile file recovery');
      verify((computed('.fileTree').display !== 'none') === (width >= 640), 'desktop tree');
      for (const rows of [0,1,2,150]) {
        setRows(rows, rows===150);
        verify(metrics().every((x,i)=>close(x,initial[i])), `stable ${rows} lines`);
      }
      verify(q('.codeScroll').scrollHeight > q('.codeScroll').clientHeight, 'vertical code scroll');
      verify(q('.codeScroll').scrollWidth > q('.codeScroll').clientWidth, 'horizontal code scroll');
      const actionsTop = rect('.codeActions').top;
      q('.codeScroll').scrollTop=100; q('.codeScroll').scrollLeft=100;
      verify(close(rect('.codeActions').top,actionsTop), 'actions do not scroll');
      setTabs(30);
      verify(q('.tabs').scrollWidth>q('.tabs').clientWidth, 'tabs scroll horizontally');
      verify(metrics().every((x,i)=>close(x,initial[i])), 'many tabs do not resize viewport');
      q('.treeScroll').innerHTML='<button class="treeItem">folder</button>'.repeat(120);
      if (width>=640) verify(q('.treeScroll').scrollHeight>q('.treeScroll').clientHeight,'tree scroll');
      verify(metrics().every((x,i)=>close(x,initial[i])), 'long tree does not resize viewport');
      q('.treeScroll').innerHTML='';
      verify(metrics().every((x,i)=>close(x,initial[i])), 'collapsed tree does not resize viewport');
      setRows(2); q('.line').classList.add('lineFocus');
      verify(computed('.lineFocus').backgroundColor === 'rgba(109, 167, 236, 0.14)', 'original MCP blue focus');
      q('.line').className='line lineAdd';
      verify(computed('.lineAdd').backgroundColor !== 'rgba(109, 167, 236, 0.14)', 'diff distinct from focus');
      if (globals.includes('--th-code-focus-bg')) {
        const sample = doc.createElement('div');
        sample.className = 'language-diff';
        // Prism carries an empty token from the previous line; only the prefix
        // identifies whether this line is inserted, deleted, or unchanged.
        sample.innerHTML = '<div class="token-line" id="diff-add"><span class="token deleted"></span><span class="token inserted prefix">+</span><span class="token inserted">new</span></div>'
          + '<div class="token-line" id="diff-remove"><span class="token inserted"></span><span class="token deleted prefix">-</span><span class="token deleted">old</span></div>'
          + '<div class="token-line" id="diff-context"><span class="token inserted"></span><span class="token unchanged prefix"> </span><span class="token unchanged">same</span></div>'
          + '<div id="code-focus" class="theme-code-block-highlighted-line">focus</div>'
          + '<div class="run-output__line--highlight">output</div>';
        doc.body.append(sample);
        const focus = 'rgba(109, 167, 236, 0.14)';
        verify(computed('#code-focus').backgroundColor === focus, 'ordinary emphasis is MCP blue');
        verify(computed('.run-output__line--highlight').backgroundColor === focus, 'output emphasis is MCP blue');
        verify(computed('#diff-add').backgroundColor === computed('.lineAdd').backgroundColor, 'diff blocks and viewers share added green');
        q('.line').className='line lineDel';
        verify(computed('#diff-remove').backgroundColor === computed('.lineDel').backgroundColor, 'diff blocks and viewers share removed red');
        verify(computed('#diff-add').backgroundColor !== computed('#diff-remove').backgroundColor, 'add and remove remain distinct');
        verify(computed('#diff-context').backgroundColor === 'rgba(0, 0, 0, 0)', 'unchanged lines do not inherit diff tint');
        sample.remove();
      }
      setTabs(0); const pane=q('.codeScroll'); pane.className='empty'; pane.innerHTML='<p>没有打开的文件</p>';
      verify(metrics().every((x,i)=>close(x,initial[i])), 'no tabs remains stable');
      // Single-file mode: no tree/tabs/picker; the card grows with the code.
      doc.querySelector('.preview').innerHTML = `<div class="editor single"><div class="editorMain">
        <div class="codeShell"><div class="codeActions"><button class="codeActionButton">C</button></div>
        <div class="codeScroll"><pre class="pre"></pre></div></div></div></div><p id="following">Following article</p>`;
      setRows(2); const short=rect('.editor').height;
      setRows(60); const tall=rect('.editor').height;
      verify(tall - short > 50 * fontSize, 'single file grows with its code');
      verify(tall > Math.max(20*fontSize, Math.min(height*.65,32*fontSize)), 'single file ignores the fixed viewer height');
      verify(q('.codeScroll').scrollHeight <= q('.codeScroll').clientHeight, 'single file has no vertical scroll');
      verify(close(rect('.line').top-rect('.codeScroll').top, .5*fontSize), 'single file starts at the first line');
      verify(rect('#following').top >= rect('.editor').bottom - 1, 'following text sits below the whole file');
      setRows(3, true);
      verify(q('.codeScroll').scrollWidth > q('.codeScroll').clientWidth, 'single file long lines scroll sideways');
      verify(q('.codeScroll').scrollHeight <= q('.codeScroll').clientHeight, 'sideways scroll does not clip lines');
      verify(computed('.editor').borderRadius === '12px', 'single file keeps the outer radius');
      results.push({theme,width,height,fontSize,checks}); frame.remove();
    }
  }
  return results;
}

// CDP pipe avoids opening a debugging port and works in offline containers.
function connectChrome(dir) {
  const child = spawn(browser, ['--headless','--no-sandbox','--disable-gpu','--disable-dev-shm-usage',
    '--no-first-run','--disable-background-networking','--disable-extensions','--no-startup-window',
    `--user-data-dir=${join(dir,'profile')}`,'--remote-debugging-pipe'],
    {detached:process.platform!=='win32',stdio:['ignore','ignore','pipe','pipe','pipe']});
  // Browser.close acknowledges the request before all profile writers stop.
  // Wait for process AND stdio closure; killing the parent immediately can leave
  // Chromium children writing into the directory while rmSync removes it.
  const closed=new Promise((resolve)=>child.once('close',resolve));
  let sequence=0, buffer='', errors='';
  const pending=new Map();
  const failAll=(error)=>{for(const entry of pending.values()){clearTimeout(entry.timer);entry.reject(error);}pending.clear();};
  child.stderr.on('data',(data)=>{errors=(errors+data).slice(-4000);});
  child.on('error',failAll);
  child.on('exit',()=>failAll(new Error(`Chromium exited: ${errors}`)));
  child.stdio[4].setEncoding('utf8');
  child.stdio[4].on('data',(data)=>{
    buffer+=data;
    let end;
    while((end=buffer.indexOf('\0'))!==-1){
      const message=JSON.parse(buffer.slice(0,end));buffer=buffer.slice(end+1);
      const entry=pending.get(message.id);if(!entry)continue;
      pending.delete(message.id);clearTimeout(entry.timer);
      if(message.error)entry.reject(new Error(JSON.stringify(message.error)));
      else entry.resolve(message.result);
    }
  });
  const send=(method,params={},sessionId)=>new Promise((resolve,reject)=>{
    const id=++sequence;
    const timer=setTimeout(()=>{pending.delete(id);reject(new Error(`Timed out: ${method}\n${errors}`));},45000);
    pending.set(id,{resolve,reject,timer});
    child.stdio[3].write(JSON.stringify({id,method,params,sessionId})+'\0');
  });
  return {send,stop:async()=>{
    // Give graceful shutdown time to flush files. On failure, terminate the
    // isolated process group, not just the parent, before directory cleanup.
    const kill=setTimeout(()=>{
      try {
        if(process.platform==='win32')child.kill('SIGKILL');
        else process.kill(-child.pid,'SIGKILL');
      } catch(error) {if(error.code!=='ESRCH')child.kill('SIGKILL');}
    },5000);
    try {await closed;}
    finally {clearTimeout(kill);failAll(new Error('Browser stopped'));}
  }};
}

test('shared project viewer has stable geometry and unified styling', {skip: !browser}, async(t)=>{
  const dir=mkdtempSync(join(tmpdir(),'project-viewer-'));
  const chrome=connectChrome(dir);
  try {
    const {targetId}=await chrome.send('Target.createTarget',{url:'about:blank'});
    const {sessionId}=await chrome.send('Target.attachToTarget',{targetId,flatten:true});
    const result=await chrome.send('Runtime.evaluate',{
      expression:`(${runCases.toString()})(${JSON.stringify(css)},${JSON.stringify(globals)})`,
      awaitPromise:true,returnByValue:true,
    },sessionId);
    assert.ok(!result.exceptionDetails,JSON.stringify(result.exceptionDetails));
    const cases=result.result.value;
    assert.equal(cases.length,16);
    t.diagnostic(`${cases.length} theme/viewport scenarios; ${cases.reduce((n,r)=>n+r.checks,0)} browser assertions; ${existsSync(globalsPath)?'actual custom.css':'isolated global-rule fallback'}`);
    await chrome.send('Browser.close');
  } finally {await chrome.stop();rmSync(dir,{recursive:true,force:true,maxRetries:10,retryDelay:100});}
});
