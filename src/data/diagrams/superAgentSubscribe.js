// 《Super-agent 设计探索》：订阅与直通。照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 初始事件走虚线经 Router 层创建 Worker 并订阅（Slow Path），同一 Thread 的后续事件走蓝色实线直达 Worker Session（Fast Path）。
export default `<svg viewBox="0 0 768 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-subscribe-title super-agent-subscribe-desc">
  <title id="super-agent-subscribe-title">订阅与直通：初始事件经由 Router 层创建 Worker 并建立订阅，同一 Thread 的后续事件直接发往该 Worker</title>
  <desc id="super-agent-subscribe-desc">这张图说明同一 Thread 的初始事件走 Slow Path，先经过 Router 层创建 Worker 并建立订阅，再到达 Worker Session；之后的事件走 Fast Path，绕过 Router 层直接发往已订阅该 Thread 的 Worker Session。</desc>
  <defs>
    <marker id="super-agent-subscribe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="super-agent-subscribe-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- Slow Path：灰色虚线，事件框 → Router 层 → Worker Session -->
  <path class="arrow" d="M124,115 V74 H311" stroke-dasharray="5 4" marker-end="url(#super-agent-subscribe-arrow)"/>
  <path class="arrow" d="M497,74 H644 V115" stroke-dasharray="5 4" marker-end="url(#super-agent-subscribe-arrow)"/>
  <!-- Fast Path：蓝色实线直达 -->
  <path class="arrow loop em" d="M209,172 H559" marker-end="url(#super-agent-subscribe-loop)"/>

  <!-- 线上的胶囊标签 -->
  <rect class="s-card" x="148" y="60" width="140" height="28" rx="14"/>
  <text class="t-label" x="218" y="78" text-anchor="middle">初始事件 (Slow Path)</text>
  <rect class="n-process" x="304" y="158" width="160" height="28" rx="14"/>
  <text class="t-label t-info" x="384" y="176" text-anchor="middle">后续事件直通 (Fast Path)</text>

  <!-- 三个节点：同一 Thread 事件（灰框粗边，内缩 1px 的第二圈描边叠出 2px）、Router 层、Worker Session -->
  <rect class="n-neutral" x="40" y="116" width="168" height="80" rx="8"/>
  <rect class="zone" x="41" y="117" width="166" height="78" rx="7"/>
  <text class="t-name" x="124" y="150" text-anchor="middle">同一 Thread 事件</text>
  <text class="t-sub" x="124" y="176" text-anchor="middle">如同一 PR 或 IM 话题</text>

  <rect class="n-neutral" x="312" y="40" width="184" height="68" rx="8"/>
  <text class="t-name" x="404" y="69" text-anchor="middle">Router 层</text>
  <text class="t-sub" x="404" y="93" text-anchor="middle">创建 Worker 并建立订阅</text>

  <rect class="n-process em" x="560" y="116" width="168" height="80" rx="8"/>
  <text class="t-name" x="644" y="150" text-anchor="middle">Worker Session</text>
  <text class="t-sub t-info" x="644" y="176" text-anchor="middle">已订阅该 Thread</text>
</svg>
`;
