// 《写给模型的工具定义》：连续三次请求都以同一份工具列表开头。
// 按 diagram-design 的规则画（横向分段条，唯一的强调是框住三份工具列表的 s-hl），类名见 ./index.js；
// 改图时先生成独立草稿跑技能的 self_check 和几何校验。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-list-rounds-title tool-list-rounds-desc">
  <title id="tool-list-rounds-title">每次请求都以同一份工具列表开头</title>
  <desc id="tool-list-rounds-desc">这张图说明连续三次请求的组成：每次都以同一份工具列表开头，后面是提示词和一次比一次长的对话，三份工具列表逐字节相同。</desc>

  <!-- 唯一的强调：框住三份相同的工具列表 -->
  <text class="t-label" x="252" y="96" text-anchor="middle">逐字节相同</text>
  <rect class="s-hl" x="140" y="108" width="224" height="244" rx="8"/>

  <text class="t-label" x="124" y="156" text-anchor="end">第 1 次请求</text>
  <rect class="n-neutral" x="152" y="124" width="200" height="52" rx="6"/>
  <text class="t-name" x="252" y="156" text-anchor="middle">工具列表</text>
  <rect class="n-neutral" x="376" y="124" width="120" height="52" rx="6"/>
  <text class="t-name" x="436" y="156" text-anchor="middle">提示词</text>
  <rect class="n-external" x="500" y="124" width="64" height="52" rx="6"/>
  <text class="t-name" x="532" y="156" text-anchor="middle">对话</text>

  <text class="t-label" x="124" y="236" text-anchor="end">第 2 次请求</text>
  <rect class="n-neutral" x="152" y="204" width="200" height="52" rx="6"/>
  <text class="t-name" x="252" y="236" text-anchor="middle">工具列表</text>
  <rect class="n-neutral" x="376" y="204" width="120" height="52" rx="6"/>
  <text class="t-name" x="436" y="236" text-anchor="middle">提示词</text>
  <rect class="n-external" x="500" y="204" width="136" height="52" rx="6"/>
  <text class="t-name" x="568" y="236" text-anchor="middle">对话</text>

  <text class="t-label" x="124" y="316" text-anchor="end">第 3 次请求</text>
  <rect class="n-neutral" x="152" y="284" width="200" height="52" rx="6"/>
  <text class="t-name" x="252" y="316" text-anchor="middle">工具列表</text>
  <rect class="n-neutral" x="376" y="284" width="120" height="52" rx="6"/>
  <text class="t-name" x="436" y="316" text-anchor="middle">提示词</text>
  <rect class="n-external" x="500" y="284" width="208" height="52" rx="6"/>
  <text class="t-name" x="604" y="316" text-anchor="middle">对话</text>
</svg>
`;
