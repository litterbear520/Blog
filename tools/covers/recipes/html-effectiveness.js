// 隐喻：一页 HTML 就是一块能画图、能点的画布——纸白窗口里有插图块和折线图，一根食指点在折线的节点上
module.exports = {
  swatch: 'oat',
  seed: 7,
  draw(d, m) {
    const W = { x: 480, y: 395, s: 1.2 };
    // 窗口局部坐标里的目标节点
    const nodes = [[-60, 190], [40, 40], [150, 110], [260, -70]];
    d.at(W, () => {
      m.window(d);
      d.cut(d.rect(-290, -110, 190, 150), { color: d.tint, amp: 4 });
      d.disc(-195, 150, 70, { color: d.tint, sides: 10 });
      d.link(nodes, { r: 26 });
    });
    // 食指指尖停在第三个节点正下方，留一个线宽的空
    const [nx, ny] = nodes[2];
    const target = [W.x + nx * W.s, W.y + ny * W.s + 26 + 34];
    const s = 0.72, rot = -18, t = (rot * Math.PI) / 180;
    const [tx, ty] = [-70 * s, -395 * s];
    const ox = target[0] - (tx * Math.cos(t) - ty * Math.sin(t));
    const oy = target[1] - (tx * Math.sin(t) + ty * Math.cos(t));
    d.at({ x: ox, y: oy, s, rot }, () => m.hand(d, { pose: 'point' }));
  },
};
