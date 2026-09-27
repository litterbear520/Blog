'use strict';
// 手绘涂鸦库 v3：照 claude.com/blog 封面的画法——纸白剪纸块 + 墨黑毛笔线，两层各画各的东西。
// 纸片不描边；墨线画手、折线、连线，叠在纸片上面。纯函数、无 DOM，输出 SVG 字符串。
// 画布 1000×1000，背景透明，底色由页面 CSS 或预览脚本提供。

const SWATCHES = require('../../../src/data/swatches.json');

const INK = '#141413';
const PAPER = '#FAF9F5';

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Catmull-Rom 采样：每段 segs 个点，末尾补上最后一个控制点
function catmull(pts, segs) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i];
    const p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
    for (let s = 0; s < segs; s++) {
      const t = s / segs, t2 = t * t, t3 = t2 * t;
      out.push([
        0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
        0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3),
      ]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}

// 按弧长重采样，保证宽度起伏在长直线上也均匀
function resample(pts, step) {
  const out = [pts[0]];
  let carry = 0;
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1], [bx, by] = pts[i];
    const l = Math.hypot(bx - ax, by - ay);
    let d = step - carry;
    while (d <= l) {
      out.push([ax + (bx - ax) * d / l, ay + (by - ay) * d / l]);
      d += step;
    }
    carry = l - (d - step);
  }
  const last = pts[pts.length - 1];
  const tail = out[out.length - 1];
  if (Math.hypot(last[0] - tail[0], last[1] - tail[1]) > step * 0.3) out.push(last);
  else out[out.length - 1] = last;
  return out;
}

const r1 = (n) => Math.round(n * 10) / 10;

