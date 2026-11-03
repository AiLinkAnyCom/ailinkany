[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [繁體中文](README.zh-TW.md)

# AiLinkAny — 更换 AI 及其运行的电脑，工作不用重来。

**无论在哪运行，都能安全访问你的本地开发机。**

AiLinkAny 让 AI 与工作电脑解耦：换一个 AI（ChatGPT、Claude、Grok、Codex……），或换一台运行 AI 的设备，本地开发机上已有的工作都不受影响。

- 官网：**https://ailinkany.com** · 免费开始：**https://ailinkany.com/register**
- MCP 地址：**`https://mcp.ailinkany.com/mcp`**
- 登录方式：**OAuth 2.1**（无需 API Key）

> AiLinkAny 客户端为闭源软件，本仓库仅提供公开文档。

## 三种接入方式

| 方式 | AI 运行在哪里 | 示例 |
|---|---|---|
| **网页版** | 云端 | ChatGPT 网页版、Claude 网页版 |
| **桌面版** | 任意一台电脑上的 AI 客户端 | Claude Desktop、Cursor、VS Code |
| **命令行** | 远程服务器 | 通过 SSH 使用 Codex / Gemini CLI |

无论哪种方式，AI 都能在你自己的电脑上读代码、改文件、跑测试、提交代码。

## 快速开始（3 分钟完成连接）

1. 从 [Releases](https://github.com/AiLinkAnyCom/ailinkany/releases) 下载 Windows 客户端（单个免安装 EXE），或用 Scoop 安装：
   ```
   scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket
   scoop install ailinkany
   ```
   （WinGet 即将上线。）
2. 运行并登录，绑定电脑，选择允许 AI 访问的文件夹。
3. 在 AI 客户端中添加自定义 MCP 连接器，地址填 `https://mcp.ailinkany.com/mcp`，完成 OAuth 登录。

详见：[快速上手](docs/zh-CN/getting-started.md) · [功能介绍](docs/zh-CN/features.md)

## 主要功能

- **云端中转，零网络配置**：无需隧道、端口转发或公网 IP。
- **OAuth 2.1 登录**：无需 API Key；AI 的 OAuth 令牌与设备令牌相互隔离。
- **支持多种 AI 客户端**：ChatGPT、Claude、Grok、Codex、Cursor、Gemini CLI、VS Code。
- **100+ 工具**：文件与搜索、命令行与长时间运行的进程、系统信息、连接诊断。
- **原生 Office/PDF 处理**：无需安装 Microsoft Office。
- **安全的 Git 流程**：合并前预测冲突，无冲突才合并，禁止强制推送。
- **调度本地编程智能体**：把任务派给本地的 Codex、Claude Code 或 OpenCode。
- **MCP 网关**：通过同一个地址访问本机其他 MCP 服务。
- **网络工程**：SSH、Telnet、串口连接，可保存连接配置。
- **空闲提醒**：AI 停止向主机发送命令时发邮件通知。
- **图形界面管理**：桌面应用中完成登录、设备绑定和授权文件夹设置。
- **审计日志**，**单文件免安装 EXE**（Rust/Tauri）。

## 平台支持

被控电脑：**Windows 10/11**。Linux 版开发中，尚未发布。

## 常见问题

**需要 API Key 吗？** 不需要，使用 OAuth 2.1。**需要开端口或搭隧道吗？** 不需要，走云端中转。**AI 能访问整个硬盘吗？** 不能，只能访问你授权的文件夹，工具调用都有记录。**开源吗？** 客户端闭源，本仓库只有文档。

## 许可

文档：CC BY 4.0。软件：专有软件，闭源。详见 [LICENSE-NOTICE.md](LICENSE-NOTICE.md)。
