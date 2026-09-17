import {useEffect, useState} from 'react';

const START_DELAY = 350; // 点击后先「运行中」一小会
const LINE_DELAY = 80; // 逐行打印间隔

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// 逐行显示预录输出：返回已显示的行数、是否已开始打印、是否打印完毕。
// 代码块的输出面板和 CodeWalkthrough 的终端共用。
export default function useTypewriter(lines, active) {
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
