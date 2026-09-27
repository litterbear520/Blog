// MessageFlow 的纯数据层：校验一张消息流图，算出每一项占哪几列、箭头朝哪边。
// 不依赖 React，组件和 node --test 共用。数据写错时直接抛错，不画一张错位的图。

export const ROLES = ['neutral', 'process', 'done', 'external'];
const KINDS = ['primary', 'secondary'];

function fail(message) {
  throw new Error(`MessageFlow: ${message}`);
}

// 消息小表的角色格按角色名上色：user 是外部输入，assistant 是模型，其余（tool_result、system…）中性
export function rowTone(role) {
  const name = String(role).trim().toLowerCase();
  if (name.startsWith('user')) return 'external';
  if (name.startsWith('assistant')) return 'process';
  return 'neutral';
}

function checkRows(rows, where) {
  if (!Array.isArray(rows) || rows.length === 0) fail(`${where} rows must be a non-empty array`);
  rows.forEach((row, i) => {
    if (!Array.isArray(row) || row.length !== 3 || row.some((cell) => typeof cell !== 'string' || !cell.trim())) {
      fail(`${where} row ${i + 1} must be [role, block, content] with three non-empty strings`);
    }
  });
}

export function buildFlow(flow, upTo) {
  if (!flow || typeof flow !== 'object') fail('flow data is missing');
  const { participants, items, summary } = flow;
  if (typeof summary !== 'string' || !summary.trim()) fail('summary is required (screen readers read it instead of the drawing)');
  if (!Array.isArray(participants) || participants.length < 2) fail('need at least two participants');

  const column = new Map();
  const people = participants.map((p, i) => {
    if (!p || typeof p.id !== 'string' || !p.id || typeof p.name !== 'string' || !p.name.trim()) {
      fail(`participant ${i + 1} needs an id and a name`);
    }
    if (column.has(p.id)) fail(`duplicate participant id "${p.id}"`);
    const role = p.role ?? 'neutral';
    if (!ROLES.includes(role)) fail(`participant "${p.id}" has unknown role "${role}"`);
    column.set(p.id, i);
    return { ...p, role };
  });
  const col = (id, where) => {
    if (!column.has(id)) fail(`${where} refers to unknown participant "${id}"`);
    return column.get(id);
  };

  if (!Array.isArray(items) || items.length === 0) fail('items must be a non-empty array');
  const built = items.map((item, k) => {
    const where = `item ${k + 1}`;
    if ('note' in item) {
      const over = Array.isArray(item.note) ? item.note : [item.note];
      if (over.length < 1 || over.length > 2) fail(`${where} note covers one or two participants`);
      const cols = over.map((id) => col(id, where));
      if (typeof item.text !== 'string' || !item.text.trim()) fail(`${where} note needs text`);
      return { type: 'note', start: Math.min(...cols), end: Math.max(...cols), text: item.text, focal: Boolean(item.focal) };
    }
    const from = col(item.from, where);
    const to = col(item.to, where);
    if (from === to) fail(`${where} goes from "${item.from}" to itself; use a note instead`);
    const hasLabel = typeof item.label === 'string' && item.label.trim();
    if (!hasLabel && item.rows === undefined) fail(`${where} needs a label or rows`);
    if (item.rows !== undefined) checkRows(item.rows, where);
    const kind = item.collapsed ? 'collapsed' : item.kind ?? 'primary';
    if (!item.collapsed && !KINDS.includes(kind)) fail(`${where} has unknown kind "${kind}"`);
    return {
      type: 'message',
      start: Math.min(from, to),
      end: Math.max(from, to),
      direction: to > from ? 'right' : 'left',
      fromName: people[from].name,
      toName: people[to].name,
      label: hasLabel ? item.label : null,
      rows: item.rows ?? null,
      kind,
      focal: Boolean(item.focal),
    };
  });

  // 一张图最多一个结论框：陶土色一多就不再是重点
  if (built.filter((item) => item.focal).length > 1) fail('at most one focal item per flow');

  const count = upTo === undefined ? built.length : upTo;
  if (!Number.isInteger(count) || count < 1 || count > built.length) {
    fail(`upTo must be an integer from 1 to ${built.length}, got ${upTo}`);
  }
  return {
    title: typeof flow.title === 'string' && flow.title.trim() ? flow.title : null,
    summary,
    participants: people,
    items: built.slice(0, count),
    total: built.length,
  };
}
