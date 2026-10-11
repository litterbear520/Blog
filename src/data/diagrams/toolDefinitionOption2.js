// 《写给模型的工具定义》“把用法写进参数说明”一节的第二张：把用法写进定义。场景图，和 toolDefinitionOption1 布局完全相同：
// 定义多了描述和字段说明，搜索里不再有猜出来的条件，帐篷搜得出来。类名见 ./index.js。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-definition-option-2-title tool-definition-option-2-desc">
  <title id="tool-definition-option-2-title">写明用法：只放顾客说的条件</title>
  <desc id="tool-definition-option-2-desc">这张图说明写明用法时：工具定义写明返回什么，并说明筛选条件只放顾客明确提出的条件，模型的搜索里于是只有关键词“帐篷”和价格上限 200 美元，那顶双人徒步帐篷被搜了出来。</desc>
  <defs>
    <marker id="tool-definition-option-2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 上：顾客的问题 -->
  <rect class="s-bubble-user" x="264" y="40" width="240" height="64" rx="10"/>
  <text class="t-who" x="280" y="62">顾客</text>
  <text class="t-msg" x="280" y="88">有没有 200 美元以内的双人帐篷？</text>

  <!-- 左：模型读到的定义，多了描述和字段说明 -->
  <text class="t-who" x="40" y="140">模型读到的定义</text>
  <rect class="s-panel" x="40" y="152" width="320" height="188" rx="8"/>
  <text class="t-panel" x="60" y="184">search_products</text>
  <text class="t-panel" x="60" y="212">“返回 id、价格、评分和库存”</text>
  <text class="t-panel" x="76" y="244">query</text>
  <text class="t-panel" x="148" y="244">要搜索的关键词</text>
  <text class="t-panel" x="76" y="272">filters</text>
  <text class="t-panel" x="148" y="272">顾客明确提出的条件；</text>
  <text class="t-panel" x="148" y="296">猜测的放进 query</text>
  <text class="t-panel" x="76" y="324">limit</text>
  <text class="t-panel" x="148" y="324">1 到 8 条</text>

  <!-- 右：模型发出的搜索，和搜到的商品 -->
  <text class="t-who" x="440" y="140">模型发出的搜索</text>
  <rect class="s-card" x="440" y="152" width="288" height="116" rx="8"/>
  <text class="t-msg" x="460" y="188">关键词</text>
  <text class="t-msg" x="548" y="188">帐篷</text>
  <text class="t-msg" x="460" y="216">价格</text>
  <text class="t-msg" x="548" y="216">≤ 200</text>

  <text class="t-who" x="440" y="292">搜到的商品</text>
  <rect class="s-card" x="440" y="300" width="288" height="40" rx="8"/>
  <text class="t-sub" x="456" y="324">双人徒步帐篷 · 4.6 分</text>

  <!-- 唯一的强调：filters 的说明连到顾客明确说的那一条 -->
  <rect class="s-hl" x="68" y="256" width="280" height="48" rx="4"/>
  <rect class="s-hl" x="452" y="196" width="264" height="28" rx="4"/>
  <path class="s-leader" d="M348,280 C396,280 400,210 444,210" marker-end="url(#tool-definition-option-2-arrow)"/>
  <rect class="n-option" x="304" y="364" width="160" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">写明用法</text>
</svg>
`;
