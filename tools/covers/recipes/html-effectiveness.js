// HTML 的惊人效果：浏览器窗口里一个大大的 </>，右下角一个光标点上去
module.exports = {
  swatch: 'oat',
  seed: 7,
  draw(d, m) {
    d.at({ x: 480, y: 470, s: 1.05, rot: -3 }, () => {
      m.window(d, { dots: true });
      d.at({ y: 70, s: 0.85 }, () => m.code(d));
    });
    d.at({ x: 800, y: 760, s: 1.1, rot: -12 }, () => m.cursor(d));
    d.sparkle(130, 870, 100, 22);
  },
};
