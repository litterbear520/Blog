// 《工具的定义与边界》的演练：读 roadmap-sync 生成的“工程化 Agent 工具”快照，不另抄一份代码。
// 专题各课共用快照 tools，这一课只挑一次搜索经过的四个文件。
import SNAP from './codeWalkthroughs/agentTools.files.js';
import { focusRange } from './focusRange.js';

const REGISTRY = 'shopping_agent/tools/registry.py';
const EXECUTION = 'commerce_common/execution.py';
const EXECUTOR = 'shopping_agent/executor.py';
const BACKEND = 'shopping_agent/backend.py';

const files = Object.fromEntries(
  [REGISTRY, EXECUTION, EXECUTOR, BACKEND].map((path) => [path, SNAP.tools[path]]),
);
const paragraph = (text) => ({ type: 'p', text });
const step = (title, file, start, end, ...paragraphs) => ({
  title,
  file,
  ...focusRange(files[file], start, end),
  body: paragraphs.map(paragraph),
});

const steps = [
  step(
    '工具定义的三条约定',
    REGISTRY,
    '"""购物 agent 的工具定义',
    '# 项目中对应',
    '我们从工具定义所在的文件开始。开头的说明写下了整份工具列表的约定：顺序固定，列表只取决于部署配置，所以每次请求发出的工具定义逐字节相同；某一次调用能不能执行，交给执行器去判断。',
    '最后一句给描述划了范围：一条描述只管一个工具，跨工具的规则放在系统提示词或技能里。这样修改一个工具的描述时，不会牵动其他工具。',
  ),
  step(
    '模型读到的搜索工具',
    REGISTRY,
    '"name": "search_products",',
    '"name": "get_product_details",',
    '`search_products` 的 `description` 先说返回什么：商品的 id、标题、品牌、价格、评分和库存状态；再说怎样用：用具体的关键词搜索，顾客明确说的条件放进 `filters`，顾客提到几个不同商品时每个单独搜一次。',
    '`input_schema` 里只有 `query` 是必填的，`limit` 的 `maximum` 是 8，`additionalProperties` 为 `False`。这些约束写给模型看，让它在生成参数时就知道边界在哪；执行器收到参数后还会自己再检查一遍，后面看到执行器时会讲。',
  ),
  step(
    '把明确的条件和猜测分开',
    REGISTRY,
    'def _filters_schema()',
    'def build_tools(',
    '`filters` 的说明是“顾客明确提出的筛选条件；猜测的内容放在 query 里”。顾客说“200 美元以内”，价格上限就写进 `max_price`；顾客没提、只是模型推测可能合适的条件，只能留在关键词里。',
    '这样区分的道理在于，过滤条件会直接把商品排除在结果之外：模型猜错一个 `min_rating`，合适的商品就不会出现，模型也无从知道它们存在。`sort` 用 `enum` 限定为四种排序方式，并说明默认按相关度，除非顾客指定。',
  ),
  step(
    '列表只随部署配置变化',
    REGISTRY,
    'absent = config.absent_tools()',
    'return tools',
    '`build_tools` 的最后按部署配置拿掉关掉的系统：`config.absent_tools()` 给出这些工具名，内置工具和展示型工具都从列表里去掉，其余的保持原来的顺序。',
    '这是整份列表唯一会变的地方。同一个部署里，每一轮请求发出的工具定义完全相同，这段请求前缀才能一直命中提示词缓存。',
  ),
  step(
    '调用先到分派入口',
    EXECUTION,
    'async def dispatch(',
    'def _load_skill(',
    '模型的调用到达执行器后，`execute` 把它交给 `dispatch`。第一行先检查部署有没有关掉这个工具：即使模型凭印象调用了列表里没有的工具，也只会收到“不是本店提供的功能；直接说明，不要推荐它”，调用不会走到后端。',
    '接下来依次是加载技能、展示型工具和普通 handler；工具名都不认识时返回“未知工具”。`dispatch` 不做业务判断，只把调用交给对的函数。按参考实现的设计，Messages API 运行时、Agent SDK 工具集和 MCP 服务器都经过这同一个入口。',
  ),
  step(
    '执行器整理参数，再交给后端',
    EXECUTOR,
    'async def _search_products(',
    'async def _get_product_details(',
    '`_search_products` 先整理参数：`query` 经过清洗，限制在 300 个字符以内；`filters` 由 `parse_argument` 按 `SearchFilters` 校验，不合格时会把出错的字段告诉模型；`limit` 由 `_search_limit` 截到部署配置的上限，默认是 8。',
    '整理好的参数交给 `self._backend.search_products`，执行器自己不做检索和排序。拿到结果后，它把商品记进 `seen_products`，再用 `search_result_text` 写成一行说明加一段围栏数据，交回模型。',
  ),
  step(
    '检索和排序留在后端',
    BACKEND,
    'async def search_products(',
    'async def get_product_details(',
    '`StorefrontBackend` 是采用方唯一需要实现的接口。`search_products` 的约定写在文档字符串里：返回最接近的文本匹配，按相关度排序，最多 `limit` 条；没有匹配时返回空列表。有选项的家族商品算一条结果，它的变体要通过 `get_product_details` 解析。',
    '原型店铺的实现只是在五件商品上做关键词匹配和价格过滤。换成真实的商店时，只要把这个方法接到商店自己的搜索系统，工具定义和执行器都不用改。',
  ),
];

export default { files, steps };
