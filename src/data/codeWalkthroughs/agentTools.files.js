// 由 npm run roadmap-sync 从 ../commerce-agents-dev 生成，不要手改；改代码去 dev 仓库，改完重新生成。
// 每个快照：{ 展示用路径: 文件内容 }，展示路径与 dev 里的真实路径的对应关系见 tools/roadmap-sync/agent-tools.config.mjs。
export default {
  "tools": {
    "shopping_agent/tools/registry.py": `"""购物 agent 的工具定义，顺序固定。列表只取决于部署配置，
因此每次请求发送的字节完全相同；某次调用能否执行由执行器判断。
一条描述只管一个工具；跨工具的规则放在提示词或技能里。
"""
# 项目中对应 shopping-agent/core/shopping_agent/tools/registry.py

from __future__ import annotations

from typing import Any

from commerce_common.execution import LOAD_SKILL

from ..config import ShoppingAgentConfig

_SESSION_PRODUCT_ID = "本次会话中工具返回的 product_id。"


def _product_id(role: str = _SESSION_PRODUCT_ID) -> dict[str, Any]:
    return {"type": "string", "description": role}


def _title(what: str) -> dict[str, Any]:
    return {"type": "string", "maxLength": 80, "description": f"{what}的简短标题。"}


def _filters_schema() -> dict[str, Any]:
    return {
        "type": "object",
        "description": "顾客明确提出的筛选条件；猜测的内容放在 query 里。",
        "properties": {
            "category": {"type": "string", "description": "商品目录分类名。"},
            "min_price": {"type": "number", "description": "最低价格。"},
            "max_price": {"type": "number", "description": "顾客说的价格上限。"},
            "min_rating": {"type": "number", "description": "最低评分。"},
            "attributes": {
                "type": "object",
                "description": '属性筛选，键值对形式，如 {"材质": "羊毛"}。',
                "additionalProperties": {"type": "string"},
            },
            "sort": {
                "type": "string",
                "enum": ["relevance", "price_asc", "price_desc", "rating"],
                "description": "排序方式；默认按相关度，除非顾客指定。",
            },
        },
        "additionalProperties": False,
    }


def build_tools(
    config: ShoppingAgentConfig,
    skill_names: list[str],
) -> list[dict[str, Any]]:
    """一个部署的工具列表：固定顺序的内置工具，去掉配置关掉的系统。"""

    tools: list[dict[str, Any]] = [
        {
            "name": LOAD_SKILL,
            "description": (
                "加载技能索引中与当前请求匹配的流程规则；规则不在你的提示词里。"
                "在该流程首次读取数据的同一轮调用，并在整个流程中遵循。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "skill_name": {
                        "type": "string",
                        "enum": sorted(skill_names),
                        "description": "索引中列出的技能名称。",
                    },
                },
                "required": ["skill_name"],
                "additionalProperties": False,
            },
        },
        {
            "name": "search_products",
            "description": (
                "搜索商品目录，返回商品的 id、标题、品牌、价格、评分和库存状态；"
                "有选项的商品显示最低有货价格和选项列表。"
                "用具体的关键词搜索，把顾客明确说的条件放在 filters 里。"
                "顾客提到多个不同商品时，每个商品单独搜索一次。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "要搜索的关键词，使用商品目录的词汇。",
                    },
                    "filters": _filters_schema(),
                    "limit": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 8,
                        "description": "最多返回几条结果。",
                    },
                },
                "required": ["query"],
                "additionalProperties": False,
            },
        },
        {
            "name": "get_product_details",
            "description": (
                "查看一个商品的完整详情：描述、规格参数、评价摘要，"
                "以及有选项的商品的变体列表（含各变体的 id、价格和库存）。"
                "用于回答单个商品的问题、比较候选商品之前选变体、"
                "以及顾客提到类似商品 id 格式的引用时。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "product_id": _product_id("要查看的商品 id。"),
                },
                "required": ["product_id"],
                "additionalProperties": False,
            },
        },
        {
            "name": "get_cart",
            "description": "查看当前购物车内容，包括数量和小计。",
            "input_schema": {
                "type": "object",
                "properties": {},
                "additionalProperties": False,
            },
        },
        {
            "name": "add_to_cart",
            "description": (
                "将商品或所选变体加入购物车，product_id 必须是本次会话中"
                "搜索或详情工具返回的；数量默认为 1。"
                "如果返回说商品不可用，告知顾客并推荐替代品；"
                "只有顾客选择后才加替代品。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "product_id": _product_id(),
                    "quantity": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "要加的件数，不填默认 1。",
                    },
                },
                "required": ["product_id"],
                "additionalProperties": False,
            },
        },
        {
            "name": "update_cart_item",
            "description": "修改购物车中已有商品的数量。",
            "input_schema": {
                "type": "object",
                "properties": {
                    "product_id": _product_id("购物车中已有的商品 id。"),
                    "quantity": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "新的数量。",
                    },
                },
                "required": ["product_id", "quantity"],
                "additionalProperties": False,
            },
        },
        {
            "name": "remove_from_cart",
            "description": "从购物车中移除一个商品。",
            "input_schema": {
                "type": "object",
                "properties": {
                    "product_id": _product_id("要移除的商品 id。"),
                },
                "required": ["product_id"],
                "additionalProperties": False,
            },
        },
        {
            "name": "get_preferences",
            "description": (
                "当前顾客的个人资料和偏好。通常已在会话上下文里；只有上下文缺失时才调用。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {},
                "additionalProperties": False,
            },
        },
        {
            "name": "get_orders",
            "description": (
                "最近的订单及状态和预计送达时间。"
                "用于没有指定订单号的状态查询，以及顾客要再次购买的场景。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "limit": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 20,
                        "description": "最多返回几张订单。",
                    },
                },
                "additionalProperties": False,
            },
        },
        {
            "name": "get_order_status",
            "description": "顾客指定的一张订单的状态、商品和物流信息。",
            "input_schema": {
                "type": "object",
                "properties": {
                    "order_id": {
                        "type": "string",
                        "description": "要查看的订单号。",
                    },
                },
                "required": ["order_id"],
                "additionalProperties": False,
            },
        },
        {
            "name": "search_policies",
            "description": (
                "搜索本店的条款和帮助内容：退换货、运费、保修、会员权益、费用说明和选购指南。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "要查找的条款或主题。",
                    },
                },
                "required": ["query"],
                "additionalProperties": False,
            },
        },
        {
            "name": "get_fulfillment_options",
            "description": "指定商品在顾客所在地的配送和自提选项，含预计到达时间。",
            "input_schema": {
                "type": "object",
                "properties": {
                    "product_ids": {
                        "type": "array",
                        "items": {"type": "string"},
                        "maxItems": 20,
                        "description": "要查配送选项的商品 id。",
                    },
                },
                "required": ["product_ids"],
                "additionalProperties": False,
            },
        },
        {
            "name": "save_memory",
            "description": (
                "顾客让你记住某件事、或说出一条长期适用的购物规则时，保存一条关于他的长期事实。"
                '"记住我……"这类请求属于 memory-personalization 流程，事实该怎么措辞由那个技能'
                "规定：在同一轮里读它。保存商品背后反映出的需求，不要保存商品或条款的原文。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "key": {
                        "type": "string",
                        "maxLength": 64,
                        "description": "主题 key；沿用已有的 key 会覆盖它的值。",
                    },
                    "value": {
                        "type": "string",
                        "maxLength": 200,
                        "description": "事实本身，措辞要保证以后单独拿出来也看得懂。",
                    },
                    "category": {
                        "type": "string",
                        "enum": ["preference", "constraint", "context"],
                        "description": (
                            "选品必须遵守的规则用 constraint；其余用 preference 或 context。"
                        ),
                    },
                },
                "required": ["key", "value"],
                "additionalProperties": False,
            },
        },
        {
            "name": "recall_memories",
            "description": (
                "搜索不在会话上下文块里的顾客事实：更早的偏好、尺码、以前送礼的对象、"
                "周期性的需求。只在这样一条事实会改变你的推荐时才调用。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "topic": {
                        "type": "string",
                        "maxLength": 100,
                        "description": "要搜索的主题，几个词。",
                    },
                },
                "required": ["topic"],
                "additionalProperties": False,
            },
        },
    ]

    # ── 展示型工具 ──────────────────────────────────────────────────

    presentation: list[dict[str, Any]] = [
        {
            "name": "present_products",
            "description": (
                "把本次会话搜索结果中的商品展示为卡片；标题、价格、图片由服务端补全。"
                "布局默认轮播，grid 适合浏览多个选项，list 适合顺序重要的场景。"
                "每个 pick 的 reason 是你对这张卡片的唯一判断。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "title": _title("卡片组"),
                    "layout": {
                        "type": "string",
                        "enum": ["carousel", "grid", "list"],
                        "description": "卡片布局；不填默认轮播。",
                    },
                    "picks": {
                        "type": "array",
                        "minItems": 1,
                        "maxItems": 12,
                        "description": "要展示的商品，推荐的排在前面。",
                        "items": {
                            "type": "object",
                            "properties": {
                                "product_id": _product_id(),
                                "reason": {
                                    "type": "string",
                                    "maxLength": 140,
                                    "description": "一句话说明为什么选这个商品。",
                                },
                            },
                            "required": ["product_id"],
                            "additionalProperties": False,
                        },
                    },
                },
                "required": ["picks"],
                "additionalProperties": False,
            },
        },
        {
            "name": "present_comparison",
            "description": (
                "把 2-4 个候选商品并排对比，列出优缺点和各自适合的场景。"
                "在顾客已经缩小范围或问它们有什么区别时使用；"
                "新的推荐列表用 present_products。"
                "服务端会补上价差；你的文本说明多花的钱买到了什么。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "title": _title("对比表"),
                    "entries": {
                        "type": "array",
                        "minItems": 2,
                        "maxItems": 4,
                        "description": "要对比的候选商品。",
                        "items": {
                            "type": "object",
                            "properties": {
                                "product_id": _product_id(),
                                "pros": {
                                    "type": "array",
                                    "items": {"type": "string"},
                                    "maxItems": 4,
                                    "description": "简短的优点，来自工具返回的数据。",
                                },
                                "cons": {
                                    "type": "array",
                                    "items": {"type": "string"},
                                    "maxItems": 3,
                                    "description": "简短的缺点，来自工具返回的数据。",
                                },
                                "best_for": {
                                    "type": "string",
                                    "maxLength": 80,
                                    "description": "这个选项最适合谁或什么场景。",
                                },
                            },
                            "required": ["product_id"],
                            "additionalProperties": False,
                        },
                    },
                    "dimensions": {
                        "type": "array",
                        "items": {"type": "string"},
                        "maxItems": 6,
                        "description": "顾客在权衡的维度。",
                    },
                    "recommended_product_id": _product_id("你推荐的那个商品。"),
                },
                "required": ["entries"],
                "additionalProperties": False,
            },
        },
        {
            "name": "present_plan",
            "description": (
                "把顾客的目标拆成分步计划，每一步可以关联商品。"
                "如果没有任何步骤会关联商品，说明这是知识性内容，用 present_guide。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "title": _title("计划"),
                    "intro": {
                        "type": "string",
                        "maxLength": 240,
                        "description": "一两句话交代背景和前提。",
                    },
                    "steps": {
                        "type": "array",
                        "minItems": 1,
                        "maxItems": 12,
                        "description": "计划的步骤，按执行顺序排列。",
                        "items": {
                            "type": "object",
                            "properties": {
                                "label": {
                                    "type": "string",
                                    "maxLength": 120,
                                    "description": "用顾客的话描述这一步。",
                                },
                                "detail": {
                                    "type": "string",
                                    "maxLength": 240,
                                    "description": "一句话说明这一步涉及什么。",
                                },
                                "product_ids": {
                                    "type": "array",
                                    "items": {"type": "string"},
                                    "maxItems": 8,
                                    "description": "这一步需要的商品，推荐的排在前面。",
                                },
                            },
                            "required": ["label"],
                            "additionalProperties": False,
                        },
                    },
                },
                "required": ["title", "steps"],
                "additionalProperties": False,
            },
        },
        {
            "name": "present_guide",
            "description": (
                "用分节卡片展示操作指南、选购建议或行程规划。"
                "用于不涉及商品计划的知识性内容；"
                "引用了网页内容时列出来源。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "title": _title("指南"),
                    "sections": {
                        "type": "array",
                        "minItems": 1,
                        "maxItems": 8,
                        "description": "每节一到三句话。",
                        "items": {
                            "type": "object",
                            "properties": {
                                "heading": {
                                    "type": "string",
                                    "maxLength": 80,
                                    "description": "小节标题。",
                                },
                                "body": {
                                    "type": "string",
                                    "maxLength": 600,
                                    "description": "小节正文。",
                                },
                            },
                            "required": ["heading", "body"],
                            "additionalProperties": False,
                        },
                    },
                    "related_product_ids": {
                        "type": "array",
                        "items": {"type": "string"},
                        "maxItems": 8,
                        "description": "本次会话中与指南相关的商品。",
                    },
                    "sources": {
                        "type": "array",
                        "items": {"type": "string"},
                        "maxItems": 5,
                        "description": "内容引用的指南或页面。",
                    },
                },
                "required": ["title", "sections"],
                "additionalProperties": False,
            },
        },
        {
            "name": "present_order_status",
            "description": (
                "展示一张订单的状态卡片；订单数据由服务端补全。"
                "每次回答订单进度都走这个卡片。多张在途订单时，同一轮每张订单各发一张卡片。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "order_id": {
                        "type": "string",
                        "description": "get_orders 或 get_order_status 返回的订单号。",
                    },
                    "summary": {
                        "type": "string",
                        "maxLength": 300,
                        "description": "当前状态和预计日期，一句话。",
                    },
                    "next_step": {
                        "type": "string",
                        "maxLength": 200,
                        "description": "顾客现在能做的一件具体的事。",
                    },
                },
                "required": ["order_id", "summary"],
                "additionalProperties": False,
            },
        },
        {
            "name": "checkout",
            "description": (
                "把当前购物车作为订单摘要展示给顾客确认；"
                "不会下单也不会扣款。只在顾客要求结账时使用。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "note": {
                        "type": "string",
                        "maxLength": 300,
                        "description": "顾客确认前需要注意的事项。",
                    },
                    "fulfillment_method": {
                        "type": "string",
                        "enum": ["delivery", "pickup", "shipping"],
                        "description": "顾客选择的配送方式。",
                    },
                },
                "additionalProperties": False,
            },
        },
        {
            "name": "present_suggestions",
            "description": (
                "给这一轮对话添加 1-4 个建议按钮，调用后结束回复。"
                "和本轮最后一个展示组件在同一轮调用，不用等那个组件的结果。"
                "单独使用时放在文本之后，只在没有展示组件的轮次使用"
                "（比如回答条款问题、澄清确认、确认加购）。"
            ),
            "input_schema": {
                "type": "object",
                "properties": {
                    "suggestions": {
                        "type": "array",
                        "items": {"type": "string"},
                        "minItems": 1,
                        "maxItems": 4,
                        "description": (
                            "1-4 条建议，每条是简短的祈使句，"
                            "方向各不相同；不要重复本轮已展示的内容。"
                        ),
                    },
                },
                "required": ["suggestions"],
                "additionalProperties": False,
            },
        },
    ]

    absent = config.absent_tools()
    tools = [tool for tool in tools if tool["name"] not in absent]
    tools += [tool for tool in presentation if tool["name"] not in absent]

    return tools
`,
    "commerce_common/execution.py": `"""两个角色共同扩展的执行器框架。角色执行器提供自己的围栏、handler 表和措辞；本模块
负责分派、失败分级、技能、展示、委托、记忆，以及非展示调用可以带给等待者的 \`\`status\`\`
行，所以每个工具结果都在同一个地方构建，Messages API 运行时、Agent SDK 工具集和 MCP
服务器都调用 \`\`execute\`\`。
"""
# 项目中对应 commerce-common/commerce_common/execution.py
# 省略：status 行（STATUS_FIELD、with_status、split_status 等）、contracts_by_name、
# 展示扩展、委托（Step 21）、进度事件；后续步骤用到时再加

from __future__ import annotations

import logging
from collections.abc import Awaitable, Callable, Mapping, Sequence
from typing import Any, TypeVar

from pydantic import BaseModel, ValidationError

from .fencing import Fence
from .memory import MemoryRuntime
from .presentation import EnrichmentContext, PresentationComponent, run_presentation
from .skills import SkillRegistry
from .streaming import AgentEvent, ToolOutcome

logger = logging.getLogger(__name__)

LOAD_SKILL = "load_skill"

Handler = Callable[[dict[str, Any]], Awaitable[ToolOutcome]]
ArgumentT = TypeVar("ArgumentT", bound=BaseModel)


class InvalidArguments(ValueError):
    """一个工具参数没通过它的 schema；\`\`execute\`\` 回复时点出是哪些字段。"""

    def __init__(self, invalid: ValidationError) -> None:
        super().__init__(str(invalid))
        self.invalid = invalid


def parse_argument(model: type[ArgumentT], value: Any) -> ArgumentT:
    """校验一个模型提供的参数。只有这里抛出的失败才按参数错误报告；handler 里其他
    地方抛出的 \`\`ValidationError\`\`（比如后端构建自己的模型时）和其他后端故障一样处理。"""
    try:
        return model.model_validate(value)
    except ValidationError as invalid:
        raise InvalidArguments(invalid) from invalid


def clamp_limit(raw: Any, default: int, ceiling: int) -> int:
    """模型提供的数量，限制在 \`\`1..ceiling\`\`；缺失或为零时取 \`\`default\`\`。"""
    return max(1, min(int(raw or default), ceiling))


def invalid_arguments_text(name: str, invalid: ValidationError) -> str:
    issues = "; ".join(
        f"{'.'.join(str(part) for part in error['loc'])}: {error['msg']}"
        for error in invalid.errors()
    )
    return f"{name} 的参数无效——{issues}。调整后再调用一次。"


class BaseToolExecutor:
    """一个会话的工具。子类设置类属性，实现 :meth:\`handlers\` 和 :attr:\`memory_subject\`；
    \`\`execute\`\` 从不抛异常。"""

    fence: Fence
    components: Mapping[str, PresentationComponent]
    displayed_text: str
    unavailable_text: str  # 用 {name} 格式化
    # 配置关掉的工具：这里没有这个系统，不算故障。
    absent_text: str = "{name} 不是这里提供的功能；直接说明，不要推荐它。"

    def __init__(
        self,
        *,
        backend: Any,
        config: Any,
        skills: SkillRegistry,
        session: Any,
        state: Any,
        memory: MemoryRuntime,
    ) -> None:
        self._backend = backend
        self._config = config
        self._absent = config.absent_tools()
        self._skills = skills
        self._session = session
        self._state = state
        self._memory = memory
        self._handlers: dict[str, Handler] = {
            **self.handlers(),
            "save_memory": self._save_memory,
            "recall_memories": self._recall_memories,
        }

    # ── 角色钩子 ────────────────────────────────────────────────────

    def handlers(self) -> dict[str, Handler]:
        raise NotImplementedError

    @property
    def memory_subject(self) -> str:
        raise NotImplementedError

    def domain_error(self, error: Exception) -> ToolOutcome | None:
        """角色自己的异常类映射成的结果；返回 None 就走通用的失败分级。"""
        return None

    # ── 给 handler 用的辅助方法 ─────────────────────────────────────

    def _sanitize(self, value: Any, max_chars: int | None) -> str:
        return self.fence.sanitize_text(str(value or ""), max_chars)

    def _fenced(self, payload: Any, events: Sequence[AgentEvent] = ()) -> ToolOutcome:
        return ToolOutcome(
            self.fence.fence_payload(payload, self._config.max_fenced_chars), list(events)
        )

    def _search_limit(self, raw: Any) -> int:
        return clamp_limit(raw, self._config.max_search_results, self._config.max_search_results)

    # ── 分派 ────────────────────────────────────────────────────────

    def presents(self, name: str) -> bool:
        """\`\`name\`\` 是展示型工具时为 True。"""
        return name in self.components

    def tool_call_event(
        self, name: str, tool_use_id: str, tool_input: dict[str, Any]
    ) -> AgentEvent:
        """发给调用方的 \`\`tool_call\`\` 事件。"""
        return AgentEvent.tool_call(name, tool_use_id, tool_input)

    def ends_clean(self, name: str, outcome: ToolOutcome) -> bool:
        """这次调用可以留在结束对话轮次的那次模型调用里、不再请模型收尾时为 True：
        一次渲染成功、没给模型留下任何要回应的东西的展示调用（没有被拒绝或拦截，
        结果里也没有追加备注）。"""
        return (
            self.presents(name)
            and not outcome.refused
            and outcome.result_text == self.displayed_text
        )

    async def execute(self, name: str, tool_input: dict[str, Any] | None) -> ToolOutcome:
        try:
            return await self.dispatch(name, dict(tool_input or {}))
        except InvalidArguments as invalid:
            return ToolOutcome.error(invalid_arguments_text(name, invalid.invalid))
        except Exception as error:  # 工具失败不能让对话轮次中断
            if (outcome := self.domain_error(error)) is not None:
                return outcome
            logger.warning("工具 %s 执行失败，按暂时不可用报告", name, exc_info=True)
            return ToolOutcome.error(self.unavailable_text.format(name=name))

    async def dispatch(self, name: str, tool_input: dict[str, Any]) -> ToolOutcome:
        """不带失败分级的 :meth:\`execute\`：工具抛出的异常会向上传播，所以预取读数据的
        调用方能分清是工具失败了，还是工具自己写了结果（没找到的说明、被拦截的调用）。
        部署配置从工具列表里去掉的工具，不论哪条路径调用，这里也当作未知。"""
        if name in self._absent:
            return ToolOutcome.error(self.absent_text.format(name=name))
        if name == LOAD_SKILL:
            return self._load_skill(tool_input)
        if (spec := self.components.get(name)) is not None:
            return await self._present(spec, tool_input)
        handler = self._handlers.get(name)
        if handler is None:
            return ToolOutcome.error(f"未知工具：{name}")
        return await handler(tool_input)

    def _load_skill(self, tool_input: dict[str, Any]) -> ToolOutcome:
        skill_name = str(tool_input.get("skill_name", ""))
        body = self._skills.get_instructions(skill_name)
        if body is None:
            return ToolOutcome.error(
                f"没有名为 '{skill_name}' 的技能。可用：{', '.join(self._skills.names)}"
            )
        return ToolOutcome(body)

    async def _present(
        self, spec: PresentationComponent, tool_input: dict[str, Any]
    ) -> ToolOutcome:
        context = EnrichmentContext(
            backend=self._backend, config=self._config, session=self._session, state=self._state
        )
        return await run_presentation(spec, tool_input, context, self.displayed_text)

    async def _save_memory(self, tool_input: dict[str, Any]) -> ToolOutcome:
        return await self._memory.save(self.memory_subject, self._session.session_id, tool_input)

    async def _recall_memories(self, tool_input: dict[str, Any]) -> ToolOutcome:
        return await self._memory.recall(self.memory_subject, tool_input)
`,
    "shopping_agent/executor.py": `"""购物 agent 的工具，建在共享执行器框架上，每个工具一个 handler。Messages API 运行时、
SDK 工具集和 MCP 服务器都通过这个类执行工具，所以同一个工具在每条路径上返回相同的字节。
"""
# 项目中对应 shopping-agent/core/shopping_agent/executor.py
# 省略：inline_context（SDK / MCP 路径用）、展示扩展

from __future__ import annotations

from typing import Any

from commerce_common.execution import BaseToolExecutor, Handler, parse_argument
from commerce_common.memory import MemoryRuntime
from commerce_common.skills import SkillRegistry
from commerce_common.streaming import ToolOutcome

from .backend import NotOffered, StorefrontBackend, Unavailable
from .config import ShoppingAgentConfig
from .enrichment import PRESENTATION_COMPONENTS
from .fencing import STOREFRONT_FENCE
from .gates import (
    gated_add_to_cart,
    gated_remove_from_cart,
    gated_update_cart_item,
    remember_order_items,
)
from .memory import SHOPPING_MEMORY_EXTRACTION_PROMPT
from .serialization import (
    fulfillment_payload,
    order_payload,
    orders_payload,
    policies_payload,
    product_details_payload,
    search_result_text,
)
from .types import SearchFilters, ShoppingSessionContext, ShoppingSessionState

MAX_ORDERS = 20
MAX_FULFILLMENT_IDS = 20


def build_memory(
    config: ShoppingAgentConfig, store: Any, write_filter: Any = None
) -> MemoryRuntime:
    """购物 agent 的 :class:\`MemoryRuntime\`：按这份配置包装的 store，按 user id 归属，
    用购物场景的提取提示词做提取。"""
    return MemoryRuntime.build(
        config,
        store,
        fence=STOREFRONT_FENCE,
        extraction_prompt=SHOPPING_MEMORY_EXTRACTION_PROMPT,
        write_filter=write_filter,
    )


class ShoppingToolExecutor(BaseToolExecutor):
    fence = STOREFRONT_FENCE
    components = PRESENTATION_COMPONENTS
    displayed_text = "已展示给顾客。"
    unavailable_text = "{name} 暂时不可用。用已有的信息继续，或者告诉顾客。"
    not_offered_text = "{detail}不是本店提供的，请直接告知顾客。"
    sold_out_text = (
        "未加入购物车：{detail}。告知顾客，推荐消息中提到的有货替代品，只有顾客选择后才加入。"
    )
    absent_text = "{name} 不是本店提供的功能；直接说明，不要推荐它。"

    def __init__(
        self,
        *,
        backend: StorefrontBackend,
        config: ShoppingAgentConfig,
        skills: SkillRegistry,
        session: ShoppingSessionContext,
        state: ShoppingSessionState,
        memory: MemoryRuntime | None = None,
    ) -> None:
        super().__init__(
            backend=backend,
            config=config,
            skills=skills,
            session=session,
            state=state,
            memory=memory or build_memory(config, None),
        )

    @property
    def memory_subject(self) -> str:
        return self._session.user_id

    def domain_error(self, error: Exception) -> ToolOutcome | None:
        # 这段消息是围栏外到达的后端文本：清洗并限制长度。
        detail = self._sanitize(str(error), 200)
        if isinstance(error, Unavailable):
            return ToolOutcome.error(self.sold_out_text.format(detail=detail or "不可用"))
        if isinstance(error, NotOffered):
            return ToolOutcome.error(self.not_offered_text.format(detail=detail or "该服务"))
        return None

    def handlers(self) -> dict[str, Handler]:
        return {
            "search_products": self._search_products,
            "get_product_details": self._get_product_details,
            "get_cart": self._get_cart,
            "add_to_cart": self._add_to_cart,
            "update_cart_item": self._update_cart_item,
            "remove_from_cart": self._remove_from_cart,
            "get_preferences": self._get_preferences,
            "get_orders": self._get_orders,
            "get_order_status": self._get_order_status,
            "search_policies": self._search_policies,
            "get_fulfillment_options": self._get_fulfillment_options,
        }

    # ── handler：商品目录 ────────────────────────────────────────────

    async def _search_products(self, tool_input: dict[str, Any]) -> ToolOutcome:
        query = self._sanitize(tool_input.get("query", ""), 300)
        filters = (
            parse_argument(SearchFilters, tool_input["filters"])
            if tool_input.get("filters")
            else None
        )
        limit = self._search_limit(tool_input.get("limit"))
        products = await self._backend.search_products(self._session, query, filters, limit)
        self._state.remember_products(products)
        return ToolOutcome(search_result_text(query, products, self._config.max_fenced_chars))

    async def _get_product_details(self, tool_input: dict[str, Any]) -> ToolOutcome:
        product_id = str(tool_input.get("product_id", ""))
        details = await self._backend.get_product_details(self._session, product_id)
        if details is None:
            return ToolOutcome.error(f"没有 id 为 {product_id} 的商品。")
        # 变体随记录一起进入溯源，购物车才接受它们的 id。
        self._state.remember_products([details, *details.variants])
        return self._fenced(product_details_payload(details))

    # ── handler：购物车 ──────────────────────────────────────────────

    async def _get_cart(self, _: dict[str, Any]) -> ToolOutcome:
        cart = await self._backend.get_cart(self._session)
        return self._fenced(cart.model_dump(exclude_none=True))

    async def _add_to_cart(self, tool_input: dict[str, Any]) -> ToolOutcome:
        # 三个购物车写操作都经过 gates.py：溯源、选项、数量上限，同一会话串行
        return await gated_add_to_cart(
            backend=self._backend,
            config=self._config,
            session=self._session,
            state=self._state,
            product_id=str(tool_input.get("product_id", "")),
            quantity=int(tool_input.get("quantity") or 1),
        )

    async def _update_cart_item(self, tool_input: dict[str, Any]) -> ToolOutcome:
        return await gated_update_cart_item(
            backend=self._backend,
            config=self._config,
            session=self._session,
            state=self._state,
            product_id=str(tool_input.get("product_id", "")),
            quantity=int(tool_input.get("quantity") or 1),
        )

    async def _remove_from_cart(self, tool_input: dict[str, Any]) -> ToolOutcome:
        return await gated_remove_from_cart(
            backend=self._backend,
            session=self._session,
            state=self._state,
            product_id=str(tool_input.get("product_id", "")),
        )

    # ── handler：用户上下文、订单、政策、履约 ────────────────────────

    async def _get_preferences(self, _: dict[str, Any]) -> ToolOutcome:
        prefs = await self._backend.get_preferences(self._session)
        return self._fenced(prefs.model_dump(exclude_none=True))

    async def _get_orders(self, tool_input: dict[str, Any]) -> ToolOutcome:
        limit = max(1, min(int(tool_input.get("limit") or 5), MAX_ORDERS))
        orders = await self._backend.get_orders(self._session, limit)
        remember_order_items(self._state, orders)
        return self._fenced(orders_payload(orders))

    async def _get_order_status(self, tool_input: dict[str, Any]) -> ToolOutcome:
        order_id = str(tool_input.get("order_id", ""))
        order = await self._backend.get_order(self._session, order_id)
        if order is None:
            return ToolOutcome.error(f"没有 id 为 {order_id} 的订单。")
        remember_order_items(self._state, [order])
        return self._fenced(order_payload(order))

    async def _search_policies(self, tool_input: dict[str, Any]) -> ToolOutcome:
        query = STOREFRONT_FENCE.sanitize_text(str(tool_input.get("query", "")))[:200]
        policies = await self._backend.search_policies(self._session, query)
        return self._fenced(policies_payload(policies))

    async def _get_fulfillment_options(self, tool_input: dict[str, Any]) -> ToolOutcome:
        product_ids = [str(pid) for pid in tool_input.get("product_ids") or []][
            :MAX_FULFILLMENT_IDS
        ]
        options = await self._backend.get_fulfillment_options(self._session, product_ids)
        return self._fenced(fulfillment_payload(options))
`,
    "shopping_agent/backend.py": `"""StorefrontBackend 接口：采用方唯一需要实现的对接接口，
将每个方法映射到自己的商品目录、购物车等服务。
这些方法返回的所有内容都会经过围栏处理后才到达模型（fencing.py）。
"""
# 项目中对应 shopping-agent/core/shopping_agent/backend.py

from __future__ import annotations

from abc import ABC, abstractmethod

from .types import (
    Cart,
    CheckoutHandoff,
    FulfillmentOption,
    Order,
    Policy,
    Product,
    ProductDetails,
    SearchFilters,
    ShoppingSessionContext,
    UserPreferences,
)


class NotOffered(Exception):  # 执行器转达的一个信号，不是故障
    """后端方法抛出此异常表示当前商品或场景不提供该服务
    （例如某个卖家不支持配送），而不是系统故障。
    执行器会告诉模型"该店不提供此服务"。"""


class Unavailable(Exception):  # 和 NotOffered 一样转达，措辞不同
    """\`\`add_to_cart\`\` 抛出此异常表示商品存在但当前无法购买（缺货等）。
    消息只包含 id：哪个商品不可用，以及（如果是变体的话）哪些同级变体有货。
    执行器会转达给模型，购物车不做任何写入。"""


class StorefrontBackend(ABC):
    """每个方法代表 \`\`session\`\` 中的顾客操作，在服务端用它为会话持有的凭证调用对应系统的
    API；模型只看到方法的返回结果，看不到凭证。购物车方法是唯一的写操作；每次写入都
    经过执行器的溯源门控和数量上限（gates.py），并返回完整购物车，后端仍需在自己这边
    原子地执行业务规则（资格、库存、限额），因为执行器的锁只覆盖单进程内的会话。
    没有任何方法会下单或转账：\`\`checkout\`\` 只是把购物车渲染出来交给调用方完成。
    :class:\`NotOffered\` 到模型那里是「本店不提供」；其他任何异常都是工具暂时不可用，
    由执行器记录日志。
    """

    # ── 商品目录 ────────────────────────────────────────────────────

    @abstractmethod
    async def search_products(
        self,
        session: ShoppingSessionContext,
        query: str,
        filters: SearchFilters | None = None,
        limit: int = 8,
    ) -> list[Product]:
        """最接近的文本匹配结果，按相关度排序，最多 \`\`limit\`\` 条；
        没有匹配时返回空列表。family 商品算一条结果（它的变体不单独出现），
        id 通过 :meth:\`get_product_details\` 解析。"""

    @abstractmethod
    async def get_product_details(
        self, session: ShoppingSessionContext, product_id: str
    ) -> ProductDetails | None:
        """模型传入的 id 对应的完整记录，id 不存在时返回 None。
        family 商品的 \`\`variants\`\` 包含其可购买的变体记录，
        这些记录连同 family 本身都会进入会话的溯源。变体的 id 返回该变体。"""

    # ── 购物车 ──────────────────────────────────────────────────────

    @abstractmethod
    async def get_cart(self, session: ShoppingSessionContext) -> Cart:
        """当前会话的购物车，没有商品时返回空购物车。每轮开始前、购物车门控
        和 \`\`checkout\`\` 都会读它。"""

    @abstractmethod
    async def add_to_cart(
        self, session: ShoppingSessionContext, product_id: str, quantity: int
    ) -> Cart:
        """将 \`\`quantity\`\` 件商品加入购物车；数量已经被截断到 \`\`max_quantity_per_item\`\`
        以内。id 只能是没有 \`\`options\`\` 的普通商品或变体，不能是 family 商品；
        执行器会拦截 family 并引导模型选择变体。"""

    @abstractmethod
    async def update_cart_item(
        self, session: ShoppingSessionContext, product_id: str, quantity: int
    ) -> Cart:
        """将某行的数量设为 \`\`quantity\`\`（1 到 \`\`max_quantity_per_item\`\`）。
        购物车里没有的商品不做任何改动。"""

    @abstractmethod
    async def remove_from_cart(self, session: ShoppingSessionContext, product_id: str) -> Cart:
        """移除一行。购物车里没有的商品不做任何改动。"""

    # ── 用户上下文 ────────────────────────────────────────────────

    @abstractmethod
    async def get_preferences(self, session: ShoppingSessionContext) -> UserPreferences:
        """当前顾客的偏好信息（含访客）。每轮开始前读取；模型不会写入。"""

    # ── 订单与政策 ──────────────────────────────────────────────────

    @abstractmethod
    async def get_orders(self, session: ShoppingSessionContext, limit: int = 5) -> list[Order]:
        """当前顾客的订单，按时间倒序，最多 \`\`limit\`\` 条。
        订单中的商品会进入溯源记录，重新购买无需再搜索。"""

    @abstractmethod
    async def get_order(self, session: ShoppingSessionContext, order_id: str) -> Order | None:
        """查看顾客的一张订单，id 不存在或不属于该顾客时返回 None。"""

    @abstractmethod
    async def search_policies(self, session: ShoppingSessionContext, query: str) -> list[Policy]:
        """按关键词搜索帮助和政策文档；没有匹配时返回空列表。"""

    # ── 履约 ────────────────────────────────────────────────────────

    @abstractmethod
    async def get_fulfillment_options(
        self, session: ShoppingSessionContext, product_ids: list[str]
    ) -> list[FulfillmentOption]:
        """模型传入的最多 20 个 id 的配送、自提和发货选项；
        目录中不存在的 id 被忽略。"""

    # ── 结账交接 ────────────────────────────────────────────────────

    async def checkout_handoff(
        self, session: ShoppingSessionContext, cart: Cart
    ) -> list[CheckoutHandoff]:
        """可选：这个购物车在哪里完成付款——平台的托管结账 URL，
        或者多卖家市场里每个卖家一条。URL 由后端填充、调用方渲染，
        模型看不到也不需要传递。默认返回空列表，调用方用自己的结账流程。"""
        return []
`,
  },
};
