// 《Super-agent 设计探索》：整体系统架构，照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 事件经两级过滤进入 Router 层，再分给各 Worker Session；Session 数据库持久化全部状态，Watchdog 在外部监控。
export default `<svg viewBox="0 0 768 392" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-arch-title super-agent-arch-desc">
  <title id="super-agent-arch-title">Super-agent 整体系统架构，标号 [2] 至 [6] 对应下文第 2 至第 6 节</title>
  <desc id="super-agent-arch-desc">这张图说明环境事件经过两级过滤进入共享上下文的 Router 层，Router 层一边经多信道对外交互，一边把任务分给隔离上下文的 Worker Session（两级过滤也可以订阅直通 Worker Session），Worker Session 通过轻量 daemon 接入执行环境，Router 层和各 Worker Session 的状态都写入 Session 数据库，Watchdog 在外部监控并负责自愈。</desc>
  <defs>
    <marker id="super-agent-arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="super-agent-arch-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 第一行的横向主链：环境事件 → 两级过滤 → Router 层 → 多信道交互 -->
  <path class="arrow" d="M220,80 H243" marker-end="url(#super-agent-arch-arrow)"/>
  <path class="arrow" d="M356,80 H383" marker-end="url(#super-agent-arch-arrow)"/>
  <path class="arrow" d="M560,80 H583" marker-end="url(#super-agent-arch-arrow)"/>

  <!-- Router 层分出两个 Worker Session -->
  <path class="arrow" d="M440,120 V140 Q440,148 432,148 H416 Q408,148 408,156 V175" marker-end="url(#super-agent-arch-arrow)"/>
  <path class="arrow" d="M504,120 V140 Q504,148 512,148 H596 Q604,148 604,156 V175" marker-end="url(#super-agent-arch-arrow)"/>

  <!-- Router 层从左边绕到两级过滤下方，落到 Session 数据库；和订阅直通交叉处拱起 -->
  <path class="arrow" d="M384,100 H378 Q370,100 370,108 V128 Q370,136 362,136 H300 Q292,136 292,144 V200 a8,8 0 0,0 0,16 V287" marker-end="url(#super-agent-arch-arrow)"/>

  <!-- 订阅直通：两级过滤直接进 Worker Session 1 -->
  <path class="arrow loop" d="M268,112 V200 Q268,208 276,208 H319" stroke-dasharray="5 4" marker-end="url(#super-agent-arch-loop)"/>
  <text class="t-label t-info" x="258" y="164" text-anchor="end">订阅直通</text>

  <!-- 两个 Worker Session 写入 Session 数据库；Worker Session N 接入执行环境 -->
  <path class="arrow" d="M408,240 V287" marker-end="url(#super-agent-arch-arrow)"/>
  <path class="arrow" d="M540,240 V287" marker-end="url(#super-agent-arch-arrow)"/>
  <path class="arrow" d="M656,240 V287" marker-end="url(#super-agent-arch-arrow)"/>

  <!-- Watchdog 在外部监控 Session 数据库 -->
  <path class="arrow" d="M188,320 H251" stroke-dasharray="5 4" marker-end="url(#super-agent-arch-arrow)"/>

  <!-- 第一行 -->
  <rect class="n-neutral" x="40" y="48" width="180" height="64" rx="8"/>
  <text class="t-name" x="130" y="76" text-anchor="middle">[3] 环境事件 (Trigger)</text>
  <text class="t-sub" x="130" y="96" text-anchor="middle">群消息 / PR / CI</text>

  <rect class="n-neutral" x="244" y="48" width="112" height="64" rx="8"/>
  <text class="t-name" x="300" y="76" text-anchor="middle">[3] 两级过滤</text>
  <text class="t-sub" x="300" y="96" text-anchor="middle">Fast / Slow Path</text>

  <rect class="n-process em" x="384" y="40" width="176" height="80" rx="8"/>
  <text class="t-name" x="472" y="74" text-anchor="middle">[2] Router 层</text>
  <text class="t-sub t-info" x="472" y="98" text-anchor="middle">共享上下文，全局路由与交互</text>

  <rect class="n-neutral" x="584" y="48" width="144" height="64" rx="8"/>
  <text class="t-name" x="656" y="76" text-anchor="middle">[4] 多信道交互</text>
  <text class="t-sub" x="656" y="96" text-anchor="middle">IM / GitHub / 邮件</text>

  <!-- 第二行 -->
  <rect class="n-neutral" x="320" y="176" width="176" height="64" rx="8"/>
  <text class="t-name" x="408" y="204" text-anchor="middle">[2] Worker Session 1</text>
  <text class="t-sub" x="408" y="224" text-anchor="middle">隔离上下文</text>

  <rect class="n-neutral" x="516" y="176" width="176" height="64" rx="8"/>
  <text class="t-name" x="604" y="204" text-anchor="middle">[2] Worker Session N</text>
  <text class="t-sub" x="604" y="224" text-anchor="middle">隔离上下文</text>

  <!-- 第三行 -->
  <rect class="n-neutral" x="40" y="288" width="148" height="64" rx="8"/>
  <text class="t-name" x="114" y="316" text-anchor="middle">[6] Watchdog</text>
  <text class="t-sub" x="114" y="336" text-anchor="middle">外部监控与自愈</text>

  <rect class="n-neutral" x="252" y="288" width="308" height="64" rx="8"/>
  <text class="t-name" x="406" y="316" text-anchor="middle">[5] Session 数据库</text>
  <text class="t-sub" x="406" y="336" text-anchor="middle">持久化存储所有 Session 状态</text>

  <rect class="n-neutral" x="584" y="288" width="144" height="64" rx="8" stroke-dasharray="5 4"/>
  <text class="t-name" x="656" y="316" text-anchor="middle">[5] 执行环境</text>
  <text class="t-sub" x="656" y="336" text-anchor="middle">轻量 daemon 原地接入</text>
</svg>
`;
