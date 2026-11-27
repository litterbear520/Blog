const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const M = ['6 月', '7 月', '8 月', '9 月', '10 月'];
window.SPEC = { src: 'src/all-code-is-slop/revert-rate.png', ...F, items: [
  { r: [560, 100, 905, 162], t: '回滚率', size: 58, anchor: 'middle' },
  ...[431, 584, 737, 889, 1042].map((x, i) => ({ r: [x - 30, 659, x + 30, 680], t: M[i], size: 15, anchor: 'middle' })),
  { r: [598, 703, 878, 735], t: '被回滚的提交占比', size: 24, anchor: 'middle' },
]};
