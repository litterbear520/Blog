const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
// 四列底色都是纯色：每列整块盖掉原来的条目，再按 30 像素一行从 y=180 起逐行重写。
// 原图折成两行的条目（INTEGRATION / TESTS 这类）中文一行写得下，后面的条目依次上移
const COL = (x0, x1, rows, lines) => ({ r: [x0, 166, x1, 180 + 30 * (rows - 1) + 14], t: lines.map(l => '- ' + l).join('\n'), x: x0 + 7, y: 180, size: 18, weight: 700, lh: 30 / 18, color: '#1a1a1a' });
window.SPEC = { src: 'src/all-code-is-slop/testing-landscape.png', ...F, items: [
  { r: [136, 38, 322, 64], t: '上线前', size: 22, weight: 700, anchor: 'middle' },
  { r: [782, 38, 1056, 64], t: '生产环境中测试', size: 22, weight: 700, anchor: 'middle' },
  { r: [590, 110, 662, 134], t: '部署', size: 18, weight: 700, anchor: 'middle' },
  { r: [848, 110, 934, 134], t: '发布', size: 18, weight: 700, anchor: 'middle' },
  { r: [1100, 110, 1232, 134], t: '发布后', size: 18, weight: 700, anchor: 'middle' },
  COL(148, 504, 20, ['单元测试', '功能测试', '组件测试', '模糊测试', '基于属性的测试', '形式化验证', '静态分析', '变异测试', '覆盖率测试', '基准测试', '契约测试', 'lint 检查', '验收测试', '回归测试', '冒烟测试', '可用性测试', 'UI/UX 测试', '渗透测试', '威胁建模', '性能测试']),
  COL(519, 752, 7, ['集成测试', '流量比对', '负载测试', '影子流量', '配置测试', '耐久测试']),
  COL(766, 1037, 6, ['金丝雀发布', '监控', '流量整形', '功能开关', '异常追踪']),
  COL(1050, 1320, 14, ['流量复制', '性能剖析', '日志与事件', '混沌测试', '监控', 'A/B 测试', '链路追踪', '动态探索', '真实用户监控', '审计', '值班体验']),
]};
