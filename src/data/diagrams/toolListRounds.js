// 《写给模型的工具定义》：连续三次请求都以同一份工具列表开头。
// 按 diagram-design 的规则画（横向分段条，唯一的强调是框住三份工具列表的 s-hl），类名见 ./index.js；
// 改图时先生成独立草稿跑技能的 self_check 和几何校验。
export default `<svg viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tool-list-rounds-title tool-list-rounds-desc">
  <title id="tool-list-rounds-title">每次请求都以同一份工具列表开头</title>
  <desc id="tool-list-rounds-desc">这张图说明连续三次请求的组成：每次都以同一份工具列表开头，后面是提示词和一次比一次长的对话，三份工具列表逐字节相同。</desc>

  <text class="t-msg" x="136" y="135" text-anchor="end">第 1 次请求</text>
  <rect class="n-neutral" x="164" y="104" width="200" height="52" rx="6"/>
  <text class="t-name" x="264" y="136" text-anchor="middle">工具列表</text>
  <rect class="n-neutral" x="392" y="104" width="120" height="52" rx="6"/>
  <text class="t-name" x="452" y="136" text-anchor="middle">提示词</text>
  <rect class="n-external" x="520" y="104" width="64" height="52" rx="6"/>
  <text class="t-name" x="552" y="136" text-anchor="middle">对话</text>

  <text class="t-msg" x="136" y="207" text-anchor="end">第 2 次请求</text>
  <rect class="n-neutral" x="164" y="176" width="200" height="52" rx="6"/>
  <text class="t-name" x="264" y="208" text-anchor="middle">工具列表</text>
  <rect class="n-neutral" x="392" y="176" width="120" height="52" rx="6"/>
  <text class="t-name" x="452" y="208" text-anchor="middle">提示词</text>
  <rect class="n-external" x="520" y="176" width="128" height="52" rx="6"/>
  <text class="t-name" x="584" y="208" text-anchor="middle">对话</text>

  <text class="t-msg" x="136" y="279" text-anchor="end">第 3 次请求</text>
  <rect class="n-neutral" x="164" y="248" width="200" height="52" rx="6"/>
  <text class="t-name" x="264" y="280" text-anchor="middle">工具列表</text>
  <rect class="n-neutral" x="392" y="248" width="120" height="52" rx="6"/>
  <text class="t-name" x="452" y="280" text-anchor="middle">提示词</text>
  <rect class="n-external" x="520" y="248" width="192" height="52" rx="6"/>
  <text class="t-name" x="616" y="280" text-anchor="middle">对话</text>

  <!-- 唯一的强调：框住三份相同的工具列表，说明写在框下 -->
  <rect class="s-hl" x="152" y="88" width="224" height="228" rx="8"/>
  <text class="t-label" x="264" y="344" text-anchor="middle">逐字节相同</text>
</svg>
`;
