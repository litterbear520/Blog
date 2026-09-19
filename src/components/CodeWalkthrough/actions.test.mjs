// Source-level regression checks; no extra dependencies required.
// Run: node --test src/components/CodeWalkthrough/actions.test.mjs
// These checks do not replace browser interaction tests or the production build.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (name) => readFileSync(new URL(name, import.meta.url), 'utf8');
const viewer = read('./index.jsx');
const copy = read('./CopyCodeButton.jsx');
const css = read('./styles.module.css');

test('actions live in the code shell, not the tabs or scrolling code', () => {
  const toolbar = viewer.indexOf('className={styles.editorToolbar}');
  const shell = viewer.indexOf('styles.codeShell,');
  const actions = viewer.indexOf('className={styles.codeActions}');
  const scroll = viewer.indexOf('ref={scrollRef}');
  assert.ok(toolbar < shell && shell < actions && actions < scroll);
  assert.doesNotMatch(viewer.slice(toolbar, shell), /CopyCodeButton|styles\.codeActions/);
  assert.doesNotMatch(viewer, /styles\.(editorActions|diffToggle)/);
  assert.match(viewer, /role="group" aria-label=\{UI\['aria\.codeActions'\]\}/);
});

test('diff is an icon-only toggle with a stable accessible name and an action tooltip', () => {
  const action = viewer.slice(viewer.indexOf('className={styles.codeActions}'), viewer.indexOf('ref={scrollRef}'));
  assert.match(action, /activeStatus === 'changed'/);
  assert.match(action, /aria-label=\{UI\['diff\.show'\]\}/);
  assert.match(action, /aria-pressed=\{showDiff\}/);
  assert.match(action, /title=\{showDiff \? UI\['diff\.hide'\] : UI\['diff\.show'\]\}/);
  assert.match(action, /<FileDiff /);
  assert.match(action, /<FileCode2 /);
  assert.match(action, /onClick=\{\(\) => setShowDiff\(\(v\) => !v\)\}/);
});

test('copy remains snapshot-based, icon-only, and announces success or failure', () => {
  assert.match(viewer, /text=\{snapshot\[activeFile\]\}/);
  assert.match(viewer, /key=\{JSON\.stringify\(\[current, activeFile\]\)\}/);
  assert.match(copy, /typeof text === 'string'/);
  assert.match(copy, /await navigator\.clipboard\.writeText\(text\)/);
  assert.match(copy, /aria-label=\{hint\}/);
  assert.match(copy, /aria-live="polite"/);
  assert.doesNotMatch(copy, /styles\.(copyLabel|copyButton|copyIcon)|innerText|textContent/);
  assert.match(copy, /<Icon className=\{styles\.codeActionIcon\}/);
});

test('copy keeps its pending-request guard and unmount/timer cleanup', () => {
  assert.match(copy, /status === 'copying'/);
  assert.match(copy, /clearTimeout\(resetTimer\.current\)/);
  assert.match(copy, /requestId\.current \+= 1/);
  assert.equal((copy.match(/id !== requestId\.current/g) || []).length, 2);
  assert.match(copy, /const RESET_MS = 2000/);
});

test('hover is code-scoped and keyboard focus reveals the actions without trapping mouse focus', () => {
  assert.match(css, /\.codeActions\s*\{[^}]*opacity: 0;[^}]*pointer-events: none;/s);
  assert.match(css, /\.codeShell:hover \.codeActions/);
  assert.match(css, /\.codeShell:has\(:focus-visible\) \.codeActions/);
  assert.doesNotMatch(css, /\.(root|editor|tabs):hover \.codeActions/);
  assert.doesNotMatch(css, /\.codeShell:focus-within/);
  assert.doesNotMatch(css, /visibility:\s*hidden/);
});

test('overlay has stable space, theme-aware buttons, and scoped pre resets', () => {
  assert.match(css, /\.codeShellWithActions\s*\{[^}]*padding-top: calc\(/s);
  assert.match(css, /\.codeActions\s*\{[^}]*position: absolute;/s);
  assert.match(css, /background: var\(--cw-editor-bg,/);
  assert.match(css, /\.codeShell \.pre\s*\{[^}]*border: 0 !important;/s);
  assert.doesNotMatch(css, /\.(editorActions|diffToggle|copyLabel|copyButton)\s*[{,:]/);
});

test('touch targets and reduced-motion preferences have explicit fallbacks', () => {
  assert.match(css, /@media \(hover: none\), \(pointer: coarse\)/);
  assert.match(css, /--cw-action-size: 2\.75rem/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)\s*\{\s*\.codeActions,\s*\.codeActionButton\s*\{\s*transition: none;/);
});
