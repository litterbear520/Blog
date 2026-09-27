// 示例配方：投影幕上一条上升折线（适合“讲解 / 数据 / 汇报”这类主题）
// 复制为 recipes/<文章 slug>.js，改 swatch / seed / draw 三处即可
module.exports = {
  swatch: 'oat', // 底色名，见 src/data/swatches.json
  seed: 11, // 固定种子保证每次渲染一致；换个数字就换一版抖动
  draw(d, m) {
    // d：绘图原语（cut / disc / brush / link / arrow / dot / ring / dashed / at ...）
    // m：母题库（screen / easel / window / chart / network / shape / bubble / stairs / book ...）
    // 先画纸片，再画墨线：墨线永远压在纸片上面
    d.at({ x: 500, y: 460, s: 1.2 }, () => {
      m.screen(d);
      d.link([[-230, 80], [-80, -70], [70, 10], [230, -140]], { r: 26 });
    });
  },
};
