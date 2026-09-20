// 行级 diff（最长公共子序列）：把旧文本和新文本对齐成一串行，
// 每行标记 same / add / del，供代码区按行上色。文件都很小，O(n·m) 足够。
export function diffLines(oldText, newText) {
  const a = oldText.replace(/\n$/, '').split('\n');
  const b = newText.replace(/\n$/, '').split('\n');
  const n = a.length;
  const m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = m - 1; j >= 0; j -= 1) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const rows = [];
  let i = 0;
  let j = 0;
  let newNo = 0;
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) {
      newNo += 1;
      rows.push({ type: 'same', text: b[j], newNo });
      i += 1;
      j += 1;
    } else if (j < m && (i >= n || dp[i][j + 1] >= dp[i + 1][j])) {
      newNo += 1;
      rows.push({ type: 'add', text: b[j], newNo });
      j += 1;
    } else {
      rows.push({ type: 'del', text: a[i], newNo: null });
      i += 1;
    }
  }
  return rows;
}

export function plainRows(text) {
  return text
    .replace(/\n$/, '')
    .split('\n')
    .map((line, k) => ({ type: 'same', text: line, newNo: k + 1 }));
}
