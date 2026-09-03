'use strict';
// 母题库：每个母题在局部坐标系里以 (0,0) 为中心绘制，标称尺寸约 600–750，
// 用 d.at({ x, y, s, rot }, () => m.xxx(d)) 摆到画布上。线宽统一 18–26。

// 浏览器 / 应用窗口：纸片 + 错位轮廓 + 标题栏分隔线
function window(d, { dots = false } = {}) {
  d.paper(d.rect(-360, -280, 720, 560), { shift: [30, -24], w: 24, jag: 6 });
  d.brush([[-330, -190], [370, -190]], { w: 18, amp: 2 });
  if (dots) {
    d.dot(-290, -235, 16);
    d.ring(-238, -235, 14, { w: 10, n: 10 });
    d.ring(-186, -235, 14, { w: 10, n: 10 });
  }
}

// 终端窗口：窗口 + 提示符 >_
function terminal(d) {
  window(d);
  d.brush([[-270, -90], [-190, -10]], { w: 24, amp: 2 });
  d.brush([[-190, -10], [-270, 70]], { w: 24, amp: 2 });
  d.brush([[-140, 70], [-40, 70]], { w: 24, amp: 2 });
}

// 鼠标箭头
function cursor(d) {
  const pts = [[-80, -140], [-80, 140], [-8, 72], [38, 172], [82, 152], [36, 52], [126, 52]];
  d.paper(pts, { shift: [10, -8], w: 22, jag: 3, overshoot: 8 });
}

// 从下方伸出的手：四根手指 + 拇指 + 手腕（配角，常放在主体下面托着）
function hand(d) {
  d.brush([[-140, 220], [-150, 80], [-120, 50]], { w: 22, amp: 3 });
  d.brush([[140, 220], [150, 80], [130, 50]], { w: 22, amp: 3 });
  const tops = [-60, -110, -100, -50]; // 中指最高
  for (let i = 0; i < 4; i++) {
    const x = -110 + i * 62;
    const top = tops[i];
    d.brush([[x, 60], [x - 4, top + 40], [x + 22, top], [x + 48, top + 40], [x + 52, 60]], { w: 20, amp: 3, taper: 0.05 });
  }
  d.brush([[-120, 50], [-210, -20], [-190, -90], [-140, -60]], { w: 20, amp: 3, segs: 8 });
}

// 一对花括号 { }，中间留给别的母题
function braces(d, { gap = 680, h = 600 } = {}) {
  const half = h / 2;
  const L = [[40, -half], [-10, -half + 20], [-22, -half + 90], [-22, -60], [-70, 0], [-22, 60], [-22, half - 90], [-10, half - 20], [40, half]];
  d.at({ x: -gap / 2 }, () => d.brush(L, { w: 24, amp: 2, segs: 8 }));
  d.at({ x: gap / 2, rot: 180 }, () => d.brush(L, { w: 24, amp: 2, segs: 8 }));
}

// 对话气泡：圆纸片 + 左下尾巴；outline=false 时只有纸片（官方常用）
function bubble(d, { outline = true } = {}) {
  const body = d.circle(0, -30, 230, 18);
  d.blob(body, { shift: [26, -22], w: 22, jag: 9, outline });
  const tail = [[-150, 150], [-230, 290], [-40, 190]];
  d.cutout(tail, { amp: 4, step: 30 });
  if (outline) d.edges(tail, { w: 22, offset: [26, -22], skip: [2] });
}

// 节点网络：纸片圆点 + 墨线连线
function nodes(d, { points, links } = {}) {
  const P = points || [[-200, -160], [120, -220], [0, 20], [-180, 180], [200, 140]];
  const E = links || [[0, 2], [1, 2], [2, 3], [2, 4], [0, 1]];
  E.forEach(([a, b]) => d.brush([P[a], P[b]], { w: 20, amp: 2 }));
  P.forEach(([x, y]) => d.blob(d.circle(x, y, 52, 14), { shift: [10, -8], w: 16, jag: 4 }));
}

// 放大镜：墨线圆环 + 纸片手柄
function magnifier(d) {
  d.ring(-60, -60, 190, { w: 26, n: 20, amp: 3 });
  d.at({ x: 150, y: 150, rot: -45 }, () => d.paper(d.rect(-44, -110, 88, 240), { shift: [14, -10], w: 22, jag: 4, overshoot: 10 }));
}

// 挂锁：纸片锁体 + 墨线锁梁 + 钥匙孔
function lock(d) {
  d.paper(d.rect(-220, -40, 440, 340), { shift: [22, -18], w: 24, jag: 6 });
  d.brush([[-130, -40], [-135, -170], [-90, -250], [0, -275], [90, -250], [135, -170], [130, -40]], { w: 26, amp: 3, segs: 8 });
  d.ring(0, 90, 40, { w: 18, n: 12 });
  d.brush([[-14, 120], [-22, 210]], { w: 20 });
  d.brush([[14, 120], [22, 210]], { w: 20 });
  d.brush([[-22, 210], [22, 210]], { w: 20 });
}

// 摊开的书：两页纸片 + 书脊
function book(d) {
  const left = [[-360, -200], [-10, -180], [-10, 220], [-360, 240]];
  const right = [[10, -180], [360, -200], [360, 240], [10, 220]];
  d.paper(left, { shift: [22, -18], w: 22, jag: 6, overshoot: 14 });
  d.paper(right, { shift: [22, -18], w: 22, jag: 6, overshoot: 14 });
  d.brush([[0, -190], [0, 230]], { w: 22, amp: 2 });
}

// 文档：折角纸片 + 几行"文字"线
function doc(d, { lines = 3 } = {}) {
  d.paper([[-220, -300], [120, -300], [220, -200], [220, 300], [-220, 300]], { shift: [24, -20], w: 22, jag: 6 });
  d.brush([[120, -300], [120, -200]], { w: 20, amp: 2 });
  d.brush([[120, -200], [220, -200]], { w: 20, amp: 2 });
  for (let i = 0; i < lines; i++) {
    const len = 280 - (i % 2) * 90;
    d.brush([[-150, -120 + i * 90], [-150 + len, -120 + i * 90]], { w: 18, amp: 2 });
  }
}

// 大箭头（默认朝右，用 rot 转向）
function arrow(d) {
  d.paper([[-320, -70], [60, -70], [60, -190], [340, 0], [60, 190], [60, 70], [-320, 70]], { shift: [22, -18], w: 24, jag: 6 });
}

// 代码符号 </>
function code(d) {
  d.brush([[-200, -110], [-300, 0]], { w: 26 });
  d.brush([[-300, 0], [-200, 110]], { w: 26 });
  d.brush([[60, -150], [-60, 150]], { w: 26 });
  d.brush([[200, -110], [300, 0]], { w: 26 });
  d.brush([[300, 0], [200, 110]], { w: 26 });
}

// 弯弯曲曲的线缆 / 路径
function squiggle(d, { from = [-400, 0], to = [400, 0], waves = 3, amp = 90 } = {}) {
  const pts = [];
  const n = waves * 4;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    pts.push([from[0] + (to[0] - from[0]) * t, from[1] + (to[1] - from[1]) * t + Math.sin(t * Math.PI * 2 * waves) * amp]);
  }
  d.brush(pts, { w: 22, amp: 6, segs: 8 });
}

// 星芒（同 d.sparkle，这里作为母题方便摆放）
function sparkle(d, { len = 260, w = 26 } = {}) {
  d.sparkle(0, 0, len, w);
}

module.exports = { window, terminal, cursor, hand, braces, bubble, nodes, magnifier, lock, book, doc, arrow, code, squiggle, sparkle };
