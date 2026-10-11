// 《工具结果演练》：《写给模型的工具结果》《失败也写成指令》两课共用的演练，读“工程化 Agent 工具”专题共用的快照，
// 不另抄一份代码。这一页挑结果类型、加购确认、结果格式、失败分级和门控拦截所在的五个文件。
import SNAP from './codeWalkthroughs/agentTools.files.js';
import { focusRange } from './focusRange.js';

const STREAMING = 'commerce_common/streaming.py';
const GATES = 'shopping_agent/gates.py';
const SERIALIZATION = 'shopping_agent/serialization.py';
const EXECUTION = 'commerce_common/execution.py';
const EXECUTOR = 'shopping_agent/executor.py';

const files = Object.fromEntries(
  [STREAMING, GATES, SERIALIZATION, EXECUTION, EXECUTOR].map((path) => [path, SNAP.tools[path]]),
);
const paragraph = (text) => ({ type: 'p', text });
const step = (title, file, start, end, ...paragraphs) => ({
  title,
  file,
  ...focusRange(files[file], start, end),
  body: paragraphs.map(paragraph),
});

// 先看成功的结果怎样分给模型和界面、怎样写得精简，再看失败和拦截怎样写成带下一步的一句话。
const steps = [
  step(
    '一个结果，两个读者',
    STREAMING,
    'class ToolOutcome:',
    'def error(cls, text',
    '每次工具调用都交回一个 `ToolOutcome`。`result_text` 是写给模型的那段话，`events` 是发给界面的事件，不进模型的上下文；另外两个字段记下失败，或者拦下这次调用的门控。',
  ),
  step(
    '加购只回一句确认',
    GATES,
    'def _written(',
    'async def gated_add_to_cart(',
    '加购成功后，`_written` 把那句确认留给模型，比如“已加购 p-100 x1。购物车现有 1 件商品，小计 149.00 USD。”完整的购物车放进 `cart_update` 事件，交给界面去画。',
  ),
  step(
    '只挑推理要用的字段',
    SERIALIZATION,
    'def compact_product(',
    '_VARIANT_ALWAYS = (',
    '搜索结果里的每件商品都经过 `compact_product`：只挑模型比较和推荐要用的字段，商品分类和图片地址不在其中。最后一行再去掉空着的字段。',
  ),
  step(
    '零条结果时的说明',
    SERIALIZATION,
    'SEARCH_EMPTY_HEADER = (',
    'def search_result_text(',
    '搜索结果开头有一行写给模型的说明，只有结果数量会变。零条时换成 `SEARCH_EMPTY_HEADER`：告诉顾客没有之前，先换个更宽泛的关键词再搜一次，也不要拿别的商品冒充。',
  ),
  step(
    '失败在入口分级',
    EXECUTION,
    'async def execute(',
    'async def dispatch(',
    '所有调用都从 `execute` 进来，失败在这里分三级：参数不合要求，回一句点出字段的话；角色认得的异常交给 `domain_error` 翻译；其余异常记下异常栈，再告诉模型工具暂时不可用。',
  ),
  step(
    '每句都写明下一步',
    EXECUTOR,
    'unavailable_text = ',
    'def __init__(',
    '购物 Agent 把给模型的固定措辞写在一处，每一句都以下一步收尾：用已有的信息继续、直接告知顾客、只有顾客选择后才加入，或者不要推荐。',
  ),
  step(
    '后端信号换成指令',
    EXECUTOR,
    'def domain_error(',
    'def handlers(',
    '`domain_error` 把后端的两种信号换成上面写好的句子：商品买不了用缺货那句，本店不提供用不提供那句。认不出的异常在这里返回空，交回入口按工具故障处理。',
  ),
  step(
    '拦下时写明怎样恢复',
    GATES,
    'def provenance_error(',
    'def options_error(',
    '加购一个这次会话里没查到过的商品 id 时，来源门控拦下这次调用，交回一句恢复步骤：先查商品详情，或者通过搜索找到它，再用查到的 id 加购。它用 `held` 构造结果，这次调用不算失败。',
  ),
];

export default { files, steps };
