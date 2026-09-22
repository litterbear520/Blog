import React, {useState} from 'react';
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

// Lucide wrap-text：和 CodeWalkthrough 终端的换行按钮同一个图标
function IconWrapText(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18" />
      <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
      <path d="m16 16-2 2 2 2" />
      <path d="M3 18h7" />
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
  const [wrap, setWrap] = useState(false);
  const open = Boolean(run && run.open && run.output !== null);
  const lines = open && run.status !== 'empty' ? run.output.replace(/\n$/, '').split('\n') : [];
  const {shown, started, done} = useTypewriter(lines, open);

  if (!open) {
    return null;
  }

  return (
    <div className="run-output" role="region" aria-label="运行输出">
      {/* 终端图标排在输出第一行的行首，文字紧随其后，不单独占一行也不做角标 */}
      <div className="run-output__row">
        <span className="run-output__mark" title="预先录制的运行结果，不是浏览器实时执行">
          <IconTerminal aria-label="输出" role="img" />
        </span>
        <pre className={clsx('run-output__body', wrap && 'run-output__body--wrap')} aria-live="polite">
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
      </div>
      {done && (
        <div className={clsx('run-output__foot', `run-output__foot--${run.status.split(':')[0]}`)}>
          <span>
            {run.status === 'hang' && <span className="run-output__cursor" />}
            {statusText(run.status)}
          </span>
          {/* 换行按钮放在底栏右侧：不占输出行的宽度，高亮行的出血照旧顶到边 */}
          <button
            type="button"
            className="run-output__wrap"
            aria-pressed={wrap}
            aria-label={wrap ? '取消自动换行' : '自动换行'}
            title={wrap ? '取消自动换行' : '自动换行'}
            onClick={() => setWrap(!wrap)}>
            <IconWrapText aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
