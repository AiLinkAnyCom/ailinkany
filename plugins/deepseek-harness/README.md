# AiLinkAny for DeepSeek Harness

将 DeepSeek Harness 连接到用户本人授权管理的 Windows 电脑。通过本地 `mcp-remote` 桥接，首次连接在浏览器中完成账户级 OAuth；无需在插件配置中填写 Token。

这是第三方接入插件，不属于 DeepSeek 官方插件。适用于 Harness 桌面/本地运行环境，不适用于普通 DeepSeek 网页或手机 App，也不适用于没有交互式浏览器的共享云端部署。

## 安装

需要 Node.js 22+ 与 DeepSeek Harness 0.2.2-rc.1（预览版，其他版本尚未验证）。安装命令见仓库的 [接入指南](https://github.com/AiLinkAnyCom/ailinkany/blob/main/docs/deepseek-harness.md)。桌面版与 CLI 的 profile 不同，安装时应选择实际使用的 profile。

安装后启用插件，在浏览器中登录自己的 AiLinkAny 账户，核对并确认授权。首次授权最多等待 5 分钟，超时可重新启用插件。每位用户必须独立授权；不要共享桥接工具保存在本机的 OAuth 缓存。首次授权未完成时工具暂不可用，完成后可重新启用插件。

## 使用

1. 在 https://ailinkany.com/ 注册、下载 Windows 客户端并绑定自己的电脑。
2. 安装并启用此插件，完成 OAuth。
3. 先让 AI 列出设备并检查连接，再按需操作。单设备可自动使用；多设备须按用户指定的名称明确选择，存在歧义时询问用户。

设备列表、诊断、账户连接与电脑执行分层处理。实际电脑执行需要有效套餐，当前价格以官网为准。不要在对话中粘贴密码、Device Token、OAuth Token 或其他凭据。不得将未知执行结果的副作用任务盲目重发。

正式 MCP：https://mcp.ailinkany.com/mcp

本目录 MIT 许可证只涵盖本接入插件，不授权使用或公开 AiLinkAny 专有服务端及 Windows 客户端核心源码。`mcp-remote` 与 DeepSeek Harness 分别遵循其自身许可证。

## 移除

使用 Harness 的插件管理界面禁用/移除本插件，或在对应 profile 中执行 `dsh plugin --profile <profile> remove dsh-plugin-ailinkany`。在 AiLinkAny 账户中撤销授权可使既有连接失效。
