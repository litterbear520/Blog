// 《Super-agent 设计探索》：双层架构，照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 左边是对外的 IM / GitHub / 邮件 / 日程，中间是 Router 层（唯一强调），右边是多个隔离的 Worker Session，两侧都是双向连线。
export default `<svg viewBox="0 0 768 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-two-layer-title super-agent-two-layer-desc">
  <title id="super-agent-two-layer-title">双层架构：Router 层统一负责路由与对外交互，多个 Worker Session 隔离并发执行任务</title>
  <desc id="super-agent-two-layer-desc">这张图说明 Router 层居中共享上下文、负责路由与交互：它一侧和 IM、GitHub、邮件 / 日程这些外部信道双向连通，另一侧和 Worker Session 1、2、3 双向连通，每个 Worker Session 各自隔离上下文。</desc>
  <defs>
    <marker id="super-agent-two-layer-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 左侧：Router 层 ↔ 竖线 → 三个外部信道 -->
  <path class="arrow" d="M169,156 H247" marker-start="url(#super-agent-two-layer-arrow)" marker-end="url(#super-agent-two-layer-arrow)"/>
  <path class="arrow" d="M208,156 V80 Q208,72 200,72 H169" marker-end="url(#super-agent-two-layer-arrow)"/>
  <path class="arrow" d="M208,156 V232 Q208,240 200,240 H169" marker-end="url(#super-agent-two-layer-arrow)"/>

  <!-- 右侧：Router 层 ↔ 竖线 → 三个 Worker Session -->
  <path class="arrow" d="M473,156 H551" marker-start="url(#super-agent-two-layer-arrow)" marker-end="url(#super-agent-two-layer-arrow)"/>
  <path class="arrow" d="M512,156 V80 Q512,72 520,72 H551" marker-end="url(#super-agent-two-layer-arrow)"/>
  <path class="arrow" d="M512,156 V232 Q512,240 520,240 H551" marker-end="url(#super-agent-two-layer-arrow)"/>

  <!-- 外部信道 -->
  <rect class="n-neutral" x="40" y="48" width="128" height="48" rx="8"/>
  <text class="t-msg" x="104" y="78" text-anchor="middle">IM</text>
  <rect class="n-neutral" x="40" y="132" width="128" height="48" rx="8"/>
  <text class="t-msg" x="104" y="162" text-anchor="middle">GitHub</text>
  <rect class="n-neutral" x="40" y="216" width="128" height="48" rx="8"/>
  <text class="t-msg" x="104" y="246" text-anchor="middle">邮件 / 日程</text>

  <!-- Router 层 -->
  <rect class="n-process em" x="248" y="104" width="224" height="104" rx="8"/>
  <text class="t-name" x="360" y="150" text-anchor="middle">Router 层</text>
  <text class="t-sub t-info" x="360" y="176" text-anchor="middle">共享上下文，路由与交互</text>

  <!-- Worker Session -->
  <rect class="s-card" x="552" y="40" width="176" height="64" rx="8"/>
  <text class="t-name" x="640" y="68" text-anchor="middle">Worker Session 1</text>
  <text class="t-sub" x="640" y="88" text-anchor="middle">隔离上下文</text>
  <rect class="s-card" x="552" y="124" width="176" height="64" rx="8"/>
  <text class="t-name" x="640" y="152" text-anchor="middle">Worker Session 2</text>
  <text class="t-sub" x="640" y="172" text-anchor="middle">隔离上下文</text>
  <rect class="s-card" x="552" y="208" width="176" height="64" rx="8"/>
  <text class="t-name" x="640" y="236" text-anchor="middle">Worker Session 3</text>
  <text class="t-sub" x="640" y="256" text-anchor="middle">隔离上下文</text>
</svg>
`;
