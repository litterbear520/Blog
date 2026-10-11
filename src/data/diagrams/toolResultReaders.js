// 《写给模型的工具结果》“工具结果的两个读者”：一次加购的产出分给界面和模型。场景图，从 lesson 技能的 scene-template.svg 改起。
// 左边是界面（顾客的话、按购物车事件画出的购物车、Agent 的回答），右上是执行器，右边是模型读到的那一句工具结果；
// 唯一的强调是模型读到的那一句连到 Agent 的回答。类名见 ./index.js。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-result-readers-title tool-result-readers-desc">
  <title id="tool-result-readers-title">一次加购，两个读者</title>
  <desc id="tool-result-readers-desc">这张图说明一次加购的产出怎样分给两个读者：执行器把完整的购物车作为购物车事件发给界面，界面画出购物车；模型读到的工具结果只有一句确认，加了一顶帐篷，购物车现有 1 件商品，小计 149 美元，它读完这一句接着回答顾客。</desc>
  <defs>
    <marker id="tool-result-readers-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-result-readers-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 左：界面。购物车卡片是界面按购物车事件画出来的 -->
  <rect class="s-window" x="40" y="40" width="368" height="352" rx="12"/>
  <path class="s-bar" d="M40.5,72 V52 Q40.5,40.5 52,40.5 H396 Q407.5,40.5 407.5,52 V72 Z"/>
  <line class="divider" x1="40" y1="72" x2="408" y2="72"/>
  <text class="t-who" x="56" y="61">界面</text>

  <rect class="s-bubble-user" x="224" y="92" width="168" height="56" rx="10"/>
  <text class="t-who" x="240" y="114">顾客</text>
  <text class="t-msg" x="240" y="136">就要这顶，加一顶。</text>

  <rect class="s-card" x="56" y="172" width="336" height="104" rx="8"/>
  <text class="t-who" x="72" y="196">购物车</text>
  <text class="t-msg" x="72" y="224">双人徒步帐篷 × 1</text>
  <text class="t-msg" x="376" y="224" text-anchor="end">149 美元</text>
  <line class="divider" x1="72" y1="240" x2="376" y2="240"/>
  <text class="t-sub" x="72" y="262">小计</text>
  <text class="t-sub" x="376" y="262" text-anchor="end">149 美元</text>

  <rect class="s-bubble-agent" x="56" y="300" width="240" height="56" rx="10"/>
  <text class="t-who" x="72" y="322">Agent</text>
  <text class="t-msg" x="72" y="344">加好了，购物车小计 149 美元。</text>

  <!-- 右上：执行器把这次调用的产出分成两份 -->
  <rect class="n-process" x="520" y="40" width="144" height="48" rx="6"/>
  <text class="t-name" x="592" y="69" text-anchor="middle">执行器</text>

  <path class="arrow" d="M520,64 C444,64 448,224 400,224" marker-end="url(#tool-result-readers-arrow)"/>
  <rect class="mask" x="428" y="108" width="72" height="16" rx="2"/>
  <text class="t-label" x="464" y="120" text-anchor="middle">购物车事件</text>

  <line class="arrow" x1="592" y1="88" x2="592" y2="204" marker-end="url(#tool-result-readers-arrow)"/>
  <rect class="mask" x="560" y="132" width="64" height="16" rx="2"/>
  <text class="t-label" x="592" y="144" text-anchor="middle">工具结果</text>

  <!-- 右：模型读到的只有这一句 -->
  <text class="t-who" x="456" y="196">模型读到的</text>
  <rect class="s-panel" x="456" y="212" width="264" height="96" rx="8"/>
  <text class="t-panel" x="476" y="244">已加购 p-100 x1。</text>
  <text class="t-panel" x="476" y="268">购物车现有 1 件商品，</text>
  <text class="t-panel" x="476" y="292">小计 149.00 USD。</text>
  <text class="t-note" x="456" y="336">只有这一句进入对话</text>

  <!-- 唯一的强调：模型读完这一句，接着回答顾客 -->
  <rect class="s-hl" x="452" y="208" width="272" height="104" rx="10"/>
  <rect class="s-hl" x="52" y="296" width="248" height="64" rx="12"/>
  <path class="s-leader" d="M452,284 C396,284 360,328 304,328" marker-end="url(#tool-result-readers-accent)"/>
</svg>
`;
