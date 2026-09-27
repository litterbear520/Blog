// 一只手捏着一张大银行卡递出去：自己拿卡去订阅
module.exports = {
  swatch: 'peach',
  seed: 7,
  draw(d, m) {
    // 主物件：银行卡剪影，墨线画磁条和芯片（压在纸片上）
    let edge;
    d.at({ x: 555, y: 420, s: 1.05, rot: -12 }, () => {
      edge = d.toCanvas([-250, 230]); // 卡片下边靠左的一点：手从这里捏住
      d.cut(d.rect(-370, -230, 740, 460), { amp: 5 });
      d.brush([[-366, -110], [366, -110]], { w: 20, amp: 1.5 });
      d.brush(d.rect(-250, -75, 130, 100), { w: 20, amp: 1, closed: true, smooth: false });
    });
    // 手捏住卡的下边：四指压在卡面上，拇指从卡下方勾上来，夹口正好卡在下边
    m.handAt(d, { to: edge, key: 'gap', pose: 'grip', s: 0.95, rot: -12 });
  },
};
