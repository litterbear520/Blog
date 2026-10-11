// 《写给模型的工具定义》：模型读到的搜索工具定义分三部分。代码标注图，从 lesson 技能的场景零件画起：
// 左边墨色面板是定义（照 registry.py 节选），右边三个标签各指向一部分；唯一的强调是筛选条件的用法说明。类名见 ./index.js。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-definition-parts-title tool-definition-parts-desc">
  <title id="tool-definition-parts-title">一份工具定义的三个部分</title>
  <desc id="tool-definition-parts-desc">这张图说明模型读到的搜索工具定义：名字是 search_products；描述写明返回什么、顾客提到多个商品时怎么搜；参数说明里，筛选条件写明只放顾客明确提出的条件，猜测的内容放进关键词。</desc>
  <defs>
    <marker id="tool-definition-parts-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="tool-definition-parts-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 左：模型读到的定义 -->
  <rect class="s-panel" x="40" y="48" width="480" height="336" rx="12"/>
  <text class="t-panel" x="64" y="88">{</text>
  <text class="t-panel" x="80" y="112">"name": "search_products",</text>
  <text class="t-panel" x="80" y="136">"description": "搜索商品目录，返回 id、价格、</text>
  <text class="t-panel" x="96" y="160">评分和库存……顾客提到多个商品时，</text>
  <text class="t-panel" x="96" y="184">每个商品单独搜索一次。",</text>
  <text class="t-panel" x="80" y="208">"input_schema": {</text>
  <text class="t-panel" x="96" y="232">"query":   { "description": "要搜索的关键词" },</text>
  <text class="t-panel" x="96" y="256">"filters": { "description": "顾客明确提出的</text>
  <text class="t-panel" x="112" y="280">筛选条件；猜测的内容放在 query 里。" },</text>
  <text class="t-panel" x="96" y="304">"limit":   { "minimum": 1, "maximum": 8 }</text>
  <text class="t-panel" x="80" y="328">}</text>
  <text class="t-panel" x="64" y="352">}</text>

  <!-- 右：三个部分 -->
  <path class="arrow" d="M556,108 L528,108" marker-end="url(#tool-definition-parts-arrow)"/>
  <text class="t-name" x="568" y="113">名字</text>
  <text class="t-sub" x="568" y="133">调用时写的就是它</text>

  <path class="arrow" d="M556,156 L528,156" marker-end="url(#tool-definition-parts-arrow)"/>
  <text class="t-name" x="568" y="161">描述</text>
  <text class="t-sub" x="568" y="181">返回什么、什么时候用</text>

  <!-- 唯一的强调：筛选条件的用法说明 -->
  <rect class="s-hl" x="88" y="240" width="320" height="48" rx="4"/>
  <path class="s-leader" d="M556,264 L416,264" marker-end="url(#tool-definition-parts-accent)"/>
  <text class="t-name" x="568" y="269">参数说明</text>
  <text class="t-sub" x="568" y="289">每个参数怎么填</text>
</svg>
`;
