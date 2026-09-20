import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { buildTree, closeFile, fileStatus, hasFile, isFocused, languageOf, openFile, syncSelection } from './model.mjs';
// data URL also works with Node 18/20 when the repository is not type: module.
const diffURL = `data:text/javascript;base64,${Buffer.from(readFileSync(new URL('./diff.js', import.meta.url), 'utf8')).toString('base64')}`;
const { diffLines, plainRows } = await import(diffURL);
const files = { 'main.py': 'old\n', 'tests/test_main.py': '', 'README.md': 'readme' };

test('initial preferred files are deduplicated and validated; empty files exist', () => {
  const s = syncSelection(null, files, ['tests/test_main.py', 'missing.py', 'tests/test_main.py'], 0);
  assert.deepEqual(s.tabs, ['tests/test_main.py']);
  assert.equal(s.activeFile, 'tests/test_main.py');
  assert.ok(hasFile(files, s.activeFile));
  assert.equal(hasFile(files, 'constructor'), false);
});

test('open, reselect, close inactive and close all tabs', () => {
  let s = syncSelection(null, files, ['main.py'], 0);
  s = openFile(s, 'README.md');
  s = openFile(s, 'README.md');
  assert.deepEqual(s.tabs, ['main.py', 'README.md']);
  assert.equal(openFile(s, 'missing'), s);
  s = closeFile(s, 'main.py');
  assert.equal(s.activeFile, 'README.md');
  s = closeFile(s, 'README.md');
  assert.deepEqual(s.tabs, []);
  assert.equal(s.activeFile, null);
  assert.equal(openFile(s, 'tests/test_main.py').activeFile, 'tests/test_main.py');
});

test('new steps reveal changes first and preserve other valid tabs', () => {
  let s = syncSelection(null, files, ['main.py'], 0);
  s = openFile(s, 'README.md');
  const next = { ...files, 'main.py': 'new\n' };
  s = syncSelection(s, next, ['main.py'], 1);
  assert.deepEqual(s.tabs, ['main.py', 'README.md']);
  assert.equal(s.activeFile, 'main.py');
});

test('same-step files refresh does not undo manual selection or reopen closed tabs', () => {
  let s = openFile(syncSelection(null, files, ['main.py'], 0), 'README.md');
  s = syncSelection(s, { ...files }, ['main.py'], 0);
  assert.equal(s.activeFile, 'README.md');
  s = closeFile(closeFile(s, 'README.md'), 'main.py');
  s = syncSelection(s, { ...files }, ['main.py'], 0);
  assert.deepEqual(s.tabs, []);
  assert.equal(s.activeFile, null);
});

test('deleted active file falls back to a real remaining tab; no stale content', () => {
  let s = syncSelection(null, files, ['README.md', 'main.py'], 0);
  s = openFile(s, 'main.py');
  s = syncSelection(s, { 'README.md': 'readme' }, [], 1);
  assert.deepEqual(s.tabs, ['README.md']);
  assert.equal(s.activeFile, 'README.md');
  s = syncSelection(s, {}, [], 2);
  assert.equal(s.activeFile, null);
});

test('reopening a guided step with a new navigation key reselects its file', () => {
  const s = openFile(syncSelection(null, files, ['main.py'], 0), 'README.md');
  assert.equal(syncSelection(s, files, ['main.py'], 1).activeFile, 'main.py');
});

test('tree handles nested folders and sorts folders before files', () => {
  const tree = buildTree(['z.py', 'tests/a.py', 'tests/nested/b.py', 'a.py']);
  assert.equal(tree[0].type, 'folder');
  assert.equal(tree[0].children[0].path, 'tests/nested');
  assert.deepEqual(tree.slice(1).map((n) => n.path), ['a.py', 'z.py']);
});

test('static MCP projects have no diff; snapshots distinguish new/changed/same', () => {
  assert.equal(fileStatus(files, null, 'main.py'), 'same');
  assert.equal(fileStatus(files, {}, 'tests/test_main.py'), 'new');
  assert.equal(fileStatus(files, { 'main.py': 'new' }, 'main.py'), 'changed');
  assert.equal(fileStatus(files, files, 'main.py'), 'same');
});

test('focus ranges are inclusive and use new source line numbers', () => {
  for (const n of [3, 4, 5, 10]) assert.ok(isFocused(n, [[3, 5], [10]]));
  for (const n of [null, 0, 2, 6, 11]) assert.equal(isFocused(n, [[3, 5], [10]]), false);
});

test('diff reconstructs both sources and keeps deleted lines unnumbered', () => {
  const oldText = 'alpha\nold\nomega\n';
  const newText = 'alpha\nnew\nomega\n';
  const rows = diffLines(oldText, newText);
  assert.deepEqual(rows.filter((r) => r.type !== 'del').map((r) => r.text), newText.trimEnd().split('\n'));
  assert.deepEqual(rows.filter((r) => r.type !== 'add').map((r) => r.text), oldText.trimEnd().split('\n'));
  assert.ok(rows.filter((r) => r.type === 'del').every((r) => r.newNo === null));
  assert.deepEqual(rows.filter((r) => r.type !== 'del').map((r) => r.newNo), [1, 2, 3]);
  assert.equal(plainRows('').length, 1);
  assert.equal(plainRows('\n\n').length, 2);
});

test('language fallback is safe', () => {
  assert.equal(languageOf('test.PY'), 'python');
  assert.equal(languageOf('data.json'), 'json');
  assert.equal(languageOf('unknown.foo'), 'text');
});
