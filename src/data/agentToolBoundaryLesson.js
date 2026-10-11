// 《工具边界演练》：《工具边界》《写给模型的工具定义》两课共用的演练，读 roadmap-sync 生成的
// “工程化 Agent 工具”快照，不另抄一份代码。专题各课共用快照 tools，这一页只挑一次搜索经过的四个文件。
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

// 先看模型读到的定义，再顺着一次搜索走：分派、整理参数、后端检索、记下并交回。
const steps = [
  step(
    '列表的约定',
    REGISTRY,
    '"""购物 agent 的工具定义',
    '# 项目中对应',
    '开头三行是整份工具列表的约定：顺序固定，只随部署配置变化，所以每次请求的工具定义逐字节相同。跨工具的规则不写进描述，放在提示词或技能里。',
  ),
  step(
    '搜索工具的描述',
    REGISTRY,
    '"name": "search_products",',
    '"filters": _filters_schema(),',
    '模型读到的搜索工具就是这些：名字、一段描述和参数。描述先说返回什么，再说怎么用，比如顾客提到几样不同的东西时，每样单独搜一次。',
  ),
  step(
    '筛选条件',
    REGISTRY,
    '"description": "顾客明确提出的筛选条件',
    'def build_tools(',
    '`filters` 的说明把判断拆到字段上：顾客明确提出的条件放这里，猜测的内容放进 `query`。排序方式用枚举限定成四种，默认按相关度。',
  ),
  step(
    '去掉没开的系统',
    REGISTRY,
    'absent = config.absent_tools()',
    'return tools',
    '列表的最后按部署配置去掉没开的系统，其余工具保持原来的顺序。这是整份列表唯一会变的地方，同一个部署每次请求都发出同一份列表。',
  ),
  step(
    '分派入口',
    EXECUTION,
    'async def dispatch(',
    'def _load_skill(',
    '模型的调用到达执行器后，先进 `dispatch`。部署关掉的工具在第一行就被拦下，模型会收到“不是本店提供的功能”，调用走不到后端。',
  ),
  step(
    '整理参数',
    EXECUTOR,
    'async def _search_products(',
    'products = await self._backend.search_products(',
    '执行器先整理参数：关键词过长会被截断，筛选条件不合规就把出错的字段退回给模型，条数截到上限。执行器自己不做检索。',
  ),
  step(
    '后端检索',
    BACKEND,
    'async def search_products(',
    'async def get_product_details(',
    '检索、过滤和排序都在后端：按相关度返回最接近的文本匹配，最多 `limit` 条，没有匹配就返回空列表。换一家商店，只要把这个方法接到它自己的搜索系统。',
  ),
  step(
    '记下并交回',
    EXECUTOR,
    'products = await self._backend.search_products(',
    'async def _get_product_details(',
    '拿到商品后，执行器把它们记进 `seen_products`，再写成一行说明加一段数据交回模型。原型店铺里，这次只交回帐篷 `p-100`。',
  ),
];

export default { files, steps };
