const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
// 两个气泡里的英文先由 clean.py 抹掉（src 指向 -clean.png），这里只写字
window.SPEC = { src: 'src/all-code-is-slop/unsolicited-markdown-clean.png', ...F, items: [
  { r: [500, 140, 672, 248], noPatch: true, x: 586, y: 194, color: '#141414', t: '我瞎编的', size: 38, anchor: 'middle', weight: 700 },
  { r: [96, 364, 242, 416], noPatch: true, x: 168, y: 390, color: '#141414', t: '出处呢？', size: 30, anchor: 'middle', weight: 700 },
  { r: [738, 290, 1388, 540], t: '别让 Agent 写\n不请自来的\nMarkdown', size: 58, anchor: 'middle', lh: 1.6 },
]};
