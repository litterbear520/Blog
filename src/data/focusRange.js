// Resolve semantic anchors instead of maintaining fragile, hard-coded line numbers.
// A source change must fail loudly rather than highlight an unrelated code block.
// Shared by every guided walkthrough whose steps point into synced source snapshots.

// Blank lines, a lone opening bracket and decorators belong to the code after the end anchor.
const LEADS_INTO_NEXT = /^\s*(?:[[{(]\s*)?$|^\s*@\w/;

export function focusRange(source, start, end) {
  const lines = source.split(/\r?\n/);
  const locate = (marker) => {
    const matches = lines.flatMap((line, index) =>
      line.trimStart().startsWith(marker) ? [index] : [],
    );
    if (matches.length !== 1) {
      throw new Error(`Walkthrough anchor: expected one anchor "${marker}", found ${matches.length}`);
    }
    return matches[0];
  };
  const first = locate(start);
  let last = end === undefined ? lines.length : locate(end);
  while (last > first && LEADS_INTO_NEXT.test(lines[last - 1])) last -= 1;
  if (last <= first) {
    throw new Error(`Walkthrough anchor: invalid range "${start}" → "${end || 'EOF'}"`);
  }
  return { line: first + 1, endLine: last };
}
