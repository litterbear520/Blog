import React, {createContext, useContext, useMemo, useState} from 'react';

// 代码块的「预录输出」状态：由 remark-run-output 插件写入 data-output / data-output-status，
// 在 Content/String 里读出后经此 context 分发给 Buttons（运行按钮）和 Layout（输出面板）。
const RunOutputContext = createContext(null);

export function RunOutputProvider({output, status, children}) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({
      // 空输出（```output empty）时 data-output 是空串，可能被序列化丢掉，以 status 存在与否兜底
      output: typeof output === 'string' ? output : status ? '' : null,
      status: status || 'exit:0',
      open,
      toggle: () => setOpen((v) => !v),
    }),
    [output, status, open],
  );
  return (
    <RunOutputContext.Provider value={value}>{children}</RunOutputContext.Provider>
  );
}

export function useRunOutput() {
  return useContext(RunOutputContext);
}
