// 《Super-agent 设计探索》：Thread 示例。照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 左边一条 IM 群话题、右边一条 GitHub Pull Request，各自三条连续的 Trigger 串成一条 Thread，最后一条加粗边。
export default `<svg viewBox="0 0 768 376" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-threads-title super-agent-threads-desc">
  <title id="super-agent-threads-title">Thread 示例：同一个 IM 话题或同一个 GitHub Pull Request 下的连续 Trigger 构成一条 Thread</title>
  <desc id="super-agent-threads-desc">这张图说明同一个 IM 群话题下的 Trigger #39、#40、#42 构成 Thread #08，同一个 GitHub Pull Request &#35;128 下的 Trigger #51、#54、#58 构成 Thread #15，每条 Thread 里的 Trigger 按时间先后相连。</desc>
  <defs>
    <marker id="super-agent-threads-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="super-agent-threads-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 两条 Thread 的外框：左蓝粗边，右灰框粗边（内缩 1px 的第二圈描边叠出 2px） -->
  <rect class="n-process em" x="40" y="40" width="324" height="296" rx="10"/>
  <rect class="n-neutral" x="404" y="40" width="324" height="296" rx="10"/>
  <rect class="zone" x="405" y="41" width="322" height="294" rx="9"/>

  <!-- 卡片之间的连线：左蓝右灰 -->
  <path class="arrow loop" d="M202,149 V175" marker-end="url(#super-agent-threads-loop)"/>
  <path class="arrow loop" d="M202,233 V259" marker-end="url(#super-agent-threads-loop)"/>
  <path class="arrow" d="M566,149 V175" marker-end="url(#super-agent-threads-arrow)"/>
  <path class="arrow" d="M566,233 V259" marker-end="url(#super-agent-threads-arrow)"/>

  <!-- Thread #08 (IM 群话题) -->
  <text class="t-name" x="202" y="74" text-anchor="middle">Thread #08 (IM 群话题)</text>
  <rect class="s-card" x="60" y="92" width="284" height="56" rx="6"/>
  <text class="t-who t-info" x="76" y="115">Trigger #39 (话题首条消息)</text>
  <text class="t-sub" x="76" y="135">张三: "切换会话时页面偶发白屏"</text>
  <rect class="s-card" x="60" y="176" width="284" height="56" rx="6"/>
  <text class="t-who t-info" x="76" y="199">Trigger #40 (话题回复)</text>
  <text class="t-sub" x="76" y="219">李四: "复现了，控制台报空指针异常"</text>
  <rect class="s-card em" x="60" y="260" width="284" height="56" rx="6"/>
  <text class="t-who t-info" x="76" y="283">Trigger #42 (话题回复)</text>
  <text class="t-who" x="76" y="303">张三: "@Agent 帮忙定位修复一下"</text>

  <!-- Thread #15 (GitHub Pull Request &#35;128) -->
  <text class="t-name" x="566" y="74" text-anchor="middle">Thread #15 (GitHub Pull Request &#35;128)</text>
  <rect class="s-card" x="424" y="92" width="284" height="56" rx="6"/>
  <text class="t-who" x="440" y="115">Trigger #51 (Pull Request 提交)</text>
  <text class="t-sub" x="440" y="135">Opened: "fix: 修复会话切换空指针"</text>
  <rect class="s-card" x="424" y="176" width="284" height="56" rx="6"/>
  <text class="t-who" x="440" y="199">Trigger #54 (CI 状态变更)</text>
  <text class="t-sub" x="440" y="219">CI Check: "unit-test 运行失败"</text>
  <rect class="s-card" x="424" y="260" width="284" height="56" rx="6"/>
  <rect class="zone" x="425" y="261" width="282" height="54" rx="5"/>
  <text class="t-who" x="440" y="283">Trigger #58 (代码审查评论)</text>
  <text class="t-who" x="440" y="303">Review: "这里需要补充空值判断测试"</text>
</svg>
`;
