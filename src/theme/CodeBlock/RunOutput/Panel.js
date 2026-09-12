import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useRunOutput} from '@site/src/theme/CodeBlock/RunOutput/context';

const START_DELAY = 350; // 点击后先「运行中」一小会
const LINE_DELAY = 80; // 逐行打印间隔

function statusText(status) {
  if (status === 'hang') return '进程未退出，需要 Ctrl + C 终止';
  if (status === 'empty') return '没有任何输出，进程退出';
  const code = status.startsWith('exit:') ? status.slice(5) : '0';
  return `进程退出，退出码 ${code}`;
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// 逐行显示：返回已显示的行数和是否打印完毕
function useTypewriter(lines, active) {
  const total = lines.length;
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!active) {
      setShown(0);
      setStarted(false);
      return undefined;
    }
    if (prefersReducedMotion()) {
      setStarted(true);
      setShown(total);
      return undefined;
    }
    let timer = window.setTimeout(() => {
      setStarted(true);
      timer = window.setInterval(() => {
        setShown((n) => {
          if (n + 1 >= total) {
            window.clearInterval(timer);
            return total;
          }
          return n + 1;
        });
      }, LINE_DELAY);
    }, START_DELAY);
    return () => {
      window.clearTimeout(timer);
      window.clearInterval(timer);
    };
  }, [active, total]);

  return {shown, started, done: started && shown >= total};
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
      <div className="run-output__head">
        <span
          className="run-output__label"
          title="预先录制的运行结果，不是浏览器实时执行">
          输出
        </span>
        {!started && <span className="run-output__running">运行中…</span>}
      </div>
      <pre className="run-output__body" aria-live="polite">
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
