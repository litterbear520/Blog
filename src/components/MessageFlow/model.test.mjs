import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { buildFlow, rowTone } from './model.mjs';

const base = () => ({
  summary: '模型请求加购，执行器先过门控再调用后端。',
  participants: [
    { id: 'model', name: '模型', role: 'process' },
    { id: 'executor', name: '执行器' },
    { id: 'backend', name: '店铺后端', role: 'external' },
  ],
  items: [
    { from: 'model', to: 'executor', label: '`add_to_cart`' },
    { note: 'executor', text: '门控放行' },
    { from: 'executor', to: 'backend', label: '写购物车' },
    { from: 'backend', to: 'model', rows: [['user', 'tool_result', '已加购']], kind: 'secondary' },
    { note: ['model', 'executor'], text: '整个过程在一轮里完成', focal: true },
  ],
});

test('messages span from the leftmost to the rightmost participant and keep their direction', () => {
  const flow = buildFlow(base());
  assert.equal(flow.total, 5);
  assert.deepEqual(flow.participants.map((p) => p.role), ['process', 'neutral', 'external']);
  const [first, , third, back] = flow.items;
  assert.deepEqual([first.start, first.end, first.direction], [0, 1, 'right']);
  assert.deepEqual([third.start, third.end, third.direction], [1, 2, 'right']);
  assert.deepEqual([back.start, back.end, back.direction, back.kind], [0, 2, 'left', 'secondary']);
  assert.equal(back.fromName, '店铺后端');
  assert.equal(back.toName, '模型');
});

test('notes cover one or two lifelines; the single focal item is kept', () => {
  const flow = buildFlow(base());
  assert.deepEqual([flow.items[1].start, flow.items[1].end], [1, 1]);
  assert.deepEqual([flow.items[4].start, flow.items[4].end, flow.items[4].focal], [0, 1, true]);
});

test('upTo shows the first N items so successive figures grow one step at a time', () => {
  assert.equal(buildFlow(base(), 2).items.length, 2);
  assert.equal(buildFlow(base(), 2).total, 5);
  assert.equal(buildFlow(base(), 5).items.length, 5);
  for (const bad of [0, 6, 1.5, '2', null]) assert.throws(() => buildFlow(base(), bad), /upTo/);
});

test('collapsed messages are their own kind, whatever kind says', () => {
  const data = base();
  data.items[0] = { from: 'model', to: 'executor', label: '前面的对话', collapsed: true, kind: 'primary' };
  assert.equal(buildFlow(data).items[0].kind, 'collapsed');
});

test('mistakes in the data fail loudly instead of drawing a misaligned figure', () => {
  const broken = [
    [(d) => { d.summary = ' '; }, /summary/],
    [(d) => { d.participants = d.participants.slice(0, 1); }, /two participants/],
    [(d) => { d.participants[1].id = 'model'; }, /duplicate/],
    [(d) => { d.participants[0].role = 'accent'; }, /unknown role/],
    [(d) => { d.items[0].to = 'nobody'; }, /unknown participant "nobody"/],
    [(d) => { d.items[0].to = 'model'; }, /itself/],
    [(d) => { d.items[0] = { from: 'model', to: 'executor' }; }, /label or rows/],
    [(d) => { d.items[3].rows = [['user', 'tool_result']]; }, /three non-empty strings/],
    [(d) => { d.items[0].kind = 'bold'; }, /unknown kind/],
    [(d) => { d.items[1].focal = true; }, /at most one focal/],
    [(d) => { d.items[1] = { note: ['model', 'executor', 'backend'], text: 'x' }; }, /one or two/],
    [(d) => { d.items[1].text = ''; }, /needs text/],
    [(d) => { d.items = []; }, /non-empty/],
  ];
  for (const [mutate, message] of broken) {
    const data = base();
    mutate(data);
    assert.throws(() => buildFlow(data), message);
  }
});

test('message table role cells are colored by who speaks', () => {
  assert.equal(rowTone('user'), 'external');
  assert.equal(rowTone(' Assistant '), 'process');
  assert.equal(rowTone('tool_result'), 'neutral');
});

// 注册表里的每一张图都要能通过校验，并且登记过（仓库不是 type: module，数据文件用 data URL 导入）
test('every registered flow builds, and every flow file is registered', async () => {
  const dir = new URL('../../data/messageFlows/', import.meta.url);
  const registry = readFileSync(new URL('index.js', dir), 'utf8');
  const files = readdirSync(dir).filter((name) => name.endsWith('.js') && name !== 'index.js');
  for (const name of files) {
    const stem = name.slice(0, -3);
    assert.match(registry, new RegExp(`from '\\./${stem}'`), `${name} is not registered in index.js`);
    const code = readFileSync(new URL(name, dir), 'utf8');
    const flow = (await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`)).default;
    assert.doesNotThrow(() => buildFlow(flow), name);
  }
});
