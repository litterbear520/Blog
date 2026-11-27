const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const RED = '#bf535e', GREEN = '#469a84';
// 一个循环：左上“Agent 写出 / X 代码”，右上“X / 验证”，底部“发现问题”。lx、rx 是左右两组标签原文的范围
const loop = (lx, rx, bx, bad) => [
  { r: [lx[0], 418, lx[1], 450], t: 'Agent 写出', size: 27, anchor: 'middle' },
  { r: [lx[0], 452, lx[1], 490], t: bad ? 'slop 代码' : '好代码', size: 27, anchor: 'middle', segs: bad ? [{ t: 'slop', color: RED, ul: true }, { t: ' 代码' }] : [{ t: '好', color: GREEN, ul: true }, { t: '代码' }] },
  { r: [rx[0], 418, rx[1], 452], t: bad ? '人工' : 'Agent', size: 27, anchor: 'middle', dy: -2, segs: [{ t: bad ? '人工' : 'Agent', color: bad ? RED : GREEN, ul: true }] },
  { r: [rx[0], 452, rx[1], 488], t: bad ? '验证' : '自己验证', size: 27, anchor: 'middle', dy: 5 },
  { r: [bx - 50, 606, bx + 50, 674], t: '发现问题', size: 27, anchor: 'middle' },
];
window.SPEC = { src: 'src/all-code-is-slop/trust-loops.png', ...F, items: [
  { r: [80, 62, 1015, 140], t: '帮 Agent 写出好代码', size: 60 },
  { r: [425, 186, 602, 228], t: '低信任', size: 34, anchor: 'middle' },
  { r: [365, 236, 665, 264], t: '大多数人卡在这里', size: 21, anchor: 'middle' },
  { r: [890, 186, 1082, 230], t: '高信任', size: 34, anchor: 'middle' },
  { r: [873, 236, 1097, 264], t: '这是你想到达的地方', size: 21, anchor: 'middle' },
  ...loop([298, 484], [560, 698], 514, true),
  ...loop([772, 956], [1032, 1170], 985, false),
]};
