// 语音代理中的记忆问题比你想的更难：对话气泡里一段声波，旁边一叠记忆卡片，两者之间只有一条虚线相连
module.exports = {
  swatch: 'plum',
  seed: 23,
  draw(d, m) {
    // 主体：对话气泡 + 气泡里的声波（几根高低不一的竖条）
    d.at({ x: 370, y: 430, s: 1.25, rot: -4 }, () => {
      m.bubble(d);
      const bars = [70, 150, 240, 120, 200, 90, 160];
      bars.forEach((h, i) => {
        const x = -150 + i * 50;
        d.brush([[x, -30 - h / 2], [x, -30 + h / 2]], { w: 22, amp: 2, taper: 0.1 });
      });
    });

    // 配角：一叠记忆卡片（三张纸片错位堆叠，最前面一张有几行"字"）
    d.at({ x: 790, y: 760, s: 1.1, rot: 6 }, () => {
      const card = d.rect(-130, -90, 260, 180);
      d.at({ x: -44, y: 44 }, () => d.paper(card, { shift: [14, -12], w: 20, jag: 5, overshoot: 8 }));
      d.at({ x: -22, y: 22 }, () => d.paper(card, { shift: [14, -12], w: 20, jag: 5, overshoot: 8 }));
      d.paper(card, { shift: [14, -12], w: 20, jag: 5, overshoot: 8 });
      d.brush([[-80, -30], [90, -30]], { w: 16, amp: 2 });
      d.brush([[-80, 20], [30, 20]], { w: 16, amp: 2 });
    });

    // 气泡到卡片之间的虚线：记忆要绕一圈才拿得到
    d.dashed([[650, 470], [760, 400], [880, 460], [880, 570], [800, 640]], { w: 18, dash: 44, gap: 34 });

    d.sparkle(890, 170, 120, 22);
  },
};
