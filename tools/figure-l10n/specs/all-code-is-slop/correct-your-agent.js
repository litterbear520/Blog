const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
window.SPEC = { src: 'src/all-code-is-slop/correct-your-agent.png', ...F, items: [
  { r: [262, 100, 1205, 165], t: '每当你纠正 Agent 时', size: 58, anchor: 'middle' },
  ...[[357, 7], [551, 8], [744, 9], [937, 10], [1130, 11]].map(([x, m]) => ({ r: [x - 28, 653, x + 28, 670], t: m + ' 月 1 日', size: 14, anchor: 'middle' })),
  { r: [435, 742, 1032, 773], t: '用 lint 规则拦住它，或者从根上消除这个问题', size: 24, anchor: 'middle' },
]};
