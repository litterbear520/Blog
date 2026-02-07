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

### 6.启动服务
```bash
docker compose -f docker-compose_all.yml up -d
```

### 7.查看状态日志

查看启动状态：
```bash
docker compose -f docker-compose_all.yml ps
```

查看日志：
```bash
docker logs xiaozhi-esp32-server-web
```

### 第 8 步：访问智控台并注册管理员
浏览器打开：http://localhost:8002

⭐ 重要：第一个注册的用户自动成为超级管理员！

第 9 步：配置 server.secret ⭐ 关键步骤
登录智控台后，进入 参数管理
找到参数编码为 server.secret 的记录
复制它的参数值（类似：b1dcea83-e6fa-45f2-9152-38984c8417a1）
编辑 
.config.yaml
，填入 secret：
manager-api:
  url: http://xiaozhi-esp32-server-web:8002/xiaozhi
  secret: b1dcea83-e6fa-45f2-9152-38984c8417a1  # 粘贴你复制的值
保存后重启 AI 引擎：
docker restart xiaozhi-esp32-server
第 10 步：配置 AI 模型密钥
在智控台中：

进入 模型配置 → 大语言模型
找到 智谱AI，点击 修改
填入你的 API 密钥（从 https://bigmodel.cn/usercenter/proj-mgmt/apikeys 获取）
保存
第 11 步：配置服务器地址（用于 ESP32 设备连接）
在智控台 参数管理 中配置：

server.websocket：ws://你的局域网IP:8000/xiaozhi/v1/
server.ota：http://你的局域网IP:8002/xiaozhi/ota/
如何获取局域网 IP：


# Windows
ipconfig

# Linux/Mac
ifconfig
# 或
ip addr show