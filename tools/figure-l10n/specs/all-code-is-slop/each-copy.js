const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
// 纸纹底上的三段文字先由 clean.py 借上下方的纹理抹掉（src 指向 -clean.png）；箭头里的渐变色用 inpaint 只抹笔画
const ip = (box, color, tol = 150, grow = 1) => ({ patch: box, inpaint: { color, tol, grow }, color });
window.SPEC = { src: 'src/all-code-is-slop/each-copy-clean.png', ...F, items: [
  { r: [60, 92, 1372, 172], noPatch: true, color: '#2d1606', x: 66, y: 126, t: '每多一次复制，下一次复制就更可能发生', size: 62 },
  ...[[495, 458, 532], [765, 727, 801], [1033, 996, 1069]].map(([x, a, b]) => ({ r: [x - 42, 278, x + 42, 314], ...ip([a - 3, 282, b + 3, 316], '#391707'), x, y: 300, t: '复制', size: 30, anchor: 'middle' })),
  { r: [94, 726, 378, 764], noPatch: true, color: '#2b1606', x: 99, y: 742, t: '一个变通写法', size: 32 },
  { r: [838, 726, 1062, 770], noPatch: true, color: '#2d1606', x: 950, y: 746, t: '模式', size: 34, anchor: 'middle' },
]};
