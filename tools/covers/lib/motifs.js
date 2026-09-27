'use strict';
// 母题库：每个母题在局部坐标系里以 (0,0) 为中心绘制，标称尺寸约 600–750，
// 用 d.at({ x, y, s, rot }, () => m.xxx(d)) 摆到画布上。线宽按画布像素给，缩放不影响粗细。
// 画法约定见 tools/covers/README.md「风格约定」：纸片不描边，墨线画另一件东西叠在上面。

// ---- 板面类：投影幕 / 画架 / 窗口，纸片是“内容区”，食谱在上面叠折线、涂鸦 ----

// 投影幕：墨线横杆 + 纸白幕布 + 底边墨线 + 立杆；幕布内容区约 x -320…320, y -210…160
function screen(d, { stand = true, w = 20 } = {}) {
  d.cut([[-340, -230], [340, -230], [336, 180], [-336, 184]], { amp: 5 });
  d.brush(d.rect(-370, -290, 740, 44), { w, amp: 1.5, closed: true, smooth: false });
  d.brush([[-14, -290], [-14, -320], [14, -320], [14, -290]], { w, amp: 1 });
  d.brush([[-370, 196], [370, 194]], { w, amp: 1.5 });
  if (stand) d.brush([[0, 196], [0, 290]], { w, amp: 1 });
}

// 画架：纸白画布 + 顶部横夹 + 底托 + 三条腿；画布内容区约 x -250…250, y -220…170
function easel(d, { w = 20 } = {}) {
  d.brush([[0, -330], [0, -250]], { w, amp: 1 });
  d.brush([[-70, -260], [70, -260]], { w, amp: 1 });
  d.cut([[-270, -240], [270, -250], [262, 190], [-264, 194]], { amp: 6 });
  d.brush([[-150, 230], [150, 230]], { w, amp: 1 });
  d.brush([[-60, 234], [-150, 380]], { w, amp: 1.5 });
  d.brush([[60, 234], [150, 380]], { w, amp: 1.5 });
}

// 应用窗口：纸片 + 标题栏下一条墨线（没有圆点、没有字）；内容区约 x -320…320, y -150…230
function window(d, { w = 20 } = {}) {
  d.cut(d.rect(-340, -250, 680, 500), { amp: 6 });
  d.brush([[-360, -170], [360, -170]], { w, amp: 1.5 });
}

// 终端：窗口 + 提示符 >_
function terminal(d, { w = 20 } = {}) {
  window(d, { w });
  d.brush([[-240, -60], [-160, 10], [-240, 80]], { w: w * 1.3, amp: 1, taper: 0.05 });
  d.brush([[-110, 80], [-10, 80]], { w: w * 1.3, amp: 1 });
}

// ---- 图表与连接 ----

// 坐标轴折线图：墨线 L 形坐标轴 + 折线与节点；color 为折线颜色（纸白或墨黑）
function chart(d, { points = [[-240, 140], [-110, -40], [20, 20], [150, -140], [260, -230]], color, w = 20 } = {}) {
  d.brush([[-330, -330], [-332, 250], [330, 248]], { w, amp: 1.5, taper: 0.05, smooth: false });
  d.link(points, { w: w * 1.2, r: 44, dots: points.map((_, i) => i).slice(1), color: color || d.PAPER });
}

// 网络：节点是剪纸圆，连线同色；color 默认纸白（官方两种都有）
function network(d, { points, links, r = 52, color, w = 22 } = {}) {
  const P = points || [[-230, -60], [-90, -240], [110, -240], [0, -40], [230, -40], [120, 170]];
  const E = links || [[0, 1], [1, 2], [1, 3], [2, 3], [2, 4], [3, 4], [0, 3], [4, 5], [3, 5]];
  const c = color || d.PAPER;
  E.forEach(([a, b]) => d.brush([P[a], P[b]], { w, amp: 1, taper: 0, color: c }));
  P.forEach(([x, y]) => d.disc(x, y, r, { sides: 11, color: c }));
}

// 几何块：tri / square / disc / diamond / hourglass，官方常拿它们当“数据 / 模块”
function shape(d, { kind = 'square', size = 220, color } = {}) {
  const h = size / 2;
  const c = color || d.PAPER;
  if (kind === 'disc') return d.disc(0, 0, h, { sides: 9, color: c });
  const polys = {
    square: [[-h, -h], [h, -h], [h, h], [-h, h]],
    tri: [[0, -h * 1.1], [h * 1.05, h * 0.8], [-h * 1.05, h * 0.8]],
    diamond: [[0, -h * 1.15], [h * 1.15, 0], [0, h * 1.15], [-h * 1.15, 0]],
    hourglass: [[-h * 0.85, -h * 1.2], [h * 0.85, -h * 1.2], [h * 0.12, 0], [h * 0.85, h * 1.2], [-h * 0.85, h * 1.2], [-h * 0.12, 0]],
  };
  d.cut(polys[kind], { amp: 5, color: c });
}

// ---- 物件 ----

