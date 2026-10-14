// Diagram 的数据注册表：variant 名 → 一张结构图的 SVG 字符串。每张图一个文件，写完在这里登记。
// 图按 diagram-design 技能的规则画（类型选择、连线、间距、自检都以它为准），viewBox 宽 768，
// 页面上按正文列宽缩放（1280 宽的屏幕上约 702px），高度随内容，课文配图常用 432（16:9）或 480（8:5）。
// SVG 里不写颜色和字号，只写下面这些类名，映射在 src/components/Diagram/styles.module.css：
//   形状  mask（标签底）· zone（容器）· band（容器标题带）· divider（记录框分隔线）· boundary（边界虚线）
//         n-neutral 中性 · n-process 处理 · n-done 完成 · n-external 外部 · n-focal 结论框（每张图至多一个）
//         n-option 选项标签（选项对照图底部那条，实心陶土底；紧跟的 <text> 是标签文字）
//   连线  arrow · arrow loop（回路）；箭头 marker 里用 mk / mk-loop（开口 V 形）
//   文字  t-name 名称 · t-band 标题带 · t-sub 说明 · t-note 旁注 · t-label 连线标签
//         t-mono / t-mono-strong 代码名 · t-code（t-note 里的行内代码）· t-accent 强调色文字（和 s-leader 配对的标注）
//   场景  s-window 窗口 · s-bar 窗口标题条 · s-bubble-user 顾客 / 用户气泡 · s-bubble-agent Agent 气泡
//         s-card 商品卡（写真实的名字和一项关键数据，不画图片占位）· s-panel 代码 / 终端面板（墨色实底）
//         s-hl 强调框（框住一个词或一行）· s-leader 强调色曲线标注 · s-dim 淡化的元素（被禁用、没发生的路径）
//         mk-accent 强调色箭头 · t-msg 气泡里的话（14px）· t-who 说话人 · t-panel 面板里的代码
// <svg> 要带 role="img" 和 aria-labelledby，id 统一用这张图的文件名作前缀，<desc> 写成“这张图说明……”一整句。

import modsHookChain from './modsHookChain';

export default { modsHookChain };
