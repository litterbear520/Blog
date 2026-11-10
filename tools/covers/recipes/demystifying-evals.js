// 揭秘 AI Agent 评测：一张大纸白评分表，九格墨线对勾和叉，代表多个任务的多次试验；
// 背后错开一张 tint 卡片，表示下一轮评测
module.exports = {
  swatch: 'sky',
  seed: 7,
  draw(d, m) {
    // 纸片：背后的卡片 + 主评分表
    d.at({ x: 545, y: 470, rot: 7 }, () => d.cut(d.rect(-385, -400, 770, 800), { color: d.tint, amp: 5 }));
    d.at({ x: 465, y: 530, rot: -4 }, () => {
      d.cut(d.rect(-395, -395, 790, 790), { amp: 5 });
      const tick = (x, y) => d.brush([[x - 62, y + 2], [x - 18, y + 48], [x + 66, y - 52]], { smooth: false });
      const cross = (x, y) => {
        d.brush([[x - 52, y - 52], [x + 52, y + 52]]);
        d.brush([[x + 52, y - 52], [x - 52, y + 52]]);
      };
      const xs = [-245, 0, 245];
      const ys = [-245, 0, 245];
      const crosses = new Set(['2,0', '1,2']);
      ys.forEach((y, r) => xs.forEach((x, c) => (crosses.has(`${c},${r}`) ? cross(x, y) : tick(x, y))));
    });
  },
};
