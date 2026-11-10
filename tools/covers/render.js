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
// 预览卡片：照 src/pages/bloglist.module.css 的 .cardVisual（高 180px）和 .coverImg（上下各留 16px），
// 插图高度占 (180 - 32) / 180 ≈ 82%。那边的数字改了，这里跟着改。
const CARD = { w: 2400, h: 1140, illo: 0.82 };
// 深色底；其余算浅色。列表里相邻两篇深浅交替
const DARK_SWATCHES = new Set(['clay', 'plum', 'mineral', 'olive', 'fig', 'sky']);
const PAPER_FILL = '#FAF9F5';
const FLAGS = new Set(['--preview', '--all', '--motifs', '--sheet', '--help']);

const USAGE = `用法：
  npm run cover -- <slug> [--preview]   渲染 recipes/<slug>.js → static/img/blog/cover-<slug>.svg
  npm run cover -- --all [--preview]    渲染全部配方（跳过 example）
  npm run cover -- --motifs             输出母题总览 tools/covers/.preview/motifs.png
  npm run cover -- --sheet              所有配方拼成一张总览 tools/covers/.preview/sheet.png（看整体是否统一）
  --preview 额外输出 tools/covers/.preview/<slug>.png（1000² 画布 + 底色）和 <slug>-card.png（模拟列表卡片）
  npm run test:covers                   核对已提交的 SVG、清单登记和各项尺寸规则`;

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
  return { x0, y0, x1, y1, out, near, long: Math.max(x1 - x0, y1 - y0) };
}

// 纸白剪纸块的顶点。剪纸块顶点少（直边多边形、十来边的圆）；纸白的毛笔线是几百个点的细长多边形，不算纸片
function paperPolys(svg) {
  const polys = [];
  for (const [, d] of svg.matchAll(new RegExp(`<path fill="${PAPER_FILL}" d="([^"]+)"`, 'g'))) {
    const n = d.match(/-?\d+(\.\d+)?/g).map(Number);
    if (n.length / 2 > 40) continue;
    polys.push(Array.from({ length: n.length / 2 }, (_, i) => [n[2 * i], n[2 * i + 1]]));
  }
  return polys;
}

function segDist([px, py], [ax, ay], [bx, by]) {
  const dx = bx - ax, dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1)));
  return Math.hypot(px - ax - t * dx, py - ay - t * dy);
}

function inside([px, py], poly) {
  let hit = false;
  for (let i = 0, k = poly.length - 1; i < poly.length; k = i++) {
    const [ax, ay] = poly[i], [bx, by] = poly[k];
    if ((ay > py) !== (by > py) && px < ((bx - ax) * (py - ay)) / (by - ay) + ax) hit = !hit;
  }
  return hit;
}

// 相邻纸片的最小间距。一块套在另一块里面（中间隔着 tint 的同心圆）不算相邻
function minPaperGap(svg) {
  const polys = paperPolys(svg);
  let gap = Infinity;
  for (let a = 0; a < polys.length; a++) {
    for (let b = a + 1; b < polys.length; b++) {
      const A = polys[a], B = polys[b];
      if (inside(A[0], B) || inside(B[0], A)) continue;
      for (const [P, Q] of [[A, B], [B, A]]) {
        for (const p of P) {
          for (let i = 0; i < Q.length; i++) gap = Math.min(gap, segDist(p, Q[i], Q[(i + 1) % Q.length]));
        }
      }
    }
  }
  return gap;
}

// 能用数字查的规则都在这里；返回一组提示，空数组就是全部通过。
// 纸片间距的标称值是 30，顶点抖动会吃掉几个像素，所以按 25 卡。
function check(svg) {
  const b = measure(svg);
  const warn = [];
  if (b.out) warn.push(`${b.out} 个点越出画布，会被切掉`);
  else if (b.near) warn.push(`${b.near} 个点离画布边不到 10，往里收一点`);
  if (b.long < 850) warn.push('长边不到 85%，主体再放大些');
  if (b.long > 950) warn.push('长边超过 95%，往里收一点');
  const gap = minPaperGap(svg);
  if (gap < 25) warn.push(`有两块纸片只隔 ${Math.round(gap)}，缩小后会糊成一块（留 30 以上，或其中一块改用 d.tint）`);
  return warn;
}

// 博客列表里的顺序和底色：[{ slug, swatch }]，最新的在前
function listedPosts() {
  const file = path.join(ROOT, 'src', 'pages', 'bloglist.js');
  if (!fs.existsSync(file)) return [];
  return [...fs.readFileSync(file, 'utf8').matchAll(/slug: '([^']+)',[^}]*?swatch: '([^']+)'/g)]
    .map(([, slug, swatch]) => ({ slug, swatch }));
}

