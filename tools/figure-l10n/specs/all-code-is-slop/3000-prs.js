const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const M = ['3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月'];
window.SPEC = { src: 'src/all-code-is-slop/3000-prs.png', ...F, items: [
  { r: [170, 95, 1300, 165], t: '上个月我往生产环境发了 3,000 个 PR', size: 58, anchor: 'middle' },
  { r: [335, 252, 460, 280], t: '共 10,732 个', size: 20 },
  ...[370, 475, 580, 684, 789, 893, 998, 1102].map((x, i) => ({ r: [x - 30, 662, x + 30, 684], t: M[i], size: 15, anchor: 'middle' })),
]};
