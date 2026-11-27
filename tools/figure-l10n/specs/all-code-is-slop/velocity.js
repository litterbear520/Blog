const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
// 5 列 × 3 行的指标格。X 是每列左缘，ROW 是每行指标名的中线，may / now 两行在它下方 31、60 像素
const X = [57, 326, 605, 868, 1148];
const ROW = [295, 430, 566];
const HEAD = ['启动', '打字', '打开', '切换与缩放', '资源'];
// [列, 行, 中文, 原文右缘]
const NAMES = [
  [0, 0, '冷启动', 160], [0, 1, '重新启动', 137], [0, 2, '首次绘制（冷）', 194],
  [1, 0, '短对话（中位数）', 495], [1, 1, '长对话（中位数）', 486], [1, 2, '长对话（p90）', 455],
  [2, 0, '设置', 679], [2, 1, '长对话（冷）', 736], [2, 2, '长对话（热）', 750],
  [3, 0, '切到短对话', 1004], [3, 1, '切回长对话', 1025], [3, 2, '调整窗口大小', 1034],
  [4, 0, '空闲内存', 1264], [4, 1, '空闲 CPU', 1218], [4, 2, '启动时的 JS+CSS', 1299],
];
// 写着 one frame 的格子：[中心 x, 行]
const FRAME = [[462, 0], [462, 1], [462, 2], [1005, 2]];
window.SPEC = { src: 'src/all-code-is-slop/velocity.png', ...F, items: [
  { r: [55, 95, 850, 165], t: '开发提速，性能不打折', size: 60 },
  ...HEAD.map((t, c) => ({ r: [X[c] - 3, 243, X[c] + 215, 275], t, size: 23, pad: 3, y: 259 })),
  ...NAMES.map(([c, r, t, x1]) => ({ r: [X[c] - 3, ROW[r] - 14, x1, ROW[r] + 14], t, size: 18, pad: 3, x: X[c], y: ROW[r] })),
  ...X.flatMap(x => ROW.flatMap(y => [
    { r: [x + 1, y + 20, x + 42, y + 43], t: '5 月', size: 15, pad: 3, x: x + 5, y: y + 31 },
    { r: [x + 1, y + 49, x + 42, y + 72], t: '现在', size: 15, pad: 3, x: x + 5, y: y + 60 },
  ])),
  ...FRAME.map(([x, r]) => ({ r: [x - 45, ROW[r] + 77, x + 45, ROW[r] + 98], t: '一帧', size: 16, anchor: 'middle', pad: 3, dy: 5 })),
  { r: [415, 742, 1052, 774], t: '有天花板，但 Electron 应用也可以相当快', size: 24, anchor: 'middle' },
  { r: [475, 776, 993, 802], t: '（不过我确实在琢磨用 Rust 重写）', size: 20, anchor: 'middle' },
]};
