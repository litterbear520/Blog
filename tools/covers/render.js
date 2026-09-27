#!/usr/bin/env node
'use strict';
// 博客封面渲染：配方 → 透明 SVG（static/img/blog/cover-<slug>.svg）
// --preview 另出带底色的 PNG（tools/covers/.preview/<slug>.png）供人眼检查，不需要浏览器。

const fs = require('fs');
const path = require('path');
const { makeDraw, SWATCHES } = require('./lib/doodle');
const motifs = require('./lib/motifs');

const ROOT = path.resolve(__dirname, '..', '..');
const RECIPES = path.join(__dirname, 'recipes');
const OUT_DIR = path.join(ROOT, 'static', 'img', 'blog');
const PREVIEW_DIR = path.join(__dirname, '.preview');
const CARD = { w: 2400, h: 1140, illo: 0.76 }; // 预览卡片比例，插图高度占 76%

const USAGE = `用法：
  npm run cover -- <slug> [--preview]   渲染 recipes/<slug>.js → static/img/blog/cover-<slug>.svg
  npm run cover -- --all [--preview]    渲染全部配方（跳过 example）
  npm run cover -- --motifs             输出母题总览 tools/covers/.preview/motifs.png
  npm run cover -- --sheet              所有配方拼成一张总览 tools/covers/.preview/sheet.png（看整体是否统一）
  --preview 额外输出 tools/covers/.preview/<slug>.png（1000² 画布 + 底色）和 <slug>-card.png（模拟列表卡片）`;

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function loadRecipe(slug) {
  const file = path.join(RECIPES, `${slug}.js`);
  if (!fs.existsSync(file)) fail(`找不到配方 ${path.relative(ROOT, file)}`);
  const recipe = require(file);
  if (typeof recipe.draw !== 'function') fail(`${slug}: 配方必须导出 draw(d, m) 函数`);
  if (!SWATCHES[recipe.swatch]) {
    fail(`${slug}: swatch "${recipe.swatch}" 不在色板里，可选：${Object.keys(SWATCHES).join(' / ')}`);
  }
  return recipe;
}

function buildSvg(recipe) {
  const d = makeDraw(recipe.seed ?? 1, { bg: SWATCHES[recipe.swatch] });
  recipe.draw(d, motifs);
  return d.svg();
}

// 从 SVG 路径坐标量出图形范围：占画布多少、有几个点越出画布（官方的线和纸片都在画布内收尾）
function measure(svg) {
  const nums = (svg.match(/ d="[^"]+"/g) || []).join(' ').match(/-?\d+(\.\d+)?/g) || [];
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, out = 0, near = 0;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = +nums[i], y = +nums[i + 1];
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    if (x < 0 || x > 1000 || y < 0 || y > 1000) out++;
    else if (x < 10 || x > 990 || y < 10 || y > 990) near++;
  }
  return { x0, y0, x1, y1, out, near };
}

const inner = (svg) => svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

// 把 1000² 插图放到卡片比例的纯色底上
function cardSvg(illoSvg, bg) {
  const s = CARD.h * CARD.illo;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD.w}" height="${CARD.h}">` +
    `<rect width="${CARD.w}" height="${CARD.h}" fill="${bg}"/>` +
    `<svg x="${(CARD.w - s) / 2}" y="${(CARD.h - s) / 2}" width="${s}" height="${s}" viewBox="0 0 1000 1000">${inner(illoSvg)}</svg>` +
    '</svg>';
}

function writePng(svg, file, opts = {}) {
  let Resvg;
  try {
    ({ Resvg } = require('@resvg/resvg-js'));
  } catch {
    fail('生成 PNG 预览需要 @resvg/resvg-js，先运行 npm install');
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, new Resvg(svg, opts).render().asPng());
}

function renderOne(slug, preview) {
  const recipe = loadRecipe(slug);
  const svg = buildSvg(recipe);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = path.join(OUT_DIR, `cover-${slug}.svg`);
  fs.writeFileSync(out, svg);
  console.log(`✓ ${path.relative(ROOT, out)}  ${(svg.length / 1024).toFixed(1)} KB  swatch: ${recipe.swatch}`);
  const b = measure(svg);
  const r = (v) => Math.round(v);
  console.log(`  范围 x ${r(b.x0)}…${r(b.x1)}  y ${r(b.y0)}…${r(b.y1)}（长边占画布 ${r(Math.max(b.x1 - b.x0, b.y1 - b.y0) / 10)}%）` +
    (b.out ? `  ⚠ ${b.out} 个点越出画布，会被切掉` : b.near ? `  ⚠ ${b.near} 个点离画布边不到 10，往里收一点` : '  无越界') +
    (Math.max(b.x1 - b.x0, b.y1 - b.y0) < 850 ? '  ⚠ 长边不到 85%，主体再放大些' : ''));
  if (preview) {
    const bg = SWATCHES[recipe.swatch];
    const png = path.join(PREVIEW_DIR, `${slug}.png`);
    writePng(svg.replace(/(<svg[^>]*>)/, `$1<rect width="1000" height="1000" fill="${bg}"/>`), png);
    const card = path.join(PREVIEW_DIR, `${slug}-card.png`);
    writePng(cardSvg(svg, bg), card);
    console.log(`  预览 ${path.relative(ROOT, png)}（1000² 画布）  卡片 ${path.relative(ROOT, card)}`);
  }
}

