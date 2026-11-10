// 该用哪个模型：四根由矮到高的纸白柱子是四档模型，一支墨线箭头从左上绕过来，落在第三根上（先从 Opus 起步）
module.exports = {
  swatch: 'plum',
  seed: 23,
  draw(d, m) {
    // 纸片：四档模型，一档比一档高，柱子之间留出底色缝
    const x0 = 70, w = 188, gap = 36, base = 940;
    const heights = [240, 420, 610, 850];
    heights.forEach((h, i) => {
      const x = x0 + (w + gap) * i;
      d.cut(d.rect(x, base - h, w, h), { amp: 5 });
    });
    // 墨线：从左上绕一道弧，箭头落在第三根柱子顶上
    const cx = x0 + (w + gap) * 2 + w / 2;
    d.arrow([[140, 540], [160, 280], [320, 110], [510, 110], [cx, 290]], { head: 46 });
  },
};
