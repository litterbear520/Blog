// 《Super-agent 设计探索》：同一个任务在 IM 群聊与 GitHub Pull Request 评审之间连续推进。照原图一比一重画；类名见 ./index.js。
// 左列是渠道胶囊（IM / GitHub），中列是说话人，右列是消息；Super-agent 的消息用蓝底、说话人用蓝字，其余是灰底。
export default `<svg viewBox="0 0 768 676" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-channels-title super-agent-channels-desc">
  <title id="super-agent-channels-title">同一个任务在 IM 群聊与 GitHub Pull Request 评审之间连续推进</title>
  <desc id="super-agent-channels-desc">这张图说明一个字体设置需求怎样从 IM 群聊里提出，经 Super-agent 提交 Pull Request，再在 GitHub 上由维护者和设计师评审、由 Super-agent 逐条修改，最后回到 IM 告知 Pull Request 已合并。</desc>

  <!-- 图内标题和副标题 -->
  <text class="t-name" x="40" y="56">同一个任务，在 IM 和 GitHub 之间连续推进</text>
  <text class="t-sub" x="40" y="80">字体设置需求：在 IM 群聊中提出，在 GitHub 上评审修改</text>

  <!-- IM · 用户 B -->
  <rect class="zone" x="40" y="114" width="32" height="20" rx="10"/>
  <text class="t-sub" x="56" y="128" text-anchor="middle">IM</text>
  <text class="t-sub" x="108" y="128">用户 B</text>
  <rect class="n-neutral" x="192" y="104" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="129">希望正文、代码和终端的字体可以分别配置。</text>

  <!-- IM · 维护者 -->
  <rect class="zone" x="40" y="166" width="32" height="20" rx="10"/>
  <text class="t-sub" x="56" y="180" text-anchor="middle">IM</text>
  <text class="t-sub" x="108" y="180">维护者</text>
  <rect class="n-neutral" x="192" y="156" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="181">@Super-agent 支持一下这个功能。</text>

  <!-- IM · Super-agent -->
  <rect class="zone" x="40" y="218" width="32" height="20" rx="10"/>
  <text class="t-sub" x="56" y="232" text-anchor="middle">IM</text>
  <text class="t-who t-info" x="108" y="232">Super-agent</text>
  <rect class="n-process" x="192" y="208" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="233">Pull Request 已就绪：设置中拆出正文、代码、终端三行字体，各自独立配置。</text>

  <!-- IM · 用户 B -->
  <rect class="zone" x="40" y="270" width="32" height="20" rx="10"/>
  <text class="t-sub" x="56" y="284" text-anchor="middle">IM</text>
  <text class="t-sub" x="108" y="284">用户 B</text>
  <rect class="n-neutral" x="192" y="260" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="285">字号也可以分别配置吗？</text>

  <!-- IM · Super-agent -->
  <rect class="zone" x="40" y="322" width="32" height="20" rx="10"/>
  <text class="t-sub" x="56" y="336" text-anchor="middle">IM</text>
  <text class="t-who t-info" x="108" y="336">Super-agent</text>
  <rect class="n-process" x="192" y="312" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="337">可以，已加进同一个 Pull Request：三类内容各有独立的字体和字号。</text>

  <!-- GitHub · 维护者 -->
  <rect class="zone" x="40" y="374" width="56" height="20" rx="10"/>
  <text class="t-sub" x="68" y="388" text-anchor="middle">GitHub</text>
  <text class="t-sub" x="108" y="388">维护者</text>
  <rect class="n-neutral" x="192" y="364" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="389">设置项太多了，能否用折叠控件收起更多的外观设置？</text>

  <!-- GitHub · Super-agent -->
  <rect class="zone" x="40" y="426" width="56" height="20" rx="10"/>
  <text class="t-sub" x="68" y="440" text-anchor="middle">GitHub</text>
  <text class="t-who t-info" x="108" y="440">Super-agent</text>
  <rect class="n-process" x="192" y="416" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="441">收到，把各类字体和字号收进折叠的“更多外观设置”。</text>

  <!-- GitHub · 设计师（原图一行，这里放不下，在逗号处折成两行） -->
  <rect class="zone" x="40" y="478" width="56" height="20" rx="10"/>
  <text class="t-sub" x="68" y="492" text-anchor="middle">GitHub</text>
  <text class="t-sub" x="108" y="492">设计师</text>
  <rect class="n-neutral" x="192" y="468" width="536" height="64" rx="8"/>
  <text class="t-msg" x="208" y="493">这些本身就是字体和字号设置，可以直接作为字号设置项的展开，</text>
  <text class="t-msg" x="208" y="517">不必单开一个分区。</text>

  <!-- GitHub · Super-agent -->
  <rect class="zone" x="40" y="554" width="56" height="20" rx="10"/>
  <text class="t-sub" x="68" y="568" text-anchor="middle">GitHub</text>
  <text class="t-who t-info" x="108" y="568">Super-agent</text>
  <rect class="n-process" x="192" y="544" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="569">收到，去掉单独的分区，改为从“字号大小”一行直接展开。</text>

  <!-- IM · Super-agent -->
  <rect class="zone" x="40" y="606" width="32" height="20" rx="10"/>
  <text class="t-sub" x="56" y="620" text-anchor="middle">IM</text>
  <text class="t-who t-info" x="108" y="620">Super-agent</text>
  <rect class="n-process" x="192" y="596" width="536" height="40" rx="8"/>
  <text class="t-msg" x="208" y="621">Pull Request 已合并。</text>
</svg>
`;
