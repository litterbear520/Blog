# 课程结构

## 文件

```text
<位置>/<课程名>/
├── index.mdx                 # 课程索引页
├── <分组名>/                 # 中文目录名，不带编号；课少时可以不分组
│   ├── index.md              # 分组页
│   └── 01-english-slug.mdx   # 课文；没用组件时存 .md
└── 评估/                     # 最后一个分组；不分组的课程，评估就是最后一篇课文
    ├── index.md
    └── 01-concept-assessment.mdx
```

- **课文文件名**：两位编号 + 英文 slug。编号只管排序，URL 里会去掉（`01-the-agent-loop.mdx` → `/the-agent-loop`）。
- **课文 frontmatter** 只写 `description`：一句话，读者在目录卡片上看到。H1 是中文课名，不带编号。
- **分组页**：frontmatter 写 `sidebar_position`、`description`，正文是 H1、一句话介绍、`<DocCardList />`，照 `roadmap/commerce-agents/一个文件，一段对话/index.md`。
- **路线里的专题**：就是项目目录下的一个分组，`sidebar_position` 排在各 Stage 之后；它的 `index.md` 可以多写一段“这个专题讲什么”和学习目标。

## 课程索引页

照 `docs/MCP/Model Context Protocol：高级主题/index.mdx`：

1. frontmatter：`sidebar_position`、`description`（一句话简介）。
2. H1 课程名，`<CourseHero level="入门|中级|高级" lessonCount={课文数}>` 包住同一句简介。讲某个开源项目时写 `sourceHref` / `sourceLabel`，指向项目仓库。
3. 一段课程描述：讲什么，从哪里讲到哪里。
4. `## 学习目标`：5–9 条，每条以动词开头、学完能检验（“解释……”“区分……”“判断什么时候……”）。
5. `## 前提条件`：读者要先会什么。
6. `## 课程内容` 加 `<DocCardList />`。

`lessonCount` 只数课文，不数概念评估。

## 概念评估

整门课只在最后放一篇，每课不单独出题。

- **页面**：frontmatter 写 `description: N 道单选题，正确率达到 70% 即通过。`；H1 是“<主题>概念评估”；正文只有一个组件：

  ```mdx
  import McpQuiz from '@site/src/components/McpQuiz';
  import QUESTIONS, { PASSING_PERCENTAGE } from '@site/src/data/<课程>Quiz';

  <McpQuiz questions={QUESTIONS} passingPercentage={PASSING_PERCENTAGE} />
  ```

- **题库** `src/data/<课程>Quiz.js`：`export const PASSING_PERCENTAGE = 70;`，默认导出 `[{ text, options, answer, explain }]`，`answer` 是正确选项在 `options` 里的下标。写了 `explain`，交卷后得分卡下面会逐题列出对错、正确答案和解析；题干、选项、解析里的 `反引号` 渲染成行内代码。
- **出题**：8–10 题，每课至少一题，按课的顺序排。题干写成场景（“您的执行器收到一个本次会话没出现过的 `product_id`，要把它加进购物车。它应该怎么做？”），考判断，不考背名词。每题 4 个选项，错误选项取课文里点破过的误解。
- **解析**：每题一两句，先说正确答案为什么对，再点破最容易选错的那一项。
