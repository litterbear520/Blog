// 《失败也写成指令》“只说失败为什么不够”：后端知道睡袋卖完了，交回模型的结果却只有“加购失败”。场景图，
// 从 lesson 技能的 scene-template.svg 改起：左边是对话，右边是后端和模型读到的结果；唯一的强调是那句“加购失败”连到 Agent 没用的回答。
// 这是假设的写法，购物 Agent 实际交回的是带下一步的一句话（见消息流 toolErrorSoldOut）。类名见 ./index.js。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-error-bare-title tool-error-bare-desc">
  <title id="tool-error-bare-title">结果只写“加购失败”时</title>
  <desc id="tool-error-bare-desc">这张图说明结果只写“加购失败”时会发生什么：顾客要加购那款保暖睡袋，后端知道睡袋已经卖完，拒绝了加购；模型读到的工具结果却只有“加购失败”四个字，于是只能回答顾客“抱歉，出了点问题，请稍后再试”。</desc>
  <defs>
    <marker id="tool-error-bare-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-error-bare-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 左：对话 -->
  <rect class="s-window" x="40" y="40" width="368" height="352" rx="12"/>
  <path class="s-bar" d="M40.5,72 V52 Q40.5,40.5 52,40.5 H396 Q407.5,40.5 407.5,52 V72 Z"/>
  <line class="divider" x1="40" y1="72" x2="408" y2="72"/>
  <text class="t-who" x="56" y="61">对话</text>

  <rect class="s-bubble-user" x="176" y="96" width="216" height="56" rx="10"/>
  <text class="t-who" x="192" y="118">顾客</text>
  <text class="t-msg" x="192" y="140">就要那款保暖睡袋，加一个。</text>

  <rect class="s-bubble-agent" x="56" y="184" width="240" height="56" rx="10"/>
  <text class="t-who" x="72" y="206">Agent</text>
  <text class="t-msg" x="72" y="228">抱歉，出了点问题，请稍后再试。</text>

  <rect class="s-card" x="56" y="332" width="336" height="36" rx="8"/>
  <text class="t-note" x="72" y="355">输入消息…</text>

  <!-- 右：后端知道原因，结果里却只剩“失败” -->
  <rect class="s-card" x="456" y="64" width="264" height="88" rx="8"/>
  <text class="t-who" x="472" y="88">后端</text>
  <text class="t-msg" x="472" y="114">Drift 保暖睡袋 · 89 美元</text>
  <text class="t-sub" x="472" y="136">已卖完，拒绝这次加购</text>

  <line class="arrow" x1="588" y1="152" x2="588" y2="244" marker-end="url(#tool-error-bare-arrow)"/>
  <rect class="mask" x="556" y="180" width="64" height="16" rx="2"/>
  <text class="t-label" x="588" y="192" text-anchor="middle">交回结果</text>

  <text class="t-who" x="456" y="240">模型读到的</text>
  <rect class="s-panel" x="456" y="252" width="264" height="56" rx="8"/>
  <text class="t-panel" x="476" y="285">加购失败。</text>

  <!-- 唯一的强调：只有“失败”的结果，换来一句没用的回答 -->
  <rect class="s-hl" x="452" y="248" width="272" height="64" rx="10"/>
  <rect class="s-hl" x="52" y="180" width="248" height="64" rx="12"/>
  <path class="s-leader" d="M452,280 C384,280 372,212 304,212" marker-end="url(#tool-error-bare-accent)"/>
</svg>
`;
