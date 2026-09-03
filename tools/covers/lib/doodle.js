'use strict';
// 手绘涂鸦库 v2：模仿 claude.com/blog 封面——变宽毛笔线、剪纸填充、纸片与墨线错位套印。
// 纯函数、无 DOM，输出 SVG 字符串。画布 1000×1000，背景透明，底色由页面 CSS 或预览脚本提供。

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

const r1 = (n) => Math.round(n * 10) / 10;

function makeDraw(seed = 1) {
  const rnd = mulberry32(seed);
  const j = (amp) => (rnd() * 2 - 1) * amp;
  const els = [];
  const stack = [];

  // 局部坐标 → 画布坐标；栈顶是最内层变换
  function T([x, y]) {
    let px = x, py = y;
    for (let i = stack.length - 1; i >= 0; i--) {
      const { x: tx, y: ty, s, cos, sin } = stack[i];
      const rx = px * cos - py * sin, ry = px * sin + py * cos;
      px = rx * s + tx; py = ry * s + ty;
    }
    return [px, py];
  }

  // 在变换下绘制：at({ x, y, s, rot }, () => ...)，rot 为角度，顺时针为正
  function at({ x = 0, y = 0, s = 1, rot = 0 } = {}, fn) {
    const a = (rot * Math.PI) / 180;
    stack.push({ x, y, s, cos: Math.cos(a), sin: Math.sin(a) });
    try { fn(); } finally { stack.pop(); }
  }

  const toPath = (pts) => 'M ' + pts.map((p) => { const [x, y] = T(p); return `${r1(x)} ${r1(y)}`; }).join(' L ') + ' Z';
  const fillPath = (pts, color) => els.push(`<path fill="${color}" d="${toPath(pts)}"/>`);
  const ink = (pts) => fillPath(pts, INK);
  const paperFill = (pts) => fillPath(pts, PAPER);

  const rect = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const circle = (cx, cy, r, n = 16) => Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });

  // 毛笔线：沿路径粗细起伏、两端略收；输出填充多边形（官方 SVG 同样是 fill path 而非 stroke）
  // 2 个点是直线，3 个以上经 Catmull-Rom 平滑成曲线；closed 时首尾相接成一圈
  function brush(pts, { w = 22, amp = 3, taper = 0.15, closed = false, segs = 10, offset = [0, 0] } = {}) {
    const jp = pts.map(([x, y]) => [x + j(amp) + offset[0], y + j(amp) + offset[1]]);
    let sm;
    if (closed) {
      const n = jp.length;
      sm = catmull([jp[n - 1], ...jp, jp[0], jp[1]], segs).slice(segs, segs * (n + 1));
    } else {
      sm = catmull(jp, segs);
    }
    const n = sm.length;
    const L = [], R = [];
    let noise = 0;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const end = closed || taper <= 0 ? 1 : Math.min(1, Math.min(t, 1 - t) / taper);
      noise = noise * 0.92 + j(0.1);
      const ww = w * (0.6 + 0.4 * Math.sqrt(end)) * (1 + noise);
      const a = sm[closed ? (i - 1 + n) % n : Math.max(i - 1, 0)];
      const b = sm[closed ? (i + 1) % n : Math.min(i + 1, n - 1)];
      let dx = b[0] - a[0], dy = b[1] - a[1];
      const l = Math.hypot(dx, dy) || 1; dx /= l; dy /= l;
      L.push([sm[i][0] - dy * ww / 2, sm[i][1] + dx * ww / 2]);
      R.push([sm[i][0] + dy * ww / 2, sm[i][1] - dx * ww / 2]);
    }
    if (closed) {
      els.push(`<path fill="${INK}" fill-rule="evenodd" d="${toPath(L)} ${toPath(R)}"/>`);
    } else {
      ink([...L, ...R.reverse()]);
      ink(circle(sm[0][0], sm[0][1], w * 0.3, 12));
      ink(circle(sm[n - 1][0], sm[n - 1][1], w * 0.3, 12));
    }
  }

  // 纸片：剪纸/撕纸边缘的填充，不描边
  function cutout(pts, { step = 36, amp = 6, offset = [0, 0] } = {}) {
    const out = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      const n = Math.max(2, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) / step));
      for (let s = 0; s < n; s++) {
        const t = s / n;
        out.push([a[0] + (b[0] - a[0]) * t + j(amp) + offset[0], a[1] + (b[1] - a[1]) * t + j(amp) + offset[1]]);
      }
    }
    paperFill(out);
  }

  // 多边形轮廓：每条边单独一笔、转角处略微出头，保留硬转角；skip 为省略的边序号
  function edges(pts, { w = 22, amp = 2.5, overshoot = 12, offset = [0, 0], skip = [] } = {}) {
    for (let i = 0; i < pts.length; i++) {
      if (skip.includes(i)) continue;
      const a = pts[i], b = pts[(i + 1) % pts.length];
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const l = Math.hypot(dx, dy) || 1;
      const ux = dx / l, uy = dy / l;
      const o1 = overshoot * (0.5 + rnd()), o2 = overshoot * (0.5 + rnd());
      brush([[a[0] - ux * o1, a[1] - uy * o1], [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], [b[0] + ux * o2, b[1] + uy * o2]],
        { w, amp, taper: 0.12, offset });
    }
  }

  // 直边纸片 + 错位墨线轮廓（shift 是墨线相对纸片的偏移，套印不准是官方插图的标志性手法）
  function paper(pts, { shift = [24, -20], w = 22, jag = 6, amp = 2.5, overshoot = 12, skip = [], outline = true } = {}) {
    cutout(pts, { amp: jag });
    if (outline) edges(pts, { w, amp, overshoot, offset: shift, skip });
  }

  // 圆润纸片 + 一圈连续墨线（气泡、节点、有机形状）
  function blob(pts, { shift = [24, -20], w = 22, jag = 6, amp = 3, outline = true } = {}) {
    cutout(pts, { amp: jag, step: 28 });
    if (outline) brush(pts, { w, amp, closed: true, offset: shift });
  }

  const ring = (cx, cy, r, { w = 22, n = 16, amp = 3 } = {}) => brush(circle(cx, cy, r, n), { w, closed: true, amp });
  const dot = (cx, cy, r) => ink(circle(cx, cy, r, 24));

  // 虚线：一段段短毛笔线沿曲线排布
  function dashed(pts, { w = 20, dash = 64, gap = 46, amp = 3 } = {}) {
    const sm = catmull(pts, 16);
    let acc = 0, seg = [sm[0]], drawing = true;
    for (let i = 1; i < sm.length; i++) {
      acc += Math.hypot(sm[i][0] - sm[i - 1][0], sm[i][1] - sm[i - 1][1]);
      if (drawing) seg.push(sm[i]);
      if (drawing && acc >= dash) {
        if (seg.length > 1) brush(seg, { w, amp, taper: 0.4, segs: 3 });
        seg = []; acc = 0; drawing = false;
      } else if (!drawing && acc >= gap) {
        acc = 0; drawing = true; seg = [sm[i]];
      }
    }
    if (drawing && seg.length > 1) brush(seg, { w, amp, taper: 0.4, segs: 3 });
  }

  // 六芒星芒（Claude 涂鸦标志），len 为整体直径
  function sparkle(cx, cy, len, w = 22) {
    for (let i = 0; i < 3; i++) {
      const a = Math.PI / 2 + (i * Math.PI) / 3 + j(0.08);
      const dx = Math.cos(a) * len / 2, dy = Math.sin(a) * len / 2;
      brush([[cx - dx, cy - dy], [cx, cy], [cx + dx, cy + dy]], { w, amp: 3, taper: 0.3 });
    }
  }

  const raw = (str) => els.push(str);

  function svg({ bg = null, size = 1000 } = {}) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1000 1000">\n` +
      (bg ? `<rect width="1000" height="1000" fill="${bg}"/>\n` : '') +
      els.join('\n') + '\n</svg>\n';
  }

  return { brush, cutout, edges, paper, blob, ring, dot, dashed, sparkle, at, rect, circle, ink, paperFill, raw, svg, j, rnd, INK, PAPER };
}

module.exports = { makeDraw, catmull, mulberry32, SWATCHES, INK, PAPER };
