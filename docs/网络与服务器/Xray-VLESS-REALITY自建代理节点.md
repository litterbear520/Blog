# Xray 私人代理节点搭建指南

这篇笔记记录一次完整的私人代理节点搭建过程：购买并准备腾讯云轻量应用服务器，通过 SSH 登录，在 Ubuntu 上安装 Xray，配置 VLESS + REALITY，最后让 Clash Verge Rev、手机 Clash 和 Shadowrocket 连接节点。

文章面向第一次接触服务器的人。只要按顺序执行，即使没有 AI 助手，也能完成部署、验证和日常维护。

## 一、最终架构

完成后的网络链路如下：

```text
浏览器或手机 App
        ↓
Clash Verge Rev / 手机 Clash / Shadowrocket
        ↓  VLESS + REALITY，TCP 443
腾讯云服务器上的 Xray
        ↓
目标网站
```

本文使用的参考环境：

| 项目 | 配置 |
| --- | --- |
| 云服务 | 腾讯云轻量应用服务器 |
| 操作系统 | Ubuntu 22.04 LTS |
| CPU 架构 | x86_64 |
| 服务端程序 | Xray-core |
| 协议 | VLESS |
| 流控 | `xtls-rprx-vision` |
| 传输安全 | REALITY |
| 监听端口 | TCP 443 |
| 客户端 | Clash Verge Rev、Mihomo 内核客户端、Shadowrocket |
| 是否需要域名 | 不需要 |

## 二、先理解几个名字

### Xray 是什么

Xray 是运行在服务器上的网络代理程序。它负责接收客户端连接，再把请求转发到目标网站。

### VLESS 是什么

VLESS 是客户端与 Xray 之间使用的协议。本文用随机 UUID 标识客户端，而不是服务器的 SSH 用户名和密码。

### REALITY 是什么

REALITY 是 Xray 的传输安全方案。它让连接的外观接近正常 TLS/HTTPS 流量，并通过服务器私钥、客户端公钥、SNI 和 Short ID 完成认证。

### 它和 WireGuard 有什么区别

| 对比 | WireGuard | Xray + VLESS + REALITY |
| --- | --- | --- |
| 本质 | 系统级 VPN 隧道 | 规则代理节点 |
| 常见客户端 | WireGuard | Clash、Shadowrocket |
| 典型用途 | 访问内网、整机组网 | 按域名或应用分流 |
| 网络外观 | 协议特征明确 | 接近普通 HTTPS |
| 本教程是否使用 | 否 | 是 |

如果目标是访问家庭或公司内网，优先考虑 WireGuard；如果目标是把服务器作为 Clash 或 Shadowrocket 节点，Xray 更合适。

## 三、准备云服务器

### 1. 购买服务器

准备一台具有公网 IPv4 地址的 Linux 云服务器。建议：

- Ubuntu 22.04 或更新的 LTS 版本；
- x86_64 或 arm64 架构；
- 至少 1 核 CPU、1 GB 内存；
- 有足够的月流量额度；
- 服务器地区和线路根据自己的合法用途选择。

本文不需要域名，因为 REALITY 可以直接通过服务器 IP 连接。

### 2. 配置腾讯云防火墙

在腾讯云轻量应用服务器控制台的“防火墙”页面，至少保留以下入站规则：

| 用途 | 协议 | 端口 | 来源 |
| --- | --- | --- | --- |
| SSH 管理 | TCP | 22 | 优先限制为自己的公网 IP；不固定时可暂用全部 IPv4 |
| Xray 节点 | TCP | 443 | 全部 IPv4 |

本文的 Xray 使用 TCP，因此只开放 UDP 443 没有作用。也不要误建成“全部 IPv6”，而客户端实际连接的是 IPv4。

云平台防火墙和 Ubuntu 内部的 UFW 是两层不同的防火墙。本文环境中 UFW 没有启用，由腾讯云防火墙负责放行。如果启用了 UFW，还要执行：

```bash
sudo ufw allow 22/tcp
sudo ufw allow 443/tcp
sudo ufw status
```

开启 UFW 前务必先放行 SSH 端口，否则可能把自己锁在服务器外面。

## 四、配置 SSH 登录

### 1. 分清公钥和私钥

