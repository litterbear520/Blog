// Agent 记忆的组成部分：Agent 在会话之外“做梦”，把零散的记忆连成一张网。
// 一弯纸白剪纸月牙（做梦）顶住画面，墨线节点网络压在月牙上并伸进月牙的凹口（整理出的 wiki）
module.exports = {
  swatch: 'mineral',
  seed: 7,
  draw(d) {
    // 纸片：月牙 = 大圆减去右上偏移的小圆，外弧 11 段、内弧 9 段，看得出剪刀的棱
    const O = [500, 505], R = 445, I = [705, 395], r = 365;
    const inside = (p, c, rr) => Math.hypot(p[0] - c[0], p[1] - c[1]) < rr;
    const outer = [];
    for (let k = 0; k <= 360; k += 2) {
      const a = (k * Math.PI) / 180, p = [O[0] + R * Math.cos(a), O[1] + R * Math.sin(a)];
      if (!inside(p, I, r)) outer.push(p);
    }
    // 外弧从一个尖到另一个尖：找到断开处重新排序
    let cut = 0;
    for (let i = 1; i < outer.length; i++) if (Math.hypot(outer[i][0] - outer[i - 1][0], outer[i][1] - outer[i - 1][1]) > 40) cut = i;
    const arc = outer.slice(cut).concat(outer.slice(0, cut));
    const a0 = arc[0], a1 = arc[arc.length - 1];
    const ang = p => Math.atan2(p[1] - I[1], p[0] - I[0]);
    let t0 = ang(a1), t1 = ang(a0);
    if (t1 < t0) t1 += 2 * Math.PI;
    // 内弧沿小圆从 a1 回到 a0，取落在大圆内的那一段
    let inner = [];
    for (let i = 1; i < 9; i++) inner.push([I[0] + r * Math.cos(t0 + ((t1 - t0) * i) / 9), I[1] + r * Math.sin(t0 + ((t1 - t0) * i) / 9)]);
    if (!inside(inner[4], O, R)) {
      t1 -= 2 * Math.PI; inner = [];
      for (let i = 1; i < 9; i++) inner.push([I[0] + r * Math.cos(t0 + ((t1 - t0) * i) / 9), I[1] + r * Math.sin(t0 + ((t1 - t0) * i) / 9)]);
    }
    const step = Math.max(1, Math.floor(arc.length / 11));
    const outerPts = arc.filter((_, i) => i % step === 0 || i === arc.length - 1);
    d.cut(outerPts.concat(inner), { amp: 5 });
    // 墨线：记忆网络，节点落在月牙厚处，两条连线伸进凹口
    const N = [[205, 425], [300, 670], [480, 820], [395, 505], [640, 715], [815, 805]];
    d.link([N[0], N[3], N[1], N[0]], { r: 26, dots: 'all', smooth: false });
    d.link([N[1], N[2], N[4], N[3]], { r: 26, dots: 'all', smooth: false });
    d.link([N[4], N[5]], { r: 26, dots: 'all' });
  },
};