// 底色和列表里的邻居撞不撞：相邻两篇不同色、深浅交替。老文章不追溯，只在渲染那一篇时提示
function swatchWarnings(slug, swatch, posts = listedPosts()) {
  const i = posts.findIndex((p) => p.slug === slug);
  const others = posts.filter((p) => p.slug !== slug);
  // 还没登记的新文章会排在最前面
  const at = i < 0 ? 0 : i;
  const near = [others[at - 2], others[at - 1], others[at], others[at + 1]].filter(Boolean);
  const warn = [];
  const same = near.find((p) => p.swatch === swatch);
  if (same) warn.push(`底色 ${swatch} 和列表里相邻的 ${same.slug} 一样`);
  const dark = (name) => DARK_SWATCHES.has(name);
  const next = [others[at - 1], others[at]].filter(Boolean).find((p) => dark(p.swatch) === dark(swatch));
  if (next && !same) warn.push(`${swatch} 和紧挨着的 ${next.slug}（${next.swatch}）同是${dark(swatch) ? '深' : '浅'}色，列表里深浅该交替`);
  return warn;
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
    fail('生成 PNG 预览需要 @resvg/resvg-js（SVG 不受影响，已经写好）。\n' +
      '内存小的机器别跑全量 npm install：在一个临时目录里 npm i @resvg/resvg-js，\n' +
      '再用 NODE_PATH=<那个目录>/node_modules node tools/covers/render.js <slug> --preview 重跑。');
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, new Resvg(svg, opts).render().asPng());
}

function renderOne(slug, preview, checkSwatch = false) {
  const recipe = loadRecipe(slug);
  const svg = buildSvg(recipe);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = path.join(OUT_DIR, `cover-${slug}.svg`);
  fs.writeFileSync(out, svg);
  console.log(`✓ ${path.relative(ROOT, out)}  ${(svg.length / 1024).toFixed(1)} KB  swatch: ${recipe.swatch}`);
  const b = measure(svg);
  const r = (v) => Math.round(v);
  const warn = check(svg);
  console.log(`  范围 x ${r(b.x0)}…${r(b.x1)}  y ${r(b.y0)}…${r(b.y1)}（长边占画布 ${r(b.long / 10)}%）` +
    (b.out || b.near ? '' : '  无越界') + warn.map((w) => `  ⚠ ${w}`).join(''));
  if (checkSwatch) swatchWarnings(slug, recipe.swatch).forEach((w) => console.log(`  ⚠ ${w}`));
  if (preview) {
    const bg = SWATCHES[recipe.swatch];
    const png = path.join(PREVIEW_DIR, `${slug}.png`);
    writePng(svg.replace(/(<svg[^>]*>)/, `$1<rect width="1000" height="1000" fill="${bg}"/>`), png);
    const card = path.join(PREVIEW_DIR, `${slug}-card.png`);
    writePng(cardSvg(svg, bg), card);
    console.log(`  预览 ${path.relative(ROOT, png)}（1000² 画布）  卡片 ${path.relative(ROOT, card)}`);
  }
}

// 母题总览：每个母题一格，按 motifs.js 的导出顺序排列
function renderMotifSheet() {
  const items = Object.keys(motifs).map((name) => [name, undefined, `m.${name}(d)`]);
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
  const unknown = [...flags].filter((f) => !FLAGS.has(f));
  if (unknown.length) fail(`未知参数 ${unknown.join(' ')}\n${USAGE}`);
  if (flags.has('--help')) return console.log(USAGE);
  if (flags.has('--motifs')) return renderMotifSheet();
  if (flags.has('--all') || flags.has('--sheet')) {
    slugs = fs.readdirSync(RECIPES)
      .filter((f) => f.endsWith('.js') && f !== 'example.js')
      .map((f) => f.replace(/\.js$/, ''));
    // 按博客列表页的顺序排，总览里相邻两格就是列表里相邻的两篇
    const order = listedPosts().map((p) => p.slug);
    const rank = (sl) => (order.includes(sl) ? order.indexOf(sl) : order.length);
    slugs.sort((a, b) => rank(a) - rank(b));
    if (!slugs.length) return console.log('recipes/ 里还没有文章配方（example 除外）');
  }
  if (flags.has('--sheet')) return renderCoverSheet(slugs);
  if (!slugs.length) {
    console.log(USAGE);
    process.exit(1);
  }
  // 点名渲染某一篇时才查它的底色，--all 重渲不追溯老文章
  const named = !flags.has('--all');
  slugs.forEach((slug) => renderOne(slug, flags.has('--preview'), named));
}

if (require.main === module) main();

module.exports = { buildSvg, loadRecipe, measure, check, minPaperGap, swatchWarnings, listedPosts, RECIPES, OUT_DIR };
