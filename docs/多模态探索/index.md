# 多模态探索

| 模型 | 计费条件（输入长度/类型） | 输入成本（元/千Token） | 输出成本（元/千Token） | 核心特点 |
| --- | --- | --- | --- | --- |
| **Qwen‑VL** | Batch 调用（稳定版） | 0.003（Batch 半价） | 0.009（Batch 半价） | 视觉推理强化，Batch 模式计价 |
| **Qwen‑Omni** | [0,32] 千Token 且输出 ≤0.2 千Token<br/>[0,32] 千Token 且输出 ＞0.2 千Token<br/>(32,128] 千Token<br/>(128,256] 千Token | 0.0008<br/>0.0008<br/>0.0012<br/>0.0024 | 0.002<br/>0.008<br/>0.016<br/>0.024 | 短文本性价比高；输入越长成本越高 |
| **Doubao‑Seed‑1.6** | [0,32] 千Token<br/>(32,128] 千Token<br/>(128,256] 千Token | 0.00015<br/>0.0003<br/>0.0006 | 0.0015<br/>0.003<br/>0.006 | 短/长篇均具成本优势 |
| **Doubao‑Seed‑1.6‑flash** | 输入：文本<br/>输入：图片/视频<br/>输入：音频 | 0.0004<br/>0.0015<br/>0.025 | 0.0016（仅文本输入）<br/>0.0045（含多媒体输入）<br/>0.05（文本不计费，输出文本+音频） | 纯文本高频最优；多模态成本可控；音频主导场景适配 |
| **GLM‑4.5V** | [0,32] 千Token（多模态）<br/>[32,64] 千Token（多模态） | 0.002<br/>0.004 | 0.006<br/>0.012 | 多模态短输入友好；中长篇成本较高 |


---

| 厂商 | 模型 | 输入模态 | 输出模态 | 参考文档 |
| --- | --- | --- | --- | --- |
| 通义千问 | Qwen‑VL（视觉理解） | 文本<br/>图片<br/>视频 | 文本 | [文档](https://help.aliyun.com/zh/model-studio/vision/?spm=a2c4g.11186623.help-menu-2400256.d_0_2_0.508449d9zRgNif&scm=20140722.H_2845871._.OR_help-T_cn~zh-V_1) |
| 通义千问 | Qwen‑Omni（全模态） | 文本<br/>图片+文本<br/>音频+文本<br/>视频+文本 | 文本<br/>音频 | [文档](https://help.aliyun.com/zh/model-studio/qwen-omni?spm=a2c4g.11186623.help-menu-2400256.d_0_2_4.6ac58b14LIXNaP&scm=20140722.H_2867839._.OR_help-T_cn~zh-V_1) |
| 字节跳动 | Doubao‑Seed‑1.6 | 文本<br/>图片<br/>视频 | 文本 | [文档](https://www.volcengine.com/docs/82379/1593702) |
| 字节跳动 | Doubao‑Seed‑1.6‑flash | 文本<br/>图片<br/>视频 | 文本 | [文档](https://www.volcengine.com/docs/82379/1593704) |
| 智谱请言 | GLM‑4.5V | 文本<br/>图片<br/>视频<br/>文件 | 文本 | [文档](https://docs.bigmodel.cn/cn/guide/models/vlm/glm-4.5v) |

