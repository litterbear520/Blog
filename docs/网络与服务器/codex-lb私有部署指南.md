# codex-lb 私有部署指南

这篇笔记记录一套已经实际跑通的方案：把
[codex-lb](https://github.com/Soju06/codex-lb) 部署到 Ubuntu 服务器，通过
Tailscale 私网访问，再给自己和朋友分别创建访问密钥。

文章面向第一次部署服务的人。前期只需要准备一台可以 SSH 登录的 Ubuntu
服务器，后面按顺序执行即可。

> **注意：使用边界**
>
> codex-lb 使用导入的 ChatGPT/Codex 账号访问上游。请确认自己的使用方式符合账号、服务和所在地的相关规则，不要把服务公开给不受信任的人。

## 一、最终架构

```text
Codex CLI / Codex 客户端
        ↓  独立的 sk-clb-* Key
客户端 Tailscale
        ↓  加密私网
服务器 Tailscale IP:2455
        ↓
codex-lb Docker 容器
        ↓  ChatGPT OAuth 账号池
Codex 上游服务
```

这套方案不会把 `2455` 暴露到公网，不要求域名，而且可以和占用公网
`443` 的 Xray/VPN 共存。

本文参考环境：

| 项目 | 配置 |
| ---- | ---- |
| 操作系统 | Ubuntu 22.04 LTS |
| 建议配置 | 2 核 CPU、2 GB 内存、40 GB 磁盘 |
| 部署方式 | Docker Compose |
| 数据库 | SQLite |
| 私网访问 | Tailscale |
| 应用端口 | TCP 2455 |

## 二、准备和检查

需要准备一台能 SSH 登录的 Ubuntu 服务器、一个 Tailscale 账号，以及自己的
ChatGPT/Codex 账号。

登录服务器：

```bash
ssh <SSH_USER>@<SERVER_PUBLIC_IP>
```

如果已经配置 SSH 别名：

```bash
ssh <SSH_ALIAS>
```

检查资源和端口：

```bash
cat /etc/os-release
nproc
free -h
df -h /
sudo ss -lntup
```

确认磁盘空间足够，且 `2455` 没有被占用。本文不需要在云平台防火墙中开放
`2455`。

## 三、安装 Docker

使用 Docker 官方 Ubuntu 软件源：

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

. /etc/os-release
ARCH="$(dpkg --print-architecture)"
printf 'Types: deb\nURIs: https://download.docker.com/linux/ubuntu\nSuites: %s\nComponents: stable\nArchitectures: %s\nSigned-By: /etc/apt/keyrings/docker.asc\n' \
  "$VERSION_CODENAME" "$ARCH" \
  | sudo tee /etc/apt/sources.list.d/docker.sources >/dev/null

sudo apt-get update
sudo apt-get install -y \
  docker-ce docker-ce-cli containerd.io \
  docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
```

验证：

```bash
sudo docker version
sudo docker compose version
systemctl is-active docker
```

最后一条应输出 `active`。

## 四、小内存服务器添加 Swap

如果服务器只有 2 GB 内存，并且 `swapon --show` 没有输出，建议添加 2 GB
Swap，避免瞬时内存上涨杀死服务。

```bash
swapon --show
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-codex-lb-memory.conf
sudo sysctl vm.swappiness=10
free -h
```

已有 Swap 时不要重复创建。

## 五、安装和登录 Tailscale

在服务器执行：

```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo systemctl enable --now tailscaled
sudo tailscale up \
  --hostname=codex-lb-server \
  --accept-dns=false
```

终端会显示一个 `login.tailscale.com` 链接。用自己的 Tailscale 账号打开并批准服务器加入。

```bash
tailscale status
tailscale ip -4
```

记下服务器的 Tailscale IPv4，格式通常是 `100.x.x.x`。后文用
`<TAILSCALE_IP>` 表示。

## 六、部署 codex-lb

### 1. 创建 Compose 配置

```bash
sudo install -d -m 0755 /opt/codex-lb
cd /opt/codex-lb
sudo nano compose.yaml
```

写入：

```yaml
services:
  codex-lb:
    image: ghcr.io/soju06/codex-lb:latest
    container_name: codex-lb
    ports:
      - "127.0.0.1:2455:2455"
    volumes:
      - codex-lb-data:/var/lib/codex-lb
    restart: unless-stopped
    mem_limit: 1g
    healthcheck:
      test:
        - CMD
        - python
        - -c
        - "import urllib.request; urllib.request.urlopen('http://127.0.0.1:2455/health/ready')"
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 30s
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"

volumes:
  codex-lb-data:
    name: codex-lb-data
```

`127.0.0.1:2455:2455` 是关键：它让容器只监听服务器本机。不要改成
`2455:2455`，否则 Docker 可能绕过 UFW，把服务暴露到公网。

### 2. 启动和验证

```bash
cd /opt/codex-lb
sudo docker compose config
sudo docker compose pull
sudo docker compose up -d
sudo docker compose ps
```

```bash
sudo docker inspect \
  --format 'status={{.State.Status}} health={{.State.Health.Status}} restarts={{.RestartCount}}' \
  codex-lb
curl http://127.0.0.1:2455/health/ready
```

正常结果应包含 `health=healthy`、`status: ok` 和 `database: ok`。

## 七、通过 Tailscale 提供私网访问

```bash
sudo tailscale serve --bg \
  --tcp=2455 \
  tcp://127.0.0.1:2455
sudo tailscale serve status
```

同一 Tailscale 网络中的设备现在可以访问：

```text
http://<TAILSCALE_IP>:2455
```

浏览器会把它标记为普通 HTTP，但流量实际位于 Tailscale 的加密隧道中。

### 可选：Tailscale HTTPS

```bash
sudo tailscale serve --bg \
  --https=8443 \
  http://127.0.0.1:2455
```

第一次会要求在 Tailscale 后台启用 Serve。地址类似：

```text
https://codex-lb-server.<TAILNET>.ts.net:8443
```

如果本机使用 Clash TUN 和 Fake IP DNS，`*.ts.net` 可能被错误映射。初次部署建议先使用 Tailscale IP。

## 八、初始化管理后台

客户端安装 Tailscale、登录同一个账号并保持 Connected，然后打开：

```text
http://<TAILSCALE_IP>:2455
```

首次远程访问会显示 `Complete Remote Setup`。在自己的终端查看 bootstrap token：

```bash
ssh <SSH_ALIAS> \
  'sudo docker logs codex-lb 2>&1 | grep -A2 "Dashboard bootstrap token"'
```

点击 `Set password`，输入 token 并设置强管理员密码。不要把 token 和管理员密码发给别人。

## 九、添加 ChatGPT/Codex 账号

进入 `Accounts → Add account`，推荐选择 `Device code`：

1. 打开页面给出的 OpenAI 授权地址；
2. 输入设备码；
3. 登录并确认授权；
4. 回到 Dashboard，等待账号状态变为 `Active`。

Device code 不需要开放 OAuth 回调端口 `1455`。

如果使用 `Browser (PKCE)`，授权后可能跳到无法访问的
`localhost:1455`。复制地址栏中的完整回调 URL，再粘贴回 codex-lb 的
`Paste callback URL` 输入框即可。

## 十、理解三种凭据

| 凭据 | 用途 | 给朋友吗 |
| ---- | ---- | ---- |
| ChatGPT OAuth | codex-lb 调用上游 Codex | 不给 |
| Dashboard 密码 | 管理账号池和设置 | 不给 |
| `sk-clb-*` Key | 客户端调用 codex-lb | 每人独立创建 |

`sk-clb-*` 不是 OpenAI Platform 的按量计费 API Key。它是 codex-lb
签发的客户端访问密钥，请求最终使用服务器账号池中的 OAuth 凭据和额度。

## 十一、创建客户端 Key

进入 `Settings → API Keys`，打开 `API Key Auth`，然后点击
`Create key`。

自己的 Key 可以这样配置：

- Name：`owner` 或设备名称；
- Allowed models：`All models`；
- Apply to codex `/model`：勾选；
- Assigned accounts：`All accounts`；
- Enforced model：留空；
- Enforced reasoning / service tier：`None`；
- Traffic class：`Foreground`；
- Expiry：按需设置；
- Limits：自己的 Key 可以不限额。

给朋友创建 Key 时，建议每人单独一个，写清楚名字，并设置到期时间和每周 token 或成本上限。

Key 只完整显示一次，立即保存到密码管理器。不要把真实 Key 写进博客、Git、截图或聊天记录。

## 十二、配置 Codex 客户端

配置文件位置：

| 系统 | 路径 |
| ---- | ---- |
| macOS / Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

保留原有模型和其他设置，新增或修改：

```toml
model_provider = "codex-lb"

[model_providers.codex-lb]
name = "openai"
base_url = "http://<TAILSCALE_IP>:2455/backend-api/codex"
wire_api = "responses"
supports_websockets = true
requires_openai_auth = true
env_key = "CODEX_LB_API_KEY"
```

`name = "openai"` 使用小写，`base_url` 末尾必须包含
`/backend-api/codex`。

### macOS / Linux

下面不会把 Key 直接写进命令历史：

```bash
read -s "CODEX_LB_API_KEY?Codex LB Key: "
export CODEX_LB_API_KEY
codex
```

从 macOS 图形界面启动 Codex App 时，可以在当前登录会话设置变量，然后完全退出并重新打开 App：

```bash
read -s "CODEX_LB_API_KEY?Codex LB Key: "
export CODEX_LB_API_KEY
launchctl setenv CODEX_LB_API_KEY "$CODEX_LB_API_KEY"
unset CODEX_LB_API_KEY
```

### Windows

```bash
setx CODEX_LB_API_KEY "sk-clb-替换为自己的Key"
```

执行后关闭旧终端，再重新打开 Codex。

## 十三、验证调用

```bash
tailscale status
tailscale ping <TAILSCALE_IP>
curl --noproxy '*' \
  http://<TAILSCALE_IP>:2455/health/ready
```

Tailscale 必须保持 Connected。窗口可以关闭，但不能点击 Disconnect、退出客户端或停止后台服务。

验证 Key：

```bash
curl --noproxy '*' \
  -H "Authorization: Bearer $CODEX_LB_API_KEY" \
  http://<TAILSCALE_IP>:2455/v1/models
```

能返回模型列表，说明网络和 Key 已生效。最后启动 Codex，发送一句简单请求完成真实调用验证。

## 十四、只分享服务器给朋友

朋友不需要加入整个 tailnet。在 Tailscale 管理后台进入：

```text
Machines → codex-lb-server → … → Share
```

建议为每位朋友生成一个单次邀请链接。朋友需要：

1. 安装 Tailscale；
2. 使用自己的账号登录；
3. 接受服务器共享邀请；
4. 保持 Tailscale Connected；
5. 使用相同的 `base_url`；
6. 使用分配给自己的 `sk-clb-*` Key。

不要在 Tailscale 的 `Users` 页面直接邀请，否则朋友会加入整个 tailnet，而不仅仅是访问这一台服务器。

> **注意：默认共享权限**
>
> Tailscale 默认访问策略比较宽松。只分享给可信的人；需要严格隔离时，通过
> Access Controls 把 `autogroup:shared` 限制到 TCP 2455。

## 十五、Clash TUN 模式常见坑

这是整个部署中最容易误判的问题。

### 常见现象

- 终端健康检查正常，但 Chrome 显示 `ERR_CONNECTION_CLOSED`；
- 关闭“系统代理”后仍然打不开；
- `*.ts.net` 被解析为 `198.18.x.x`；
- 端口探测成功，但 TLS 和 HTTP 立即断开；
- `tailscale status` 显示 `Tailscale is stopped`。

### 原因

Clash Verge 可能同时开启 TUN、系统代理、DNS 覆写和链式代理。只关闭系统代理并不等于关闭 Clash，TUN 仍可能接管全部流量。

### 修复

先确保 Tailscale 是 Connected。然后在 Clash Verge Rev 进入：

```text
设置 → 系统代理 → 系统代理设置
```

关闭“始终使用默认绕过”，保留原有绕过项，并追加：

```text
100.64.0.0/10
```

保存后优先使用：

```text
http://<TAILSCALE_IP>:2455
```

macOS 排查命令：

```bash
tailscale status
tailscale ping <TAILSCALE_IP>
route -n get <TAILSCALE_IP>
scutil --proxy
curl --noproxy '*' \
  http://<TAILSCALE_IP>:2455/health/ready
```

正常路由应指向 Tailscale 的 `utun` 接口。如果网关类似 `198.18.0.1`，说明流量仍被 Clash 接管。

Clash Fake IP 可能先接受 TCP 连接，因此 `nc -vz` 成功不代表真实服务器可达。应同时检查 `tailscale status`、`tailscale ping` 和健康接口。

## 十六、与现有 Xray/VPN 共存

如果服务器已经是：

```text
公网 TCP 443 → Xray VLESS + REALITY
```

本文方案不会冲突：Xray 继续用公网 `443`，codex-lb 只监听
`127.0.0.1:2455`，Tailscale 负责私网 `2455`。

```bash
systemctl is-active xray docker tailscaled
sudo ss -lntup
```

部署前后都应确认原有服务仍为 `active`。

## 十七、更新、日志和备份

更新：

```bash
ssh <SSH_ALIAS> '
  cd /opt/codex-lb &&
  sudo docker compose pull &&
  sudo docker compose up -d &&
  sudo docker compose ps
'
```

日志：

```bash
ssh <SSH_ALIAS> 'sudo docker logs --tail 200 codex-lb'
```

日志可能包含首次初始化 token 或请求元数据，不要直接发到公开渠道。

一致性备份 SQLite 数据卷：

```bash
ssh <SSH_ALIAS> '
  set -e
  cd /opt/codex-lb
  sudo install -d -m 0700 /opt/codex-lb/backups
  sudo docker compose stop
  sudo docker run --rm \
    -v codex-lb-data:/data:ro \
    -v /opt/codex-lb/backups:/backup \
    alpine \
    tar -C /data -czf /backup/codex-lb-$(date +%F-%H%M%S).tar.gz .
  sudo docker compose start
'
```

备份包含账号凭据，应定期下载到其他受保护的设备，不要公开上传。

## 十八、快速排障

### Dashboard 打不开

```bash
tailscale status
tailscale ping <TAILSCALE_IP>
curl --noproxy '*' http://<TAILSCALE_IP>:2455/health/ready
```

### 服务器本机不健康

```bash
ssh <SSH_ALIAS>
cd /opt/codex-lb
sudo docker compose ps
sudo docker logs --tail 200 codex-lb
curl http://127.0.0.1:2455/health/ready
```

### Dashboard 能打开，Codex 调用失败

检查：

1. Accounts 中账号是否为 `Active`；
2. `API Key Auth` 是否开启；
3. Key 是否完整、过期或被限额；
4. `base_url` 是否包含 `/backend-api/codex`；
5. `name` 是否为小写 `openai`；
6. Codex 进程是否读取了 `CODEX_LB_API_KEY`；
7. Tailscale 是否仍为 Connected。

### 朋友拿到 Key 仍然连不上

Key 只负责应用鉴权，不负责网络接入。确认朋友已安装并登录 Tailscale、接受设备共享、保持 Connected，并为 Clash 绕过 `100.64.0.0/10`。

## 十九、参考资料

- [codex-lb GitHub 仓库](https://github.com/Soju06/codex-lb)
- [Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Tailscale Linux 安装](https://tailscale.com/docs/install/linux)
- [Tailscale Serve](https://tailscale.com/docs/features/tailscale-serve)
- [Tailscale 设备共享](https://tailscale.com/kb/1084/sharing)
- [Tailscale Access Controls](https://tailscale.com/docs/features/access-control)

至此，codex-lb 已完成从服务器部署、私网访问、账号授权、客户端 Key
签发到朋友共享的完整闭环。
