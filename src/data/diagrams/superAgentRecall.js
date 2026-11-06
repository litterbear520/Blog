// 《Super-agent 设计探索》：链式召回。照原文配图重画，文字原样保留；原图四列横排在 768 宽里放不下，改成向右下逐跳的阶梯，跳转顺序不变；类名见 ./index.js。
// Trigger #42 内联 thread_id，读出 Thread #08；Thread #08 再内联 trigger_ids / worker_ids，读出 Trigger #40 和 Worker #03；Worker #03 又带出 Thread #15。
export default `<svg viewBox="0 0 768 644" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-recall-title super-agent-recall-desc">
  <title id="super-agent-recall-title">链式召回：每次召回的对象均内联下一跳关联对象的 ID，支持沿引用关系逐跳展开上下文</title>
  <desc id="super-agent-recall-desc">这张图说明链式召回怎样逐跳展开上下文：Trigger #42 以 Inline 方式注入前 50 字与相邻消息、thread_id: #08 和 worker_id: #03，剩余内容可用 read_trigger(#42) 按需续读；read_thread(#08) 读出的 Thread #08 又内联 trigger_ids 和 worker_ids，分别经 read_trigger(#40) 和 read_worker(#03) 读出 Trigger #40 详情与 Worker #03 状态，Worker #03 里的 thread_id: #15 再经 read_thread(#15) 读出关联 Pull Request 的 Thread #15 详情。</desc>
  <defs>
    <marker id="super-agent-recall-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="super-agent-recall-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 容器：Trigger #42、Thread #08、Worker #03 -->
  <rect class="n-process em" x="40" y="40" width="204" height="200" rx="8"/>
  <text class="t-name" x="142" y="68" text-anchor="middle">Trigger #42 (Inline 注入)</text>

  <rect class="n-process em" x="184" y="260" width="224" height="200" rx="8"/>
  <text class="t-name" x="296" y="288" text-anchor="middle">Thread #08 (Inline &amp; Spill)</text>

  <rect class="s-card em" x="544" y="408" width="144" height="100" rx="8"/>
  <text class="t-name" x="616" y="432" text-anchor="middle">Worker #03 状态</text>
  <text class="t-sub" x="616" y="452" text-anchor="middle">任务进度与状态摘要</text>

  <!-- 连线：灰色虚线是按需续读，蓝色虚线是沿 ID 逐跳召回 -->
  <path class="arrow" d="M232,106 H383" stroke-dasharray="5 4" marker-end="url(#super-agent-recall-arrow)"/>
  <path class="arrow loop" d="M232,160 H272 Q280,160 280,168 V259" stroke-dasharray="5 4" marker-end="url(#super-agent-recall-loop)"/>
  <path class="arrow loop" d="M396,380 H543" stroke-dasharray="5 4" marker-end="url(#super-agent-recall-loop)"/>
  <path class="arrow loop" d="M396,428 H543" stroke-dasharray="5 4" marker-end="url(#super-agent-recall-loop)"/>
  <path class="arrow loop" d="M676,480 H696 Q704,480 704,488 V547" stroke-dasharray="5 4" marker-end="url(#super-agent-recall-loop)"/>

  <!-- Trigger #42 里内联的三项 -->
  <rect class="s-card" x="52" y="84" width="180" height="44" rx="6"/>
  <text class="t-band" x="142" y="102" text-anchor="middle">前 50 字与相邻消息</text>
  <text class="t-sub" x="142" y="120" text-anchor="middle">超出部分 Spill 截断</text>
  <rect class="s-card em" x="52" y="144" width="180" height="32" rx="6"/>
  <text class="t-mono-strong" x="142" y="164" text-anchor="middle">thread_id: #08</text>
  <rect class="s-card" x="52" y="192" width="180" height="32" rx="6"/>
  <text class="t-mono t-info" x="142" y="212" text-anchor="middle">worker_id: #03</text>

  <!-- Trigger #42 剩余内容 -->
  <rect class="s-card" x="384" y="80" width="176" height="52" rx="8"/>
  <text class="t-name" x="472" y="102" text-anchor="middle">Trigger #42 剩余内容</text>
  <text class="t-sub" x="472" y="122" text-anchor="middle">按需续读 Spill 部分</text>

  <!-- Thread #08 里内联的三项 -->
  <rect class="s-card" x="196" y="304" width="200" height="44" rx="6"/>
  <text class="t-band" x="296" y="322" text-anchor="middle">近期事件摘要</text>
  <text class="t-sub" x="296" y="340" text-anchor="middle">更早历史 Spill 截断</text>
  <rect class="s-card" x="196" y="364" width="200" height="32" rx="6"/>
  <text class="t-mono-strong" x="296" y="384" text-anchor="middle">trigger_ids: [#39, #40]</text>
  <rect class="s-card" x="196" y="412" width="200" height="32" rx="6"/>
  <text class="t-mono-strong" x="296" y="432" text-anchor="middle">worker_ids: [#02, #03]</text>

  <!-- 下一跳：Trigger #40、Worker #03 里的 thread_id、Thread #15 -->
  <rect class="s-card em" x="544" y="340" width="144" height="56" rx="8"/>
  <text class="t-name" x="616" y="364" text-anchor="middle">Trigger #40 详情</text>
  <text class="t-sub" x="616" y="384" text-anchor="middle">同样遵循 Inline &amp; Spill</text>

  <rect class="s-card" x="556" y="464" width="120" height="32" rx="6"/>
  <text class="t-mono-strong" x="616" y="484" text-anchor="middle">thread_id: #15</text>

  <rect class="s-card em" x="568" y="548" width="160" height="56" rx="8"/>
  <text class="t-name" x="648" y="572" text-anchor="middle">Thread #15 详情</text>
  <text class="t-sub" x="648" y="592" text-anchor="middle">关联 Pull Request</text>

  <!-- 连线标签（垫画布底色，和连线留 6px 以上） -->
  <rect class="mask" x="248" y="86" width="128" height="14"/>
  <text class="t-mono" x="312" y="97" text-anchor="middle">read_trigger(#42)</text>
  <rect class="mask" x="288" y="202" width="120" height="14"/>
  <text class="t-mono-strong t-info" x="290" y="213">read_thread(#08)</text>
  <rect class="mask" x="412" y="360" width="128" height="14"/>
  <text class="t-mono-strong t-info" x="476" y="371" text-anchor="middle">read_trigger(#40)</text>
  <rect class="mask" x="416" y="408" width="120" height="14"/>
  <text class="t-mono-strong t-info" x="476" y="419" text-anchor="middle">read_worker(#03)</text>
  <rect class="mask" x="576" y="520" width="120" height="14"/>
  <text class="t-mono-strong t-info" x="694" y="531" text-anchor="end">read_thread(#15)</text>
</svg>
`;
