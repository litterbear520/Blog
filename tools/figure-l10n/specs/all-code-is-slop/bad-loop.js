const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const RED = '#bf535e', GREEN = '#469a84';
// kind: 'bad' 人工验证 slop；'good' 彩色强调的好代码 / Agent；'plain' 同 good 但不着色。dy 是这一组整体的上下偏移
const loop = (lx, rx, bx, kind, dy = 0) => {
  const bad = kind === 'bad', hl = kind !== 'plain';
  return [
    { r: [lx[0], 418 + dy, lx[1], 450 + dy], t: 'Agent 写出', size: 27, anchor: 'middle' },
    { r: [lx[0], 452 + dy, lx[1], 490 + dy], t: bad ? 'slop 代码' : '好代码', size: 27, anchor: 'middle', segs: bad ? [{ t: 'slop', color: RED, ul: true }, { t: ' 代码' }] : hl ? [{ t: '好', color: GREEN, ul: true }, { t: '代码' }] : undefined },
    { r: [rx[0], 418 + dy, rx[1], 452 + dy], t: bad ? '人工' : 'Agent', size: 27, anchor: 'middle', dy: -2, segs: hl ? [{ t: bad ? '人工' : 'Agent', color: bad ? RED : GREEN, ul: true }] : undefined },
    { r: [rx[0], 452 + dy, rx[1], 488 + dy], t: bad ? '验证' : '自己验证', size: 27, anchor: 'middle', dy: 5 },
    { r: [bx - 50, 606, bx + 50, 674], t: '发现问题', size: 27, anchor: 'middle' },
  ];
};
window.SPEC = { src: 'src/all-code-is-slop/bad-loop.png', ...F, items: [
  { r: [80, 62, 940, 140], t: '别把一个坏循环自动化', size: 60 },
  { r: [178, 186, 357, 228], t: '低信任', size: 34, anchor: 'middle' },
  { r: [118, 236, 418, 264], t: '大多数人卡在这里', size: 21, anchor: 'middle' },
  { r: [645, 186, 835, 230], t: '高信任', size: 34, anchor: 'middle' },
  { r: [600, 236, 876, 264], t: '建好 poteto 金字塔之后', size: 21, anchor: 'middle' },
  { r: [1122, 186, 1298, 230], t: '“工厂”', size: 34, anchor: 'middle' },
  { r: [1103, 236, 1316, 264], t: '有了信任才能规模化', size: 21, anchor: 'middle', dy: 3 },
  { r: [925, 286, 1183, 324], t: '自动触发', size: 27, anchor: 'middle', segs: [{ t: '自动触发', color: GREEN, ul: true }] },
  ...loop([54, 238], [313, 452], 266, 'bad'),
  ...loop([526, 710], [786, 924], 738, 'good'),
  ...loop([986, 1172], [1256, 1395], 1210, 'plain', 2),
  { r: [522, 741, 946, 773], t: '先改进你的循环，再自动化！', size: 23, anchor: 'middle' },
]};
