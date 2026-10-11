# 出图规范

Academy 课文里，机制主要靠图讲：Sampling 用两张同布局的时序图对照两个选项，Roots 用一张聊天界面加文件树的场景图让读者“看到”问题，API 课把同一张往返图先画抽象版、再换成天气的具体版，Claude Code 课先用编号步骤讲完智能体循环、再放一张循环图复述。一课 1–4 张图，集中在讲问题和机制的几节。

## Academy 的图长什么样

- **画布宽 768，高 432（16:9）或 480（8:5）。** 宽度就是正文列宽，图里的字号就是页面上的实际大小。
- **元素少，留白多。** 四周至少留 40px，主要元素不超过八个，图里每个标签不超过十个字（气泡里的原话不算标签，至多两行）；要解释的话写进正文。
- **一个焦点。** 全图只有一处强调色：选项对照图是底部那个 `n-focal` 选项标签；场景图是一条 `s-leader` 曲线加它两端的 `s-hl` 框。其余连线用普通的 `arrow`。
- **先场景，后结构。** “问题”一节优先画场景图，让读者看到顾客说了什么、系统那边是什么样；“原理”一节再画结构图或时序图。

## 常用的图

| 图 | 用在哪 | 怎么画 |
| ---- | ---- | ---- |
| 选项对照（Sampling） | “X 解决的问题”里摆两个选项 | 两个 variant（`名字Option1`、`名字Option2`；注册表只认字母数字的驼峰名），布局和参与者位置完全相同，只改变化的那一处；底部一个 `n-focal` 标签写“选项 1：……”。每张图后跟一段“**选项 N：**”说明。 |
| 场景图（Roots） | 让读者看到问题发生在哪 | 左边是界面（`s-window` 加气泡），右边是系统那一侧（商品目录、后端、`s-panel` 终端）；一条 `s-leader` 把对话里的关键词连到右边那样东西。起点是 [`assets/scene-template.svg`](../assets/scene-template.svg)。 |
| 递进图组（状态与 StreamableHTTP） | 一个结构逐步变复杂 | 几个 variant（`名字1`、`名字2`……），每张只比上一张多一个元素，正文里每张前一句冒号引导、后一句说明多了什么。 |
| 时序图（深入 StreamableHTTP） | 消息在几方之间往返 | 只看往返时用 `MessageFlow`；要和结构画在一起时用 diagram-design 的 sequence 类型。 |
| 代码标注图（MCP 状态课、API《工具模式》） | 一段代码里只有两三行是要点 | `s-panel` 里放几行代码（`t-panel`），`s-hl` 框住要点那一行，旁边的说明用 `s-leader` 连过去。 |
| 先抽象、后具体（API《工具使用简介》） | 一个机制先讲通用形状，再落到本课场景 | 两个 variant，版面完全相同，第二张只把标签换成具体场景；两张图后各跟同一组编号步骤。 |
| 有 / 没有（API《智能体与工具》） | 讲一条设计原则 | 左右两栏同样的格子，一栏写“有”的几样，一栏写“没有”的几样，不需要的那栏用 `s-dim` 淡化。 |
| 骨架图（Claude Code《工作原理》） | 一个系统整体怎样运转 | diagram-design 的流程或 loop 类型：主轴从左到右，人的介入从下方接进容器，回路画成主轴下方的折线。 |

## 画法

- **结构图、流程图、时序图**用 diagram-design 技能画：选类型、布局、连线、间距、复杂度上限和自检都以那个技能为准。先生成它的独立 HTML 草稿，跑技能自带的 `scripts/self_check.py` 和插件仓库 `scripts/` 下的 `verify-geometry.py`（本机在 `~/.claude/plugins/marketplaces/diagram-design/`），两个都通过再往下。尺寸用上面的 768 宽。
- **场景图、代码标注图**diagram-design 不画，从 `assets/scene-template.svg` 改起，手写 SVG：坐标落在 4px 网格上，气泡、卡片的内边距至少 16px，中文按每字 1em 估宽（气泡里 14px，其余 12px）。
- **画完都看一眼。** `python3 .claude/skills/lesson/scripts/preview_diagrams.py <variant> ... --shot` 按博客令牌渲染深浅两版，内存够时截成 PNG（用 Read 看），不够时给出 HTML。lint 另外会检查每段文字有没有超出它所在的框。
- diagram-design 的 `verify-geometry.py` 只认 `x y width height` 这个顺序写的 `<rect>`，顺序不对的会被悄悄跳过，手写时照这个顺序。

## 进博客

1. **入库。** 把 `<svg>` 放进 `src/data/diagrams/<名字>.js`（`export default` 一个模板字符串），登记到同目录 `index.js`。SVG 里只写类名，不写颜色、字号和字体；类名清单（结构图的 `n-*`、`t-*`，场景零件 `s-*`）在 `index.js` 的注释里，配色映射在 `src/components/Diagram/styles.module.css`，深浅色跟着博客令牌切换。
2. **无障碍。** `<svg>` 带 `role="img"` 和 `aria-labelledby`，所有 id 用这张图的文件名作前缀；`<desc>` 写成“这张图说明……”一整句。
3. **嵌入。** 课文里写 `<Diagram variant="名字" />`。`npm run test:diagrams` 检查第 1、2 条。

## 图和正文

- 图前一句以冒号结尾的引导句；图里的每个元素，正文里都有对应的一句。
- 图下不写图注，要解释的写进图后那一两句。
