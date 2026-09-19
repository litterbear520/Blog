import React from 'react';
import clsx from 'clsx';
import {useRunOutput} from '@site/src/theme/CodeBlock/RunOutput/context';
import useTypewriter from '@site/src/theme/CodeBlock/RunOutput/useTypewriter';

// Lucide square-terminal：与 CodeWalkthrough 终端头部同一个图标，两处面板统一
function IconTerminal(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
    </svg>
  );
}

function statusText(status) {
  if (status === 'hang') return '进程未退出，需要 Ctrl + C 终止';
  if (status === 'empty') return '没有任何输出，进程退出';
  const code = status.startsWith('exit:') ? status.slice(5) : '0';
  return `进程退出，退出码 ${code}`;
}

export default function RunOutputPanel() {
  const run = useRunOutput();
  const open = Boolean(run && run.open && run.output !== null);
  const lines = open && run.status !== 'empty' ? run.output.replace(/\n$/, '').split('\n') : [];
  const {shown, started, done} = useTypewriter(lines, open);

  if (!open) {
    return null;
  }

  return (
    <div className="run-output" role="region" aria-label="运行输出">
      {/* 角标：和代码块右上角的复制按钮同一列，不单独占一行 */}
      <span className="run-output__mark" title="预先录制的运行结果，不是浏览器实时执行">
        <IconTerminal aria-label="输出" role="img" />
      </span>
      <pre className="run-output__body" aria-live="polite">
        {!started && <span className="run-output__running">运行中…</span>}
        {lines.slice(0, shown).map((line, i) => (
          <div
            className={clsx(
              'run-output__line',
              run.highlight.has(i + 1) && 'run-output__line--highlight',
            )}
            key={i}>
            {line === '' ? ' ' : line}
          </div>
        ))}
        {started && !done && <span className="run-output__cursor" />}
      </pre>
      {done && (
        <div className={clsx('run-output__foot', `run-output__foot--${run.status.split(':')[0]}`)}>
          {run.status === 'hang' && <span className="run-output__cursor" />}
          {statusText(run.status)}
        </div>
      )}
    </div>
  );
}
