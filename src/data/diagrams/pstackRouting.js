// 《pstack 使用指南》用 /poteto-mode 分派工作：提示词经过 poteto-mode 匹配到常见的 playbook，最后都走验证并汇报。照原文的流程图重画，playbook 名保留英文；类名见 ./index.js。
export default `<svg viewBox="0 0 768 368" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pstack-routing-title pstack-routing-desc">
  <title id="pstack-routing-title">提示词怎样被分到 playbook</title>
  <desc id="pstack-routing-desc">这张图说明 poteto-mode 收到提示词后先读 Principles 一节，再按任务类型分到 Investigation、Bug fix、Feature、Refactoring、Perf issue 或 figure-it-out，每条路线最后都要验证并汇报。</desc>
  <defs>
    <marker id="pstack-routing-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 连线先画，节点盖在上面 -->
  <path class="arrow" d="M208,76 H299" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M468,76 H559" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M644,104 V128 Q644,136 636,136 H102 Q94,136 94,144 V163" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M644,136 H666 Q674,136 674,144 V163" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M210,136 V163" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M326,136 V163" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M442,136 V163" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M558,136 V163" marker-end="url(#pstack-routing-arrow)"/>
  <path class="arrow" d="M94,228 V244 Q94,252 102,252 H666 Q674,252 674,244 V228"/>
  <path class="arrow" d="M210,228 V252"/>
  <path class="arrow" d="M326,228 V252"/>
  <path class="arrow" d="M442,228 V252"/>
  <path class="arrow" d="M558,228 V252"/>
  <path class="arrow" d="M384,252 V279" marker-end="url(#pstack-routing-arrow)"/>

  <rect class="n-external" x="40" y="48" width="168" height="56" rx="8"/>
  <text class="t-name" x="124" y="81" text-anchor="middle">您的提示词</text>

  <rect class="n-process" x="300" y="48" width="168" height="56" rx="8"/>
  <text class="t-name" x="384" y="72" text-anchor="middle">poteto-mode</text>
  <text class="t-sub" x="384" y="92" text-anchor="middle">先读 Principles 一节</text>

  <rect class="n-neutral" x="560" y="48" width="168" height="56" rx="8"/>
  <text class="t-name" x="644" y="72" text-anchor="middle">匹配任务</text>
  <text class="t-sub" x="644" y="92" text-anchor="middle">看它属于哪一类</text>

  <rect class="n-process" x="40" y="164" width="108" height="64" rx="8"/>
  <text class="t-band" x="94" y="192" text-anchor="middle">Investigation</text>
  <text class="t-sub" x="94" y="212" text-anchor="middle">只读的问题</text>
  <rect class="n-process" x="156" y="164" width="108" height="64" rx="8"/>
  <text class="t-band" x="210" y="192" text-anchor="middle">Bug fix</text>
  <text class="t-sub" x="210" y="212" text-anchor="middle">缺陷</text>
  <rect class="n-process" x="272" y="164" width="108" height="64" rx="8"/>
  <text class="t-band" x="326" y="192" text-anchor="middle">Feature</text>
  <text class="t-sub" x="326" y="212" text-anchor="middle">新行为</text>
  <rect class="n-process" x="388" y="164" width="108" height="64" rx="8"/>
  <text class="t-band" x="442" y="192" text-anchor="middle">Refactoring</text>
  <text class="t-sub" x="442" y="212" text-anchor="middle">只动结构</text>
  <rect class="n-process" x="504" y="164" width="108" height="64" rx="8"/>
  <text class="t-band" x="558" y="192" text-anchor="middle">Perf issue</text>
  <text class="t-sub" x="558" y="212" text-anchor="middle">测得出的慢</text>
  <rect class="n-process" x="620" y="164" width="108" height="64" rx="8"/>
  <text class="t-band" x="674" y="192" text-anchor="middle">figure-it-out</text>
  <text class="t-sub" x="674" y="212" text-anchor="middle">大活或没有匹配</text>

  <rect class="n-focal" x="284" y="280" width="200" height="48" rx="8"/>
  <text class="t-name" x="384" y="309" text-anchor="middle">验证并汇报</text>
</svg>
`;
