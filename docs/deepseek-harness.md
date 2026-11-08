# AiLinkAny for DeepSeek Harness

A third-party connector for DeepSeek Harness, connecting its MCP client to the Windows PCs authorized under your own AiLinkAny account. This is not a DeepSeek-endorsed listing and does not add tools to the ordinary DeepSeek website or mobile app.

## Requirements / 使用前准备

- DeepSeek Harness **0.2.2-rc.1** technical preview and Node.js 22+. Other Harness versions have not been qualified for this release.
- An AiLinkAny account and a Windows client bound to that account. Use computers you own or are explicitly authorized to manage.
- An interactive browser on the machine running Harness to complete account-level OAuth and receive the local callback. Do not deploy this personal OAuth bridge as a shared public service.
- Device discovery and connection diagnostics do not require an execution plan. Actual computer operations require an eligible subscription; prices and terms are published at https://ailinkany.com/.

Harness is a separate application; ordinary AiLinkAny Remote MCP clients do not need Node.js or this connector.

## Install into your actual profile

The public installation command and immutable source revision are provided with the release. Select the profile that you actually use: installing into a CLI profile does not automatically install into another desktop/Web UI profile. This bundle adds an MCP connection; it does not install or configure a DeepSeek model API key.

First-time connection uses `mcp-remote` to open the account authorization flow. Allow up to 5 minutes for login and consent. If authorization times out, reload the plugin in the same profile and try again. Never paste OAuth or Device Tokens into the model conversation.

The endpoint is **https://mcp.ailinkany.com/mcp** for all users. Each user signs into their own account. The local bridge stores OAuth credentials on the user's computer; do not commit, upload, share, or synchronize that cache. Revoking the AiLinkAny connection and disabling this plugin stops future access. Removing the package alone does not erase previously saved bridge credentials.

## Example prompts / 使用示例

1. “列出我绑定的电脑，告诉我哪些在线。先不要执行其他操作。”
2. “检查 AiLinkAny 账户、套餐和设备连接状态，并解释当前不能执行的原因。”
3. After naming an online authorized device: “读取我家里电脑 Documents 文件夹中的项目说明，并做摘要。” Reading files requires execution permission; the file must exist and be within the user's authorized scope.

For one bound computer the endpoint can use the unique device automatically. With multiple computers, choose by the user's stated device name/remark; ambiguous names require a choice. Do not silently select the most recently online device. Task status must reuse the original command ID; never blindly resubmit an operation whose outcome is unknown.

## Custom plugin index / 自定义发现页

DeepSeek Harness currently ships **no built-in index sources**. Its experimental custom plugin-market bundle can load a third-party HTTPS JSON index. An AiLinkAny index is separate from approval or recommendation by DeepSeek. If an index is published, add its exact release URL under Plugins → Experimental → Custom plugin market → Discover → Add index source. Inspect repository, commit, directory and version in the installation confirmation.

## What this connector does

The plugin loads the official `@deepseek-ai/dsh-mcp-client`, launches pinned `mcp-remote` locally through the active Node executable, and connects to the hosted service using account OAuth. Harness registers names under `mcp__ailinkany__...`. The connector has bounded reconnect attempts and adds no telemetry, shared credentials, secondary hosted MCP server, or product-core source code.

The connector package is MIT-licensed; AiLinkAny Cloud and the Windows client remain proprietary. Upstream dependencies retain their respective licenses.

## Privacy and support

- [Privacy policy](https://ailinkany.com/privacy)
- [Service terms](https://ailinkany.com/terms)
- [Help](https://ailinkany.com/help)
- [Support](https://ailinkany.com/contact)

Requested file contents and tool results pass through AiLinkAny to the connected AI host; short-term retention and provider-copy limitations are explained in the policy. Harness and the local bridge also keep local application/authentication state under their own configuration. Do not place secrets in handoff text.

## Removal and troubleshooting

Disable/remove the bundle from its profile, or run `dsh plugin --profile <profile> remove dsh-plugin-ailinkany`. Revoke the account connection at https://ailinkany.com/ if access must end. To erase local OAuth credentials, follow `mcp-remote` cache-removal instructions for that machine and consider any other clients that use the same cache; do not delete shared cache folders blindly.

If tools are absent, check the profile, supported Harness version, Node executable, network access to the MCP endpoint, and whether OAuth completed. Restart/reload after authorization timeout. An expired execution plan should produce a subscription explanation while discovery and diagnostics remain connected. No DeepSeek API credit is needed for the bridge's protocol acceptance test; running an actual AI conversation requires a separately configured model.

## Official references

- [Harness packaging and installation](https://deepseek-harness.github.io/deepseek-harness/develop/basic/publish)
- [Harness custom plugin indexes](https://deepseek-harness.github.io/deepseek-harness/guide/plugin-market)

Publication of source files, successful OAuth/tool acceptance, and inclusion in an official directory are distinct outcomes. Release notes must state only the checks actually completed.
