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
  --preview 额外输出 tools/covers/.preview/<slug>.png（底色 + 插图，模拟列表卡片）`;

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
  const d = makeDraw(recipe.seed ?? 1);
  recipe.draw(d, motifs);
  return d.svg();
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
  if (preview) {
    const png = path.join(PREVIEW_DIR, `${slug}.png`);
    writePng(cardSvg(svg, SWATCHES[recipe.swatch]), png);
    console.log(`  预览 ${path.relative(ROOT, png)}`);
  }
}

// 母题总览：每个母题一格，按 motifs.js 的导出顺序排列
function renderMotifSheet() {
  const names = Object.keys(motifs);
  const cols = 4, cell = 1000;
  const rows = Math.ceil(names.length / cols);
  const bgs = Object.values(SWATCHES);
  let body = '';
  names.forEach((name, i) => {
    const d = makeDraw(100 + i);
    d.at({ x: 500, y: 520 }, () => motifs[name](d));
    const x = (i % cols) * cell, y = Math.floor(i / cols) * cell;
    body += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${bgs[i % bgs.length]}"/>` +
      `<svg x="${x}" y="${y}" width="${cell}" height="${cell}" viewBox="0 0 1000 1000">${inner(d.svg())}</svg>` +
      `<text x="${x + 40}" y="${y + 90}" font-family="sans-serif" font-size="60" fill="#141413">m.${name}(d)</text>`;
  });
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${rows * cell}">${body}</svg>`;
  const png = path.join(PREVIEW_DIR, 'motifs.png');
  writePng(sheet, png, { fitTo: { mode: 'width', value: 1600 } });
  console.log(`✓ ${path.relative(ROOT, png)}\n  母题顺序：${names.join(', ')}`);
}

function main() {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter((a) => a.startsWith('--')));
  let slugs = args.filter((a) => !a.startsWith('--'));
  if (flags.has('--motifs')) return renderMotifSheet();
  if (flags.has('--all')) {
    slugs = fs.readdirSync(RECIPES)
      .filter((f) => f.endsWith('.js') && f !== 'example.js')
      .map((f) => f.replace(/\.js$/, ''));
    if (!slugs.length) return console.log('recipes/ 里还没有文章配方（example 除外）');
  }
  if (!slugs.length) {
    console.log(USAGE);
    process.exit(1);
  }
  slugs.forEach((slug) => renderOne(slug, flags.has('--preview')));
}

main();
