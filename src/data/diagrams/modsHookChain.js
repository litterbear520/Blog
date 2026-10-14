// 《Claude Code mod 入门》：hook 串成一条链。照原文配图的布局重画，标签译成中文；类名见 ./index.js。
// 事件依次经过您的 hook、其他插件、Claude Code，next(e) 往下传、结果原路返回；“作答”是唯一的强调。
export default `<svg viewBox="0 0 768 264" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="mods-hook-chain-title mods-hook-chain-desc">
  <title id="mods-hook-chain-title">hook 串成一条链</title>
  <desc id="mods-hook-chain-desc">这张图说明一个事件怎样依次经过您的 hook、其他插件，最后到达 Claude Code：每一环都调用 next(e) 把它往下传，结果再原路返回；要作答的 hook 不调用 next，直接返回。</desc>
  <defs>
    <marker id="mods-hook-chain-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk" d="M1,1 L9,5 L1,9"/></marker>
    <marker id="mods-hook-chain-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path class="mk-accent" d="M1,1 L9,5 L1,9"/></marker>
  </defs>

  <!-- 四个节点：事件 → 你的 hook（强调）→ 其他插件 → Claude Code -->
  <text class="t-mono" x="40" y="60">事件</text>
  <rect class="n-neutral" x="40" y="72" width="124" height="72" rx="8"/>
  <text class="t-mono-strong" x="102" y="103" text-anchor="middle">tool.call</text>
  <text class="t-mono" x="102" y="124" text-anchor="middle">e = { command }</text>

  <rect class="n-focal" x="228" y="72" width="124" height="72" rx="8"/>
  <text class="t-name" x="290" y="103" text-anchor="middle">您的 hook</text>
  <text class="t-mono" x="290" y="124" text-anchor="middle">($, e, next)</text>

  <rect class="n-neutral" x="416" y="72" width="124" height="72" rx="8"/>
  <text class="t-name" x="478" y="103" text-anchor="middle">其他插件</text>
  <text class="t-sub" x="478" y="124" text-anchor="middle">形状相同</text>

  <rect class="n-external" x="604" y="72" width="124" height="72" rx="8"/>
  <text class="t-name" x="666" y="103" text-anchor="middle">Claude Code</text>
  <text class="t-sub" x="666" y="124" text-anchor="middle">运行工具</text>

  <!-- next(e) 往下传（实线），结果原路返回（虚线） -->
  <path class="arrow" d="M164,96 H227" marker-end="url(#mods-hook-chain-arrow)"/>
  <path class="arrow" d="M352,96 H415" marker-end="url(#mods-hook-chain-arrow)"/>
  <text class="t-mono" x="384" y="88" text-anchor="middle">next(e)</text>
  <path class="arrow" d="M416,124 H353" stroke-dasharray="4 4" marker-end="url(#mods-hook-chain-arrow)"/>
  <text class="t-sub" x="384" y="162" text-anchor="middle">结果</text>
  <path class="arrow" d="M540,96 H603" marker-end="url(#mods-hook-chain-arrow)"/>
  <text class="t-mono" x="572" y="88" text-anchor="middle">next(e)</text>
  <path class="arrow" d="M604,124 H541" stroke-dasharray="4 4" marker-end="url(#mods-hook-chain-arrow)"/>
  <text class="t-sub" x="572" y="162" text-anchor="middle">结果</text>

  <!-- 作答：不调用 next，直接把结果交回去 -->
  <path class="s-leader" d="M290,145 C290,214 102,214 102,151" marker-end="url(#mods-hook-chain-accent)"/>
  <text class="t-mono-strong t-accent" x="196" y="240" text-anchor="middle">作答：return { deny }，不调用 next</text>

  <!-- 另外两种做法，写在链的下方 -->
  <text class="t-mono" x="572" y="204" text-anchor="middle">观察：先 await next(e)，再看结果</text>
  <text class="t-mono" x="572" y="226" text-anchor="middle">改写：next({ ...e, command })</text>
</svg>
`;
