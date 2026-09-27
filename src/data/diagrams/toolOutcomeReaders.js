// 《写给模型的工具结果》：一次工具调用的结果分给模型和界面两个读者。
// 按 diagram-design 的规则画，类名见 ./index.js；改图时先生成独立草稿跑技能的 self_check 和几何校验。
export default `<svg viewBox="0 0 768 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-outcome-readers-title tool-outcome-readers-desc">
  <title id="tool-outcome-readers-title">工具结果的两个读者</title>
  <desc id="tool-outcome-readers-desc">这张图说明一次工具调用的结果 ToolOutcome 分给两个读者：result_text 作为 tool_result 进入模型的上下文，events 作为 SSE 事件交给界面渲染，is_error 和 blocked 标记失败与拦截。</desc>
  <defs>
    <marker id="tool-outcome-readers-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-outcome-readers-arrow-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <line class="arrow" x1="120" y1="88" x2="168" y2="88" marker-end="url(#tool-outcome-readers-arrow)"/>
  <rect class="mask" x="132" y="64" width="24" height="16" rx="2"/>
  <text class="t-label" x="144" y="76" text-anchor="middle">返回</text>

  <line class="arrow" x1="352" y1="88" x2="464" y2="88" marker-end="url(#tool-outcome-readers-arrow)"/>
  <rect class="mask" x="364" y="64" width="88" height="16" rx="2"/>
  <text class="t-mono" x="408" y="76" text-anchor="middle">tool_result</text>

  <line class="arrow" x1="352" y1="168" x2="464" y2="168" marker-end="url(#tool-outcome-readers-arrow)"/>
  <rect class="mask" x="376" y="144" width="64" height="16" rx="2"/>
  <text class="t-label" x="408" y="156" text-anchor="middle">SSE 事件</text>

  <rect class="n-process" x="24" y="60" width="96" height="56" rx="6"/>
  <text class="t-name" x="72" y="84" text-anchor="middle">执行器</text>
  <text class="t-mono" x="72" y="104" text-anchor="middle">handler</text>

  <rect class="n-focal" x="168" y="24" width="184" height="164" rx="6"/>
  <text class="t-name" x="260" y="46" text-anchor="middle">工具结果</text>
  <text class="t-mono" x="260" y="62" text-anchor="middle">ToolOutcome</text>
  <line class="divider" x1="168" y1="68" x2="352" y2="68"/>
  <text class="t-mono-strong" x="184" y="92">result_text</text>
  <line class="divider" x1="168" y1="108" x2="352" y2="108"/>
  <text class="t-mono" x="184" y="132">is_error · blocked</text>
  <line class="divider" x1="168" y1="148" x2="352" y2="148"/>
  <text class="t-mono-strong" x="184" y="172">events</text>

  <rect class="n-process" x="464" y="60" width="96" height="56" rx="6"/>
  <text class="t-name" x="512" y="84" text-anchor="middle">模型</text>
  <text class="t-sub" x="512" y="104" text-anchor="middle">读进上下文</text>

  <rect class="n-external" x="464" y="140" width="96" height="56" rx="6"/>
  <text class="t-name" x="512" y="164" text-anchor="middle">界面</text>
  <text class="t-sub" x="512" y="184" text-anchor="middle">调用方渲染</text>

  <text class="t-note" x="576" y="76">“已加购 p-100 x1。</text>
  <text class="t-note" x="576" y="92">购物车现有 1 件商品，</text>
  <text class="t-note" x="576" y="108">小计 149.00 USD。”</text>
  <text class="t-note" x="576" y="156"><tspan class="t-code">cart_update</tspan> 事件</text>
  <text class="t-note" x="576" y="172">带完整购物车：</text>
  <text class="t-note" x="576" y="188">每一行、件数、小计</text>
</svg>
`;
