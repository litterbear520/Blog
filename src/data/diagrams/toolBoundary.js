// 《工具的定义与边界》：工具边界两侧各自负责什么。
// 按 diagram-design 的规则画，类名见 ./index.js；改图时先生成独立草稿跑技能的 self_check 和几何校验。
export default `<svg viewBox="0 0 768 284" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-boundary-title tool-boundary-desc">
  <title id="tool-boundary-title">工具边界：模型判断与系统负责</title>
  <desc id="tool-boundary-desc">这张图说明工具边界的两侧：模型读工具定义、决定调用什么，调用以 tool_use 穿过边界交给执行器，执行器再调用后端，结果以 tool_result 回到模型。</desc>
  <defs>
    <marker id="tool-boundary-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-boundary-arrow-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <rect class="zone" x="16" y="40" width="328" height="228" rx="8"/>
  <path class="band" d="M16,72 V48 Q16,40 24,40 H336 Q344,40 344,48 V72 Z"/>
  <text class="t-band" x="180" y="61" text-anchor="middle">模型判断</text>
  <rect class="zone" x="424" y="40" width="328" height="228" rx="8"/>
  <path class="band" d="M424,72 V48 Q424,40 432,40 H744 Q752,40 752,48 V72 Z"/>
  <text class="t-band" x="588" y="61" text-anchor="middle">系统负责</text>

  <line class="boundary" x1="384" y1="40" x2="384" y2="276"/>
  <text class="t-label" x="384" y="28" text-anchor="middle">工具边界</text>

  <line class="arrow" x1="144" y1="124" x2="184" y2="124" marker-end="url(#tool-boundary-arrow)"/>
  <rect class="mask" x="156" y="100" width="16" height="16" rx="2"/>
  <text class="t-label" x="164" y="112" text-anchor="middle">读</text>

  <line class="arrow" x1="296" y1="124" x2="440" y2="124" marker-end="url(#tool-boundary-arrow)"/>
  <rect class="mask" x="352" y="100" width="64" height="16" rx="2"/>
  <text class="t-mono" x="384" y="112" text-anchor="middle">tool_use</text>

  <line class="arrow" x1="552" y1="124" x2="592" y2="124" marker-end="url(#tool-boundary-arrow)"/>

  <path class="arrow loop" d="M496,152 V180 Q496,188 488,188 H248 Q240,188 240,180 V152" marker-end="url(#tool-boundary-arrow-loop)"/>
  <rect class="mask" x="250" y="196" width="84" height="16" rx="2"/>
  <text class="t-mono" x="292" y="208" text-anchor="middle">tool_result</text>

  <rect class="n-neutral" x="32" y="96" width="112" height="56" rx="6"/>
  <text class="t-name" x="88" y="120" text-anchor="middle">工具定义</text>
  <text class="t-sub" x="88" y="140" text-anchor="middle">描述 + schema</text>

  <rect class="n-process" x="184" y="96" width="112" height="56" rx="6"/>
  <text class="t-name" x="240" y="120" text-anchor="middle">模型</text>
  <text class="t-sub" x="240" y="140" text-anchor="middle">读定义 · 做判断</text>

  <rect class="n-process" x="440" y="96" width="112" height="56" rx="6"/>
  <text class="t-name" x="496" y="120" text-anchor="middle">执行器</text>
  <text class="t-mono" x="496" y="140" text-anchor="middle">execute()</text>

  <rect class="n-external" x="592" y="96" width="144" height="56" rx="6"/>
  <text class="t-name" x="664" y="120" text-anchor="middle">后端</text>
  <text class="t-mono" x="664" y="140" text-anchor="middle">StorefrontBackend</text>

  <text class="t-note" x="32" y="236">搜什么关键词、顾客提了哪些条件</text>
  <text class="t-note" x="32" y="256">哪些结果符合目标、展示几件</text>
  <text class="t-note" x="440" y="236">检索和排序、参数校验和数量上限</text>
  <text class="t-note" x="440" y="256">记下这次会话见过哪些商品</text>
</svg>
`;
