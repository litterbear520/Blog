// 《工具边界》选项 1：整个商品目录放进上下文。场景图，从 lesson 技能的 scene-template.svg 改起。
// 和 toolBoundaryOption2 布局完全相同，只换 Agent 的打算和强调线指向的地方；类名见 ./index.js。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-boundary-option-1-title tool-boundary-option-1-desc">
  <title id="tool-boundary-option-1-title">选项 1：整个目录放进上下文</title>
  <desc id="tool-boundary-option-1-desc">这张图说明第一个选项：顾客在对话里问有没有 200 美元以内的双人帐篷，Agent 打算先把整个商品目录读一遍，再自己挑出合适的。</desc>
  <defs>
    <marker id="tool-boundary-option-1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 左：对话窗口 -->
  <rect class="s-window" x="40" y="40" width="320" height="300" rx="12"/>
  <path class="s-bar" d="M40.5,72 V52 Q40.5,40.5 52,40.5 H348 Q359.5,40.5 359.5,52 V72 Z"/>
  <line class="divider" x1="40" y1="72" x2="360" y2="72"/>
  <text class="t-who" x="56" y="61">对话</text>

  <rect class="s-bubble-user" x="136" y="88" width="208" height="68" rx="10"/>
  <text class="t-who" x="152" y="110">顾客</text>
  <text class="t-msg" x="152" y="130">有没有 200 美元以内的</text>
  <text class="t-msg" x="152" y="148">双人帐篷？</text>

  <rect class="s-bubble-agent" x="56" y="172" width="232" height="68" rx="10"/>
  <text class="t-who" x="72" y="194">Agent</text>
  <text class="t-msg" x="72" y="214">我先把整个目录读一遍，</text>
  <text class="t-msg" x="72" y="232">再挑出合适的。</text>

  <rect class="s-card" x="56" y="288" width="288" height="36" rx="8"/>
  <text class="t-note" x="72" y="311">输入消息…</text>

  <!-- 右：商品目录，卡片写真实的商品名和价格。第六张卡淡化，表示目录远不止这几件 -->
  <rect class="s-window" x="440" y="40" width="288" height="300" rx="12"/>
  <path class="s-bar" d="M440.5,72 V52 Q440.5,40.5 452,40.5 H716 Q727.5,40.5 727.5,52 V72 Z"/>
  <line class="divider" x1="440" y1="72" x2="728" y2="72"/>
  <text class="t-who" x="456" y="61">商品目录</text>

  <rect class="s-card" x="456" y="88" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="114">双人徒步帐篷</text>
  <text class="t-sub" x="468" y="134">149 美元</text>
  <rect class="s-card" x="592" y="88" width="120" height="64" rx="8"/>
  <text class="t-who" x="604" y="114">双灶头露营炉</text>
  <text class="t-sub" x="604" y="134">64.5 美元</text>
  <rect class="s-card" x="456" y="168" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="194">保暖睡袋</text>
  <text class="t-sub" x="468" y="214">89 美元</text>
  <rect class="s-card" x="592" y="168" width="120" height="64" rx="8"/>
  <text class="t-who" x="604" y="194">自充气睡垫</text>
  <text class="t-sub" x="604" y="214">59 美元</text>
  <rect class="s-card" x="456" y="248" width="120" height="64" rx="8"/>
  <text class="t-who" x="468" y="274">露营杯</text>
  <text class="t-sub" x="468" y="294">9 美元</text>
  <rect class="s-card s-dim" x="592" y="248" width="120" height="64" rx="8"/>
  <text class="t-sub" x="652" y="284" text-anchor="middle">还有很多…</text>

  <!-- 唯一的强调：Agent 的打算连到整个目录，底部标签写这是哪个选项 -->
  <path class="s-leader" d="M288,206 C344,206 380,190 432,190" marker-end="url(#tool-boundary-option-1-arrow)"/>
  <rect class="n-option" x="184" y="364" width="400" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">选项 1：整个目录放进上下文</text>
</svg>
`;
