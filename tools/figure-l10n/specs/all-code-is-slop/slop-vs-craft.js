const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
// 天空上的英文先由 clean.py 用平铺的蜡笔排线抹掉（src 指向 -clean.png），这里只写字
const T = (x, y, t, size = 30) => ({ r: [x - 5, y - 5, x + 5, y + 5], noPatch: true, x, y: size === 30 ? y - 6 : y, color: '#141414', t, size, anchor: 'middle', weight: 700, lh: 1.12 });
window.SPEC = { src: 'src/all-code-is-slop/slop-vs-craft-clean.png', ...F, items: [
  T(403, 111, '我们的神圣手艺', 52),
  T(1050, 111, '他们的野蛮 slop', 52),
  T(234, 206, '我们光荣的\nAgent'),
  T(415, 268, '我们高明的\n提示词'),
  T(497, 352, '我们高贵的\n迭代'),
  T(555, 437, '我们英勇的\n4000 行 PR'),
  T(1230, 206, '他们邪恶的\nAgent'),
  T(1030, 274, '他们原始的\n提示词'),
  T(882, 350, '他们落后的\nvibe coding'),
  T(893, 437, '他们粗野的\n4000 行 PR'),
]};
