---
sidebar_position: 2
description: JSON 消息类型、STDIO 传输、StreamableHTTP 的工作原理与状态取舍——理解 MCP 消息如何在客户端和服务器之间流动。
---

# 传输与通信

理解 MCP 消息在客户端与服务器之间是如何流动的：先看 JSON 消息协议本身，再看用于本地开发的 STDIO 传输，最后深入 StreamableHTTP 的复杂之处——包括它如何用 SSE 绕过 HTTP 的限制，以及何时该为了可扩展性牺牲部分功能。

import DocCardList from '@theme/DocCardList';

<DocCardList />
