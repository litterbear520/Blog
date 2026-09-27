// 结构图数据的约定检查：无框架依赖，node --test tools/diagrams.test.mjs
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const asModule = (code) => `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
const dir = new URL('../src/data/diagrams/', import.meta.url);
const files = readdirSync(dir).filter((name) => name.endsWith('.js') && name !== 'index.js');
const registry = read('../src/data/diagrams/index.js');
const css = read('../src/components/Diagram/styles.module.css');

const VOCABULARY = [
  'mask', 'zone', 'band', 'divider', 'boundary',
  'n-neutral', 'n-process', 'n-done', 'n-external', 'n-focal',
  'arrow', 'loop', 'mk', 'mk-loop',
  't-name', 't-band', 't-sub', 't-note', 't-label', 't-mono', 't-mono-strong', 't-code',
];

const diagrams = await Promise.all(files.map(async (file) => ({
  file,
  variant: file.replace(/\.js$/, ''),
  svg: (await import(asModule(read(`../src/data/diagrams/${file}`)))).default,
})));

test('every diagram file is registered, and the registry has no strays', () => {
  const imported = [...registry.matchAll(/^import (\w+) from '\.\/(\w+)';$/gm)];
  assert.deepEqual(imported.map(([, name]) => name).sort(), diagrams.map((d) => d.variant).sort());
  for (const [, name, path] of imported) assert.equal(name, path);
  assert.match(registry, new RegExp(`export default \\{ ${imported.map(([, name]) => name).join(', ')} \\};`));
});

test('every class in the vocabulary has a rule in the Diagram stylesheet', () => {
  for (const name of VOCABULARY) assert.match(css, new RegExp(`:global\\([^)]*\\.${name}\\b`), name);
});

for (const { variant, svg } of diagrams) {
  test(`${variant}: accessible svg at the column width`, () => {
    const [, height] = svg.match(/^<svg viewBox="0 0 768 (\d+)" xmlns="http:\/\/www\.w3\.org\/2000\/svg" role="img" aria-labelledby="([\w-]+)-title \2-desc">/) || [];
    assert.ok(height, 'opens with viewBox 0 0 768 H, role="img" and aria-labelledby');
    assert.equal(Number(height) % 4, 0, 'height on the 4px grid');
    const prefix = svg.match(/aria-labelledby="([\w-]+)-title/)[1];
    assert.match(svg, new RegExp(`<title id="${prefix}-title">[^<]+</title>`));
    assert.match(svg, new RegExp(`<desc id="${prefix}-desc">这张图说明[^<]+</desc>`));
    const ids = [...svg.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(new Set(ids).size, ids.length, 'ids unique');
    for (const id of ids) assert.ok(id.startsWith(`${prefix}-`), `id ${id} carries the prefix`);
    for (const [, ref] of svg.matchAll(/url\(#([^)]+)\)/g)) assert.ok(ids.includes(ref), `url(#${ref}) resolves`);
  });

  test(`${variant}: colours and type come only from vocabulary classes`, () => {
    assert.doesNotMatch(svg, /(?<!url\()#[0-9a-fA-F]{3,8}\b|rgba?\(|\bstyle=|\bfill="|\bstroke="|font-size|font-family/);
    const classes = [...svg.matchAll(/\bclass="([^"]+)"/g)].flatMap(([, list]) => list.split(/\s+/));
    for (const name of classes) assert.ok(VOCABULARY.includes(name), `unknown class ${name}`);
    assert.ok((svg.match(/class="n-focal"/g) || []).length <= 1, 'at most one focal box');
  });
}

test('diagram id prefixes are unique across diagrams', () => {
  const prefixes = diagrams.map(({ svg }) => svg.match(/aria-labelledby="([\w-]+)-title/)[1]);
  assert.equal(new Set(prefixes).size, prefixes.length);
});
