// Snapshot lesson registry: variant -> { steps }. Each step has title/body,
// changed files (null deletes), optional file/lines, and prerecorded runs.
import unittest from './unittest';
import codeObject from './codeObject';
import commerce from './commerce';

export const UI = {
  'step.heading': '第 {n} 步 · {title}',
  'step.counter': '{n} / {total}',
  'btn.prev': '上一步',
  'btn.next': '下一步',
  'terminal.heading': '终端',
  'terminal.hint': '预先录制的运行结果，不是浏览器实时执行',
  'terminal.run': '运行',
  'terminal.wrap': '自动换行',
  'terminal.nowrap': '取消自动换行',
  'terminal.collapse': '收起',
  'terminal.running': '运行中…',
  'terminal.exit': '进程退出，退出码 {code}',
};

export default { unittest, codeObject, commerce };
