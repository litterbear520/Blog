// 《Super-agent 设计探索》：在公共群聊中静默监听，主动识别问题并提交修复 Pull Request。照原图一比一重画；类名见 ./index.js。
// 左列是行标签，右列是消息；虚线行是叙述（群内日常消息、后台静默执行），Super-agent 的消息用蓝底、标签用蓝字。
export default `<svg viewBox="0 0 768 412" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="super-agent-proactive-title super-agent-proactive-desc">
  <title id="super-agent-proactive-title">持续关注公共群聊，在无人 @ 的情况下主动识别缺陷并提交修复 Pull Request</title>
  <desc id="super-agent-proactive-desc">这张图说明 Super-agent 在日常消息很多的产品用户群里静默监听：用户 A 抱怨一个误触发的问题后，没有人 @ 它，它自己判断这是一条具体缺陷，在后台复现、排查并提交修复 Pull Request，再把根因说明发回群里。</desc>

  <!-- 图内标题和副标题 -->
  <text class="t-name" x="40" y="56">在公共群聊中静默监听，主动识别问题并提交修复 Pull Request</text>
  <text class="t-sub" x="40" y="80">日常产生大量消息的产品用户群，无人 @ 或指派 Super-agent</text>

  <!-- 群内日常消息（虚线叙述行） -->
  <text class="t-sub" x="40" y="128">群内日常消息</text>
  <rect class="zone" x="128" y="104" width="600" height="40" rx="8" stroke-dasharray="4 4"/>
  <text class="t-sub" x="144" y="128">其他成员在群内讨论日常使用与功能建议，Super-agent 静默监听、不介入</text>

  <!-- 用户 A（原图一行，这里放不下，在逗号处折成两行） -->
  <text class="t-sub" x="40" y="180">用户 A</text>
  <rect class="n-neutral" x="128" y="156" width="600" height="64" rx="8"/>
  <text class="t-msg" x="144" y="181">在 macOS 桌面端，窗口未聚焦时点击会话会被识别为双击并进入重命名，</text>
  <text class="t-msg" x="144" y="205">我每天会误触发几十次。</text>

  <!-- 后台静默执行（虚线叙述行） -->
  <text class="t-sub" x="40" y="256">后台静默执行</text>
  <rect class="zone" x="128" y="232" width="600" height="40" rx="8" stroke-dasharray="4 4"/>
  <text class="t-sub" x="144" y="256">无人 @ Super-agent，它识别出这是一条具体缺陷，在后台自动复现并排查代码</text>

  <!-- Super-agent（原图两行，这里放不下，按句读折成三行） -->
  <text class="t-who t-info" x="40" y="308">Super-agent</text>
  <rect class="n-process" x="128" y="284" width="600" height="88" rx="8"/>
  <text class="t-msg" x="144" y="309">已修复并提交 Pull Request，附前后对比截图。</text>
  <text class="t-msg" x="144" y="333">根因是 Electron 默认吞掉激活窗口的那次点击，</text>
  <text class="t-msg" x="144" y="357">下一次点击带</text>
  <rect class="n-neutral" x="232" y="342" width="68" height="20" rx="4"/>
  <text class="t-code" x="237" y="356">detail=2</text>
  <text class="t-msg" x="302" y="357">，因此被识别为双击。</text>
</svg>
`;
