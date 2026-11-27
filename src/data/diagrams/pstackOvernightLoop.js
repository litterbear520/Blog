// 《pstack 使用指南》睡觉时让工作继续跑：通宵循环每一轮只做一个改动、验证一次、记一行决策。照原文的流程图重画；类名见 ./index.js。
export default `<svg viewBox="0 0 768 368" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pstack-overnight-loop-title pstack-overnight-loop-desc">
  <title id="pstack-overnight-loop-title">通宵循环的每一轮</title>
  <desc id="pstack-overnight-loop-desc">这张图说明通宵循环每一轮先检查完成条件，做最小的合理改动，对照真实 artifact 验证；有进展就提交，没有就丢弃，两种情况都记一行决策，然后回到检查完成条件。</desc>
  <defs>
    <marker id="pstack-overnight-loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="pstack-overnight-loop-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <path class="arrow" d="M188,76 H219" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow" d="M368,76 H399" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow" d="M548,76 H579" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow" d="M690,104 V159" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow" d="M618,104 V132 Q618,140 610,140 H482 Q474,140 474,148 V159" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow" d="M654,216 V304 Q654,312 646,312 H229" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow" d="M474,216 V280 Q474,288 466,288 H229" marker-end="url(#pstack-overnight-loop-arrow)"/>
  <path class="arrow loop" d="M114,272 V105" marker-end="url(#pstack-overnight-loop-loop)"/>

  <text class="t-label" x="700" y="136">有</text>
  <text class="t-label" x="546" y="130" text-anchor="middle">没有</text>
  <text class="t-label" x="124" y="192">下一轮</text>

  <rect class="n-focal" x="40" y="48" width="148" height="56" rx="8"/>
  <text class="t-band" x="114" y="81" text-anchor="middle">检查完成条件</text>

  <rect class="n-process" x="220" y="48" width="148" height="56" rx="8"/>
  <text class="t-band" x="294" y="81" text-anchor="middle">做最小的合理改动</text>

  <rect class="n-process" x="400" y="48" width="148" height="56" rx="8"/>
  <text class="t-band" x="474" y="81" text-anchor="middle">对照 artifact 验证</text>

  <rect class="n-neutral" x="580" y="48" width="148" height="56" rx="8"/>
  <text class="t-band" x="654" y="81" text-anchor="middle">有进展吗？</text>

  <rect class="n-done" x="580" y="160" width="148" height="56" rx="8"/>
  <text class="t-band" x="654" y="193" text-anchor="middle">提交</text>

  <rect class="n-neutral" x="400" y="160" width="148" height="56" rx="8"/>
  <text class="t-band" x="474" y="193" text-anchor="middle">丢弃</text>

  <rect class="n-process" x="40" y="272" width="188" height="56" rx="8"/>
  <text class="t-band" x="134" y="305" text-anchor="middle">记一行决策</text>
</svg>
`;
