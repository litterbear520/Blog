// 《写给模型的工具结果》“工具结果里留哪些字段”：搜索交回那顶帐篷时，后端记录里哪些字段写进结果。代码标注图，
// 从 lesson 技能的场景零件画起：左边墨色面板是原型店铺里那顶帐篷的记录（照 serialization.py 的 compact_product 分组，
// 留下的在上，去掉的几项挪到下面并淡化），右边两个标签；唯一的强调是框住去掉的几项。类名见 ./index.js。
export default `<svg viewBox="0 0 768 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-result-fields-title tool-result-fields-desc">
  <title id="tool-result-fields-title">帐篷的记录里，哪些字段写进工具结果</title>
  <desc id="tool-result-fields-desc">这张图说明搜索交回那顶双人徒步帐篷时，后端记录里的十六个字段怎样取舍：商品名、品牌、价格、评分、库存、属性和简介这些比较和推荐要用的字段写进工具结果；商品分类、图片地址和几个空字段模型推理用不上，不写进结果。</desc>
  <defs>
    <marker id="tool-result-fields-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-result-fields-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 左：后端交回的那顶帐篷的记录 -->
  <rect class="s-panel" x="40" y="40" width="432" height="400" rx="12"/>
  <text class="t-panel" x="64" y="72">{</text>
  <text class="t-panel" x="80" y="92">"product_id": "p-100",</text>
  <text class="t-panel" x="80" y="112">"title": "双人徒步帐篷",</text>
  <text class="t-panel" x="80" y="132">"brand": "ACME Basecamp",</text>
  <text class="t-panel" x="80" y="152">"price": 149.0,</text>
  <text class="t-panel" x="80" y="172">"currency": "USD",</text>
  <text class="t-panel" x="80" y="192">"rating": 4.6,</text>
  <text class="t-panel" x="80" y="212">"review_count": 812,</text>
  <text class="t-panel" x="80" y="232">"in_stock": true,</text>
  <text class="t-panel" x="80" y="252">"attributes": {"capacity": "2", …},</text>
  <text class="t-panel" x="80" y="272">"short_description": "轻量三季帐篷，快速搭建。",</text>
  <g class="s-dim">
    <text class="t-panel" x="80" y="304">"category": "outdoor",</text>
    <text class="t-panel" x="80" y="324">"image_url": null,</text>
    <text class="t-panel" x="80" y="344">"labels": [],</text>
    <text class="t-panel" x="80" y="364">"options": {},</text>
    <text class="t-panel" x="80" y="384">"option_values": {},</text>
    <text class="t-panel" x="80" y="404">"variant_of": null</text>
  </g>
  <text class="t-panel" x="64" y="430">}</text>

  <!-- 右：留下的和去掉的 -->
  <path class="arrow" d="M512,176 L480,176" marker-end="url(#tool-result-fields-arrow)"/>
  <text class="t-name" x="524" y="181">留下</text>
  <text class="t-sub" x="524" y="201">比较和推荐要用的</text>

  <!-- 唯一的强调：框住不写进结果的几项 -->
  <rect class="s-hl" x="64" y="284" width="248" height="128" rx="6"/>
  <path class="s-leader" d="M512,352 L320,352" marker-end="url(#tool-result-fields-accent)"/>
  <text class="t-name" x="524" y="357">去掉</text>
  <text class="t-sub" x="524" y="377">模型推理时用不上</text>
</svg>
`;
