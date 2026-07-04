// 手绘风 SVG 涂鸦库：固定种子的伪随机抖动，模仿 claude.com/blog 封面涂鸦
const INK = '#1A1A18';
const PAPER = '#FAF9F2';

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeDraw(svg, seed) {
  const rnd = mulberry32(seed);
  const j = (amp) => (rnd() * 2 - 1) * amp;
  const NS = 'http://www.w3.org/2000/svg';

  function el(name, attrs) {
    const e = document.createElementNS(NS, name);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    svg.appendChild(e);
    return e;
  }

  const stroke = (w) => ({
    fill: 'none', stroke: INK, 'stroke-width': w,
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  });

  // 闭合多边形，角点和边中点都加抖动
  function wobblyPoly(pts, amp, attrs) {
    const p = pts.map(([x, y]) => [x + j(amp), y + j(amp)]);
    let d = `M ${p[0][0]} ${p[0][1]}`;
    for (let i = 0; i < p.length; i++) {
      const a = p[i], b = p[(i + 1) % p.length];
      const mx = (a[0] + b[0]) / 2 + j(amp * 1.6);
      const my = (a[1] + b[1]) / 2 + j(amp * 1.6);
      d += ` Q ${mx} ${my} ${b[0]} ${b[1]}`;
    }
    return el('path', Object.assign({ d: d + ' Z' }, attrs));
  }

  function wobblyRect(x, y, w, h, amp, attrs) {
    return wobblyPoly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], amp, attrs);
  }

  // 开放折线（平滑），点间加抖动
  function wobblyLine(pts, amp, attrs) {
    const p = pts.map(([x, y]) => [x + j(amp), y + j(amp)]);
    let d = `M ${p[0][0]} ${p[0][1]}`;
    for (let i = 0; i < p.length - 1; i++) {
      const a = p[i], b = p[i + 1];
      const mx = (a[0] + b[0]) / 2 + j(amp * 1.8);
      const my = (a[1] + b[1]) / 2 + j(amp * 1.8);
      d += ` Q ${mx} ${my} ${b[0]} ${b[1]}`;
    }
    return el('path', Object.assign({ d }, attrs));
  }

  // 有机纸片 blob：圆周取点加抖动，Catmull-Rom 平滑闭合
  function blob(cx, cy, r, n, amp, attrs) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2;
      const rr = r + j(amp);
      pts.push([cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr]);
    }
    let d = '';
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i];
      const p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      if (i === 0) d += `M ${p1[0]} ${p1[1]}`;
      d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`;
    }
    return el('path', Object.assign({ d: d + ' Z' }, attrs));
  }

  // 六芒星芒（Claude 星形涂鸦）
  function sparkle(cx, cy, len, w) {
    for (let i = 0; i < 3; i++) {
      const ang = Math.PI / 2 + (i * Math.PI) / 3 + j(0.06);
      const dx = Math.cos(ang) * len / 2, dy = Math.sin(ang) * len / 2;
      wobblyLine([[cx - dx, cy - dy], [cx + dx, cy + dy]], 4, stroke(w));
    }
  }

  return { el, stroke, wobblyPoly, wobblyRect, wobblyLine, blob, sparkle, j, rnd };
}
