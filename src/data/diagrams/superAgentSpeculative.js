// 《Super-agent 设计探索》：投机执行示例，群内还在讨论解决方案时，Super-agent 已在后台提交了修复 Pull Request。照原图一比一重画；类名见 ./index.js。
// 左列是说话人，右列是消息；虚线行是群内讨论的叙述，Super-agent 的消息用蓝底、说话人用蓝字，行内代码用小灰底。
export default `<svg viewBox="0 0 768 416" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-speculative-title super-agent-speculative-desc">
  <title id="super-agent-speculative-title">投机执行示例：群内还在讨论解决方案时，Super-agent 已在后台提交了修复 Pull Request</title>
  <desc id="super-agent-speculative-desc">这张图说明群里还在讨论波浪号被渲染成删除线该怎么解决时，Super-agent 已经提交了只把成对波浪号渲染为删除线的 Pull Request，并在用户追问依据时给出各家 Markdown 实现的差异作为理由。</desc>

  <!-- 图内标题和副标题 -->
  <text class="t-name" x="40" y="56">讨论还在进行，可靠的方案已经交付</text>
  <text class="t-sub" x="40" y="80">用户群中关于波浪号被渲染成删除线的讨论</text>

  <!-- 用户 A -->
  <text class="t-sub" x="40" y="128">用户 A</text>
  <rect class="n-neutral" x="128" y="104" width="600" height="40" rx="8"/>
  <text class="t-msg" x="144" y="129">模型输出中的波浪号被渲染成了删除线，影响阅读。</text>

  <!-- 群内讨论（虚线叙述行） -->
  <text class="t-sub" x="40" y="180">群内讨论</text>
  <rect class="zone" x="128" y="156" width="600" height="40" rx="8" stroke-dasharray="4 4"/>
  <text class="t-sub" x="144" y="180">应该在训练中解决，让模型转义，还是修改渲染规则？</text>

  <!-- Super-agent -->
  <text class="t-who t-info" x="40" y="232">Super-agent</text>
  <rect class="n-process" x="128" y="208" width="600" height="40" rx="8"/>
  <text class="t-msg" x="144" y="233">已提交 Pull Request：只有</text>
  <rect class="n-neutral" x="318" y="218" width="63" height="20" rx="4"/>
  <text class="t-code" x="323" y="232">~~文字~~</text>
  <text class="t-msg" x="385" y="233">渲染为删除线，单个</text>
  <rect class="n-neutral" x="515" y="218" width="18" height="20" rx="4"/>
  <text class="t-code" x="520" y="232">~</text>
  <text class="t-msg" x="535" y="233">（如</text>
  <rect class="n-neutral" x="567" y="218" width="47" height="20" rx="4"/>
  <text class="t-code" x="572" y="232">10~20</text>
  <text class="t-msg" x="616" y="233">）保持原样。</text>

  <!-- 用户 B -->
  <text class="t-sub" x="40" y="284">用户 B</text>
  <rect class="n-neutral" x="128" y="260" width="600" height="40" rx="8"/>
  <text class="t-msg" x="144" y="285">单个波浪号也是常见写法，这样修改的依据是什么？</text>

  <!-- Super-agent（原图在“范 / 围”之间折行，这里放不下，改在句号处折行，仍是两行） -->
  <text class="t-who t-info" x="40" y="336">Super-agent</text>
  <rect class="n-process" x="128" y="312" width="600" height="64" rx="8"/>
  <text class="t-msg" x="144" y="337">Pandoc 和 markdown-it 只支持</text>
  <rect class="n-neutral" x="350" y="322" width="25" height="20" rx="4"/>
  <text class="t-code" x="355" y="336">~~</text>
  <text class="t-msg" x="377" y="337">，GFM 额外接受单个</text>
  <rect class="n-neutral" x="514" y="322" width="18" height="20" rx="4"/>
  <text class="t-code" x="519" y="336">~</text>
  <text class="t-msg" x="534" y="337">。</text>
  <text class="t-msg" x="144" y="361">模型输出中的单个</text>
  <rect class="n-neutral" x="260" y="346" width="18" height="20" rx="4"/>
  <text class="t-code" x="265" y="360">~</text>
  <text class="t-msg" x="282" y="361">多用于表示范围，正是误渲染的来源。</text>
</svg>
`;