// 两个对话气泡：前面一个只有墨线轮廓，后面一个纸白剪影，错开叠放
function bubble(d, { w = 20 } = {}) {
  d.cut([[-120, 20], [110, -80], [220, -60], [280, 40], [300, 180], [292, 240], [340, 300], [80, 300], [-40, 260], [-140, 190], [-160, 120]], { amp: 5 });
  d.brush([
    [-310, 70], [-240, 10], [-230, -60], [-220, -170], [-150, -250], [-10, -290], [140, -270],
    [250, -200], [290, -80], [260, 20], [180, 70], [0, 80], [-180, 80], [-310, 70],
  ], { w, amp: 2, taper: 0.02 });
}

// 台阶：纸白阶梯剪影 + 墨线从左边地面起跳、一跳一个台阶；每一跳单独一笔，落点是尖角
function stairs(d, { steps = 3, w = 20 } = {}) {
  const sw = 600 / steps, sh = 420 / steps;
  const poly = [[-300, 340]];
  const lands = [[-440, 340]];
  for (let i = 0; i < steps; i++) {
    const x = -300 + sw * i, y = 340 - sh * (i + 1);
    poly.push([x, y], [x + sw, y]);
    lands.push([x + 24, y]);
  }
  poly.push([300, 340]);
  d.cut(poly, { amp: 5 });
  d.brush([[-450, 360], [-452, 200], [-440, 120]], { w, amp: 1.5 });
  lands.forEach(([x0, y0], i) => {
    if (i === lands.length - 1) return;
    const [x1, y1] = lands[i + 1];
    const top = Math.min(y0, y1) - 150;
    const from = i === 0 ? [-440, 120] : [x0, y0];
    d.brush([from, [from[0] + 20, top + 30], [(from[0] + x1) / 2 + 30, top], [x1 - 10, top + 50], [x1, y1]], { w, amp: 1.5, taper: 0.05 });
  });
}

// 摊开的书：墨线画框和书脊；pages 为书页颜色（默认比底色深一档的色块，官方如此）
function book(d, { pages, w = 20 } = {}) {
  const c = pages || d.tint;
  d.cut([[-330, -300], [-20, -300], [-20, 240], [-330, 250]], { amp: 4, color: c });
  d.cut([[20, -300], [330, -300], [330, 250], [20, 240]], { amp: 4, color: c });
  d.brush([[-380, -310], [-360, -310], [-362, 290], [362, 290], [362, -310], [380, -310]], { w, amp: 1.5, taper: 0.03, smooth: false });
  d.brush([[0, -320], [0, 280]], { w, amp: 1.5 });
}

// 放大镜：纸白圆片 + 错开一点的墨线镜框 + 粗手柄；lens: false 时镜片透明（压在纸片上用，免得两块纸白糊在一起）
function magnifier(d, { w = 20, lens = true } = {}) {
  if (lens) d.disc(-40, -40, 200, { sides: 10 });
  d.ring(-70, -70, 210, { w, n: 16 });
  d.brush([[80, 80], [280, 280]], { w: w * 2.6, amp: 1, taper: 0 });
}

// 挂锁：纸白锁体 + 墨线锁梁 + 墨点钥匙孔
function lock(d, { w = 20 } = {}) {
  d.brush([[-140, 0], [-140, -170], [-90, -260], [0, -285], [90, -260], [140, -170], [140, 0]], { w: w * 1.3, amp: 1.5 });
  d.cut(d.rect(-230, -40, 460, 340), { amp: 6 });
  d.dot(0, 90, 34);
  d.brush([[0, 100], [0, 190]], { w: w * 1.4, amp: 0.5, taper: 0 });
}

// 文档：折角纸片；lines 为墨线“字行”数，默认 0（官方基本不画字）
function doc(d, { lines = 0, w = 20 } = {}) {
  d.cut([[-220, -300], [110, -300], [220, -190], [220, 300], [-220, 300]], { amp: 5 });
  d.cut([[110, -300], [110, -190], [220, -190]], { amp: 2, color: d.tint });
  for (let i = 0; i < lines; i++) {
    const len = 300 - (i % 2) * 110;
    d.brush([[-150, -120 + i * 90], [-150 + len, -120 + i * 90]], { w, amp: 1.5 });
  }
}

// 鼠标箭头：纯纸白剪影
function cursor(d) {
  d.cut([[-90, -170], [-90, 150], [-12, 78], [42, 190], [100, 164], [46, 52], [150, 52]], { amp: 4, kink: 0 });
}

// 大箭头剪影（默认朝右，用 rot 转向）
function bigArrow(d) {
  d.cut([[-330, -80], [60, -80], [60, -210], [340, 0], [60, 210], [60, 80], [-330, 80]], { amp: 6 });
}

// 乱线团：一笔绕几圈（官方拿它表示“想法 / 杂乱”）
function scribble(d, { w = 20 } = {}) {
  const pts = [[-260, -40], [-160, 30], [-30, 60], [60, -10], [30, -110], [-60, -90], [-80, 10], [0, 110], [130, 90], [190, -40], [140, -170], [30, -190], [-50, -120]];
  d.brush([...pts, [80, 60], [200, 160]], { w, amp: 2, taper: 0.05 });
}

module.exports = { screen, easel, window, terminal, chart, network, shape, bubble, stairs, book, magnifier, lock, doc, cursor, bigArrow, scribble };
