/**
 * 替代 @docusaurus/theme-common 的 useCodeWordWrap，返回值一致。
 *
 * 原实现只在挂载时、窗口 resize 时、以及所在 tab 面板的 hidden 属性变化时
 * 量一次宽度。Tabs 按 localStorage 恢复上次选的 tab 时，面板在观察器挂上之前
 * 就已显示，这次变化被漏掉：代码块挂载时还隐藏（宽度为 0），换行按钮就一直不出现，
 * 要切走再切回来才有。这里改用 ResizeObserver，代码块尺寸一变就重量，
 * 隐藏的 tab、折叠块展开、窗口缩放都能覆盖。
 */
import {useCallback, useEffect, useRef, useState} from 'react';

export function useCodeWordWrap() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isCodeScrollable, setIsCodeScrollable] = useState(false);
  const codeBlockRef = useRef(null);

  const toggle = useCallback(() => {
    const codeElement = codeBlockRef.current.querySelector('code');
    if (isEnabled) {
      codeElement.removeAttribute('style');
    } else {
      codeElement.style.whiteSpace = 'pre-wrap';
      // 换行后不应再出现横向滚动条，超长的单词/字符串也要能断开
      codeElement.style.overflowWrap = 'anywhere';
    }
    setIsEnabled((value) => !value);
  }, [isEnabled]);

  const updateCodeIsScrollable = useCallback(() => {
    const element = codeBlockRef.current;
    if (!element) {
      return;
    }
    const {scrollWidth, clientWidth} = element;
    setIsCodeScrollable(
      scrollWidth > clientWidth ||
        element.querySelector('code').hasAttribute('style'),
    );
  }, []);

  useEffect(() => {
    updateCodeIsScrollable();
  }, [isEnabled, updateCodeIsScrollable]);

  useEffect(() => {
    const element = codeBlockRef.current;
    if (!element) {
      return undefined;
    }
    const observer = new ResizeObserver(updateCodeIsScrollable);
    observer.observe(element);
    return () => observer.disconnect();
  }, [updateCodeIsScrollable]);

  return {codeBlockRef, isEnabled, isCodeScrollable, toggle};
}
