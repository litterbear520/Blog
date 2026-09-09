// 阿里天池二手车价格预测 Top2：领奖台，第二级台阶上方闪着一颗大星芒
module.exports = {
  swatch: 'cactus',
  seed: 12,
  draw(d, m) {
    d.paper(d.rect(120, 470, 260, 330), { shift: [24, -20], w: 24, jag: 6 });
    d.paper(d.rect(380, 360, 260, 440), { shift: [24, -20], w: 24, jag: 6 });
    d.paper(d.rect(640, 570, 260, 230), { shift: [24, -20], w: 24, jag: 6 });
    d.sparkle(250, 330, 200, 26);
    d.sparkle(860, 200, 100, 20);
  },
};
