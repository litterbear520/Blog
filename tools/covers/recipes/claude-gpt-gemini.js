// Claude、GPT 和 Gemini 协同：左边一块大纸白方块是站在中间调度的 Claude，
// 右上一块 tint 三角、右下一块纸白剪纸圆是另外两家；墨线从方块里的墨点出发，
// 两支弯箭头分别伸到三角和圆上，是站在中间的这个人把活派出去
module.exports = {
  swatch: 'olive',
  seed: 7,
  draw(d, m) {
    // 纸片：居中调度的大方块
    d.at({ x: 370, y: 520, rot: -2 }, () => m.shape(d, { kind: 'square', size: 630 }));
    // 纸片：右上三角、右下剪纸圆，和方块之间留底色缝
    d.at({ x: 845, y: 220, rot: 6 }, () => m.shape(d, { kind: 'tri', size: 240, color: d.tint }));
    d.at({ x: 845, y: 790 }, () => m.shape(d, { kind: 'disc', size: 250 }));
    // 墨线：方块里一个墨点，两支弯箭头分别伸到三角和圆上
    d.dot(410, 520, 34);
    d.arrow([[465, 480], [600, 350], [815, 275]], { head: 44 });
    d.arrow([[465, 560], [610, 700], [805, 775]], { head: 44 });
  },
};
