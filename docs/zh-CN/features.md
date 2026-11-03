# AiLinkAny 功能介绍

AiLinkAny 让 AI 与工作电脑解耦：无论 AI 运行在网页上、任意电脑的桌面客户端里，还是远程服务器的命令行中，都能安全访问你的本地开发机。

## 连接与安全
- 托管的云端中转：无需隧道、端口转发或公网 IP。
- OAuth 2.1 登录，无需 API Key；AI 的 OAuth 令牌与设备令牌相互隔离。
- 授权文件夹控制与工具调用审计日志。
- 命令幂等（命令 ID），网络重试不会让同一条命令执行两次。

## 文件、命令行与系统
- 文件读写与搜索、命令行、交互式与长时间运行的进程。
- 系统信息、端口列表、连接诊断。

## 文档
- 读取 Excel/PDF/DOCX；生成 PDF；编辑 PDF 页面和 Excel 区域，全部在本地完成，无需 Office。

## Git
- status / diff / log。
- 合并前预测冲突、无冲突才合并、禁止强制推送，并提供 worktree 和仓库整理辅助工具。

## 编程智能体
- 从网页版 AI 把任务派给本地的 Codex、Claude Code 或 OpenCode；支持 AI 会话交接与多会话协作。

## MCP 网关
- 通过 AiLinkAny 地址管理和访问本机其他 MCP 服务。

## 网络工程
- SSH（支持私钥）、Telnet 和串口连接，可保存连接配置。

## 监控
- AI 停止向主机发送命令时发送邮件提醒。

## 桌面客户端
- Rust/Tauri 图形界面，用于登录、设备绑定、授权文件夹、网络配置和 MCP 网关设置。单文件免安装 EXE。

## 平台
- Windows 10/11。Linux：开发中，尚未发布。

AiLinkAny 共提供 100+ 个 MCP 工具。详情：https://ailinkany.com