- 云服务器保存公钥，通常位于 `~/.ssh/authorized_keys`；
- 本文的 Mac 密钥登录方案由 Mac 保存私钥，例如 `server-key.pem`；
- 登录时私钥不会发送给服务器，本地只用它签名；
- `.pem` 文件通常是私钥，不要上传到服务器或发给别人。

### 2. 把私钥放入 Mac 的 SSH 目录

以下命令在 Mac 终端执行。把下载目录中的文件名替换成自己的：

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
mv ~/Downloads/server-key.pem ~/.ssh/server-key.pem
chmod 600 ~/.ssh/server-key.pem
```

`600` 表示只有当前 Mac 用户可以读写这个文件，用户组和其他用户没有权限。

### 3. 在 Mac 上添加 SSH 别名

编辑 `~/.ssh/config`：

```sshconfig
Host littlebear-vpn
    HostName YOUR_SERVER_IP
    User ubuntu
    IdentityFile ~/.ssh/server-key.pem
    IdentitiesOnly yes
```

把 `YOUR_SERVER_IP` 替换成服务器公网 IPv4，然后执行：

```bash
chmod 600 ~/.ssh/config
ssh littlebear-vpn
```

以后不需要再输入完整 IP 和私钥路径。

### 4. Windows 10/11 使用密码登录

Windows 10/11 可以使用系统自带的 OpenSSH Client。先打开“命令提示符（CMD）”检查：

```batch
where ssh
ssh -V
```

如果找不到 `ssh`，以管理员身份打开 CMD，只安装 OpenSSH Client：

```batch
dism /Online /Get-Capabilities | findstr /I OpenSSH.Client
dism /Online /Add-Capability /CapabilityName:OpenSSH.Client~~~~0.0.1.0
```

这里不需要安装或启动 OpenSSH Server，因为 Windows 是发起连接的客户端。图形界面也可以在“设置 → 应用 → 可选功能”中搜索并安装“OpenSSH 客户端”。安装方式参考 [Microsoft Learn：安装 Windows OpenSSH](https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse)。

在腾讯云控制台为 `ubuntu` 用户设置或重置登录密码，并确认服务器允许 SSH 密码登录。然后在普通 CMD 中执行：

```batch
ssh ubuntu@YOUR_SERVER_IP
```

把 `YOUR_SERVER_IP` 替换为腾讯云服务器公网 IPv4。看到 `ubuntu@服务器IP's password:` 后直接输入服务器密码并按回车；输入过程中不会显示字符、星号或圆点，这是正常的。

成功 SSH 进入 Ubuntu 后，本文后续所有 Xray 服务端命令与 Mac 完全相同。

### 5. 常见 SSH 问题

如果使用密码登录，终端输入密码时不会显示字符、星号或圆点，这是正常的。直接输入后按回车即可。

出现 `Permission denied` 时依次检查：

```bash
# 确认使用了正确的系统用户
ssh -i ~/.ssh/server-key.pem ubuntu@YOUR_SERVER_IP

# 检查私钥权限
ls -l ~/.ssh/server-key.pem

# 显示详细认证过程，但不要把完整输出公开
ssh -vvv littlebear-vpn
```

Windows 使用密码登录时，可以显示详细连接过程：

```batch
ssh -vvv ubuntu@YOUR_SERVER_IP
```

不要默认使用 `root`。腾讯云 Ubuntu 镜像通常使用 `ubuntu` 用户，再通过 `sudo` 执行管理员操作。

## 五、部署前检查服务器

SSH 登录后执行：

```bash
cat /etc/os-release
uname -m
```

应看到 Ubuntu 系统信息，以及 `x86_64` 或 `aarch64` 架构。

检查 80 和 443 是否已被其他服务占用：

```bash
sudo ss -lntup | grep -E ':(80|443)\b' || echo "80 和 443 端口未被占用"
```

检查是否已有常见代理服务：

```bash
systemctl list-unit-files --type=service \
  | grep -E '^(xray|sing-box|hysteria|trojan)' \
  || echo "未发现已有代理服务"
```

检查时间同步：

```bash
timedatectl status
```

REALITY 认证依赖正确的系统时间。如果没有同步，先修复 NTP 再继续。

## 六、安装 Xray

