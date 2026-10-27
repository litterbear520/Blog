// 把子代理并入主 Agent 循环：一块大纸白剪纸圆是主 Agent，上面一圈墨线箭头是它的循环；
// 右侧三块小纸白方块是散在外面的子代理，各伸出一支箭头折进圆里
module.exports = {
  swatch: 'fig',
  seed: 7,
  draw(d, m) {
    // 纸片：主 Agent
    d.disc(395, 520, 345, { sides: 11 });
    // 纸片：三个子代理，和圆隔开底色
    [[190, -6], [465, 4], [740, -3]].forEach(([y, rot]) => {
      d.at({ x: 870, y, rot }, () => d.cut(d.rect(-75, -75, 150, 150), { amp: 4 }));
    });
    // 墨线：主循环，约 300 度的圆弧，末端带箭头
    const arc = [];
    for (let a = -60; a <= 235; a += 15) {
      const t = (a * Math.PI) / 180;
      arc.push([395 + 185 * Math.cos(t), 520 + 185 * Math.sin(t)]);
    }
    d.arrow(arc, { head: 40 });
    // 墨线：子代理并进来，三支箭头从方块指向圆内
    d.arrow([[875, 195], [630, 320]], { head: 34 });
    d.arrow([[870, 465], [635, 490]], { head: 34 });
    d.arrow([[875, 735], [635, 660]], { head: 34 });
  },
};
