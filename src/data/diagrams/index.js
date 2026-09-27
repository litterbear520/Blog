// Diagram 的数据注册表：variant 名 → 一张结构图的 SVG 字符串。每张图一个文件，写完在这里登记。
// 图按 diagram-design 技能的规则画（类型选择、连线、间距、自检都以它为准），viewBox 宽 768（正文列宽）。
// SVG 里不写颜色和字号，只写下面这些类名，映射在 src/components/Diagram/styles.module.css：
//   形状  mask（标签底）· zone（容器）· band（容器标题带）· divider（记录框分隔线）· boundary（边界虚线）
//         n-neutral 中性 · n-process 处理 · n-done 完成 · n-external 外部 · n-focal 结论框（每张图至多一个）
//   连线  arrow · arrow loop（回路）；箭头 marker 里用 mk / mk-loop（开口 V 形）
//   文字  t-name 名称 · t-band 标题带 · t-sub 说明 · t-note 旁注 · t-label 连线标签
//         t-mono / t-mono-strong 代码名 · t-code（t-note 里的行内代码）
// <svg> 要带 role="img" 和 aria-labelledby，id 统一用这张图的文件名作前缀，<desc> 写成“这张图说明……”一整句。
import toolBoundary from './toolBoundary';
import toolOutcomeReaders from './toolOutcomeReaders';

export default { toolBoundary, toolOutcomeReaders };
