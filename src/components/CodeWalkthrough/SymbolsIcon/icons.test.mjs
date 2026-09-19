import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import { getSymbolIconName } from './associations.mjs';

const root = new URL('./', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');

test('unittest 文件使用 Symbols 对应图标', () => {
  const examples = [
    ['tests/test_vector.py', 'python'],
    ['tests/__init__.py', 'python'],
    ['vector/vector.py', 'python'],
    ['vector/__init__.py', 'python'],
    ['examply.py', 'python'],
    ['.gitignore', 'git'],
    ['pyproject.toml', 'gear'],
  ];
  for (const [path, expected] of examples) assert.equal(getSymbolIconName(path), expected, path);
});

test('文件名规则优先，其他已有演练语言也有图标', () => {
  for (const [path, expected] of [
    ['requirements.txt', 'python'], ['setup.cfg', 'python'], ['.python-version', 'python'],
    ['.gitattributes', 'git'], ['.gitmodules', 'git'],
    ['notes.txt', 'text'], ['README.md', 'markdown'], ['settings.toml', 'gear'],
    ['data.json', 'brackets-yellow'], ['data.jsonc', 'brackets-yellow'],
    ['data.json5', 'brackets-yellow'],
  ]) assert.equal(getSymbolIconName(path), expected, path);
});

test('环境配置变体不会回退成未知文件', () => {
  for (const path of ['.env', '.env.example', '.env.local', '.env.production', 'sample.env', 'sample.env.example']) {
    assert.equal(getSymbolIconName(path), 'gear', path);
  }
});

test('按文件名识别，支持大小写与 Windows 路径', () => {
  assert.equal(getSymbolIconName('nested/folder.py/readme.txt'), 'text');
  assert.equal(getSymbolIconName('nested/REQUIREMENTS.TXT'), 'python');
  assert.equal(getSymbolIconName('C:\\project\\TESTS\\test_vector.PY'), 'python');
  assert.equal(getSymbolIconName('folder/typing.pyi'), 'python');
});

test('测试目录使用上游红色代码文件夹，折叠不更改图标类型', () => {
  for (const path of ['tests', 'test', 'spec', 'specs', 'project/TESTS/', 'C:\\project\\tests']) {
    assert.equal(getSymbolIconName(path, { folder: true }), 'folder-red-code', path);
  }
  assert.equal(getSymbolIconName('vector', { folder: true }), 'folder');
  assert.equal(getSymbolIconName('folder.py', { folder: true }), 'folder');
  assert.equal(getSymbolIconName('tests'), 'document');
});

test('未知、空路径及对象原型名称安全回退', () => {
  for (const path of ['', null, undefined, 'unknown.xyz', 'README', 'constructor', '__proto__', 'toString']) {
    assert.equal(getSymbolIconName(path), 'document', String(path));
    assert.equal(getSymbolIconName(path, { folder: true }), 'folder', String(path));
  }
});

test('每个 SVG 与上游原件的 Git blob 完全一致', () => {
  const { icons } = JSON.parse(read('upstream.json'));
  assert.deepEqual(readdirSync(new URL('icons/', root)).sort(), Object.keys(icons).map((name) => `${name}.svg`).sort());
  for (const [name, { blob }] of Object.entries(icons)) {
    const svg = read(`icons/${name}.svg`);
    const bytes = Buffer.from(svg);
    const actual = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
    assert.equal(actual, blob, name);
    assert.match(svg, /viewBox="0 0 24 24"/);
    assert.doesNotMatch(svg, /<(?:script|image|foreignObject)|\bon\w+=|(?:href|src)=/i);
  }
  assert.match(read('LICENSE'), /Copyright \(c\) 2020-22 Miguel Solorio/);
});

test('树与标签复用相同组件，保留复制行为且不加载远程图标', () => {
  const viewer = read('../index.jsx');
  assert.doesNotMatch(viewer, /[📄📁📂]/u);
  assert.equal((viewer.match(/<SymbolsIcon\b/g) || []).length, 3);
  assert.match(viewer, /folder tree expanded=\{!isCollapsed\}/);
  assert.match(viewer, /text=\{activeFile === null \? undefined : snapshot\[activeFile\]\}/);
  const component = read('index.jsx');
  const icons = Object.keys(JSON.parse(read('upstream.json')).icons).sort();
  const imports = [...component.matchAll(/from '\.\/icons\/([^']+)\.svg'/g)].map((match) => match[1]).sort();
  assert.deepEqual(imports, icons);
  assert.doesNotMatch(component, /https?:\/\/|fetch\(|dangerouslySetInnerHTML/);
  assert.match(component, /aria-hidden="true"/);
  assert.match(component, /focusable="false"/);
});
