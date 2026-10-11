// Resolve semantic anchors instead of maintaining fragile, hard-coded line numbers.
// A source change must fail loudly rather than highlight an unrelated code block.
// Shared by every guided walkthrough whose steps point into synced source snapshots.

// Blank lines, a lone opening bracket and decorators belong to the code after the end anchor.
const LEADS_INTO_NEXT = /^\s*(?:[[{(]\s*)?$|^\s*@\w/;

// `after`: when the start / end markers repeat in the file (e.g. every tool's "input_schema"), anchor on a
// unique line first and take the first start after it, then the first end after the start.
export function focusRange(source, start, end, { after } = {}) {
  const lines = source.split(/\r?\n/);
  const matchesFrom = (marker, from = 0) => lines.flatMap((line, index) =>
    index >= from && line.trimStart().startsWith(marker) ? [index] : [],
  );
  const locate = (marker) => {
    const matches = matchesFrom(marker);
    if (matches.length !== 1) {
      throw new Error(`Walkthrough anchor: expected one anchor "${marker}", found ${matches.length}`);
    }
    return matches[0];
  };
  const firstFrom = (marker, from) => {
    const [index] = matchesFrom(marker, from);
    if (index === undefined) throw new Error(`Walkthrough anchor: no "${marker}" after line ${from + 1}`);
    return index;
  };
  const first = after === undefined ? locate(start) : firstFrom(start, locate(after));
  let last = end === undefined
    ? lines.length
    : after === undefined ? locate(end) : firstFrom(end, first + 1);
  while (last > first && LEADS_INTO_NEXT.test(lines[last - 1])) last -= 1;
  if (last <= first) {
    throw new Error(`Walkthrough anchor: invalid range "${start}" → "${end || 'EOF'}"`);
  }
  return { line: first + 1, endLine: last };
}
