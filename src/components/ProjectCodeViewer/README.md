# 共用项目代码查看器

`ProjectCodeViewer` 是项目文件树、文件标签、代码区、Symbols 图标、复制、
差异显示、聚焦行、尺寸和滚动的唯一实现。不要为新的课程复制这套 JSX/CSS。
普通 Markdown 代码块仍使用 Docusaurus CodeBlock，本次不改变它的装饰或行为。

## 教学适配层

- `CodeWalkthrough`：项目快照演进、相邻步骤 diff、正文中的初始 step、可选 nav、预录终端。
  Python unittest 和 `/roadmap` 的 commerce 路线都走这一层。
- `McpWalkthrough`：完整项目的逐段讲解、步骤手风琴、首次引导和行定位。
  sampling、notifications、roots 三个演练都走这一层。

两者只管理教学流程及数据，不再各自实现文件树、标签、代码高亮或复制。
现有 MDX 的 import、variant、step、nav 保持兼容；不迁移或手改课程源码快照。

## 按需组合

```jsx
<ProjectCodeViewer
  files={snapshot}
  previousFiles={previousSnapshot}
  stepKey={navigationId}
  preferredFiles={['agent.py']}
  focusFile="agent.py"
  focusRanges={[[20, 30], [42]]}
/>
```

`files` 是完整的路径到源码映射。数据应当不可变；源码内容变化时传入新对象。
`previousFiles` 可省略：无前一个快照时不显示 diff 控件及状态标记。
`stepKey` 是本次导航的标识：变化时打开 `preferredFiles` 并保留其他仍存在的标签。
仅刷新 `files` 不会抢走读者手动选中的文件；删除的文件会被移出标签。
`focusRanges` 是从 1 起数、包含两端的当前源码行号；`[42]` 表示单行。
`focusFile` 可省略，此时范围作用于当前文件。手动选择回调 `onFileSelect` 可清除教学定位。
`className` 只用于教学层引导外环，不用于另建一套文件查看器样式。
`single` 为单文件模式：文件树、标签栏和小屏文件选择换成一条文件名顶栏，高度随代码撑开、不在卡内纵向滚动；
diff、聚焦行和右上角操作照旧。`CodeWalkthrough` 在所有步骤只出现过一个文件时自动传入，
按全部步骤而不是当前步骤判断，避免后续步骤加文件时侧栏突然出现。

所有模式默认拥有原样复制和 Symbols 图标；多文件模式另有固定响应式高度、文件内滚动和小屏文件选择。
复制只读取 `files[activeFile]`，不包含行号、差异标记或删除行；空文件也可复制。

## 视觉规则

聚焦行沿用 MCP 的 `rgba(109, 167, 236, 0.14)` 半透明蓝底，并使用蓝色内侧标记。
`--code-viewer-focus-bg` 和 `--code-viewer-focus-bar` 统一在此组件定义。
新增/删除依然使用站点绿/红 diff 令牌，不把不同语义都变成蓝色。
语法 token 与底色继续使用站点的 `usePrismTheme()`。

整个查看器只有一层 12px 外圆角与细边框，清除全局 pre 规则造成的内部重复圆角/边框。
代码操作叠放在右上角，不为按钮增加顶部空行；键盘可聚焦，触屏保留 44px 点击区。
多文件时整体高度含标签栏与小屏文件选择栏，短文件、空文件和关闭所有标签都不会改变外框高度；单文件模式按代码行数撑开。

## 验证

```bash
node --test src/components/ProjectCodeViewer/*.test.mjs \
  src/components/ProjectCodeViewer/SymbolsIcon/icons.test.mjs
CHROMIUM_BIN=/usr/bin/chromium node --test tools/code-viewer-layout.test.mjs
```

状态测试覆盖文件切换、关闭、步骤同步、删除、空文件、聚焦范围与 diff。
接入测试检查两个教学层不能重新引入自有查看器，并检查 docs/roadmap 的引用。
图标测试核验所有上游 SVG 的 Git blob；图标许可证与来源在 SymbolsIcon 中。
浏览器测试使用实际共用 CSS 的 DOM 夹具，覆盖深浅主题、尺寸、滚动和全局 pre 冲突。
它不是完整 Docusaurus 端到端测试；完整站点仍需 `npm run build` 与页面交互检查。
