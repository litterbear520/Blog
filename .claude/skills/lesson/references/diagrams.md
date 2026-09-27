# 出图规范

## 什么时候画、用什么画

- 谁把什么交给谁、按什么顺序：`MessageFlow`（见 [组件怎么选](components.md)）。
- 一次运行随时间推进：`AgentLoopViz`。
- 结构、分层、边界、流水线、层级、折线和柱状这类图表：用 **diagram-design** 技能画，放进 `Diagram` 组件。选类型、布局、连线、间距、复杂度上限和自检都以那个技能为准；这里只写它不管的三件事：博客里的尺寸、配色和嵌入方式。
- 文字一句话就能说清的，不画。
- 技能画不了的几类图：标注截图、界面线框（聊天气泡、商品卡片）、可交互的探索图、插画和图标、渐变谱系条、单位格子图、跨课的流程进度条。需要时照 [组件怎么选](components.md) 的“缺组件时”停下来问用户。

## 结构图进博客

1. **出稿。** 按 diagram-design 画，viewBox 宽 768（正文列宽，字号就是上页面后的实际大小），中文字号不小于 12px。先生成它的独立 HTML 草稿，跑技能自带的 `scripts/self_check.py` 和插件仓库 `scripts/` 下的 `verify-geometry.py`（本机在 `~/.claude/plugins/marketplaces/diagram-design/`），两个都通过再往下。
2. **入库。** 把 `<svg>` 放进 `src/data/diagrams/<名字>.js`（`export default` 一个模板字符串），登记到同目录 `index.js`。SVG 里只写类名，不写颜色、字号和字体：
   - 节点按角色：`n-neutral` 中性（输入、上下文）、`n-process` 处理（模型、执行器、步骤）、`n-done` 完成、`n-external` 外部（后端、用户、第三方）；`n-focal` 是结论框，每张图至多一个。
   - 容器用 `zone`，顶上一条标题带 `band`；回路用 `arrow loop`；箭头是开口 V 形，marker 里写 `mk` / `mk-loop`。
   - 完整类名清单在 `index.js` 的注释里，配色映射在 `src/components/Diagram/styles.module.css`，深浅色跟着博客令牌切换。
3. **无障碍。** `<svg>` 带 `role="img"` 和 `aria-labelledby`，所有 id 用这张图的文件名作前缀；`<desc>` 写成“这张图说明……”一整句。
4. **嵌入。** 课文里写 `<Diagram variant="名字" />`。`npm run test:diagrams` 检查第 2、3 条。

## 图和正文

- 先文后图：图前一句以冒号结尾的引导句，图里每个元素都能在前文找到对应的一句。
- 复杂机制拆成几张递进图，每张只比上一张多一个元素；消息流用 `upTo` 做同样的事。
- 图下不写图注，要解释的写进正文。
