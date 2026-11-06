// 《Super-agent 设计探索》：存算分离与执行环境解耦，照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 虚线以上是云端：Agent Loop（唯一强调）和 Session 数据库双向连通；虚线以下是三类执行环境，各跑一个端侧 daemon。
export default `<svg viewBox="0 0 768 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-decouple-title super-agent-decouple-desc">
  <title id="super-agent-decouple-title">存算分离与执行环境解耦：Agent Loop 与持久化状态在云端分离，并通过端侧 daemon 按需接入各类执行环境</title>
  <desc id="super-agent-decouple-desc">这张图说明云端的 Agent Loop 是无状态的弹性容器，状态持久化在另一边的 Session 数据库里，两者双向连通；虚线下方，Agent Loop 分别接入个人开发机、云端托管 / 按需环境和间歇在线的个人设备，它们各自运行端侧 daemon。</desc>
  <defs>
    <marker id="super-agent-decouple-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 云端和端侧的分界 -->
  <line class="divider" x1="40" y1="152" x2="728" y2="152" stroke-dasharray="5 4"/>

  <!-- Agent Loop ↔ Session 数据库 -->
  <path class="arrow" d="M353,76 H435" marker-start="url(#super-agent-decouple-arrow)" marker-end="url(#super-agent-decouple-arrow)"/>

  <!-- Agent Loop 向下穿过分界，分到三类执行环境 -->
  <path class="arrow" d="M240,112 V172"/>
  <path class="arrow" d="M240,172 H140 Q132,172 132,180 V203" marker-end="url(#super-agent-decouple-arrow)"/>
  <path class="arrow" d="M240,172 H628 Q636,172 636,180 V203" marker-end="url(#super-agent-decouple-arrow)"/>
  <path class="arrow" d="M384,172 V203" marker-end="url(#super-agent-decouple-arrow)"/>

  <!-- 云端 -->
  <rect class="n-process em" x="128" y="40" width="224" height="72" rx="8"/>
  <text class="t-name" x="240" y="70" text-anchor="middle">Agent Loop</text>
  <text class="t-sub t-info" x="240" y="92" text-anchor="middle">云端无状态弹性容器</text>

  <rect class="n-neutral" x="436" y="40" width="204" height="72" rx="8"/>
  <text class="t-name" x="538" y="70" text-anchor="middle">Session 数据库</text>
  <text class="t-sub" x="538" y="92" text-anchor="middle">持久化状态存储</text>

  <!-- 端侧 -->
  <rect class="n-neutral" x="40" y="204" width="184" height="72" rx="8"/>
  <text class="t-name" x="132" y="234" text-anchor="middle">个人开发机</text>
  <text class="t-sub" x="132" y="256" text-anchor="middle">端侧 daemon</text>

  <rect class="n-neutral" x="292" y="204" width="184" height="72" rx="8"/>
  <text class="t-name" x="384" y="234" text-anchor="middle">云端托管 / 按需环境</text>
  <text class="t-sub" x="384" y="256" text-anchor="middle">端侧 daemon</text>

  <rect class="n-neutral" x="544" y="204" width="184" height="72" rx="8"/>
  <text class="t-name" x="636" y="234" text-anchor="middle">间歇在线的个人设备</text>
  <text class="t-sub" x="636" y="256" text-anchor="middle">端侧 daemon</text>
</svg>
`;
