---
slug: a-field-guide-to-fable
title: 探索你的未知领域
date: 2026-07-04
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![A Field Guide to Fable: Finding Your Unknowns](/img/blog/hero-field-guide-fable.jpg)

## 前言

不知道大家有没有和我一样的感觉，在和 Claude 或 Codex 的协作中，虽然我作为主要决策者，但是我时常感到空虚，我似乎没有得到技术的提升，当一个问题所有人都能让 AI 轻松解决，那我的竞争力到底是什么。

在未知领域中和AI协作，我发现，遇到问题和困难，始终是AI自己去面对，这样的情况对我来说很危险，我没有纠错学习的过程，没有自己思考的过程，没有对代码库的深入理解，只有看似参与的同意某个操作。

并且我不确定这么做是不是行业内的最佳标准，有没有更好的设计思路。

我很迷茫，这个奇幻的时代，应该怎么办。

我很幸运，这篇文章给出了完美的答案。

原文出自：[A Field Guide to Fable: Finding Your Unknowns](https://x.com/trq212/status/2073100352921215386)
{/* truncate */}

**文章的开头提到：**

与 Claude Fable 5 共事，让我不断重温一个老道理：地图并非疆域本身。

地图，即待完成工作的表征，是我给予 Claude 的提示、技能和上下文。而领域则是工作实际发生的场所——代码库、现实世界及其真实约束。

地图与疆域之间的差异，我称之为未知因素。当 Claude 遇到未知因素时，它需要基于对我意图的最佳猜测做出决策。工作量越大，Claude 可能遇到的未知因素就越多。

Fable 是第一个让我觉得工作质量受限于我厘清其未知因素能力的模型。

重要的是，仅仅提前规划往往是不够的。你可能会在深入实施过程中发现未知领域，或者这些未知领域会提示你，实际上应该用完全不同的方式来解决这个问题。

我发现，使用 Fable 是一个迭代的过程，需要在实施之前、期间和之后不断发现我的未知领域。

我在这里制作了一些用于发现未知领域的[示例工具](https://thariqs.github.io/html-effectiveness/unknowns/)，但请务必回来建立直觉，了解何时使用它们。

## 了解你的未知领域

你的未知是什么？当我带着问题来找 Claude 时，我通常会从 4 个方面来拆解：

- 已知的已知：这基本上就是我提示词里的内容。我该告诉智能体我想要什么？
- 已知的未知：我还没弄明白什么，但我清楚自己还没弄明白？
- 未知的已知：有什么事情显而易见，我从未想过要写下来，但一旦看到就能认出来？
- 未知的未知：我完全没有考虑到什么？我缺乏哪些知识？我是否了解某件事能有多出色？

最优秀的智能体编程者往往拥有较少的未知因素。观察像 Boris 或 Jarred 这样的高手进行提示时，我明显感觉到他们对自己想要什么了如指掌。他们与代码库和模型行为都保持着深度同步。

但他们也假设存在未知因素。在很多方面，减少并规划你的未知因素，正是智能体编程的核心技能。但幸运的是，通过与 Claude 合作，你可以提升这项技能。

## 帮助 Claude 帮助你

指导 Claude 是一门微妙的平衡艺术。如果你过于具体，Claude 会严格遵循你的指令，即便适时调整方向可能更为恰当。如果你过于模糊，Claude 往往会根据行业最佳实践做出选择和假设，而这些可能并不适合你的任务。

当你没有考虑到未知因素时，你会两头落空。你既不知道前方何时会布满障碍，也不知道何时会一路畅通，却仍希望 Claude 能随机应变。

Claude 能帮你更快地发现未知领域。它能极速检索你的代码库和互联网信息，对大多数主题的了解也远超常人。同时，它还能从失败中更快地迭代改进。

这个过程中最关键的是让 Claude 了解你的出发点。例如，告诉它你当前思考到了哪个阶段；说明你对问题和代码库的熟悉程度；让它像思维伙伴一样与你协作。

我之前写过关于[使用 HTML 与 Claude 协作](https://x.com/trq212/status/2052809885763747935)的内容，在几乎所有这类场景中，HTML 制品都是可视化和呈现信息的最佳方式。

在这篇文章中，我详细介绍了自己用来发现这些未知领域的一些模式。虽然并非每次都会用到所有技巧，但这套方法合集确实很实用。

## 实施前准备

### 盲区排查

开始工作时，最有用的做法之一就是了解自己的盲区。例如，如果你在代码库的新部分编写功能，或使用 Claude 协助处理不熟悉的工作（如迭代设计），你很可能会有大量**未知的未知**。

<span style={{color: '#ff9900'}}>你可能不知道要问什么问题、不清楚理想状态该是什么样、不了解前人已做过哪些工作，也不明白该避开哪些陷阱。</span>

为此，你可以请 Claude 帮你找出那些"未知的未知"，并向你解释清楚。我喜欢直接用"盲点排查"和"未知的未知"这两个词。通常，向它说明你的身份背景和知识储备至关重要。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I'm working on adding a new auth provider but I know nothing about the auth modules in this codebase. Can you do a blindspot pass to help me figure out my relevant unknown unknowns and help me prompt you better.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我正在尝试添加一个新的认证提供商，但我不了解这个代码库中的认证模块。你能帮我做一次盲点排查，找出我相关的未知未知，并帮助我更好地向你提问吗？
```

</TabItem>
</Tabs>

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I don’t know what color grading is but I need to grade this video. Can you teach me to understand my unknown unknowns about color grading, so that I can prompt better?
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我不知道什么是调色，但我需要给这段视频调色。你能教我了解我在调色方面的未知未知，这样我就能更好地提问吗？
```

</TabItem>
</Tabs>

### 头脑风暴与原型设计

当我在充满“未知的已知”的领域工作时——涉及那些只有亲眼所见才能定义的判断标准——我喜欢请 Claude 与我一起头脑风暴和制作原型。

在原型设计早期识别并明确表达“未知的已知”极为重要，因为在实施阶段才发现它们可能代价（相对）高昂。功能或规格上的微小变化可能导致代码实现方式截然不同，而你的智能体也更难撤销之前的修改。

例如，你可能只是想看看在框架中添加一个按钮的效果，而无需连接后端路由或在前端维护额外状态。

视觉设计对我来说是难以清晰表达的东西，但当我看到它时，我就知道我想要什么。在这种情况下，我会要求提供几种针对某个设计成果的方案。

我几乎每次编码开始时都会先进行探索或头脑风暴阶段。这有助于我带着明确意图来界定项目范围。Claude 常常能发现我可能忽略的高价值方法，但有时也会只见树木不见森林。头脑风暴能防止我将范围设定得过窄或过宽。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I want a dashboard for this data but I have no visual taste and don't know what's possible. Make me an HTML page with 4 wildly different design directions so I can react to them.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我需要为这些数据做一个仪表盘，但我缺乏审美眼光，也不清楚有哪些可能性。请制作一个包含 4 种截然不同设计方向的 HTML 页面，这样我就能针对它们给出反馈。
```

</TabItem>
</Tabs>

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Before wiring anything up, make a single HTML file mocking the new editor toolbar with fake data. I want to react to the layout before you touch the real app.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
在真正编写代码之前，先用假数据创建一个模拟新编辑器工具栏的独立 HTML 文件。我想在接触真实应用前先对布局方案做出反馈。
```

</TabItem>
</Tabs>

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Here's my rough problem: users churn after onboarding. Search the codebase and brainstorm 10 places we could intervene, from cheapest to most ambitious. I'll tell you which ones resonate.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我目前面临一个棘手的问题：用户在新手引导后流失率很高。请搜索代码库并头脑风暴出 10 个我们可以介入的环节，从成本最低到最具雄心。我会告诉你哪些方案值得采纳。
```

</TabItem>
</Tabs>

### 访谈

一旦我进行了充分的头脑风暴，很可能仍存在未知因素。

在这种情况下，我让 Claude 就任何未知或模糊之处对我进行访谈。当你要求 Claude 访谈时，请尽量提供问题的背景信息以引导其提问方向。以下是一些示例。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Interview me one question at a time about anything ambiguous, prioritize questions where my answer would change the architecture.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
请逐一就任何模糊之处对我进行访谈，优先提出那些我的回答会改变架构设计的问题。
```

</TabItem>
</Tabs>

### 提供参考

有时你无法详细描述自己想要什么。例如，你可能缺乏相关术语，或者问题过于复杂，需要花费很长时间才能说清楚。

在这种情况下，最佳答案就是提供参考。虽然你可以附上图表、文档或图片，但最理想的参考材料始终是源代码。

如果你有一个以特定方式实现某些功能的库，或者某个你非常喜欢的设计组件，只需将 Fable 指向该文件夹，告诉它要查找什么内容——即使这些内容是用不同语言编写的也没关系。

这也是 Claude Design 的工作方式。你不需要手动上传文件（尽管你也可以这么做）。你可以指向网站上你喜欢的某个模块，它不仅能读取截图，还能读取底层代码。这能提供关于标记、结构以及组件实际构建方式的更丰富细节。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
This Rust crate in vendor/rate-limiter implements the exact backoff behavior I want. Read it and reimplement the same semantics in our TypeScript API client.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
vendor/rate-limiter 中的这个 Rust crate 实现了我想要的精确退避行为。请阅读它，并在我们的 TypeScript API 客户端中重新实现相同的语义。
```

</TabItem>
</Tabs>

### 实施方案

当我自认为已准备好实施时，我倾向于让 Claude 为我制定一份实施计划，重点审查那些最可能变动的部分，例如数据模型、类型接口或用户体验流程。这样 Claude 就能揭示出我实际可能需要调整的内容。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Write an implementation plan in HTML, but lead with the decisions I'm most likely to tweak with: data model changes, new type interfaces, and anything user-facing. Bury the mechanical refactoring at the bottom, I trust you on that part.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
请用 HTML 编写一份实施计划，但优先列出我最可能调整的决策项：数据模型变更、新增类型接口，以及所有面向用户的内容。将机械性的重构工作置于末尾，这部分我信任你的判断。
```

</TabItem>
</Tabs>

## 实施过程中

### 实现说明

当我对计划感到满意后，我会新建一个会话，并将相关工件传递给提示词。例如，我可能会传入一个规格文件和一个原型，然后让智能体去实现它。

但事实是，无论你做多少规划，总会有未知的未知因素潜伏其中。智能体在运行过程中可能会因为发现代码中的边界情况而需要采取不同的策略。

我要求 Claude Code 维护一个临时的`implementation-notes.md`（或.html）文件，记录它所做的决策，以便我们能在下一次尝试中吸取经验。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Keep an implementation-notes.md file. If you hit an edge case that forces you to deviate from the plan, pick the conservative option, log it under 'Deviations', and keep going.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
保留一份 `implementation-notes.md` 文件。如果遇到迫使你偏离原计划的边缘情况，请选择保守方案，将其记录在“偏差”部分下，然后继续推进。
```

</TabItem>
</Tabs>

## 实施后

### 推介与说明

交付产品时，最关键的一环莫过于获得支持与审批。在最终文档中构建提案与说明材料，有助于：

- 当评审者与你面临同样的未知领域时，能加速他们对方案的理解
- 当专家希望确认你已考虑到他们预判的未知因素及常见失败点时，能加快审批流程

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
Package the prototype, the spec, and the implementation notes into a single doc I can drop in Slack to get buy-in. Lead with the demo GIF.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
将原型、规格说明和实现笔记打包成一个文档，方便我直接丢到 Slack 里争取支持。开头放上演示 GIF。
```

</TabItem>
</Tabs>

### 测验

经过长时间的工作会话，Claude 可能完成了比我意识到的更多的事情。阅读代码差异只能让我对发生的事情有一个浅显的理解，因为很多行为将取决于现有的代码路径。

让 Claude 在提供大量背景信息后，通过提问来测试我对变更的理解，这有助于我掌握实际变化。只有当我完美通过测试后，我才会进行合并。

示例提示：

<Tabs groupId="prompt-lang">
<TabItem value="en" label="English">

```text
I want to make sure I understand everything that's happened in this change. Give me a HTML report on the changes for me to read and understand with context, intuition, what was done, etc. and a quiz at the bottom on the changes that I must pass.
```

</TabItem>
<TabItem value="zh" label="中文">

```text
我想确保自己完全理解这次变更中发生的一切。请给我一份关于这些变更的 HTML 报告，包含上下文、直观理解、具体操作等内容，并在底部附上一份我必须通过的变更测验。
```

</TabItem>
</Tabs>

## 这一切是如何实现的：推出 Fable

Fable 的发布视频完全由 Claude Code 剪辑完成。这对我来说是个全新领域，我绝非专家。

所以我从已知的部分入手。我知道 Claude 能通过代码编辑视频并进行转录，但不确定其准确性是否足够。于是我请 Claude 解释像 Whisper 这样的转录技术如何运作，以及我能否用 ffmpeg 精准剪掉"嗯"之类的语气词或长时间停顿。

我希望 Claude 能创建一个与我说话节奏同步的 UI，但不确定它能否做到，于是我让 Claude 用 Remotion 和转录文本制作一个原型视频，看看是否可行。

最终，视频本身看起来有些暗淡，我知道这是调色的结果，但当时我并不真正理解调色是什么。我的第一次尝试是让 Claude 生成几个不同版本供我挑选，但我意识到自己根本不知道调色中的“好”是什么样。于是，我转而让 Claude 教我调色知识，以此发现自己的未知领域。

你可以在[这里](https://x.com/trq212/status/2064826394589442448/video/1)观看更深入的讲解。


## 地图与疆域相匹配

模型越强大，采用正确方法能实现的成果就越多。当长期任务出现偏差时，很可能需要花更多时间明确未知因素，或制定一个允许 Claude 在未知中即兴发挥的实施计划。

每一次解释、头脑风暴、访谈、原型制作和参考借鉴，都是在问题变得代价高昂之前，以低成本发现自身认知盲区的有效途径。

所以，开始你的下一个项目时，先让 Claude 帮你找出未知领域。