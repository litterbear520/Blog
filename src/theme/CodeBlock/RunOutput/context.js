import React, {createContext, useContext, useMemo, useState} from 'react';

// 代码块的「预录输出」状态：由 remark-run-output 插件写入 data-output / data-output-status，
// 在 Content/String 里读出后经此 context 分发给 Buttons（运行按钮）和 Layout（输出面板）。
const RunOutputContext = createContext(null);

// open / onToggle 可由外部接管（ProjectCodeViewer 换步骤时要收起输出）；不传就自己管。
export function RunOutputProvider({output, status, highlight, blockId, open: openProp, onToggle, children}) {
  const [openState, setOpen] = useState(false);
  const open = openProp ?? openState;
  const value = useMemo(
    () => ({
      // 空输出（```output empty）时 data-output 是空串，可能被序列化丢掉，以 status 存在与否兜底
      output: typeof output === 'string' ? output : status ? '' : null,
      status: status || 'exit:0',
      // 需要高亮的输出行号（1 起数），来自 ```output {3,7-9}
      highlight: new Set(
        (highlight || '')
          .split(',')
          .map((n) => Number(n))
          .filter((n) => n > 0),
      ),
      blockId: blockId || null,
      open,
      toggle: onToggle ?? (() => setOpen((v) => !v)),
    }),
    [output, status, highlight, blockId, open, onToggle],
  );
  return (
    <RunOutputContext.Provider value={value}>{children}</RunOutputContext.Provider>
  );
}

export function useRunOutput() {
  return useContext(RunOutputContext);
}
