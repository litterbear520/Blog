# git

工作中基本git流程：

我们平时用 Git 做分支开发，基于feature-branch工作流，
先从main拉分支开发功能，然后push到远程。
提交后在GitHub上提交合并请求，让同事对代码进行评审，没问题就合并。
有冲突就自己解决再提交。
线上出现bug也会hotfix分支快速修复。

## 处理冲突

1.确认冲突的原因，冲突通常发生在：

- 同一文件的同一区域被不同人修改
- 一个人删除了文件，另一个人修改了该文件
- 重命名或移动文件时产生歧义

2.拉取最新代码并触发冲突

```bash
git checkout feature/add-elevator  # 切换到你的分支
git pull origin main  # 尝试合并 main 分支的更新
```

3.查看冲突文件

4.手动解决冲突,保留自己或他人的代码

5.修改完成后，将文件标记为已解决

```bash
git add file.txt  # 标记冲突已解决
```

6.提交合并结果

```base
git commit -m "Merge branch 'main' into feature/add-elevator"  # 提交合并
git push origin feature/add-elevator  # 推送到远程分支
```

```bash
git status  # 显示包含冲突的文件
```

## 本地操作

| 命令                   | 作用                       |
| -------------------- | ------------------------ |
| `git init`           | 在当前目录初始化 git 仓库          |
| `git clone <url>`    | 克隆远程仓库到本地                |
| `git status`         | 查看当前状态（改了啥、有没有文件 staged） |
| `git add <文件>`       | 把文件加入暂存区（stage）          |
| `git commit -m "注释"` | 提交到本地仓库                  |
| `git diff`           | 查看改了啥                    |
| `git log`            | 查看提交历史                   |

## 分支相关

| 命令                       | 作用         |
| ------------------------ | ---------- |
| `git branch`             | 查看所有分支     |
| `git branch <name>`      | 创建新分支      |
| `git checkout <name>`    | 切换分支       |
| `git checkout -b <name>` | 新建并切换到新分支  |
| `git merge <name>`       | 合并某分支到当前分支 |
| `git stash`              | 临时保存当前修改   |
| `git stash pop`          | 取回保存的修改    |

## 远程操作

| 命令                         | 作用       |
| -------------------------- | -------- |
| `git remote -v`            | 查看远程仓库地址 |
| `git pull`                 | 从远程拉取并合并 |
| `git fetch`                | 只拉取不合并   |
| `git push`                 | 推送到远程仓库  |
| `git push origin <branch>` | 推送某分支到远程 |

## 清理回退

| 命令                       | 作用           |
| ------------------------ | ------------ |
| `git checkout -- <文件>`   | 丢弃工作区改动      |
| `git reset HEAD <文件>`    | 取消暂存（回到未add） |
| `git reset --hard <提交号>` | 回退到某次提交      |
| `git clean -fd`          | 删除未跟踪文件/文件夹  |

## 小细节

| 小技巧                         | 说明                   |
| --------------------------- | -------------------- |
| `git log --oneline --graph` | 用图形查看提交树             |
| `git commit --amend`        | 修改上一次 commit 信息      |
| `git cherry-pick <提交号>`     | 把某次提交拿到当前分支          |
| `git reflog`                | 查看 HEAD 移动历史，找回丢失的提交 |
