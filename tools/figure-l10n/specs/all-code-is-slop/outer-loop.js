const F = { font: 'fonts/Xiaolai-Regular.ttf', latinFont: 'fonts/excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2' };
const L = [[243, 'X 上的反馈', 298], [280, '新建 Linear 工单', 392], [318, '新的 Slack 消息', 305], [355, 'cron 定时任务', 292], [393, 'Datadog / Sentry 告警', 402], [430, '等等', 140]];
window.SPEC = { src: 'src/all-code-is-slop/outer-loop.png', ...F, items: [
  { r: [80, 68, 978, 142], t: '把 Grok Bot 当作你的 outer loop', size: 56 },
  ...L.map(([y, t, x1]) => ({ r: [90, y - 18, x1, y + 18], t, size: 28, y })),
  { r: [634, 238, 870, 320], t: '全团队都能用的\n共享 Team Bot', size: 21, lh: 1.35 },
  { r: [503, 416, 688, 490], t: 'Agent 写出\n好代码', size: 28, anchor: 'middle', lh: 1.25 },
  { r: [773, 416, 912, 490], t: 'Agent\n自己验证', size: 28, anchor: 'middle', lh: 1.25 },
  { r: [681, 603, 772, 677], t: '发现问题', size: 28, anchor: 'middle' },
]};
