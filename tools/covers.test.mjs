// 封面流水线的把关：已提交的 SVG 就是配方渲出来的那一张，尺寸规则都过，三处登记对得上。
// 改了 lib/ 忘了重渲、配方和图对不上、清单漏登记，都在这里报出来。不需要 @resvg/resvg-js。
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { buildSvg, loadRecipe, check, swatchWarnings, listedPosts, RECIPES, OUT_DIR } = require('./covers/render.js');

const slugs = fs.readdirSync(RECIPES)
  .filter((f) => f.endsWith('.js') && f !== 'example.js')
  .map((f) => f.replace(/\.js$/, ''))
  .sort();

test('已提交的封面和配方渲出来的一致', () => {
  for (const slug of slugs) {
    const committed = fs.readFileSync(path.join(OUT_DIR, `cover-${slug}.svg`), 'utf8');
    assert.equal(buildSvg(loadRecipe(slug)), committed, `${slug}：配方或 lib/ 改过后没重渲，跑 npm run cover -- ${slug}`);
  }
});

test('每张封面都过尺寸规则', () => {
  for (const slug of slugs) {
    assert.deepEqual(check(buildSvg(loadRecipe(slug))), [], slug);
  }
});

test('配方、博客列表、封面清单三处登记一致', () => {
  const posts = listedPosts();
  const readme = fs.readFileSync(path.join(RECIPES, '..', 'README.md'), 'utf8');
  const listed = [...readme.matchAll(/^\| ([a-z0-9-]+) \| ([a-z]+) \| cover-/gm)].map(([, slug, swatch]) => ({ slug, swatch }));

  assert.deepEqual(posts.map((p) => p.slug).sort(), slugs, '博客列表里登记了封面的文章和 recipes/ 对不上');
  assert.deepEqual(listed.map((p) => p.slug), posts.map((p) => p.slug), 'README 封面清单的顺序和博客列表不一样');
  for (const { slug, swatch } of posts) {
    assert.equal(loadRecipe(slug).swatch, swatch, `${slug}：配方和博客列表的底色不一样`);
    assert.equal(listed.find((p) => p.slug === slug).swatch, swatch, `${slug}：README 清单和博客列表的底色不一样`);
  }
});

test('底色检查能认出撞色和深浅不交替', () => {
  const posts = [
    { slug: 'a', swatch: 'coral' },
    { slug: 'b', swatch: 'mineral' },
    { slug: 'c', swatch: 'peach' },
  ];
  assert.deepEqual(swatchWarnings('a', 'coral', posts), []);
  assert.match(swatchWarnings('new', 'mineral', posts)[0], /和列表里相邻的 b 一样/);
  assert.match(swatchWarnings('new', 'oat', posts)[0], /同是浅色/);
  assert.deepEqual(swatchWarnings('new', 'plum', posts), []);
});
