# AiLinkAny 快速上手

更换 AI 及其运行的电脑，工作不用重来。3 分钟完成连接。

## 1. 安装客户端（Windows）
1. 从 https://github.com/AiLinkAnyCom/ailinkany/releases 下载单文件免安装 EXE（或执行 `scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket`，再执行 `scoop install ailinkany`；WinGet 即将上线）。
2. 运行 EXE（无需 Node.js）并登录。
3. 绑定这台电脑，设置允许 AI 访问的文件夹。

## 2. 连接 AI 客户端
所有客户端都使用同一个远程 MCP 地址：

```
https://mcp.ailinkany.com/mcp
```

首次连接会跳转到 OAuth 2.1 登录页，点同意即可，无需 API Key。

### ChatGPT（网页版）
设置 → 连接器（开发者模式 / 自定义连接器）→ 用上面的地址添加连接器 → 登录。

### Claude
设置 → 连接器 → 添加自定义连接器 → 粘贴地址 → 登录。

### Grok
添加远程 MCP 服务器 / 连接器，填入上面的地址，完成 OAuth 流程。

### Codex、Cursor、VS Code、Gemini CLI
在客户端的 MCP 配置里添加远程（HTTP）MCP 服务器，填入上面的地址；按提示完成 OAuth。

不同版本的菜单名称可能不同，找 “MCP”“连接器（Connectors）”或“自定义连接器”即可。

## 3. 试一试
对 AI 说：“列出我授权文件夹里的文件”或“显示我的系统信息”。

## 故障排查
- 确认电脑上的客户端正在运行并已登录。
- 使用客户端里的连接诊断。
- 登录过期时重新授权连接器。

更多信息：https://ailinkany.com
