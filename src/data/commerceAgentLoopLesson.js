// The first Commerce Agents lesson uses the same guided reader as MCP sampling.
// Read the synced Python snapshot; do not maintain a second copy of agent.py.
import SNAP from './codeWalkthroughs/commerce.files.js';

// Resolve semantic anchors instead of maintaining fragile, hard-coded line numbers.
// A source change must fail loudly rather than highlight an unrelated code block.
export function focusRange(source, start, end) {
  const lines = source.split(/\r?\n/);
  const locate = (marker) => {
    const matches = lines.flatMap((line, index) =>
      line.trimStart().startsWith(marker) ? [index] : [],
    );
    if (matches.length !== 1) {
      throw new Error(`Commerce lesson: expected one anchor "${marker}", found ${matches.length}`);
    }
    return matches[0];
  };
  const first = locate(start);
  let last = end === undefined ? lines.length : locate(end);
  while (last > first && !lines[last - 1].trim()) last -= 1;
  if (last <= first) {
    throw new Error(`Commerce lesson: invalid range "${start}" → "${end || 'EOF'}"`);
  }
  return { line: first + 1, endLine: last };
}

const files = SNAP.s01;
const source = files['agent.py'];
const paragraph = (text) => ({ type: 'p', text });
const step = (title, start, end, ...paragraphs) => ({
  title,
  file: 'agent.py',
  ...focusRange(source, start, end),
  body: paragraphs.map(paragraph),
});

const steps = [
  step(
    '准备可以查询的商品数据',
    'PRODUCTS = [',
    '# ── 工具 Schema',
    '我们先准备一个商品目录。`PRODUCTS` 中的每条记录都包含商品 ID、名称、价格、评分和库存状态。例如，降噪耳机是一条在库商品，咖啡机则标记为缺货。',
    '这六条数据放在 Python 程序里，并没有自动进入模型的上下文。接下来，我们会提供一个函数，让程序按模型请求取出相关记录，而不是把整个目录直接写进提示词。',
  ),
  step(
    '先写一个普通的搜索函数',
    'def search_products(',
    '# ── 工具调用分发',
    '`search_products` 是一个普通的 Python 函数。它把 `query` 转为小写，在商品名称中做包含匹配，再用 `limit` 限制结果数量，最后通过 `json.dumps` 返回 JSON 字符串。',
    '例如，`search_products("耳机")` 会返回名称中包含“耳机”的记录；没有匹配项时返回字符串 `"[]"`。这里没有向量检索或模型推理，搜索本身完全由 Python 完成。',
  ),
  step(
    '用工具定义说明怎样请求搜索',
    'search_products_schema =',
    '# ── 搜索函数',
    '函数能够执行搜索，还需要让模型知道如何请求它。工具定义通过 `name` 标识 `search_products`，通过 `description` 说明用途，再用 `input_schema` 描述参数。',
    '`query` 是必填的字符串，`limit` 是可选的整数。模型省略 `limit` 时，最终执行的 Python 函数会使用默认值 5。这份定义描述调用方式，不会把函数实现发送给模型，也不会自动执行函数。',
  ),
  step(
    '把问题和工具一起发给模型',
    'user_input = input(',
    'messages.append({"role": "assistant"',
    '外层循环读入用户的问题，把它追加为 `user` 消息。接着，内层循环通过 `client.messages.create` 发出请求：`messages` 是当前对话，`tools=[search_products_schema]` 告诉模型可以使用这个搜索工具。',
    '对于“店里有没有降噪耳机？”，模型可以返回 `search_products` 的调用请求，例如参数为 `{"query": "耳机"}`。这仍然只是一份请求，程序还没有执行搜索。',
  ),
  step(
    '保留模型的完整回复',
    'messages.append({"role": "assistant"',
    'if response.stop_reason !=',
    '`response.content` 是内容块列表，不一定只有一段文字。它可以同时包含 `text` 和 `tool_use`；`tool_use` 中的 `name`、`input` 和 `id` 分别说明调用哪个工具、使用什么参数，以及这次调用的标识。',
    '程序把完整的 `response.content` 作为 `assistant` 消息保存，再把 `text` 内容打印出来。不能只保存打印出的文字，否则下一次请求中会缺少工具请求，后面的结果就没有对应对象。',
  ),
  step(
    '找到函数并执行工具请求',
    'tool_results = []',
    'tool_results.append(',
    '模型需要工具时，程序遍历回复中的 `tool_use` 内容块。`TOOL_MAP` 把工具名称映射到真正的 Python 函数，`run = TOOL_MAP[block.name]` 先找到它，`run(**block.input)` 再把参数展开并执行。',
    '当输入是 `{"query": "耳机"}` 时，这相当于调用 `search_products(query="耳机")`。直到执行这一行，搜索才真正发生。遍历内容块也允许程序处理同一条回复里的多个工具请求。',
  ),
  step(
    '把搜索结果放回对话',
    'tool_results.append(',
    undefined,
    '程序把每个函数返回值包装成 `tool_result`。`content` 保存搜索结果，`tool_use_id` 使用刚才的 `block.id`，表示“这是哪一次调用的结果”，不是搜索到的商品 ID。',
    '这些结果被放进一条 `user` 消息，紧接着之前的 `assistant` 工具请求。这里的 `user` 是 API 消息角色，不是等待用户重新输入。追加完成后，内层循环回到顶部，带着更新后的 `messages` 再次请求模型；打印 `[工具结果]` 本身并没有把数据发送出去。',
  ),
  step(
    '判断继续调用还是结束这一轮',
    'if response.stop_reason !=',
    'tool_results = []',
    '每次模型响应后，程序都会检查 `stop_reason`。等于 `tool_use` 时，这个 `break` 不会执行，程序继续处理工具；搜索结果回传后的下一次响应，也会经过同一处判断。',
    '当模型以 `end_turn` 正常结束回答时，程序退出内层循环，回到外层等待用户继续说话。当前最小代码对所有非 `tool_use` 都执行 `break`，所以 `max_tokens` 等情况也会退出，不能把它们误认为正常完成。',
  ),
];

export default { files, steps };