使用 [XTLS 官方安装脚本](https://github.com/XTLS/Xray-install)。先下载到临时文件并做 shell 语法检查，再执行：

```bash
curl -fsSL \
  https://github.com/XTLS/Xray-install/raw/main/install-release.sh \
  -o /tmp/install-xray.sh

bash -n /tmp/install-xray.sh
sudo bash /tmp/install-xray.sh install
rm -f /tmp/install-xray.sh
```

确认版本和安装路径：

```bash
/usr/local/bin/xray version
```

官方脚本通常安装到：

```text
/usr/local/bin/xray                 # 程序
/usr/local/etc/xray/config.json     # 配置
/etc/systemd/system/xray.service    # systemd 服务
/usr/local/share/xray/              # geoip/geosite 数据
```

## 七、选择 REALITY 伪装目标

REALITY 的 `target` 必须是服务器可以正常访问、支持 TLS 1.3，并且证书接受对应 SNI 的 HTTPS 站点。

本文使用：

```text
www.apple.com:443
```

先在服务器检测：

```bash
/usr/local/bin/xray tls ping www.apple.com
```

需要看到：

```text
Handshake succeeded
TLS Version: TLS 1.3
```

不要随意选择 Cloudflare CDN 站点。REALITY 会把未通过认证的连接转发给 `target`，不合适的 CDN 目标可能让服务器被扫描者当成转发器。目标选择原则和字段说明以 [Xray REALITY 官方文档](https://xtls.github.io/config/transports/reality.html) 为准。

## 八、生成服务端凭据

下面的命令全部在执行 `ssh littlebear-vpn`、进入 Ubuntu 服务器后运行，建议在同一个 SSH 会话中连续完成。

先设置服务器信息：

```bash
SERVER_IP="YOUR_SERVER_IP"
SERVER_NAME="www.apple.com"
XRAY="/usr/local/bin/xray"
```

`SERVER_IP` 是腾讯云控制台显示的服务器**公网 IPv4**，也就是 SSH 连接时使用的地址；不是服务器内网 IP，也不是 Mac 或手机的 IP。把 `YOUR_SERVER_IP` 换成这个公网 IPv4。

这三行只是在当前终端中保存变量，不会修改服务器网络配置，也不会产生输出：

- `SERVER_IP`：稍后写入客户端配置的服务器地址；
- `SERVER_NAME`：REALITY 使用的目标域名和 SNI；
- `XRAY`：Xray 程序的安装路径。

设置完成后，继续生成 UUID、REALITY 密钥对和 Short ID：

```bash
UUID="$($XRAY uuid)"
KEYPAIR="$($XRAY x25519)"
PRIVATE_KEY="$(printf '%s\n' "$KEYPAIR" | sed -n 's/^PrivateKey: //p')"
PUBLIC_KEY="$(printf '%s\n' "$KEYPAIR" | sed -n 's/^Password (PublicKey): //p')"
SHORT_ID="$(openssl rand -hex 8)"
```

确认变量都成功生成，但不要打印真实值：

```bash
for name in UUID PRIVATE_KEY PUBLIC_KEY SHORT_ID; do
  test -n "${!name}" || { echo "$name 生成失败"; exit 1; }
done
echo "凭据生成成功"
```

当前版本的 `xray x25519` 输出中：

- `PrivateKey` 只写入服务器配置；
- `Password (PublicKey)` 是客户端需要的 REALITY 公钥；
- 私钥不能出现在客户端文件中。

为了断线后仍能恢复客户端配置，把非私钥的客户端参数保存到权限为 `600` 的文件：

```bash
install -d -m 700 ~/.config/littlebear-vpn

cat > ~/.config/littlebear-vpn/client.env <<EOF
SERVER_IP='$SERVER_IP'
SERVER_NAME='$SERVER_NAME'
UUID='$UUID'
PUBLIC_KEY='$PUBLIC_KEY'
SHORT_ID='$SHORT_ID'
EOF

chmod 600 ~/.config/littlebear-vpn/client.env
```

这个文件没有 REALITY 私钥，但依然包含节点凭据，不能公开。

## 九、编写 Xray 服务端配置

先创建一个带 `.json` 后缀、权限为 `600` 的临时配置文件。不要直接覆盖正式配置：

```bash
TMP_CONFIG="$(mktemp --suffix=.json)"
trap 'rm -f "$TMP_CONFIG"' EXIT
```

把配置写入临时文件：

```bash
cat > "$TMP_CONFIG" <<EOF
{
  "log": {
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "listen": "0.0.0.0",
      "port": 443,
      "protocol": "vless",
      "settings": {
        "clients": [
          {
            "id": "$UUID",
            "flow": "xtls-rprx-vision"
          }
        ],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "raw",
        "security": "reality",
        "realitySettings": {
          "show": false,
          "target": "$SERVER_NAME:443",
          "xver": 0,
          "serverNames": ["$SERVER_NAME"],
          "privateKey": "$PRIVATE_KEY",
          "shortIds": ["$SHORT_ID"]
        }
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "tag": "direct"
    },
    {
      "protocol": "blackhole",
      "tag": "blocked"
    }
  ]
}
EOF
```

先校验临时配置。只有看到 `Configuration OK` 才继续：

```bash
sudo "$XRAY" run -test -config "$TMP_CONFIG"
```

校验成功后，备份旧配置，再把临时文件安装为正式配置。官方 systemd 服务默认以 `nobody` 用户运行，在 Ubuntu 中让 `nogroup` 组只读配置：

```bash
sudo cp -a /usr/local/etc/xray/config.json \
  /usr/local/etc/xray/config.json.backup.$(date +%Y%m%d%H%M%S)

sudo install -o root -g nogroup -m 0640 \
  "$TMP_CONFIG" /usr/local/etc/xray/config.json

rm -f "$TMP_CONFIG"
trap - EXIT
unset PRIVATE_KEY KEYPAIR
```

此时 REALITY 私钥只保留在权限受限的正式配置中，当前 shell 中的私钥变量和临时文件已经清除。

## 十、启动并检查服务

再次校验正式配置，然后启用并重启服务：

```bash
sudo /usr/local/bin/xray run \
  -test \
  -config /usr/local/etc/xray/config.json

sudo systemctl enable xray
sudo systemctl restart xray
```

检查状态和端口：

```bash
sudo systemctl status xray --no-pager
sudo ss -lntp | grep ':443 '
```

正常结果应包含：

```text
Active: active (running)
LISTEN ... :443 ... xray
```

查看最近是否有错误：

```bash
sudo journalctl -u xray --since "5 minutes ago" --no-pager
```

再从本地电脑测试公网端口。

Mac：

```bash
nc -vz -w 5 YOUR_SERVER_IP 443
```

Windows CMD：

```batch
curl.exe -vkI --connect-timeout 5 --max-time 10 https://YOUR_SERVER_IP/
```

Windows 输出中看到 `Connected to ... port 443` 说明 TCP 443 可以连接。这里的 `-k` 只用于忽略 IP 与目标证书不匹配，完成端口排查后无需在其他命令中长期使用。

Mac 看到 `succeeded`，或 Windows 看到上述 `Connected to`，都只代表 TCP 端口可达，最终还要使用客户端做真实代理请求。

## 十一、生成 Clash 配置

如果中途重新登录过 SSH，先恢复客户端变量：

```bash
source ~/.config/littlebear-vpn/client.env
```

在服务器生成完整的 Mihomo/Clash YAML：

```bash
cat > ~/littlebear-vpn.yaml <<EOF
mixed-port: 7890
allow-lan: false
mode: rule
log-level: info
ipv6: false

proxies:
  - name: littlebear-vpn
    type: vless
    server: $SERVER_IP
    port: 443
    uuid: "$UUID"
    network: tcp
    tls: true
    udp: true
    flow: xtls-rprx-vision
    servername: $SERVER_NAME
    client-fingerprint: chrome
    reality-opts:
      public-key: "$PUBLIC_KEY"
      short-id: "$SHORT_ID"

proxy-groups:
  - name: PROXY
    type: select
    proxies:
      - littlebear-vpn

rules:
  - MATCH,PROXY
EOF

chmod 600 ~/littlebear-vpn.yaml
```

这份示例的最后一条规则是 `MATCH,PROXY`，即未命中其他规则的流量全部走节点。后续可以根据需求添加直连和分流规则。

配置字段参考 [Mihomo VLESS 官方文档](https://wiki.metacubex.one/config/proxies/vless/) 和 [Mihomo TLS/REALITY 官方文档](https://wiki.metacubex.one/config/proxies/tls/)。

在 Mac 上创建安全目录并下载配置：

```bash
install -d -m 700 ~/.config/littlebear-vpn

scp littlebear-vpn:~/littlebear-vpn.yaml \
  ~/.config/littlebear-vpn/littlebear-vpn.yaml

chmod 600 ~/.config/littlebear-vpn/littlebear-vpn.yaml
```

Windows CMD 使用：

```batch
mkdir "%USERPROFILE%\.config\littlebear-vpn"
scp ubuntu@YOUR_SERVER_IP:~/littlebear-vpn.yaml "%USERPROFILE%\.config\littlebear-vpn\littlebear-vpn.yaml"
```

Windows 执行 `scp` 时会提示输入服务器密码。Mac 如果没有配置 SSH 别名，也可以把 `littlebear-vpn:` 换成 `ubuntu@YOUR_SERVER_IP:`。

## 十二、导入 Clash Verge Rev

Clash Verge Rev 使用 Mihomo 内核，可以直接读取上面的 YAML。

1. 打开“订阅”或“配置”页面；
2. 点击“新建”或 `+`；
3. 选择“本地配置/导入文件”，不要选择“订阅链接”；
4. 选择 `~/.config/littlebear-vpn/littlebear-vpn.yaml`；
5. 启用该配置；
6. 打开“系统代理”；需要代理更多系统流量时再启用 TUN 模式。

macOS 的文件选择窗口默认隐藏 `.config`。按 `Command + Shift + G`，输入完整路径：

```text
~/.config/littlebear-vpn/littlebear-vpn.yaml
```

Windows 在文件选择窗口的地址栏输入：

```text
C:\Users\你的Windows用户名\.config\littlebear-vpn\littlebear-vpn.yaml
```

### 手机 Clash

把 `littlebear-vpn.yaml` 通过隔空投送、USB 或其他可信的端到端方式传到手机，然后在 Clash 客户端中选择“从文件导入”。不同 Android/iOS 客户端的按钮名称可能不同，但核心是导入 YAML 文件，而不是把它当成在线订阅网址。

## 十三、生成 Shadowrocket 分享链接

Shadowrocket 可以直接导入单条 `vless://` 节点链接。

在服务器执行：

```bash
source ~/.config/littlebear-vpn/client.env

printf '%s\n' \
  "vless://${UUID}@${SERVER_IP}:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=${SERVER_NAME}&fp=chrome&pbk=${PUBLIC_KEY}&sid=${SHORT_ID}&type=tcp&headerType=none#littlebear-vpn" \
  > ~/littlebear-vpn-uri.txt

chmod 600 ~/littlebear-vpn-uri.txt
```

下载到 Mac：

```bash
scp littlebear-vpn:~/littlebear-vpn-uri.txt \
  ~/.config/littlebear-vpn/littlebear-vpn-uri.txt

chmod 600 ~/.config/littlebear-vpn/littlebear-vpn-uri.txt
```

Windows CMD 下载到同一个配置目录：

```batch
mkdir "%USERPROFILE%\.config\littlebear-vpn"
scp ubuntu@YOUR_SERVER_IP:~/littlebear-vpn-uri.txt "%USERPROFILE%\.config\littlebear-vpn\littlebear-vpn-uri.txt"
```

导入步骤：

1. 在 Mac 打开 `littlebear-vpn-uri.txt`；
2. 复制从 `vless://` 开始的完整一行；
3. 通过 Apple 通用剪贴板或隔空投送传到 iPhone；
4. 打开 Shadowrocket；
5. 接受“检测到剪贴板节点”，或点击 `+` 后选择从剪贴板导入；
6. 选择 `littlebear-vpn` 并连接；
7. 第一次连接时允许 iOS 添加 VPN 配置。

Windows 用户可以用记事本打开 `littlebear-vpn-uri.txt`，复制完整链接，再通过可信的私人方式传到 iPhone；不要发送到公开群聊或公开网盘。

也可以手动选择 VLESS 类型填写参数，但除了 IP 和端口，还必须填写 UUID、Flow、REALITY、SNI、公钥、Short ID 和客户端指纹。直接导入链接更不容易填错。

### 注意：SSH 密码不是节点密码

不要把服务器的 `ubuntu` 用户、SSH 密码或 `.pem` 私钥填进 Shadowrocket。它们只用于管理服务器，和 VLESS 客户端认证是两套完全不同的凭据。

## 十四、本地文件、节点链接和订阅链接的区别

| 类型 | 示例 | 用途 |
| --- | --- | --- |
| Clash 配置文件 | `littlebear-vpn.yaml` | Clash/Mihomo 本地导入 |
| 单节点链接 | `vless://...` | Shadowrocket 等客户端导入一个节点 |
| 在线订阅 | `https://example.com/sub/token` | 客户端定期在线更新一个或多个节点 |

`vless://...` 不是 HTTP 订阅地址。把它粘贴到 Clash Verge Rev 的“订阅 URL”输入框时，通常会显示“无效的订阅链接”。此时应导入 YAML 文件。

如果需要一个 URL 同时服务 Clash 和 Shadowrocket，需要另外部署带 HTTPS、随机访问令牌和客户端格式识别的订阅服务。只有一个私人节点时，安全传输本地配置更简单，也减少了订阅端点泄露和维护风险。

## 十五、验证节点是否真正工作

### 客户端验证

启用节点后，用浏览器访问 IP 查询服务，例如：

- [https://api.ipify.org](https://api.ipify.org)
- [https://ipinfo.io](https://ipinfo.io)

显示的出口 IP 应为云服务器公网 IP，而不是当前家庭或手机网络的出口 IP。

### 服务端验证

连接客户端后，在服务器观察日志：

```bash
sudo journalctl -u xray -f
```

当前配置的日志级别是 `warning`，连接成功时没有新输出也可能是正常的；错误和警告才会显示。按 `Ctrl + C` 退出日志跟踪。不要为了排查问题把包含客户端地址或凭据的完整日志公开发布。

## 十六、常见故障排查

### 1. 443 端口无法连接

按顺序检查：

```bash
# 服务是否运行
sudo systemctl is-active xray

# 服务器是否监听 TCP 443
sudo ss -lntp | grep ':443 '

# Ubuntu 防火墙
sudo ufw status

# 从 Mac 测试公网连接
nc -vz -w 5 YOUR_SERVER_IP 443
```

Windows CMD 使用：

```batch
curl.exe -vkI --connect-timeout 5 --max-time 10 https://YOUR_SERVER_IP/
```

如果服务器在监听、本地电脑却无法连接，优先检查腾讯云防火墙是否放行“全部 IPv4”的 TCP 443。

### 2. Xray 启动失败或退出码 23

```bash
sudo /usr/local/bin/xray run \
  -test \
  -config /usr/local/etc/xray/config.json

sudo journalctl -u xray -n 100 --no-pager
```

常见原因：

- JSON 少逗号、多逗号或引号不匹配；
- UUID、私钥或 Short ID 为空；
- 临时配置文件没有 `.json` 后缀，新版 Xray 无法判断格式；
- 443 已被 Nginx、Apache、Caddy 或其他服务占用；
- `network`、`target` 等字段来自过时教程，与当前版本不兼容。

### 3. TCP 可达，但客户端连接失败

对照服务端与客户端，以下值必须完全一致：

```text
UUID
Flow = xtls-rprx-vision
SNI / serverName = www.apple.com
REALITY 公钥与服务器私钥必须是同一密钥对
Short ID
端口 = 443
```

同时检查服务器时间是否同步：

```bash
timedatectl show -p NTPSynchronized -p Timezone
```

### 4. Clash 显示“无效的订阅链接”

原因通常是把 `vless://...` 填进了订阅 URL 输入框。解决方法：

- Clash Verge Rev：导入 `littlebear-vpn.yaml`；
- Shadowrocket：从剪贴板导入 `vless://...`；
- 真正的在线订阅必须是自己控制的 `https://...` 地址。

### 5. 配置可用，但部分网络很慢

- 检查腾讯云实例的带宽和月流量；
- 测试不同网络，例如 Wi-Fi 与手机流量；
- 检查服务器 CPU、内存和负载；
- 确认客户端没有同时开启其他 VPN；
- 不要在没有依据时盲目修改 MTU、Mux 或指纹参数。

## 十七、日常维护

### 查看状态

```bash
ssh littlebear-vpn 'sudo systemctl status xray --no-pager'
```

### 重启服务

```bash
ssh littlebear-vpn 'sudo systemctl restart xray'
```

### 查看最近日志

```bash
ssh littlebear-vpn \
  'sudo journalctl -u xray -n 100 --no-pager'
```

### 查看版本

```bash
ssh littlebear-vpn '/usr/local/bin/xray version'
```

### 更新 Xray

更新前先备份配置：

```bash
ssh littlebear-vpn \
  'sudo cp -a /usr/local/etc/xray/config.json /usr/local/etc/xray/config.json.pre-update'
```

然后重新运行官方安装脚本。更新后先校验配置，再检查服务和客户端连接。不要直接复制来源不明的一键脚本。

## 十八、凭据泄露后如何处理

如果 `littlebear-vpn.yaml` 或 `vless://` 链接被他人拿到，应立即轮换：

1. 重新生成 UUID；
2. 重新生成 X25519 密钥对；
3. 重新生成 Short ID；
4. 更新服务端 `config.json`；
5. 校验并重启 Xray；
6. 重新生成所有客户端文件；
7. 删除旧客户端配置和旧分享链接。

只修改其中一个参数也能让旧配置失效，但同时轮换整套凭据更容易确认没有遗漏。

## 十九、安全加固清单

- SSH 优先使用密钥登录，不公开私钥；
- 服务器不要使用 `root` 直接登录；
- 确认密钥登录正常后，再考虑关闭 SSH 密码登录；
- 修改 SSH 配置时保留一个已登录窗口，并用第二个窗口验证，避免锁死；
- 腾讯云防火墙只开放实际需要的端口；
- SSH 22 端口尽可能限制来源 IP；
- Mac/Linux 上的客户端 YAML、URI 和 `client.env` 使用 `600` 权限，Windows 文件保存在自己的用户目录；
- 服务端配置包含 REALITY 私钥，限制为 `root:nogroup 640`；
- 不安装来源不明的 Web 面板或订阅转换器；
- 定期更新 Ubuntu 安全补丁和 Xray；
- 定期检查云服务器流量，异常增长时立即停服并轮换凭据。

Ubuntu 安全更新：

```bash
sudo apt update
sudo apt upgrade
```

执行大版本升级前，应先创建云服务器快照。

## 二十、备份与卸载

### 需要备份的内容

```text
服务器：/usr/local/etc/xray/config.json
服务器：~/.config/littlebear-vpn/client.env
服务器：~/littlebear-vpn.yaml
服务器：~/littlebear-vpn-uri.txt
Mac：~/.config/littlebear-vpn/ 下的客户端文件
Windows：%USERPROFILE%\.config\littlebear-vpn\ 下的客户端文件
Mac：~/.ssh/config 和 SSH 私钥（单独加密备份）
```

不要把这些文件提交到公开 Git 仓库。

### 停止服务

```bash
sudo systemctl disable --now xray
```

### 使用官方脚本卸载程序

先下载脚本并阅读帮助：

```bash
curl -fsSL \
  https://github.com/XTLS/Xray-install/raw/main/install-release.sh \
  -o /tmp/install-xray.sh

sudo bash /tmp/install-xray.sh help
```

做好备份后执行卸载：

```bash
sudo bash /tmp/install-xray.sh remove
rm -f /tmp/install-xray.sh
```

默认卸载通常保留配置和日志。确认不再需要后，才考虑使用官方脚本的 `remove --purge`。

## 总结

完整流程可以压缩为：

```text
购买 Ubuntu 云服务器
  → 配置腾讯云 TCP 22/443 防火墙
  → 配置 SSH 登录
  → 检查系统、时间和端口
  → 安装官方 Xray
  → 检测 REALITY target
  → 生成 UUID、X25519 密钥和 Short ID
  → 写入并校验服务端 config.json
  → 启动 systemd 服务
  → 生成 Clash YAML 和 VLESS URI
  → 导入 Clash / Shadowrocket
  → 验证出口 IP
  → 定期更新、备份和轮换凭据
```

最容易混淆的三件事：

1. SSH 账号和 VLESS 节点凭据不是一回事；
2. `vless://` 是单节点链接，不是 Clash 的 HTTP 订阅地址；
3. REALITY 私钥只放在服务器，客户端使用对应公钥。

## 官方参考资料

- [XTLS/Xray-core](https://github.com/XTLS/Xray-core)
- [XTLS/Xray-install](https://github.com/XTLS/Xray-install)
- [Xray REALITY 配置](https://xtls.github.io/config/transports/reality.html)
- [Xray VLESS 入站配置](https://xtls.github.io/config/inbounds/vless.html)
- [Mihomo VLESS 配置](https://wiki.metacubex.one/config/proxies/vless/)
- [Mihomo TLS/REALITY 配置](https://wiki.metacubex.one/config/proxies/tls/)
