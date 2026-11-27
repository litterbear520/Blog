const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
// 气泡里的英文先由 clean.py 抹掉（src 指向 -clean.png），这里只写字
window.SPEC = { src: 'src/all-code-is-slop/read-the-code-clean.png', ...F, items: [
  { r: [290, 135, 665, 180], noPatch: true, x: 475, y: 160, color: '#141414', t: '带我过一遍', size: 42, anchor: 'middle', weight: 700 },
  { r: [350, 183, 630, 228], noPatch: true, x: 475, y: 207, color: '#ed6e5b', t: '这段代码。', size: 42, anchor: 'middle', weight: 700 },
  { r: [798, 290, 1332, 540], t: '是的，你有时候\n还是应该\n读一读代码', size: 60, anchor: 'middle', lh: 1.6 },
]};