function makeDraw(seed = 1, { bg = '#d97757' } = {}) {
  const rnd = mulberry32(seed);
  const j = (amp) => (rnd() * 2 - 1) * amp;
  const els = [];
  const stack = [];

  // 局部坐标 → 画布坐标；栈顶是最内层变换
  function T([x, y]) {
    let px = x, py = y;
    for (let i = stack.length - 1; i >= 0; i--) {
      const { x: tx, y: ty, s, cos, sin, fx } = stack[i];
      px *= fx;
      const rx = px * cos - py * sin, ry = px * sin + py * cos;
      px = rx * s + tx; py = ry * s + ty;
    }
    return [px, py];
  }
  // 局部坐标换算成画布坐标：在 d.at 里调用，旋转 / 缩放后找指尖、节点落在画布哪里
  const toCanvas = (p) => T(p);
  // 当前变换的总缩放：线宽按画布像素给，不随 at({ s }) 放大，全图线宽才统一
  const scale = () => stack.reduce((k, f) => k * f.s, 1);

  // 在变换下绘制：at({ x, y, s, rot, flip }, () => ...)，rot 为角度，顺时针为正；flip 左右镜像（先镜像再旋转）
  function at({ x = 0, y = 0, s = 1, rot = 0, flip = false } = {}, fn) {
    const a = (rot * Math.PI) / 180;
    stack.push({ x, y, s, cos: Math.cos(a), sin: Math.sin(a), fx: flip ? -1 : 1 });
    try { fn(); } finally { stack.pop(); }
  }

  const toPath = (pts) => 'M ' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join(' L ') + ' Z';
  const fill = (pts, color) => els.push(`<path fill="${color}" d="${toPath(pts)}"/>`);

  const rect = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const circle = (cx, cy, r, n = 16) => Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });

  // 毛笔线：输出填充多边形（官方 SVG 同样是 fill path 而非 stroke）。
  // w 是画布像素，不受 at 缩放影响；粗细沿路径缓慢起伏，两端略收、圆头。
  // 2 个点是直线，3 个以上经 Catmull-Rom 平滑成曲线；smooth: false 时逐点直连、保留硬转角
  // （坐标轴、书框这类直角）；closed 时首尾相接成一圈。
  // trim：把线的两头裁到离画布边 trim 像素以内（手臂这类“伸向画外”的线用它自动收尾）
  function brush(pts, { w = 20, amp = 1.5, taper = 0.12, closed = false, smooth = true, trim = 0, color = INK } = {}) {
    // 闭合线按开口线画、首尾多绕一段叠住接缝：直角处内外边线会交叉，不能用 evenodd 填一个环
    if (closed) {
      const jp = pts.map((p) => [p[0] + j(amp), p[1] + j(amp)]);
      const n = jp.length;
      const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const loop = smooth ? [...jp, jp[0], jp[1], jp[2 % n]] : [mid(jp[n - 1], jp[0]), ...jp, mid(jp[n - 1], jp[0])];
      return brush(loop, { w, amp: 0, taper: 0, smooth, trim, color });
    }
    const jp = pts.map((p) => T([p[0] + j(amp), p[1] + j(amp)]));
    let sm = smooth ? catmull(jp, 12) : jp;
    sm = resample(sm, smooth ? 5 : 2);
    if (trim) {
      const inside = ([x, y]) => x >= trim && x <= 1000 - trim && y >= trim && y <= 1000 - trim;
      let a = 0, b = sm.length - 1;
      while (a < b && !inside(sm[a])) a++;
      while (b > a && !inside(sm[b])) b--;
      sm = sm.slice(a, b + 1);
      if (sm.length < 2) return;
    }
    const n = sm.length;
    const L = [], R = [];
    let noise = 0;
    for (let i = 0; i < n; i++) {
      const t = i / Math.max(n - 1, 1);
      const end = taper <= 0 ? 1 : Math.min(1, Math.min(t, 1 - t) / taper);
      noise = noise * 0.93 + j(0.035);
      const ww = w * (0.72 + 0.28 * Math.sqrt(end)) * (1 + noise);
      const a = sm[Math.max(i - 1, 0)];
      const b = sm[Math.min(i + 1, n - 1)];
      let dx = b[0] - a[0], dy = b[1] - a[1];
      const l = Math.hypot(dx, dy) || 1; dx /= l; dy /= l;
      // 两侧各带一点独立的毛边，像毛笔在纸上拖出的边
      const hl = ww / 2 + j(0.5), hr = ww / 2 + j(0.5);
      L.push([sm[i][0] - dy * hl, sm[i][1] + dx * hl]);
      R.push([sm[i][0] + dy * hr, sm[i][1] - dx * hr]);
    }
    fill([...L, ...R.reverse()], color);
    const cap = (p) => fill(circle(p[0], p[1], w * 0.36, 14), color);
    cap(sm[0]); cap(sm[n - 1]);
  }

  // 剪纸块：剪刀剪出来的直边多边形，不描边。顶点略歪，长边中途偶尔拐一个小折角。
  function cut(pts, { amp = 6, kink = 0.4, color = PAPER } = {}) {
    const k = scale();
    const out = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      out.push([a[0] + j(amp / k), a[1] + j(amp / k)]);
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]) * k;
      if (l > 180 && rnd() < kink) {
        const t = 0.3 + rnd() * 0.4;
        const nx = -(b[1] - a[1]) / (l / k), ny = (b[0] - a[0]) / (l / k);
        const off = j(amp * 1.4) / k;
        out.push([a[0] + (b[0] - a[0]) * t + nx * off, a[1] + (b[1] - a[1]) * t + ny * off]);
      }
    }
    fill(out.map(T), color);
  }

  // 剪纸圆：官方的“圆”是剪出来的不规则八~十一边形，棱角看得见
  function disc(cx, cy, r, { sides = 9, amp = 0.05, color = PAPER } = {}) {
    const step = (Math.PI * 2) / sides;
    const a0 = rnd() * step;
    const pts = Array.from({ length: sides }, (_, i) => {
      const a = a0 + i * step + j(step * 0.22);
      const rr = r * (1 + j(amp));
      return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
    });
    fill(pts.map(T), color);
  }

  // 实心圆点：连线的节点、折线的数据点。r 是画布像素
  function dot(cx, cy, r = 26, { color = INK } = {}) {
    const k = scale();
    const pts = circle(cx, cy, r / k, 20).map(([x, y]) => [x + j(r * 0.05 / k), y + j(r * 0.05 / k)]);
    fill(pts.map(T), color);
  }

  const ring = (cx, cy, r, { w = 20, n = 14, amp = 2, color = INK } = {}) =>
    brush(circle(cx, cy, r, n), { w, closed: true, amp, color });

  // 折线 + 节点：每段一笔（段中略弯），dots 为 'all' / 'ends' / 'none' 或下标数组
  function link(pts, { w = 20, r = 26, dots = 'all', bow = 6, color = INK } = {}) {
    for (let i = 0; i < pts.length - 1; i++) {
      const [a, b] = [pts[i], pts[i + 1]];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const off = j(bow);
      const mid = [(a[0] + b[0]) / 2 - (b[1] - a[1]) / l * off, (a[1] + b[1]) / 2 + (b[0] - a[0]) / l * off];
      brush([a, mid, b], { w, amp: 0, taper: 0, color });
    }
    const idx = dots === 'all' ? pts.map((_, i) => i)
      : dots === 'ends' ? [0, pts.length - 1]
      : dots === 'none' ? [] : dots;
    idx.forEach((i) => dot(pts[i][0], pts[i][1], r, { color }));
  }

  // 带开口箭头的线：终点画一个 < 形箭头（两笔，不填充）
  function arrow(pts, { w = 20, head = 46, color = INK } = {}) {
    brush(pts, { w, color, taper: 0.05 });
    const [x1, y1] = pts[pts.length - 2], [x2, y2] = pts[pts.length - 1];
    const a = Math.atan2(y2 - y1, x2 - x1);
    const h = head / scale();
    for (const s of [-1, 1]) {
      const b = a + Math.PI + s * 0.62;
      brush([[x2, y2], [x2 + Math.cos(b) * h, y2 + Math.sin(b) * h]], { w, amp: 0.5, taper: 0.1, color });
    }
  }

  // 虚线：一段段短毛笔线沿曲线排布
  function dashed(pts, { w = 20, dash = 56, gap = 40, color = INK } = {}) {
    const k = scale();
    const sm = resample(catmull(pts, 16), 2);
    let acc = 0, seg = [sm[0]], drawing = true;
    for (let i = 1; i < sm.length; i++) {
      acc += Math.hypot(sm[i][0] - sm[i - 1][0], sm[i][1] - sm[i - 1][1]) * k;
      if (drawing) seg.push(sm[i]);
      if (drawing && acc >= dash) {
        if (seg.length > 1) brush([seg[0], seg[Math.floor(seg.length / 2)], seg[seg.length - 1]], { w, amp: 0.5, taper: 0.2, color });
        seg = []; acc = 0; drawing = false;
      } else if (!drawing && acc >= gap) {
        acc = 0; drawing = true; seg = [sm[i]];
      }
    }
    // 末尾不足半段的碎尾巴不画，免得线头多出一颗孤立的小墨点
    if (drawing && seg.length > 1 && acc >= dash / 2) brush([seg[0], seg[seg.length - 1]], { w, amp: 0.5, taper: 0.2, color });
  }

  const raw = (str) => els.push(str);

  function svg({ bg = null, size = 1000 } = {}) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1000 1000">\n` +
      (bg ? `<rect width="1000" height="1000" fill="${bg}"/>\n` : '') +
      els.join('\n') + '\n</svg>\n';
  }

  return { bg, tint: shade(bg), toCanvas, brush, cut, disc, dot, ring, link, arrow, dashed, at, rect, circle, raw, svg, j, rnd, INK, PAPER };
}

// 底色调深一档：官方偶尔用“比底色深一点”的色块代替纸白（如摊开的书页）
function shade(hex, k = 0.9) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.round(v * k));
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
}

module.exports = { makeDraw, catmull, mulberry32, shade, SWATCHES, INK, PAPER };
