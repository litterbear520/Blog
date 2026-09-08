/**
 * remark 插件：把「带 run 标记的代码块」和「紧随其后的 output 代码块」合并。
 *
 *   ```python run
 *   print(1)
 *   ```
 *
 *   ```output exit=0
 *   1
 *   ```
 *
 * output 块被从文档里移除，内容挂到前一个代码块的 data-output 属性上，
 * 由 src/theme/CodeBlock 渲染成「运行」按钮 + 输出面板。
 * output 围栏的 meta 表示进程状态：exit=N（默认 exit=0）、hang（不退出）、empty（无输出）。
 */

function parseStatus(meta) {
  const m = (meta || '').trim();
  if (m === 'hang') return 'hang';
  if (m === 'empty') return 'empty';
  const exit = m.match(/exit=(\d+)/);
  return exit ? `exit:${exit[1]}` : 'exit:0';
}

function hasRunFlag(meta) {
  return /(^|\s)run(\s|$)/.test(meta || '');
}

function walk(parent) {
  const children = parent.children;
  if (!Array.isArray(children)) return;
  for (let i = 0; i < children.length; i += 1) {
    const node = children[i];
    if (node.type === 'code' && hasRunFlag(node.meta)) {
      const next = children[i + 1];
      if (next && next.type === 'code' && next.lang === 'output') {
        node.data = node.data || {};
        node.data.hProperties = {
          ...(node.data.hProperties || {}),
          'data-output': next.value,
          'data-output-status': parseStatus(next.meta),
        };
        children.splice(i + 1, 1);
      }
    }
    walk(node);
  }
}

export default function remarkRunOutput() {
  return (tree) => {
    walk(tree);
  };
}
