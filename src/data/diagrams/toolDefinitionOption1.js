// 《写给模型的工具定义》选项 1：定义只写名字和参数类型。场景图，从 lesson 技能的 scene-template.svg 改起。
// 和 toolDefinitionOption2 布局完全相同：左边是模型读到的定义，右边是它发出的搜索和搜到的商品。类名见 ./index.js。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-definition-option-1-title tool-definition-option-1-desc">
  <title id="tool-definition-option-1-title">选项 1：定义只写名字和类型</title>
  <desc id="tool-definition-option-1-desc">这张图说明第一个选项：工具定义里只有名字和参数类型，模型只好猜筛选条件怎么用，把顾客没提的“评分 4.8 以上”也写进了筛选，那顶评分 4.6 的双人徒步帐篷因此被筛掉。</desc>
  <defs>
    <marker id="tool-definition-option-1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 上：顾客的问题 -->
  <rect class="s-bubble-user" x="264" y="40" width="240" height="64" rx="10"/>
  <text class="t-who" x="280" y="62">顾客</text>
  <text class="t-msg" x="280" y="88">有没有 200 美元以内的双人帐篷？</text>

  <!-- 左：模型读到的定义，只有名字和类型 -->
  <text class="t-who" x="40" y="140">模型读到的定义</text>
  <rect class="s-panel" x="40" y="152" width="320" height="188" rx="8"/>
  <text class="t-panel" x="60" y="184">search_products</text>
  <text class="t-panel" x="76" y="244">query</text>
  <text class="t-panel" x="148" y="244">string</text>
  <text class="t-panel" x="76" y="272">filters</text>
  <text class="t-panel" x="148" y="272">object</text>
  <text class="t-panel" x="76" y="324">limit</text>
  <text class="t-panel" x="148" y="324">integer</text>

  <!-- 右：模型发出的搜索，和搜到的商品 -->
  <text class="t-who" x="440" y="140">模型发出的搜索</text>
  <rect class="s-card" x="440" y="152" width="288" height="116" rx="8"/>
  <text class="t-msg" x="460" y="188">关键词</text>
  <text class="t-msg" x="548" y="188">帐篷</text>
  <text class="t-msg" x="460" y="216">价格</text>
  <text class="t-msg" x="548" y="216">≤ 200</text>
  <text class="t-msg" x="460" y="244">评分</text>
  <text class="t-msg" x="548" y="244">≥ 4.8</text>

  <text class="t-who" x="440" y="292">搜到的商品</text>
  <g class="s-dim">
    <rect class="s-card" x="440" y="300" width="288" height="40" rx="8"/>
    <text class="t-sub" x="456" y="324">双人徒步帐篷 · 4.6 分</text>
  </g>
  <text class="t-note" x="712" y="324" text-anchor="end">被筛掉了</text>

  <!-- 唯一的强调：没有说明的 filters 连到模型猜出来的那一条 -->
  <rect class="s-hl" x="68" y="256" width="136" height="24" rx="4"/>
  <rect class="s-hl" x="452" y="224" width="264" height="28" rx="4"/>
  <path class="s-leader" d="M204,268 C300,268 372,238 444,238" marker-end="url(#tool-definition-option-1-arrow)"/>
  <rect class="n-option" x="184" y="364" width="400" height="40" rx="8"/>
  <text class="t-name" x="384" y="390" text-anchor="middle">选项 1：定义只写名字和类型</text>
</svg>
`;
