---
sidebar_position: 1
---

# xiaozhi-minimax-server

这是关于 xiaozhi-minimax-server 项目的笔记和文档。

## 快速启动

### 1.克隆项目
```bash
git clone https://github.com/litterbear520/xiaozhi-minimax-esp32-server.git
```


### 2.进入部署目录
```bash
cd main/xiaozhi-server
```

### 3.创建必要的目录结构
```bash
mkdir data
```

### 4.下载模型文件

从[阿里魔搭](https://modelscope.cn/models/iic/SenseVoiceSmall/resolve/master/model.pt)下载`model.pt`文件并放到`models/SenseVoiceSmall/`目录：

### 5.创建配置文件

注意这里的配置文件按照注释修改
```bash
copy config_from_api.yaml data\.config.yaml
```

例如：
```yaml
server:
  ip: 0.0.0.0
  port: 8000
  # http服务的端口，用于视觉分析接口
  http_port: 8003
  # 视觉分析接口地址（Docker部署使用局域网地址）
  vision_explain: http://你的IP地址:8003/mcp/vision/explain
  # 认证配置
  auth:
    # 是否启用认证
    enabled: false

manager-api:
  # Docker部署使用容器内部地址
  url: http://xiaozhi-esp32-server-web:8002/xiaozhi
  # 从智控台参数管理中复制的 server.secret 值
  secret: b1dcea83-e6fa-45f2-9152-38984c8417a1
```

### 6.启动服务
```bash
docker compose -f docker-compose_all.yml up -d
```

### 7.查看状态日志

查看启动状态：
```bash
docker compose -f docker-compose_all.yml ps
```

查看实时日志：
```bash
docker logs -f xiaozhi-esp32-server
```

### 8.访问智控台并注册管理员
浏览器打开：http://localhost:8002

:::info 重要
第一个注册的用户自动成为超级管理员！
:::

### 9.配置`server.secret`

登录智控台后，进入参数管理,找到参数编码为`server.secret`的记录复制它的参数值
编辑`.config.yaml`，填入`secret`：

```yaml
manager-api:
  url: http://xiaozhi-esp32-server-web:8002/xiaozhi
  secret:   # 粘贴你复制的值
```

保存后重启：
```bash
docker restart xiaozhi-esp32-server
```

### 10.配置 AI 模型密钥
在智控台中：
进入模型配置 → 大语言模型

找到智谱AI，点击修改，填入API密钥，从[智谱开放平台](https://bigmodel.cn/usercenter/proj-mgmt/apikeys)获取

### 11.配置服务器地址
在智控台参数管理中配置：

server.websocket：`ws://你的局域网IP:8000/xiaozhi/v1/`

server.ota：`http://你的局域网IP:8002/xiaozhi/ota/`

获取ip：

```bash
# window
ipconfig

# Linux/Mac
ifconfig

# 或
ip addr show
```

### 12.访问测试网页

先进入这个目录: `main\xiaozhi-server\test`

```python
python -m http.server 8080
```

**测试页面**：http://你的IP地址:8080/test_page.html

**管理后台**：http://你的IP地址:8002

**ota**：http://你的IP地址:8002/xiaozhi/ota/

**WebSocket连接地址**：ws://你的IP地址:8000/xiaozhi/v1/

如果是本地的用`localhost`或者`127.0.0.1`替换IP地址即可。