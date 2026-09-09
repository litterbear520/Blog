// 善用工具弥补技术深度：一矮一高两块地基之间隔着深沟，一支箭从矮的这边跨过去
module.exports = {
  swatch: 'sky',
  seed: 9,
  draw(d, m) {
    d.paper(d.rect(110, 500, 270, 320), { shift: [24, -20], w: 24, jag: 6 });
    d.paper(d.rect(640, 300, 270, 520), { shift: [24, -20], w: 24, jag: 6 });
    d.at({ x: 470, y: 360, s: 0.75, rot: -30 }, () => m.arrow(d));
    d.sparkle(880, 160, 120, 22);
  },
};
