// 《pstack 使用指南》写代码之前先做设计：/arena 让评审组的几个子代理各写一份候选方案，交叉评审后选底稿、嫁接、验证。照原文的流程图重画；类名见 ./index.js。
export default `<svg viewBox="0 0 768 352" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pstack-arena-title pstack-arena-desc">
  <title id="pstack-arena-title">/arena 的流程</title>
  <desc id="pstack-arena-desc">这张图说明 /arena 把一个任务交给配置好的评审组，评审组产出 N 份候选方案，交叉评审之后选一个底稿，嫁接其他方案里最好的部分，最后验证。</desc>
  <defs>
    <marker id="pstack-arena-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <path class="arrow" d="M136,144 H163" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M296,132 H304 Q312,132 312,124 V80 Q312,72 320,72 H327" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M296,144 H327" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M296,156 H304 Q312,156 312,164 V208 Q312,216 320,216 H327" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M440,72 H448 Q456,72 456,80 V124 Q456,132 464,132 H471" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M440,144 H471" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M440,216 H448 Q456,216 456,208 V164 Q456,156 464,156 H471" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M584,144 H615" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M672,168 V191" marker-end="url(#pstack-arena-arrow)"/>
  <path class="arrow" d="M672,240 V263" marker-end="url(#pstack-arena-arrow)"/>

  <rect class="n-neutral" x="40" y="120" width="96" height="48" rx="8"/>
  <text class="t-band" x="88" y="149" text-anchor="middle">一个任务</text>

  <rect class="n-process" x="164" y="120" width="132" height="48" rx="8"/>
  <text class="t-band" x="230" y="149" text-anchor="middle">配置好的评审组</text>

  <rect class="n-process" x="328" y="48" width="112" height="48" rx="8"/>
  <text class="t-band" x="384" y="77" text-anchor="middle">候选方案 1</text>

  <rect class="n-process" x="328" y="120" width="112" height="48" rx="8"/>
  <text class="t-band" x="384" y="149" text-anchor="middle">候选方案 2</text>

  <rect class="n-process" x="328" y="192" width="112" height="48" rx="8"/>
  <text class="t-band" x="384" y="221" text-anchor="middle">候选方案 N</text>

  <rect class="n-process" x="472" y="120" width="112" height="48" rx="8"/>
  <text class="t-band" x="528" y="149" text-anchor="middle">交叉评审</text>

  <rect class="n-process" x="616" y="120" width="112" height="48" rx="8"/>
  <text class="t-band" x="672" y="149" text-anchor="middle">选一个底稿</text>

  <rect class="n-process" x="616" y="192" width="112" height="48" rx="8"/>
  <text class="t-band" x="672" y="221" text-anchor="middle">嫁接最好的部分</text>

  <rect class="n-focal" x="616" y="264" width="112" height="48" rx="8"/>
  <text class="t-band" x="672" y="293" text-anchor="middle">验证</text>
</svg>
`;