// 母题总览：每个母题一格，按 motifs.js 的导出顺序排列；手额外展示三种姿势
function renderMotifSheet() {
  const items = Object.keys(motifs).filter((name) => name !== 'handAt').flatMap((name) => name === 'hand'
    ? ['open', 'point', 'grip'].map((pose) => [name, { pose }, `m.hand(d, { pose: '${pose}' })`])
    : [[name, undefined, `m.${name}(d)`]]);
  const cols = 4, cell = 1000;
  const rows = Math.ceil(items.length / cols);
  const bgs = Object.values(SWATCHES);
  let body = '';
  items.forEach(([name, opts, label], i) => {
    const bg = bgs[i % bgs.length];
    const d = makeDraw(100 + i, { bg });
    d.at({ x: 500, y: 520 }, () => motifs[name](d, opts));
    const x = (i % cols) * cell, y = Math.floor(i / cols) * cell;
    body += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${bg}"/>` +
      `<svg x="${x}" y="${y}" width="${cell}" height="${cell}" viewBox="0 0 1000 1000">${inner(d.svg())}</svg>` +
      `<text x="${x + 30}" y="${y + 60}" font-family="sans-serif" font-size="44" fill="#141413">${label}</text>`;
  });
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${rows * cell}">${body}</svg>`;
  const png = path.join(PREVIEW_DIR, 'motifs.png');
  writePng(sheet, png, { fitTo: { mode: 'width', value: 1600 } });
  console.log(`✓ ${path.relative(ROOT, png)}\n  母题顺序：${items.map((it) => it[2]).join(', ')}`);
}

// 封面总览：所有配方按底色拼成一张，检查新封面和已有封面放在一起是否统一
function renderCoverSheet(slugs) {
  const cols = 4, cell = 1000;
  const rows = Math.ceil(slugs.length / cols);
  let body = '';
  slugs.forEach((slug, i) => {
    const recipe = loadRecipe(slug);
    const x = (i % cols) * cell, y = Math.floor(i / cols) * cell;
    body += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${SWATCHES[recipe.swatch]}"/>` +
      `<svg x="${x + 60}" y="${y + 60}" width="${cell - 120}" height="${cell - 120}" viewBox="0 0 1000 1000">${inner(buildSvg(recipe))}</svg>` +
      `<text x="${x + 24}" y="${y + 44}" font-family="sans-serif" font-size="32" fill="#141413">${slug}</text>`;
  });
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${rows * cell}">${body}</svg>`;
  const png = path.join(PREVIEW_DIR, 'sheet.png');
  writePng(sheet, png, { fitTo: { mode: 'width', value: 1600 } });
  console.log(`✓ ${path.relative(ROOT, png)}`);
}

function main() {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter((a) => a.startsWith('--')));
  let slugs = args.filter((a) => !a.startsWith('--'));
  if (flags.has('--motifs')) return renderMotifSheet();
  if (flags.has('--all') || flags.has('--sheet')) {
    slugs = fs.readdirSync(RECIPES)
      .filter((f) => f.endsWith('.js') && f !== 'example.js')
      .map((f) => f.replace(/\.js$/, ''));
    // 按博客列表页的顺序排，总览里相邻两格就是列表里相邻的两篇
    const listFile = path.join(ROOT, 'src', 'pages', 'bloglist.js');
    const order = fs.existsSync(listFile) ? [...fs.readFileSync(listFile, 'utf8').matchAll(/slug: '([^']+)'/g)].map((m) => m[1]) : [];
    const rank = (sl) => (order.includes(sl) ? order.indexOf(sl) : order.length);
    slugs.sort((a, b) => rank(a) - rank(b));
    if (!slugs.length) return console.log('recipes/ 里还没有文章配方（example 除外）');
  }
  if (flags.has('--sheet')) return renderCoverSheet(slugs);
  if (!slugs.length) {
    console.log(USAGE);
    process.exit(1);
  }
  slugs.forEach((slug) => renderOne(slug, flags.has('--preview')));
}

main();
