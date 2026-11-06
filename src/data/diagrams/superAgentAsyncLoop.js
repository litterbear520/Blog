// 《Super-agent 设计探索》：经典 ReAct Loop 与异步 ReAct Loop 对比。照原文配图一比一重画，文字原样保留；类名见 ./index.js。
// 上半是经典循环：调用 run() 后前台阻塞，等工具跑完才继续；下半是异步循环：start() 立即返回 Started 通知，后台跑工具时还能接新消息。
export default `<svg viewBox="0 0 768 464" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-async-loop-title super-agent-async-loop-desc">
  <title id="super-agent-async-loop-title">经典 ReAct Loop 与异步 ReAct Loop 对比：异步调用立即返回 Started 通知，后台工具运行期间仍可响应新消息</title>
  <desc id="super-agent-async-loop-desc">这张图说明经典 ReAct Loop 里 LLM 调用 run() 后要同步阻塞等待耗时工具返回结果，而异步 ReAct Loop 里 LLM 调用 start() 后立即收到 Started 通知，工具在后台执行期间仍能处理用户消息 2 并即时回复，工具完成后结果作为新消息投递，再由 LLM 交付任务结果。</desc>
  <defs>
    <marker id="super-agent-async-loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="super-agent-async-loop-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-loop" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 上半：经典 ReAct Loop -->
  <text class="t-band" x="40" y="52">经典 ReAct Loop</text>
  <line class="divider" x1="40" y1="92" x2="728" y2="92"/>
  <text class="t-sub" x="40" y="188">前台阻塞等待</text>

  <path class="arrow" d="M192,116 V163" marker-end="url(#super-agent-async-loop-arrow)"/>
  <path class="arrow" d="M574,164 V117" marker-end="url(#super-agent-async-loop-arrow)"/>

  <rect class="s-card" x="52" y="68" width="84" height="48" rx="8"/>
  <text class="t-band" x="94" y="97" text-anchor="middle">用户消息 1</text>

  <rect class="s-card" x="144" y="68" width="96" height="48" rx="8"/>
  <text class="t-band" x="192" y="88" text-anchor="middle">LLM Call</text>
  <text class="t-sub" x="192" y="106" text-anchor="middle">调用 <tspan class="t-mono">run()</tspan></text>

  <rect class="n-neutral" x="248" y="68" width="268" height="48" rx="8" stroke-dasharray="5 4"/>
  <text class="t-sub" x="382" y="96" text-anchor="middle">同步阻塞等待工具返回</text>

  <rect class="s-card" x="524" y="68" width="100" height="48" rx="8"/>
  <text class="t-band" x="574" y="88" text-anchor="middle">工具调用结果</text>
  <text class="t-sub" x="574" y="106" text-anchor="middle">返回结果</text>

  <rect class="s-card" x="632" y="68" width="88" height="48" rx="8"/>
  <text class="t-band" x="676" y="88" text-anchor="middle">LLM Call</text>
  <text class="t-sub" x="676" y="106" text-anchor="middle">回复用户</text>

  <rect class="n-neutral" x="176" y="164" width="416" height="40" rx="8"/>
  <text class="t-sub" x="384" y="188" text-anchor="middle">同步执行耗时工具</text>

  <line class="divider" x1="40" y1="236" x2="728" y2="236"/>

  <!-- 下半：异步 ReAct Loop -->
  <text class="t-band" x="40" y="272">异步 ReAct Loop</text>
  <line class="divider" x1="40" y1="312" x2="728" y2="312"/>
  <text class="t-sub" x="40" y="408">后台异步执行</text>

  <path class="arrow loop" d="M192,336 V383" marker-end="url(#super-agent-async-loop-loop)"/>
  <path class="arrow" d="M216,384 V368 Q216,360 224,360 H284 Q292,360 292,352 V337" stroke-dasharray="5 4" marker-end="url(#super-agent-async-loop-arrow)"/>
  <path class="arrow loop" d="M574,384 V337" stroke-dasharray="5 4" marker-end="url(#super-agent-async-loop-loop)"/>

  <rect class="n-process em" x="52" y="288" width="84" height="48" rx="8"/>
  <text class="t-band" x="94" y="317" text-anchor="middle">用户消息 1</text>

  <rect class="n-process em" x="144" y="288" width="96" height="48" rx="8"/>
  <text class="t-band" x="192" y="308" text-anchor="middle">LLM Call</text>
  <text class="t-sub t-info" x="192" y="326" text-anchor="middle">调用 <tspan class="t-mono">start()</tspan></text>

  <rect class="s-card" x="248" y="288" width="88" height="48" rx="8"/>
  <text class="t-band" x="292" y="308" text-anchor="middle">立即返回</text>
  <text class="t-sub" x="292" y="326" text-anchor="middle">Started 通知</text>

  <rect class="n-process em" x="344" y="288" width="84" height="48" rx="8"/>
  <text class="t-band" x="386" y="317" text-anchor="middle">用户消息 2</text>

  <rect class="n-process em" x="436" y="288" width="80" height="48" rx="8"/>
  <text class="t-band" x="476" y="308" text-anchor="middle">LLM Call</text>
  <text class="t-sub t-info" x="476" y="326" text-anchor="middle">即时回复</text>

  <rect class="s-card" x="524" y="288" width="100" height="48" rx="8"/>
  <text class="t-band" x="574" y="308" text-anchor="middle">新消息投递</text>
  <text class="t-sub" x="574" y="326" text-anchor="middle">完成结果</text>

  <rect class="n-process em" x="632" y="288" width="88" height="48" rx="8"/>
  <text class="t-band" x="676" y="308" text-anchor="middle">LLM Call</text>
  <text class="t-sub t-info" x="676" y="326" text-anchor="middle">交付任务结果</text>

  <rect class="n-process em" x="176" y="384" width="416" height="40" rx="8"/>
  <text class="t-band" x="384" y="409" text-anchor="middle">后台异步执行耗时工具</text>
</svg>
`;
