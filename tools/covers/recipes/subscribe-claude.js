// 如何自己订阅 Claude：一只手举着一张银行卡（芯片 + 磁条）
module.exports = {
  swatch: 'peach',
  seed: 3,
  draw(d, m) {
    d.at({ x: 500, y: 400, s: 1.05, rot: -10 }, () => {
      d.paper(d.rect(-240, -150, 480, 300), { shift: [24, -20], w: 24, jag: 6 });
      d.paper(d.rect(-170, -70, 90, 70), { shift: [10, -8], w: 18, jag: 3, overshoot: 6 });
      d.brush([[-170, 70], [60, 70]], { w: 20, amp: 2 });
    });
    d.at({ x: 520, y: 640, s: 1.15 }, () => m.hand(d));
    d.sparkle(860, 170, 120, 22);
  },
};
