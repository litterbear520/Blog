// 隐喻：一页 HTML 就是一块能画图、能点的画布——纸白窗口里有插图块和折线图，一个墨线光标点在折线的节点上
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
    // 光标只画墨线轮廓（压在纸白窗口上，纸白光标会和窗口糊成一块），尖端停在第三个节点右下方，留一个线宽的空
    const [nx, ny] = nodes[2];
    const tip = [W.x + nx * W.s + 40, W.y + ny * W.s + 44];
    d.at({ x: tip[0] + 90 * 0.8, y: tip[1] + 170 * 0.8, s: 0.8 }, () => {
      d.brush([[-90, -170], [-90, 150], [-12, 78], [42, 190], [100, 164], [46, 52], [150, 52]], { closed: true, smooth: false, amp: 1 });
    });
  },
};
