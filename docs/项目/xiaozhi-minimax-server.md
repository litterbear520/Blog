# xiaozhi-esp32-server

## 前言

Github上优秀的项目实在太多了，让人眼花缭乱，每天都有很多高星项目，恨不得全部都塞进自己的大脑里，在AI时代会有一种感觉：<span style={{color: '#1890ff'}}>学不完，根本学不完。</span>

而我选择记录这个是因为我在抖音评论中看过的一句话，印象特别深刻：
<span style={{color: 'red'}}>挑对自己强相关的去学，不太相关的保持理解就好。</span>

真的，这句话让我感觉醍醐灌顶，感觉之前的迷茫感在这一瞬间烟消云散了。

## 快速启动

我选择的是智控台版本的全模块安装，通过Docker启动，如果不知道Docker怎么安装可以看我的另外一篇笔记：

[Docker 安装指南](../Docker/安装)

### 克隆项目

```bash
git clone https://github.com/litterbear520/xiaozhi-esp32-server.git
```

### 创建配置目录

在项目根目录下直接输入命令创建配置目录，并复制.yaml文件到目录下：

```bash
mkdir -p main/xiaozhi-server/data
cp main/xiaozhi-server/config_from_api.yaml xiaozhi-server/data/.config.yaml
```

### 构建镜像

```bash
cd main/xiaozhi-server 
docker compose -f ./docker-compose_all.yml up -d
```

如果能够访问[http://localhost:8002/xiaozhi/doc.html](http://localhost:8002/xiaozhi/doc.html)，说明构建成功了。

### 必要配置

1.访问智控台 http://127.0.0.1:8002 注册第一个用户（超级管理员）

2.配置`server.secret`：
  - 智控台 → 参数管理 → 找到`server.secret`，复制参数值
  - 编辑`xiaozhi-server/data/.config.yaml`：

```yaml
manager-api:
  url: http://xiaozhi-esp32-server-web:8002/xiaozhi
  secret: 你复制的值
```

:::info
注意如果是docker部署，url应该替换成上面的配置，而不是默认复制的url
:::

3.配置模型密钥：
智控台 → 模型配置 → 大语言模型 → 修改智谱AI的API密钥

ChatGLM配置说明：
- 访问 https://bigmodel.cn/usercenter/proj-mgmt/apikeys
- 注册并获取API密钥
- 填入配置文件中

如果你选择了全API方案，但智控台里的ASR配置还是 FunASR（本地），需要去智控台改成在线API：

- 登录智控台 http://127.0.0.1:8002
- 模型配置 → 语音识别(ASR)
- 把 FunASR（本地）改成在线API
- 保存并重启Server：

```bash
docker restart xiaozhi-esp32-server
```

### 下载本地ASR模型(可选)

从[阿里魔搭](https://modelscope.cn/models/iic/SenseVoiceSmall/resolve/master/model.pt)下载`model.pt`文件并放到`models/SenseVoiceSmall/`目录：

### 查看状态日志

查看实时日志：
```bash
docker logs -f xiaozhi-esp32-server
```

### 配置测试页面地址

查看自己的ip地址

```bash
ifconfig | grep "inet " | grep -v 127.0.0.1 # Mac
ipconfig # window
```

测试页面的ota填`http://你的IP地址/xiaozhi/ota/`

去智控台 → 参数管理 → 找到`server.websocket`，改成：`ws://你的IP:8000/xiaozhi/v1/`

然后重启服务即可：

```bash
docker restart xiaozhi-esp32-server 
```

### 访问测试页

先进入这个目录: `main\xiaozhi-server\test`

```python
python3 -m http.server 8080
```

访问[http://localhost:8080/test_page.html](http://localhost:8080/test_page.html)进入测试页面。

首次连接需要绑定设备，复制测试页面的绑定码，到[智控台](http://127.0.0.1:8002)添加智能体并点击六位验证码绑定进行验证。
                                                                               
## 快速查询

**测试页面**：`http://localhost:8080/test_page.html`

**智控台**：`http://你的IP地址:8002`

**ota**：`http://你的IP地址:8002/xiaozhi/ota/`

**WebSocket连接地址**：`ws://你的IP地址:8000/xiaozhi/v1/`

如果是本地的用`localhost`或者`127.0.0.1`替换IP地址即可。
