const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const M = ['6 月', '7 月', '8 月', '9 月', '10 月'];
window.SPEC = { src: 'src/all-code-is-slop/contributors.png', ...F, items: [
  { r: [330, 95, 1140, 160], t: '每个人都更高产了', size: 58, anchor: 'middle' },
  { r: [183, 410, 204, 478], t: '人数', size: 20, rot: -90 },
  { r: [565, 403, 694, 426], t: '8 月 11 日上线', size: 18, anchor: 'middle', pad: 3 },
  { r: [1072, 317, 1158, 341], t: '每人 PR 数', size: 18 },
  { r: [1210, 349, 1256, 372], t: '核心', size: 18 },
  { r: [1210, 386, 1256, 409], t: '核心', size: 18 },
  { r: [1210, 422, 1274, 445], t: '偶尔', size: 18 },
  { r: [1210, 458, 1290, 481], t: '顺手', size: 18 },
  { r: [1210, 494, 1290, 517], t: '顺手', size: 18 },
  ...[313, 478, 642, 806, 971].map((x, i) => ({ r: [x - 28, 654, x + 28, 672], t: M[i], size: 15, anchor: 'middle' })),
]};
