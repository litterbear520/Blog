---
slug: html-effectiveness
title: HTML 的惊人效果
date: 2026-07-08
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![HTML 的惊人效果](/img/blog/hero-html-effectiveness.jpg)

原文：[Using Claude Code: The Unreasonable Effectiveness of HTML](https://x.com/trq212/status/2052809885763747935)

Markdown 已成为智能体与我们沟通时使用的主流文件格式。它简洁、可移植、具备一定的富文本功能，且便于你编辑。Claude 甚至已经出人意料地擅长在 Markdown 文件里用 ASCII 字符画图表。

但随着智能体变得越来越强大，我感觉 Markdown 这种格式已经成了一种束缚。我发现超过 100 行的 Markdown 文件读起来就很困难。我想要更丰富的可视化效果、色彩和图表，也希望能轻松地把这些内容分享出去。

我也越来越少亲自编辑这些文件，而是把它们当作规格说明、参考文件、头脑风暴的产出等来用。真要修改时，我通常也是发提示词让 Claude 改，这样一来，Markdown 最大的优势之一“便于编辑”也就用不上了。

我开始倾向于使用 HTML 而非 Markdown 作为输出格式，并且越来越多地看到 Claude Code 团队的其他成员也这样做，原因如下。

如果你想先看一些例子，可以在[这里](https://thariqs.github.io/html-effectiveness)找到很多，但记得回来接着读，看看为什么要这样做。

{/* truncate */}

## 为什么是 HTML？

### 信息密度

与 Markdown 相比，HTML 能够传达更丰富的信息。它当然可以实现简单的文档结构（如标题和格式），但还能表示各种其他信息，例如：

- 用表格呈现成行成列的数据
- 用 CSS 表示<Term tip="颜色、字体、间距这类设计取值">设计数据</Term>
- 用 SVG 画插图
- 用 `<script>` 标签放代码片段
- 用 HTML 元素配合 JavaScript 和 CSS 实现交互
- 用 SVG 和 HTML 呈现工作流程
- 用绝对定位和 canvas 表示<Term tip="带位置信息的数据，比如布局、坐标">空间数据</Term>
- 用 `<img>` 标签放图片

我甚至敢说，只要是 Claude 能读取的信息，几乎都能用 HTML 相当高效地呈现出来。所以，无论是模型向你传达深入的信息，还是你审阅这些信息，用 HTML 都非常高效。

我发现，模型如果不能用 HTML 呈现，就可能在 Markdown 里用更低效的办法，比如 ASCII 图表，或者我最喜欢的一种：用 Unicode 字符来近似表示颜色，就像这张 Claude Code 截图里那样。

![1783498092463](./1783498092463.png)

### 视觉清晰度与阅读舒适度

随着 Claude 能够处理更复杂的工作，它写的规格说明和计划也越来越长。实际上，我发现超过 100 行的 Markdown 文件我往往并不会真的去读，更没法让其他同事去读。

但 HTML 文档要好读得多。Claude 可以用标签页、插图、链接等，把结构在视觉上组织好，让人很方便地跳转浏览。文档甚至可以适配手机，让你在不同的设备上用不同的方式来读。

### 易于分享

Markdown 文件相当难以分享，因为大多数浏览器无法很好地原生渲染它们。你通常需要将它们作为附件添加到电子邮件或消息中。

使用 HTML 时，只需上传文件（例如上传到 S3），就能轻松分享链接。你的同事在哪儿都能打开，也能方便地查阅。

如果以 HTML 格式呈现，你的规格说明、报告或 PR 说明真正被人读到的可能性会大大提高。

### 双向互动

HTML 可以让你和文档互动。比如，你可以让 Claude 加上滑块或旋钮，用来调整设计，或者调节算法里的不同选项，看看会发生什么。你还可以让它支持把这些改动复制成提示词，再粘贴回 Claude Code。

想看这种双向互动的更多例子，可以读我的 [playgrounds 帖子](https://x.com/trq212/status/2017024445244924382)。

### 数据摄取

为什么要用 Claude Code 来做 HTML 文件，而不是用 ClaudeAI 或 Claude Design 之类的工具？最重要的原因之一，是 Claude Code 能摄取大量上下文。

举个例子，写这篇文章时，我让 Claude Code 读遍我的代码文件夹，找出我生成过的所有 HTML 文件，把它们分组、分类，再做一个 HTML 文件，用图表展示每一类。你在本文中看到的图表，就是这样做出来的。

除了文件系统，Claude Code 还可以通过你接入的 MCP（如 Slack、Linear 等）、你的网页浏览器（配合 Claude in Chrome）、你的 Git 历史记录等获取更多上下文。

### 充满喜悦

用 Claude 做 HTML 文档就是更有趣，也让我觉得自己更多地参与了创作、更投入其中。光这一点就足够了。

### 如何开始

我有点担心，大家读完这篇文章后，会把文章内容做成一个“/html 技能”之类的东西。这也许有些价值，但我想强调的是，要让 Claude 产出 HTML，你并不需要做太多事情。你只需让它“做一个 HTML 文件”或“做一个 HTML <Term tip="Claude 生成的独立成果，比如一个网页或一份文档，可以单独打开和分享">artifact</Term>”就行。

诀窍在于想清楚你希望这个 artifact 做什么，以及你可能会怎么用它。时间长了，你也许会做一个技能，但目前我建议直接从头写提示词，慢慢摸清在不同场景下该怎么用。

## 使用场景

为了说得更具体，我针对不同的使用场景做了很多 HTML 文件。你可以在[这里](https://thariqs.github.io/html-effectiveness/)查看全部文件，下面是概览。

### 规格、规划与探索

HTML 表现力丰富，Claude 可以用它深入钻研一个问题。开始处理一个问题时，我不会只写一份简单的 Markdown 计划，而是预期要做出一组互相关联的 HTML 文件。例如，我可能会先让 Claude Code 头脑风暴，做出几份文件，分别探索不同的方案。然后让它把其中一个方向展开得更深入，也许再做些模拟界面或代码片段。最后，等我觉得差不多了，就让它写实施计划。对计划满意后，我会开一个新会话，把所有这些文件传进去，让它照着实现。

验证时，我也会让负责验证的智能体读这些文件，这样它对需求的了解就会全面得多。

示例提示词：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I'm not sure what direction to take the onboarding screen. Generate 6 distinctly different approaches — vary layout, tone, and density — and lay them out as a single HTML file in a grid so I can compare them side by side. Label each with the tradeoff it's making.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我不确定新手引导界面该往哪个方向设计。请生成 6 种截然不同的方案——在布局、风格和信息密度上都要有所变化——并以网格形式排版在单个 HTML 文件中，方便我进行横向对比。每种方案需标注其设计取舍。
```

</TabItem>
</Tabs>

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Create a thorough implementation plan in a HTML file, be sure to make some mockups, show data flow and add important code snippets I might want to review. Make it easy to read and digest.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
请用一个 HTML 文件写一份详尽的实施计划，务必做一些模拟界面，展示数据流向，并附上我可能想审阅的重要代码片段。内容要清晰易读、便于理解。
```

</TabItem>
</Tabs>

使用场景：

- 探索在代码中实现某功能的其他方法
- 探索多种视觉设计方案

### 代码审查与理解

代码放在 Markdown 文件里可能很难读。但借助 HTML，我们可以呈现 diff、注释、流程图、模块等内容。你可以用它来理解智能体写的代码、做代码审查，或者向审查你代码的人讲解 PR。我发现这通常比 GitHub 默认的 diff 视图效果更好，现在我提交的每个 PR 都会附上一个讲解代码的 HTML 页面。

示例提示词：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Help me review this PR by creating an HTML artifact that describes it. I'm not very familiar with the streaming/backpressure logic so focus on that. Render the actual diff with inline margin annotations, color-code findings by severity and whatever else might be needed to convey the concept well.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
帮我审查这个 PR：做一个描述它的 HTML artifact。我对流式处理/背压逻辑不太熟悉，所以请重点讲这部分。把实际的 diff 渲染出来，在代码行旁边的页边加上注释，按严重程度用颜色区分发现的问题，再加上其他有助于讲清这些概念的内容。
```

</TabItem>
</Tabs>

使用场景：

- 创建 PR
- 审查 PR
- 理解代码中的某个主题

### 设计与原型

Claude Design 基于 HTML，因为 HTML 在设计方面表现力极强，即使你最终要做的界面不是 HTML 也一样。Claude 可以先用 HTML 勾勒出设计草图，再用你选择的语言或框架写出来，比如 React、Swift 等。

你还可以给交互做原型，比如动画、动作等。不妨让 Claude 做一些滑块、旋钮之类的控件，把效果调到正好是你想要的样子。

示例提示词：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I want to prototype a new checkout button, when clicked it does a play animation and then turns purple quickly. Create a HTML file with several sliders and options for me to try different options on this animation, give me a copy button to copy the parameters that worked well.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我想制作一个新的结账按钮原型，点击时播放动画，然后快速变为紫色。创建一个包含多个滑块和选项的 HTML 文件，让我可以尝试这个动画的不同设置，并提供一个复制按钮来复制效果好的参数。
```

</TabItem>
</Tabs>

用于：

- 创建设计系统 artifact
- 调整组件
- 把组件库可视化
- 给让人愉悦的动画做原型

### 报告、研究与学习

Claude Code 非常擅长把多个数据源的信息综合起来，整理成便于阅读的报告。你可以让 Claude 搜索你的 Slack、代码库、Git 历史记录、互联网等，再用这些信息给你自己、领导层、团队等写出非常好读的报告。

你可以把报告做成一份长篇幅的 HTML 文档、一个交互式讲解页面，甚至一套幻灯片/演示文稿。还可以让 Claude 用 SVG 画图表，帮助把内容可视化。

例如，写那几篇关于提示词缓存的帖子时，我让 Claude 先读 Git 历史记录，再准备一份 HTML 格式的深度研究文件给我读，内容是我们对提示词缓存做过的所有改动。

示例提示词：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I don't understand how our rate limiter actually works. Read the relevant code and produce a single HTML explainer page: a diagram of the token-bucket flow, the 3–4 key code snippets annotated, and a "gotchas" section at the bottom. Optimize it for someone reading it once.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我不明白我们的速率限制器实际上是如何工作的。请阅读相关代码，生成单个 HTML 讲解页面：包含令牌桶流程的示意图、3-4 个带注释的关键代码片段，底部再加一节“容易踩的坑”。页面要让人读一遍就能看懂。
```

</TabItem>
</Tabs>

用于：

- 总结某个功能的工作原理
- 向我解释某个概念
- 向你的老板提交每周状态报告
- 向你的领导层提交事故报告
- SVG 插图、流程图、技术图表等

### 自定义编辑界面

有时光靠一个文本框，很难说清你想要什么。这时我会让 Claude 专门为我手头这件事做一个一次性的编辑器。它不是产品，也不是可复用的工具，只是一个 HTML 文件，专为手头这一份数据量身定制。

诀窍在于始终以导出功能收尾：一个“复制为 JSON”或“复制为提示词”的按钮，把我在界面上做的所有操作，变回可以粘贴到 Claude Code 里的内容。

示例提示词：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I need to reprioritize these 30 Linear tickets. Make me an HTML file with each ticket as a draggable card across Now / Next / Later / Cut columns. Pre-sort them by your best guess. Add a "copy as markdown" button that exports the final ordering with a one-line rationale per bucket.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我需要重新排列这 30 个 Linear 工单的优先级。请创建一个 HTML 文件，将每个工单作为可拖拽的卡片，分布在“现在/下一步/稍后/取消”四列中。请按你的最佳判断预先排序。添加一个“复制为 Markdown”按钮，用于导出最终排序结果，并为每个分组附上一行说明理由。
```

</TabItem>
</Tabs>

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Here's our feature flag config. Build a form-based editor for it,  group flags by area, show dependencies between them, warn me if I enable a flag whose prerequisite is off. Add a "copy diff" button that gives me just the changed keys.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
这是我们的功能开关配置。请为它做一个基于表单的编辑器：按功能区域给开关分组，显示开关之间的依赖关系；如果我打开的开关所依赖的前置开关还关着，就警告我。添加一个“复制 diff”按钮，只输出改动过的键。
```

</TabItem>
</Tabs>

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I'm tuning this system prompt. Make a side-by-side editor: editable prompt on the left with the variable slots highlighted, three sample inputs on the right that re-render the filled template live. Add a character/token counter and a copy button.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我正在调整这个系统提示词。做一个左右并排的编辑器：左侧是可编辑的提示词，其中变量插槽高亮显示；右侧放三个示例输入，实时渲染填入变量后的模板。再加一个字符/token 计数器和一个复制按钮。
```

</TabItem>
</Tabs>

用于：

- 对任何内容进行重新排序、分类或分组（如工单、测试用例、反馈）
- 编辑结构化配置（如功能开关、环境变量、带约束条件的 JSON/YAML）
- 调整提示词、模板或文案，并实时预览
- 整理数据集，批准/拒绝数据行，标记示例，导出所选内容
- 给文档、转录文本或 diff 加注释，并导出这些注释
- 选择那些难以用文本表达的值：颜色、缓动曲线、裁剪区域、定时任务表达式、正则表达式

## 常见问题解答

我一直在跟很多人说我已经改用 HTML，也发现有几个问题被反复问到。

1.**这样不是更消耗 token 吗？**

虽然 Markdown 通常用的 token 更少，但我发现，HTML 表现力更强，我真正去读它的可能性也高得多，所以总体上我得到的输出更好。在 Opus 4.7 的 100 万 token 上下文窗口里，多用的这些 token 其实并不明显。

2.**你现在什么时候还会用 Markdown？**

老实说，我现在几乎完全不用 Markdown 了，不过我在 HTML 使用上可能属于极端派。

3.**如何查看 HTML 文件？**

我通常直接在本地浏览器中打开它（你可以让 Claude 来打开），或者如果需要可分享的链接，就上传到 S3。

4.**生成 HTML 不是比 Markdown 更耗时吗？**

确实更耗时！HTML 花的时间可能是 Markdown 的 2 到 4 倍，但我发现结果值得。

5.**版本控制呢？**

说实话，这是 HTML 最大的缺点之一。与 Markdown 相比，HTML 的 diff 杂乱且难以审查。

6.**如何让 Claude 符合我的审美/避免设计丑陋？**

frontend design 插件能帮 Claude 做出优质的 HTML 文件。但要匹配你们公司自己的风格，可以让 Claude 读你的代码库，做一份设计系统 HTML 文件。之后其他 HTML 文件都可以拿这份设计系统文件作参考。

## 始终参与其中

说了这么多，我觉得自己用 HTML 的真正原因，是它让我在和 Claude 协作时更能参与其中。我曾一度开始担心：既然我已经不再细读计划，恐怕只能任由 Claude 自己做决定了。

但我很高兴地告诉你，情况恰恰相反：用 HTML 时，我觉得自己比以往任何时候都更能参与其中。希望你也一样。

## 推荐项目

设计风格参考[awesome-design-md](https://github.com/voltagent/awesome-design-md)

下面放一个我最喜欢的的`Claude.com`风格页面设计，复制为`DESIGN.md`然后让 Claude 遵守就可以啦。

### Claude风格

```markdown
## Overview

Claude.com is the warmest, most editorial interface in the AI-product category. The base atmosphere is a **tinted cream canvas** (`{colors.canvas}` — #faf9f5) — distinctly warm, deliberately not the cool gray-white that every other AI brand uses. Headlines run a **slab-serif display** ("Copernicus" / Tiempos Headline) at weight 400 with negative letter-spacing, paired with **StyreneB / Inter** body sans. The combination feels like a literary publication, not a SaaS marketing page.

Brand voltage comes from the **cream + coral pairing** — coral (`{colors.primary}` — #cc785c) is the signature Anthropic accent, used on every primary CTA, on the brand wordmark, and on full-bleed callout cards. The coral is warm, slightly muted, never cyan/blue — a deliberate counter-positioning against OpenAI's cool slate, Google's saturated blue, and Microsoft's corporate cyan.

The system has three surface modes that alternate page-by-page:
1. **Cream canvas** (`{colors.canvas}`) — default body floor
2. **Light cream cards** (`{colors.surface-card}`) — feature card backgrounds
3. **Dark navy product surfaces** (`{colors.surface-dark}`) — code editor mockups, model showcase cards, pre-footer CTAs, footer itself

The dark surfaces are where Claude shows its product chrome — code blocks, terminal output, model comparison tables, agentic-flow diagrams. The cream-to-dark contrast is the page's pacing rhythm.

**Key Characteristics:**
- Warm cream canvas (`{colors.canvas}` — #faf9f5) with dark warm-ink text (`{colors.ink}` — #141413). The brand's defining color choice.
- Coral primary CTA (`{colors.primary}` — #cc785c). Used scarcely on individual buttons, generously on full-bleed coral callout cards.
- Slab-serif display headlines via Copernicus / Tiempos Headline at weight 400 with negative letter-spacing. Pairs with humanist sans body for a literary editorial voice.
- Dark navy product mockup cards (`{colors.surface-dark}` — #181715) carrying code blocks, terminal panels, model comparison data — the brand shows the product chrome at scale rather than abstract marketing illustrations.
- Light cream feature cards (`{colors.surface-card}` — #efe9de) — slightly darker than canvas, used for content-driven feature explanations.
- Anthropic radial-spike mark — a small black asterisk-like glyph (4-spoke radial) — appears as the brand wordmark prefix and as a content marker.
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons + inputs, `{rounded.lg}` (12px) for content + product cards, `{rounded.xl}` (16px) for the hero illustration container, `{rounded.pill}` for badges.
- Section rhythm `{spacing.section}` (96px) — modern-SaaS standard. Internal card padding stays generous at `{spacing.xl}` (32px).

## Colors

### Brand & Accent
- **Coral / Primary** (`{colors.primary}` — #cc785c): The signature Anthropic warm coral. Used on every primary CTA background, on full-bleed coral callout cards, on the brand wordmark accent. The most-recognized Anthropic color outside of the spike-mark logo.
- **Coral Active** (`{colors.primary-active}` — #a9583e): The press / hover-darker variant.
- **Coral Disabled** (`{colors.primary-disabled}` — #e6dfd8): A desaturated cream-tinted disabled state.
- **Accent Teal** (`{colors.accent-teal}` — #5db8a6): Used sparingly on secondary product surfaces (terminal status indicators, "active connection" dots in connectors page).
- **Accent Amber** (`{colors.accent-amber}` — #e8a55a): A small companion warm-tone used on category badges and inline highlights.

### Surface
- **Canvas** (`{colors.canvas}` — #faf9f5): The default page floor. Tinted cream — warm, deliberately not pure white.
- **Surface Soft** (`{colors.surface-soft}` — #f5f0e8): Section dividers, very-soft band backgrounds.
- **Surface Card** (`{colors.surface-card}` — #efe9de): Feature cards, content cards. One step darker than canvas.
- **Surface Cream Strong** (`{colors.surface-cream-strong}` — #e8e0d2): A strongest-cream variant used on selected category tabs and emphasized section bands.
- **Surface Dark** (`{colors.surface-dark}` — #181715): Code editor mockups, model showcase cards, footer. The dominant dark surface.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #252320): Elevated cards inside dark bands (settings panels in mockups).
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #1f1e1b): Slightly lighter dark, used for code block backgrounds inside larger dark cards.
- **Hairline** (`{colors.hairline}` — #e6dfd8): The 1px border tone on cream surfaces. Same hex as `{colors.primary-disabled}` — borders feel like one elevation step rather than ink lines.
- **Hairline Soft** (`{colors.hairline-soft}` — #ebe6df): Barely-visible divider used inside the same band.

### Text
- **Ink** (`{colors.ink}` — #141413): All headlines and primary text. Warm dark, slightly off-pure-black.
- **Body Strong** (`{colors.body-strong}` — #252523): Emphasized paragraphs, lead text.
- **Body** (`{colors.body}` — #3d3d3a): Default running-text color.
- **Muted** (`{colors.muted}` — #6c6a64): Sub-headings, breadcrumbs, footer-adjacent secondary text.
- **Muted Soft** (`{colors.muted-soft}` — #8e8b82): Captions, fine-print, copyright lines.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on coral buttons.
- **On Dark** (`{colors.on-dark}` — #faf9f5): Cream-tinted white used on dark surfaces (echoes the canvas tone).
- **On Dark Soft** (`{colors.on-dark-soft}` — #a09d96): Footer body text, secondary labels in dark mockups.

### Semantic
- **Success** (`{colors.success}` — #5db872): Green status dots, "available" indicators.
- **Warning** (`{colors.warning}` — #d4a017): Warning callouts (rare on marketing surfaces).
- **Error** (`{colors.error}` — #c64545): Validation errors.

## Typography

### Font Family
The system runs **Copernicus** (or **Tiempos Headline** as substitute) as the slab-serif display face for headlines, and **StyreneB** (or **Inter** as substitute) as the humanist sans for body, navigation, and UI labels. **JetBrains Mono** handles code blocks. The fallback stack walks `Tiempos Headline, Garamond, "Times New Roman", serif` for display and `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for body.

The display/body split is editorial:
- Copernicus serif (weight 400, negative tracking) → h1, h2, h3, hero display
- StyreneB sans (weight 400-500) → body, navigation, buttons, captions, labels
- JetBrains Mono → all code blocks and terminal text

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.05 | -1.5px | Homepage h1 ("Meet your thinking partner") — Copernicus serif |
| `{typography.display-lg}` | 48px | 400 | 1.1 | -1px | Section heads — Copernicus |
| `{typography.display-md}` | 36px | 400 | 1.15 | -0.5px | Sub-section heads, model names — Copernicus |
| `{typography.display-sm}` | 28px | 400 | 1.2 | -0.3px | Pricing tier names, callout headlines — Copernicus |
| `{typography.title-lg}` | 22px | 500 | 1.3 | 0 | Pricing plan size labels — StyreneB |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Feature card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0 | Connector tile titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running-text — StyreneB |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.caption-uppercase}` | 12px | 500 | 1.4 | 1.5px | Category tags, "NEW" badges |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | Code blocks — JetBrains Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Display sizes use weight 400 (regular), never bold. Negative letter-spacing (-0.3 to -1.5px) is essential — Copernicus without it reads as off-brand. The serif character is what gives Anthropic its literary, considered voice; switching to a sans-serif display would make Claude feel like every other AI tool.

Body type stays at weight 400 for paragraphs, weight 500 for labels and emphasized phrases. The sans body is humanist (StyreneB) — never geometric. Inter is an acceptable substitute because of its similar humanist proportions; Helvetica or Arial would be too neutral and break the warm-editorial feel.

### Note on Font Substitutes
If Copernicus / Tiempos Headline is unavailable, **Cormorant Garamond** at weight 500 with -0.02em letter-spacing is the closest open-source approximation. **EB Garamond** is a fallback. For StyreneB, **Inter** is the closest match — both are humanist sans designed for screen reading. **Söhne** is another close alternative if licensed.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) — modern-SaaS rhythm.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards, pricing tier cards, model comparison cards; `{spacing.lg}` (24px) for code-window cards and connector tiles.
- **Callout / CTA bands:** `{spacing.xxl}` (48px) inside coral callout cards; 64px inside the larger dark CTA band.

### Grid & Container
- **Max content width:** ~1200px centered.
- **Editorial body:** Single 12-column grid; hero often uses 6/6 split (h1 left, illustration right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Connector tile grids:** 4-up or 6-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 3-up at desktop (Free / Pro / Team / Enterprise often), 1-up at mobile.

### Whitespace Philosophy
The cream canvas + serif display + generous internal padding create an editorial pacing — Claude reads like a long-form magazine column rather than a marketing template. Whitespace between bands stays uniform at 96px; whitespace inside cards is generous (32px), letting type breathe.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, sub-nav, occasionally on cards |
| Cream card | `{colors.surface-card}` background — no shadow | Feature cards, content cards |
| Dark surface card | `{colors.surface-dark}` background — no shadow | Code editor mockups, model showcase cards |
| Subtle drop shadow | Faint shadow at low alpha | Hover-elevated states (the system uses `0 1px 3px rgba(20,20,19,0.08)` rarely) |

The elevation philosophy is **color-block first, shadow rare**. Most depth comes from the cream-vs-dark surface contrast. Shadows are minimal. The dark surface mockups have their own internal product chrome (code editor scrollbars, line numbers, syntax highlighting) which adds detail without needing external shadows.

### Decorative Depth
- The Anthropic spike-mark glyph (4-spoke radial asterisk) appears as a small black mark in the brand wordmark and inline as a content marker.
- Code editor mockups carry their own internal depth: syntax-highlighted text in muted blues / oranges / grays, line numbers in `{colors.muted-soft}`, status bars at the bottom in `{colors.surface-dark-elevated}`.
- Some hero illustrations use simple line-art with coral and dark-navy strokes on cream — minimal, hand-drawn-feeling, never photorealistic.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Reserved for badge accents and tiny dropdowns |
| `{rounded.sm}` | 6px | Small inline buttons, dropdown items |
| `{rounded.md}` | 8px | Standard CTA buttons, text inputs, category tabs |
| `{rounded.lg}` | 12px | Content cards (feature, pricing, code-window, model-comparison) |
| `{rounded.xl}` | 16px | Hero illustration container, the larger marquee components |
| `{rounded.pill}` | 9999px | Badge pills, "NEW" tags |
| `{rounded.full}` | 9999px / 50% | Avatar substitutes, icon buttons |

### Photography & Illustrations
Claude's hero rarely uses photography. Instead it uses:
- Simple line-art illustrations with coral + dark-navy strokes on the cream canvas
- Code editor mockups (the dominant "hero" treatment on developer-focused pages)
- Terminal output mockups with monospace text on dark
- Model comparison cards (Opus / Sonnet / Haiku) with abstract geometric thumbnails

When photography is used (rare — mostly testimonials), avatars crop to perfect circles at 40px diameter.

## Components

### Top Navigation

**`top-nav`** — Cream nav bar pinned to the top of every page. 64px tall, `{colors.canvas}` background. Carries the Anthropic spike-mark + "Claude" wordmark at left, primary horizontal menu (Product, Solutions, Use Cases, Pricing, Research, Company) center-left, right-side cluster with "Sign in" text-link, "Try Claude" `{component.button-primary}` (coral). Menu items in `{typography.nav-link}` (StyreneB 14px / 500).

### Buttons

**`button-primary`** — The signature coral CTA. Background `{colors.primary}` (#cc785c), text `{colors.on-primary}` (white), type `{typography.button}` (StyreneB 14px / 500), padding 12px × 20px, height 40px, rounded `{rounded.md}` (8px). Active state `button-primary-active` darkens to `{colors.primary-active}` (#a9583e).

**`button-secondary`** — Cream button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px hairline border, same padding + height + radius as primary.

**`button-secondary-on-dark`** — Used over `{colors.surface-dark}` cards. Background `{colors.surface-dark-elevated}` (#252320), text `{colors.on-dark}`. Stays dark — the system never inverts to a light secondary on dark surfaces.

**`button-text-link`** — Inline text button, no background. Used for "Sign in" in the top nav and inline CTA links.

**`button-icon-circular`** — 36px circular icon button. Background `{colors.canvas}`, hairline border, ink-color icon. Used for carousel arrows, share, "view more".

**`text-link`** — Inline body links in `{colors.primary}` (the coral). Underlined on press; the coral inline link is one of the system's most distinctive small details.

### Cards & Containers

**`hero-band`** — Cream-canvas hero with a 6-6 grid: h1 + sub-headline + button row on the left, hero illustration card or product mockup card on the right. Vertical padding `{spacing.section}` (96px).

**`hero-illustration-card`** — A larger card holding the hero's right-side artifact — sometimes a coral-stroke line illustration on cream background, sometimes a dark code editor mockup. Background `{colors.canvas}` or `{colors.surface-dark}` depending on context, rounded `{rounded.xl}` (16px).

**`feature-card`** — Used in 3-up feature grids. Background `{colors.surface-card}` (#efe9de — slightly darker cream), rounded `{rounded.lg}` (12px), internal padding `{spacing.xl}` (32px). Carries a small icon at top, an `{typography.title-md}` headline, and a body description in `{typography.body-md}`.

**`product-mockup-card-dark`** — Dark navy card showing actual Claude product chrome (chat interface, code editor, agent controls). Background `{colors.surface-dark}`, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries text labels in `{colors.on-dark}` and product UI fragments below.

**`code-window-card`** — A specialized dark card showing a code editor with line numbers, syntax-highlighted code in `{typography.code}` (JetBrains Mono), and sometimes a "Run" button or terminal output panel below. Background `{colors.surface-dark}` with `{colors.surface-dark-soft}` for the inner code block, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). The signature visual element of Claude Code product pages.

**`model-comparison-card`** — Used on the homepage's "Which problem are you up against?" section comparing Opus / Sonnet / Haiku. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, internal padding `{spacing.xl}` (32px). Carries the model name, a short capability blurb, and a `{component.text-link}` to learn more.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries the plan name in `{typography.title-lg}` (StyreneB), price in `{typography.display-sm}` (Copernicus serif!), feature checklist in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier (typically "Pro" or "Team"). Background flips to `{colors.surface-dark}`, text inverts to `{colors.on-dark}`. The dark surface IS the featured-tier signal.

**`callout-card-coral`** — A full-bleed coral card carrying a major call-to-action. Background `{colors.primary}` (#cc785c), text `{colors.on-primary}` (white), rounded `{rounded.lg}`, padding `{spacing.xxl}` (48px). The coral surface IS the voltage; the CTA inside uses an inverted button style (cream/canvas button on coral).

**`connector-tile`** — Used on the connectors page's integration grid. Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding 20px. Each tile carries a logo at top, a `{typography.title-sm}` connector name, and a short description.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (8px), padding 10px × 14px, height 40px. 1px hairline border in `{colors.hairline}`.

**`text-input-focused`** — Focus state. Border thickens or shifts to `{colors.primary}` (coral) for emphasis. Carries a 3px coral-at-15%-alpha outer ring.

**`cookie-consent-card`** — Bottom-right floating dark cookie banner. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). One of the few places dark surface appears at small scale on cream pages.

### Tags / Badges

**`badge-pill`** — Small pill label used for category tags. Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.caption}` (13px / 500), rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-coral`** — Coral-fill badge for "NEW", "BETA", featured highlights. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption-uppercase}` (12px / 500 / 1.5px tracking), rounded `{rounded.pill}`, padding 4px × 12px.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Used in sub-nav rows on solutions / connectors pages. Inactive: transparent background, `{colors.muted}` text. Active: `{colors.surface-card}` background, `{colors.ink}` text. Padding 8px × 14px, rounded `{rounded.md}`.

### CTA / Footer

**`cta-band-coral`** — A pre-footer "Try Claude" CTA card. Full-width coral fill, white type, rounded `{rounded.lg}`, padding 64px. Carries an h2 in `{typography.display-sm}` (still serif!), a sub-line, and a cream-button CTA.

**`cta-band-dark`** — Alternative pre-footer band on developer-focused pages. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding 64px. Often pairs with a code-window card.

**`footer`** — Dark navy footer that closes every page. Background `{colors.surface-dark}` (#181715), text `{colors.on-dark-soft}`. 4-column link list at desktop covering Product / Company / Resources / Legal. Vertical padding 64px. The Anthropic spike-mark + "Anthropic" wordmark sits at the top in `{colors.on-dark}`. The footer never inverts.

## Do's and Don'ts

### Do
- Anchor every page on the cream canvas. Pure white reads as "any other AI tool"; the warm tint is the brand differentiator.
- Use Copernicus serif for every display headline. Pair with StyreneB sans body. Negative letter-spacing on display sizes is non-negotiable.
- Reserve `{colors.primary}` (coral) for primary CTAs and full-bleed `{component.callout-card-coral}` moments. Don't paint accent moments coral elsewhere.
- Use `{component.product-mockup-card-dark}` and `{component.code-window-card}` to show actual Claude product chrome. Don't paint marketing illustrations of code when you can show real code.
- Pair `{component.feature-card}` (cream) with `{component.product-mockup-card-dark}` (navy) in alternating bands. The cream-to-dark rhythm is the brand's pacing mechanism.
- Use the Anthropic spike-mark glyph as the brand wordmark prefix. Never invert the mark to white-on-dark within the wordmark itself.
- Apply `{spacing.section}` (96px) between major bands.

### Don't
- Don't use cool grays or pure white for canvas. Cream is the brand.
- Don't bold serif display weight. Copernicus at 700 reads as bombastic; the system stays at 400.
- Don't use cool blue or saturated cyan as a brand accent. The coral is the brand voltage.
- Don't put coral everywhere. The coral is scarce on individual elements and generous only on full-bleed coral callout cards.
- Don't use Inter for display headlines. The serif character is the brand voice.
- Don't repeat the same surface mode in two consecutive bands. The pacing alternates: cream → cream-card → dark-mockup → cream → coral-callout → dark-footer.
- Don't add hover state styling beyond what the system already encodes — primary darkens on press; nothing else changes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→32px; hero-illustration-card stacks below content; feature grids 1-up; connector tiles 2-up; pricing 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal but tightens; feature cards 2-up; connector tiles 3-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; 4-up or 6-up connector tiles; 3-up pricing tiers |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` at exactly 36 × 36 — slightly under WCAG 44 but visually centered.
- `{component.text-input}` height is 40px.
- Connector tile entire card area is tappable; effective tap area >> 44px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen cream sheet.
- Hero band's 6-6 grid collapses to single-column on mobile — h1 + sub-head + buttons first, then the illustration / mockup card below.
- Feature grids reduce columns rather than scaling cards down.
- Pricing tier cards collapse 4 → 2 → 1; featured-tier dark surface stays visually distinct at every breakpoint.
- Code-window cards retain code legibility at every breakpoint by allowing horizontal scroll within the card rather than wrapping code lines.

### Image Behavior
- Code blocks inside dark mockups stay at fixed font-size; horizontal scroll on mobile rather than wrapping.
- Hero illustrations scale proportionally; line-art strokes thin slightly on mobile.
- Avatar photos in testimonials crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.feature-card}`, `{component.code-window-card}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Copernicus serif 400 with negative tracking. Body stays StyreneB / Inter 400. The split is unbreakable.
6. Cream + coral + dark navy is the trinity. Don't introduce a fourth surface tone (no purple cards, no green sections).
7. When in doubt about emphasis: bigger Copernicus serif before bolder weight.

## Known Gaps

- Copernicus and StyreneB are licensed Anthropic typefaces and not available as public web fonts. Substitutes (Tiempos Headline / Cormorant Garamond / EB Garamond for serif; Inter / Söhne for sans) are documented in the typography section.
- The Anthropic radial-spike-mark is a brand glyph rendered as inline SVG; it's not formalized as a system token here. Treat it as a logo asset.
- Animation and transition timings (chat message reveal, code block typewriter effect on the homepage, agentic-flow diagram animations) are not in scope.
- Form validation states beyond `{component.text-input-focused}` are not extracted — error / success states would need a sign-up or feedback flow to confirm.
- The actual Claude product surface (claude.ai chat interface) shares some tokens with the marketing site but adds many product-specific components (chat bubbles, message tools, file upload chips, conversation history sidebar) that are out of scope for this marketing-surface document.
- The "agent" / "computer use" demo cards on certain pages display animated Claude controlling a browser — the static screenshot doesn't fully capture the animation chrome.
```