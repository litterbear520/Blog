const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const M = ['6 月', '7 月', '8 月', '9 月', '10 月'];
window.SPEC = { src: 'src/all-code-is-slop/team-11k-prs.png', ...F, items: [
  { r: [150, 100, 1320, 175], t: 'Grok Bot 团队 10 月合并了 1.1 万个 PR', size: 58, anchor: 'middle' },
  { r: [345, 245, 485, 272], t: '共 23,370 个', size: 20 },
  ...[419, 603, 788, 972, 1156].map((x, i) => ({ r: [x - 30, 695, x + 30, 716], t: M[i], size: 15, anchor: 'middle' })),
]};
