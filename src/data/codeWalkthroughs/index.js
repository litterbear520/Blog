// CodeWalkthrough 组件的数据注册表：variant 名 → { steps }。
// 每一步：title、body（段落数组，反引号包住的部分渲染成行内代码）、files（本步改动的文件，null 表示删除）、
// file（可选，本步默认打开的文件，缺省取第一个改动的文件）、lines（可选，[[起,止], …]，1 起数，把这些行标成聚焦行并滚到第一处；
// 配合不写 files 的步骤可以在同一份代码里逐段讲）、runs（本步可运行的命令与预录输出）。
import unittest from './unittest';
import commerce from './commerce';

export const UI = {
  'step.heading': '第 {n} 步 · {title}',
  'step.counter': '{n} / {total}',
  'btn.prev': '上一步',
  'btn.next': '下一步',
  'files.heading': '文件',
  'copy.idle': '复制代码',
  'copy.copying': '复制中…',
  'copy.copied': '已复制',
  'copy.error': '复制失败',
  'copy.hint': '复制当前步骤中 {path} 的完整代码',
  'copy.empty': '请先选择一个文件',
  'copy.errorHint': '复制失败，请重试或手动选择代码复制',
  'diff.show': '显示改动',
  'diff.hide': '只看当前',
  'badge.new': '新文件',
  'badge.changed': '已修改',
  'terminal.heading': '终端',
  'terminal.hint': '预先录制的运行结果，不是浏览器实时执行',
  'terminal.run': '运行',
  'terminal.collapse': '收起',
  'terminal.running': '运行中…',
  'terminal.exit': '进程退出，退出码 {code}',
  'aria.codeActions': '代码操作',
  'aria.openFiles': '已打开的文件',
  'aria.closeTab': '关闭 {path}',
  'empty.title': '没有打开的文件',
  'empty.body': '在左侧文件树里选择一个文件',
};

export default { unittest, commerce };
