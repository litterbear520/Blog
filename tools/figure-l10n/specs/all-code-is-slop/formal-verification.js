const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
window.SPEC = { src: 'src/all-code-is-slop/formal-verification-clean.png', ...F, items: [
  { r: [440, 98, 1030, 167], t: '形式化验证', size: 58, anchor: 'middle' },
  { r: [186, 260, 394, 324], noPatch: true, x: 290, y: 268, color: '#0d0d0d', t: '给状态机建模，\n检查它的\n规则是否成立。', size: 21, anchor: 'middle', lh: 1.2 },
  { r: [428, 260, 643, 324], noPatch: true, x: 535, y: 268, color: '#0d0d0d', t: '为代码写证明，\n逐一检查\n每步推理。', size: 21, anchor: 'middle', lh: 1.2 },
  { r: [775, 336, 996, 380], t: 'TLA+ 模型', size: 34 },
  { r: [1020, 308, 1366, 408], t: '给状态机建模，\n检查所有状态\n都被正确处理', size: 25, lh: 1.3 },
  { r: [783, 530, 984, 574], t: 'Lean 证明', size: 34 },
  { r: [1018, 518, 1346, 586], t: '检查实现里\n有没有 bug', size: 25, lh: 1.3 },
  { r: [305, 741, 876, 774], t: '另见 pstack 里的 /create-formal-verification-skill：', size: 23, anchor: 'end', dx: 9 },
]};
