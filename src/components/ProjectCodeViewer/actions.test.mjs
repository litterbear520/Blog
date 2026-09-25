import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const viewer = read('./index.jsx');
const copy = read('./CopyCodeButton.jsx');
const css = read('./styles.module.css');

test('both teaching adapters delegate files and rendering to the SAME viewer', () => {
  for (const name of ['CodeWalkthrough', 'McpWalkthrough']) {
    const source = read(`../${name}/index.jsx`);
    assert.match(source, /import ProjectCodeViewer from '\.\.\/ProjectCodeViewer'/);
    assert.equal((source.match(/<ProjectCodeViewer\b/g) || []).length, 1);
    assert.doesNotMatch(source, /<Highlight\b|<pre\b|function buildTree|renderTree|styles\.(fileTree|tabs|codeScroll)/);
    assert.doesNotMatch(read(`../${name}/styles.module.css`), /\.(editor|fileTree|codeScroll|pre|lineFocus|codeActions)\s*\{/);
  }
});

test('MCP retains guide/accordion/focus; snapshots retain nav, previous files and terminal', () => {
  const mcp = read('../McpWalkthrough/index.jsx');
  const cw = read('../CodeWalkthrough/index.jsx');
  assert.match(mcp, /TOUR = \['steps', 'buttons', 'editor'\]/);
  assert.match(mcp, /hidden=\{!isExpanded\}/);
  assert.match(mcp, /setSelectionKey\(\(key\) => key \+ 1\)/);
  assert.match(mcp, /onFileSelect=\{\(\) => setHighlight\(null\)\}/);
  assert.match(mcp, /useId\(\)/);
  assert.match(cw, /previousFiles=\{previous\}/);
  assert.match(cw, /focusRanges=\{step.lines\}/);
  assert.match(cw, /nav = false/);
  assert.match(cw, /<TerminalOutput run=\{run\}/);
  assert.match(cw, /setRunIndex\(null\)/);
});

test('single-file walkthroughs swap the tree, picker and tabs for a filename header', () => {
  const cw = read('../CodeWalkthrough/index.jsx');
  assert.match(cw, /new Set\(snapshots\.flatMap\(Object\.keys\)\)\.size === 1/);
  assert.match(cw, /single=\{single\}/);
  assert.match(viewer, /single && styles\.single/);
  const tree = viewer.indexOf('className={styles.fileTree}');
  const picker = viewer.indexOf('className={styles.mobilePicker}');
  const guards = [...viewer.matchAll(/\{!single && \(/g)].map((match) => match.index);
  assert.equal(guards.length, 2);
  assert.ok(guards[0] < tree && tree < guards[1] && guards[1] < picker);
  assert.ok(viewer.indexOf('</>)}') > viewer.indexOf('className={styles.editorToolbar}'));
  const header = viewer.indexOf('{single && activeFile && (');
  assert.ok(viewer.indexOf('</>)}') < header && header < viewer.indexOf('className={styles.codeShell}'));
  assert.match(viewer.slice(header, viewer.indexOf('className={styles.codeShell}')), /<SymbolsIcon path=\{activeFile\} \/>[\s\S]*\{activeFile\}/);
  assert.match(css, /\.fileHeader\s*\{[^}]*height: var\(--code-viewer-header-height\);/s);
  assert.match(css, /\.editor\.single\s*\{[^}]*height: auto;/s);
  assert.match(css, /\.single \.codeScroll\s*\{[^}]*overflow-y: hidden;/s);
});

test('actions overlay the code, not the toolbar or scrolling source', () => {
  const toolbar = viewer.indexOf('className={styles.editorToolbar}');
  const shell = viewer.indexOf('className={styles.codeShell}');
  const actions = viewer.indexOf('className={styles.codeActions}');
  const scroll = viewer.indexOf('ref={scrollRef}');
  assert.ok(toolbar < shell && shell < actions && actions < scroll);
  assert.doesNotMatch(viewer.slice(toolbar, shell), /CopyCodeButton/);
  assert.match(css, /\.codeActions\s*\{[^}]*position: absolute;/s);
  assert.doesNotMatch(css, /codeShellWithActions|padding-top:\s*calc/);
});

test('copy is raw, asynchronous, repeat-guarded and cleans up after unmount', () => {
  assert.match(viewer, /text=\{source\}/);
  assert.match(viewer, /files\[activeFile\]/);
  assert.match(copy, /await navigator\.clipboard\.writeText\(text\)/);
  assert.match(copy, /pending\.current/);
  assert.match(copy, /requestId.current \+= 1/);
  assert.equal((copy.match(/id !== requestId.current/g) || []).length, 2);
  assert.match(copy, /clearTimeout\(resetTimer.current\)/);
  assert.match(copy, /typeof text === 'string'/);
  assert.doesNotMatch(copy, /innerText|textContent|data\/codeWalkthroughs/);
});

test('focus is blue and diff colors remain distinct', () => {
  assert.match(css, /--code-viewer-focus-bg: rgba\(109, 167, 236, 0.14\)/);
  assert.match(css, /\.lineFocus\s*\{[^}]*background: var\(--code-viewer-focus-bg\)/s);
  assert.match(css, /\.lineAdd\s*\{[^}]*--th-code-added-bg/s);
  assert.match(css, /\.lineDel\s*\{[^}]*--th-code-removed-bg/s);
  assert.match(css, /\.editor \.pre\s*\{[^}]*border: 0 !important;[^}]*border-radius: 0 !important/s);
  assert.doesNotMatch(css, /(?:^|\n)pre\s*\{|\.theme-code-block/);
});

test('hover, keyboard, touch, reduced motion, and small-screen recovery are retained', () => {
  assert.match(css, /\.codeShell:hover \.codeActions/);
  assert.match(css, /\.codeShell:has\(:focus-visible\) \.codeActions/);
  assert.match(css, /--cw-action-size: 2.75rem/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(viewer, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(viewer, /<select[\s\S]*Object.keys\(files\).map/);
});

const repo = new URL('../../../', import.meta.url);
const completeCheckout = existsSync(new URL('docs/', repo)) && existsSync(new URL('roadmap/', repo));
const ci = process.env.CI === 'true';
test('docs and roadmap entrypoints all use the supported adapters', { skip: !completeCheckout && !ci }, () => {
  assert.ok(completeCheckout, 'A full checkout is required in CI');
  const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, dir);
    return entry.isDirectory() ? walk(path) : /\.mdx?$/.test(entry.name) ? [path] : [];
  });
  const pages = ['docs/', 'roadmap/', 'blog/'].flatMap((dir) => walk(new URL(dir, repo)));
  const supported = {
    CodeWalkthrough: ['unittest', 'codeObject', 'frame', 'commerce', 'iterator', 'iteratorLoop'],
    McpWalkthrough: ['sampling', 'notifications', 'roots', 'commerceAgentLoop'],
  };
  const found = [];
  for (const file of pages) {
    const text = readFileSync(file, 'utf8');
    for (const match of text.matchAll(/<(CodeWalkthrough|McpWalkthrough)\s+variant="([^"]+)"/g)) {
      assert.ok(supported[match[1]].includes(match[2]), `unsupported ${match[1]} variant: ${match[2]}`);
      assert.ok(text.includes(`@site/src/components/${match[1]}`));
      found.push({ file: decodeURIComponent(file.pathname), variant: match[2] });
    }
  }
  // The first roadmap page now uses the guided reader. The commerce snapshot
  // adapter remains supported for lessons that explain code changes over time.
  for (const variant of ['unittest', 'commerceAgentLoop', 'sampling', 'notifications', 'roots']) {
    assert.ok(found.some((page) => page.variant === variant), `missing ${variant}`);
  }
  assert.ok(found.some((page) => page.variant === 'commerceAgentLoop' && page.file.includes('/roadmap/')));
});
