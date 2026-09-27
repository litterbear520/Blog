'use strict';
// 母题库：每个母题在局部坐标系里以 (0,0) 为中心绘制，标称尺寸约 600–750，
// 用 d.at({ x, y, s, rot }, () => m.xxx(d)) 摆到画布上。线宽按画布像素给，缩放不影响粗细。
// 画法约定见 tools/covers/README.md「风格约定」：纸片不描边，墨线画另一件东西叠在上面。

// ---- 手 ----
// 照参考站的手：手指是粗墨线弯成的 U、中间只留一道细缝，四指并拢、同向微弯，指缝是圆弧；
// 拇指单独一道大弧；手臂两条线微微收拢。整只手宽约 350，局部坐标以掌心附近为原点、手臂朝下（+y）。

// 一根手指：沿中轴（可弯）两侧各一条线，指尖半圆。a 指根朝向（0 朝上、正值向右），bend 指尖再弯的角度（正值向右勾）；
// fb 是指根宽度（默认同 fw），拇指用宽指根、往指尖收窄，才不像又一根手指
function finger(bx, by, a, len, fw = 40, bend = 0, fb = fw) {
  const rad = (g) => (g * Math.PI) / 180;
  const n = 5, spine = [[bx, by]];
  for (let k = 1; k <= n; k++) {
    const r = rad(a + bend * ((k - 0.5) / n));
    const [x, y] = spine[k - 1];
    spine.push([x + Math.sin(r) * len / n, y - Math.cos(r) * len / n]);
  }
  const side = (k, sg) => {
    const r = rad(a + bend * (k / n));
    const wk = fb + (fw - fb) * Math.min(1, k / (n - 1));
    return [spine[k][0] + sg * Math.cos(r) * wk / 2, spine[k][1] + sg * Math.sin(r) * wk / 2];
  };
  const left = spine.map((_, k) => side(k, -1)), right = spine.map((_, k) => side(k, 1)).reverse();
  const r = rad(a + bend), [cx, cy] = spine[n];
  const tip = [150, 115, 90, 65, 30].map((t) => {
    const th = rad(t);
    return [cx + Math.cos(r) * Math.cos(th) * fw / 2 + Math.sin(r) * Math.sin(th) * fw / 2,
      cy + Math.sin(r) * Math.cos(th) * fw / 2 - Math.cos(r) * Math.sin(th) * fw / 2];
  });
  return { pts: [...left, ...tip, ...right], a, tipAt: [cx + Math.sin(r) * fw / 2, cy - Math.cos(r) * fw / 2] };
}

// 一排并拢的手指：相邻两指之间补一个圆弧指缝（不补的话 Catmull-Rom 会连成尖锐的 V）
function fingerRow(fs) {
  const out = [];
  fs.forEach((f, i) => {
    if (i > 0) {
      const p = out[out.length - 1], q = f.pts[0];
      const a = ((fs[i - 1].a + f.a) / 2) * Math.PI / 180;
      const depth = Math.hypot(q[0] - p[0], q[1] - p[1]) * 0.45;
      out.push([(p[0] + q[0]) / 2 - Math.sin(a) * depth, (p[1] + q[1]) / 2 + Math.cos(a) * depth]);
    }
    out.push(...f.pts);
  });
  return out;
}

// 手的轮廓（一笔）和关键点：tip 指尖、thumb 拇指尖、gap 虎口 / 夹口
// pose：open 四指并拢朝右上勾、拇指张开（托、够、展示）/ point 食指指着、三指蜷起 / grip 四指朝上、拇指弯成钩合成夹口（捏、握）
function handShape(pose = 'open') {
  if (pose === 'point') {
    const idx = finger(60, -40, 2, 260, 36, 0);
    const curl = [0, 1, 2].map((i) => finger(-150 + i * 64, 40 - i * 18, -6, [60, 72, 82][i], 36, 0));
    return {
      body: [[-150, 1600], [-150, 700], [-156, 420], [-166, 200], [-168, 110], ...fingerRow([...curl, idx]),
        [120, 10], [185, 0], [238, 20], [255, 60], [230, 110], [170, 170], [140, 260], [128, 420], [126, 700], [126, 1600]],
      keys: { tip: idx.tipAt, thumb: [255, 60], gap: [110, 60] },
    };
  }
  if (pose === 'grip') {
    // 四指朝上、指尖略向右勾；拇指和参考站一样只是手掌外轮廓上鼓出的一道弧（不画成闭合的环），
    // 圆头朝左上指向小指尖，两者之间就是夹口
    const fs = [
      finger(-140, 40, 6, 190, 40, 30),
      finger(-62, 12, 12, 210, 40, 30),
      finger(12, 30, 18, 190, 40, 28),
      finger(82, 70, 26, 150, 38, 26),
    ];
    return {
      body: [[-178, 1600], [-180, 700], [-186, 420], [-172, 200], [-162, 90], ...fingerRow(fs),
        [116, 128], [146, 100], [164, 52], [182, 26], [208, 26], [228, 50], [244, 104], [254, 176], [248, 256],
        [232, 344], [218, 470], [210, 700], [208, 1600]],
      keys: { tip: fs[1].tipAt, thumb: [190, 24], gap: [196, -18] },
    };
  }
  const fs = [0, 1, 2, 3].map((i) => finger([-44, 34, 104, 172][i], -10 + [0, -16, -8, 20][i], 4 + i * 4, [150, 172, 162, 128][i], 36, 26));
  const th = finger(-104, 96, -50, 112, 46, 30);
  return {
    body: [[-66, 1600], [-70, 700], [-80, 420], [-100, 250], [-116, 170], ...th.pts, [-70, 44], ...fingerRow(fs),
      [262, 110], [220, 240], [170, 420], [150, 700], [146, 1600]],
    keys: { tip: fs[1].tipAt, thumb: th.tipAt, gap: [-80, -20] },
  };
}

// 手：一笔连到底，手不填纸白（底下的纸片和底色都透出来）。手臂画得很长，由 brush 的 trim 自动裁到
// 离画布边 36 处收尾，所以旋转、缩放、镜像（d.at 的 flip）之后都不用管手臂。返回关键点（局部坐标）。
function hand(d, { pose = 'open', w = 20, trim = 36 } = {}) {
  const { body, keys } = handShape(pose);
  d.brush(body, { w, amp: 1.2, taper: 0.03, trim });
  return keys;
}

// 按关键点摆手：让手的 key（tip / thumb / gap）正好落在画布点 to 上，省得自己反推旋转后的原点。
// 用法 m.handAt(d, { to: [620, 480], pose: 'point', s: 0.9, rot: -20 })，其余参数同 d.at 和 m.hand
function handAt(d, { to, key = 'tip', s = 1, rot = 0, flip = false, ...opts } = {}) {
  const [kx, ky] = handShape(opts.pose).keys[key];
  const a = (rot * Math.PI) / 180, fx = flip ? -kx : kx;
  const ox = to[0] - (fx * Math.cos(a) - ky * Math.sin(a)) * s;
  const oy = to[1] - (fx * Math.sin(a) + ky * Math.cos(a)) * s;
  let keys;
  d.at({ x: ox, y: oy, s, rot, flip }, () => { keys = hand(d, opts); });
  return keys;
}

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

hand.finger = finger; // 食谱要画特殊手势时可以直接拼手指、用 hand.row 连成一排
hand.row = fingerRow;
hand.row = fingerRow;

module.exports = { hand, handAt, screen, easel, window, terminal, chart, network, shape, bubble, stairs, book, magnifier, lock, doc, cursor, bigArrow, scribble };
