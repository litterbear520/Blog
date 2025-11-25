# 常用命令

## Claude Code

### 回退版本

```bash
npm install -g @anthropic-ai/claude-code@2.0.30
```

### 设置暂停更新

```bash
set DISABLE_AUTOUPDATER=1
```

### 错误码400

```bash
set CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1
```

### 常用MCP

提供最新文档[Github官方链接](https://github.com/upstash/context7)

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

浏览器可视化[Github官方链接](https://github.com/ChromeDevTools/chrome-devtools-mcp)

```bash
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

## ROS2

### 激活配置

```bash
source /opt/ros_jazzy/install/setup.bash && source /home/cst/robot/install/local_setup.bash
```

### 启动Agent节点

```bash
ros2 run agent agent_main  -r __ns:=/huoxingmeinv_5a_dd_e4_33_ae_24
```

### 启动数据库节点

```bash
ros2 run cst_database_node cst_database -r __ns:=/huoxingmeinv_5a_dd_e4_33_ae_24
```

### 复制windows文件到linux目录下

```bash
scp -P 2212 "[这里输入windows文件路径]" teamhd@10.1.1.158:[linux目录]
```

比如:

```bash
scp -P 2212 "C:/Users/Administrator/Desktop/10.1.1.158/dataset/rag.txt" teamhd@10.1.1.158:/tmp/
```

### 复制windows目录到linux目录

```bash
scp -r -P 2212 "[这里输入windows文件路径]" teamhd@10.1.1.158:[linux目录]
```

### 编译

注意编译目录包含package.xml才是ROS2包

```bash
cd /home/cst/robot
colcon build --packages-select [包含xml的包] --symlink-install
```

### 清理旧的编译文件

```bash
cd /home/cst/robot
rm -rf build/[包含xml的包] install/[包含xml的包]
```

## Linux

### 创建数据库权限不足

```bash
sudo chown -R teamhd:teamhd /home/cst/database
```