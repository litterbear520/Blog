// 示例配方：窗口里的大光标（适合"HTML / 交互 / 界面"这类主题）
// 复制为 recipes/<文章 slug>.js，改 swatch / seed / draw 三处即可
module.exports = {
  swatch: 'oat', // 底色名，见 src/data/swatches.json
  seed: 11, // 固定种子保证每次渲染一致；换个数字就换一版抖动
  draw(d, m) {
    // d：绘图原语（brush / paper / blob / ring / dot / dashed / sparkle / at ...）
    // m：母题库（window / terminal / cursor / hand / braces / bubble / nodes / magnifier / lock / book / doc / arrow / code / squiggle / sparkle）
    d.at({ x: 500, y: 530 }, () => m.window(d));
    d.at({ x: 520, y: 580, s: 1.2, rot: -8 }, () => m.cursor(d));
    d.sparkle(930, 140, 120, 22);
  },
};
