// 《Super-agent 设计探索》：两级过滤。照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 三条 Trigger 先过程序层策略（Fast Path）筛掉 Trigger 1，候选事件再交语义层策略（Slow Path）判断，只有 Trigger 3 开始路由。
export default `<svg viewBox="0 0 768 332" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-filter-title super-agent-filter-desc">
  <title id="super-agent-filter-title">两级过滤：先由程序层策略筛除大部分无关消息，再交由语义层策略判断</title>
  <desc id="super-agent-filter-desc">这张图说明三条 Trigger 先经过程序层策略（Fast Path）按群组范围和来源白名单拦截 Trigger 1、放行 Trigger 2 和 3，候选事件再由语义层策略（Slow Path）让 LLM 按提示词判断语义，静默 Trigger 2、触发 Trigger 3，最后只有 Trigger 3 开始路由。</desc>
  <defs>
    <marker id="super-agent-filter-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="super-agent-filter-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 连线先画：Trigger 1 灰色，其余蓝色；程序层到语义层两条，上面一条标“候选事件” -->
  <path class="arrow" d="M245,68 H275" marker-end="url(#super-agent-filter-arrow)"/>
  <path class="arrow loop em" d="M245,148 H275" marker-end="url(#super-agent-filter-loop)"/>
  <path class="arrow loop em" d="M245,228 H275" marker-end="url(#super-agent-filter-loop)"/>
  <path class="arrow loop em" d="M405,148 H463" marker-end="url(#super-agent-filter-loop)"/>
  <path class="arrow loop em" d="M405,228 H463" marker-end="url(#super-agent-filter-loop)"/>
  <path class="arrow loop em" d="M617,228 H647" marker-end="url(#super-agent-filter-loop)"/>
  <rect class="mask" x="408" y="126" width="52" height="14"/>
  <text class="t-label" x="434" y="138" text-anchor="middle">候选事件</text>

  <!-- 左列：三条 Trigger -->
  <rect class="s-card" x="36" y="40" width="208" height="56" rx="8"/>
  <text class="t-who" x="48" y="63">Trigger 1（非监听群消息）</text>
  <text class="t-sub" x="48" y="83">闲聊群: "中午去食堂还是点外卖？"</text>

  <rect class="s-card em" x="36" y="120" width="208" height="56" rx="8"/>
  <text class="t-who t-info" x="48" y="143">Trigger 2（用户群日常消息）</text>
  <text class="t-sub" x="48" y="163">用户群: "新版本界面看着挺清爽"</text>

  <rect class="n-process em" x="36" y="200" width="208" height="56" rx="8"/>
  <text class="t-who t-info" x="48" y="223">Trigger 3（用户群缺陷反馈）</text>
  <text class="t-who" x="48" y="243">用户群: "切换会话时偶发白屏"</text>

  <!-- 程序层策略（Fast Path） -->
  <rect class="n-process em" x="276" y="36" width="128" height="224" rx="8"/>
  <text class="t-name" x="340" y="66" text-anchor="middle">程序层策略</text>
  <text class="t-who t-info" x="340" y="86" text-anchor="middle">Fast Path</text>
  <rect class="s-card" x="288" y="100" width="104" height="64" rx="6"/>
  <text class="t-who" x="340" y="120" text-anchor="middle">确定性规则准入</text>
  <text class="t-sub" x="340" y="138" text-anchor="middle">群组范围 /</text>
  <text class="t-sub" x="340" y="154" text-anchor="middle">来源白名单</text>
  <text class="t-sub" x="340" y="210" text-anchor="middle">拦截 Trigger 1</text>
  <text class="t-who t-info" x="340" y="230" text-anchor="middle">放行 Trigger 2、3</text>
  <text class="t-note" x="340" y="288" text-anchor="middle">× 滤除无关来源（无需调用 LLM）</text>

  <!-- 语义层策略（Slow Path）：灰框粗边，用内缩 1px 的第二圈描边叠出 2px -->
  <rect class="n-neutral" x="464" y="116" width="152" height="144" rx="8"/>
  <rect class="zone" x="465" y="117" width="150" height="142" rx="7"/>
  <text class="t-name" x="540" y="146" text-anchor="middle">语义层策略</text>
  <text class="t-who" x="540" y="166" text-anchor="middle">Slow Path</text>
  <rect class="s-card" x="472" y="180" width="136" height="28" rx="6"/>
  <text class="t-sub" x="540" y="198" text-anchor="middle">LLM 按提示词判断语义</text>
  <text class="t-who" x="540" y="228" text-anchor="middle">静默 Trigger 2，</text>
  <text class="t-who" x="540" y="246" text-anchor="middle">触发 Trigger 3</text>
  <text class="t-note" x="540" y="288" text-anchor="middle">× 无需介入的讨论保持静默</text>

  <!-- 开始路由 -->
  <rect class="n-process em" x="648" y="200" width="84" height="56" rx="8"/>
  <text class="t-name" x="690" y="224" text-anchor="middle">开始路由</text>
  <text class="t-who t-info" x="690" y="244" text-anchor="middle">Trigger 3</text>
</svg>
`;
