// 一只手捏着一张大银行卡递出去：自己拿卡去订阅
module.exports = {
  swatch: 'peach',
  seed: 7,
  draw(d, m) {
    // 主物件：银行卡剪影，墨线画磁条和芯片（压在纸片上）
    d.at({ x: 555, y: 420, s: 1.05, rot: -12 }, () => {
      d.cut(d.rect(-370, -230, 740, 460), { amp: 5 });
      d.brush([[-366, -110], [366, -110]], { w: 20, amp: 1.5 });
      d.brush(d.rect(-250, -75, 130, 100), { w: 20, amp: 1, closed: true, smooth: false });
    });
    // 手捏住卡的左下角，虎口对准卡角
    d.at({ x: 285, y: 700, s: 0.9, rot: 0 }, () => m.hand(d, { pose: 'grip' }));
  },
};
