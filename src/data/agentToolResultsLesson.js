// 《写给模型的工具结果》的演练：读“工程化 Agent 工具”专题共用的快照，不另抄一份代码。
// 这一课挑结果类型、结果格式和失败分级所在的四个文件。
import SNAP from './codeWalkthroughs/agentTools.files.js';
import { focusRange } from './focusRange.js';

const STREAMING = 'commerce_common/streaming.py';
const SERIALIZATION = 'shopping_agent/serialization.py';
const EXECUTION = 'commerce_common/execution.py';
const EXECUTOR = 'shopping_agent/executor.py';

const files = Object.fromEntries(
  [STREAMING, SERIALIZATION, EXECUTION, EXECUTOR].map((path) => [path, SNAP.tools[path]]),
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
    '一个结果，两个读者',
    STREAMING,
    'class ToolOutcome:',
    'def to_sse(',
    '`ToolOutcome` 是每个工具调用的产出，文档字符串写明了分工：`result_text` 给模型看，`events` 给调用方渲染。前者作为 `tool_result` 的内容进入对话，后者由编排器作为事件发给界面，不进模型的上下文。',
    '另外两个字段记下这次调用的结局：用 `error` 构造的结果 `is_error` 为真，表示失败；用 `held` 构造的结果在 `blocked` 里写下拦住它的门控名。`refused` 把两者合在一起，调用方据此判断这次调用有没有被拒绝。',
  ),
  step(
    '只挑推理要用的字段',
    SERIALIZATION,
    'def compact_product(',
    '_VARIANT_ALWAYS = (',
    '`compact_product` 是搜索结果里一条商品的写法。它只挑 14 个字段，`Product` 上的 `image_url` 和 `category` 不在其中。商务指南说过，最常见的冗余就是每条搜索结果都带着一个图片 URL，它对推理没有用。',
    '最后一行去掉值为 `None` 的字段，`labels`、`attributes` 这类空容器也先写成 `None`，再一起去掉。测试 `test_compact_product_omits_empty_optionals` 断言的就是这件事：一件只有标题和价格的商品，结果里不会出现空的 `brand`、`rating`、`options`。',
  ),
  step(
    '变体只留和家族不同的字段',
    SERIALIZATION,
    '_VARIANT_ALWAYS = (',
    'def product_details_payload(',
    '有选项的家族商品在详情里带着一串变体。`variant_row` 让每个变体保留 `_VARIANT_ALWAYS` 里的四个字段，也就是 id、选项值、价格和库存，再加上和家族不同的字段；和家族相同的标题、品牌都不再重复。',
    '每一行以 id 和选项值开头，注释写明了原因：模型扫的就是这两样。原型店铺的睡垫 `p-400` 有两个变体，长款 `p-400-l` 的完整记录有 10 个字段，写成变体行只剩 4 个。',
  ),
  step(
    '围栏外的一行说明',
    SERIALIZATION,
    'SEARCH_EMPTY_HEADER = (',
    '# ── 购物车',
    '搜索结果的第一行是写给模型的说明，放在围栏外面，也是整个结果里唯一由运行时生成的文字；除了结果数量，每次都一样。有结果时，它提醒模型这只是最接近的文本匹配，只有标题和属性都匹配，才算顾客要的商品。',
    '零结果时换成 `SEARCH_EMPTY_HEADER`：告诉顾客没有之前先用更宽泛的关键词重试一次，不要把别的商品当成顾客要的那个，并点明搜索匹配的是文本而不是 id。`search_result_text` 把这一行和围栏里的数据拼在一起，作为 `search_products` 的完整结果。',
  ),
  step(
    'execute 从不抛异常',
    EXECUTION,
    'async def execute(',
    'async def dispatch(',
    '所有工具调用都从 `execute` 进来，失败在这里分成三级：参数不合要求的 `InvalidArguments`，回一句点出出错字段的话；角色自己的异常交给 `domain_error` 翻译；其余任何异常都记一条日志，再告诉模型这个工具暂时不可用。',
    '注释写明了原因：工具失败不能让对话轮次中断。异常栈只进日志，给工程师看；模型只收到一句能照着做的话。',
  ),
  step(
    '参数错误点出字段',
    EXECUTION,
    'def invalid_arguments_text(',
    'class BaseToolExecutor:',
    '`invalid_arguments_text` 把校验错误逐条写成“字段: 原因”，最后加一句“调整后再调用一次”。模型把 `filters` 里的 `sort` 写成 `cheapest` 时，收到的是：`search_products 的参数无效——sort: Input should be \'relevance\', \'price_asc\', \'price_desc\' or \'rating\'。调整后再调用一次。`',
    '只有 `parse_argument` 抛出的错误才按参数错误报告。后端自己构建记录时出的校验错误，和其他故障一样算作工具暂时不可用，免得模型以为是自己的参数写错了。',
  ),
  step(
    '店铺的措辞写在一处',
    EXECUTOR,
    'fence = STOREFRONT_FENCE',
    'def __init__(',
    '`ShoppingToolExecutor` 把给模型的固定措辞都写成类属性：展示成功时回“已展示给顾客。”，工具故障时回“暂时不可用。用已有的信息继续，或者告诉顾客。”，部署没开的功能回“不是本店提供的功能；直接说明，不要推荐它。”',
    '每一句都以下一步收尾：继续、告诉顾客，或者不要推荐。框架只决定什么时候用哪一句，措辞由角色自己写，商户 Agent 有它自己的一套，比如“已展示给经营者。”。',
  ),
  step(
    '后端异常翻译成指令',
    EXECUTOR,
    'def domain_error(',
    'def handlers(',
    '`domain_error` 把后端的两种信号翻译成指令。`Unavailable` 表示商品存在但眼下买不了，模型收到“未加入购物车：……告知顾客，推荐消息中提到的有货替代品，只有顾客选择后才加入。”；`NotOffered` 表示本店不提供这项服务，模型收到“……不是本店提供的，请直接告知顾客。”',
    '后端消息先经过清洗，限制在 200 个字符以内，因为它是围栏外到达的文本。其他异常在这里返回 `None`，交回 `execute` 按工具故障处理。',
  ),
];

export default { files, steps };
