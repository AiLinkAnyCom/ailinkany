# Connect AiLinkAny to Cline

AiLinkAny is a hosted Remote MCP service for operating the user's authorized Windows computer. This repository contains public documentation, not the proprietary service or Windows client source code. Do not clone or build a local MCP server.

## Prerequisites

1. The user downloads the AiLinkAny Windows client from https://ailinkany.com/ and signs in, binds their own PC, and configures permitted folders.
2. Use an up-to-date Cline release with Streamable HTTP and browser OAuth support.
3. The user must authorize their own AiLinkAny account. No shared API key, device token, administrator credentials, or credentials in the URL are used.

## IDE extension

Open Cline's MCP Servers panel, then Remote Servers. Set:

- Name: `AiLinkAny`
- URL: `https://mcp.ailinkany.com/mcp`
- Transport: Streamable HTTP

Add the server and complete Cline's browser OAuth sign-in/authorization when requested. If configuration is edited manually, merge this entry into the existing `mcpServers` object; preserve other servers:

```json
{
  "mcpServers": {
    "AiLinkAny": {
      "type": "streamableHttp",
      "url": "https://mcp.ailinkany.com/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Do not add a static Authorization header. Let Cline manage the user's OAuth tokens. If an old release cannot complete OAuth, update Cline; do not disable authentication or use a shared account.

## CLI

With the official Cline CLI installed:

```sh
cline mcp add AiLinkAny https://mcp.ailinkany.com/mcp --transport http --yes
cline mcp
```

In the MCP wizard select the server and the OAuth authorization action. Complete browser authorization yourself. Installation of a configuration entry alone does not prove OAuth or tools are working.

## Verify without modifying the computer

1. Confirm that AiLinkAny tools appear.
2. Ask Cline to call AiLinkAny `list_devices`. Check only the user's own computers are listed. Do not publish device IDs or tool results containing personal details.
3. If needed, call `connection_diagnostics` to explain account, subscription and device state.
4. With multiple devices, use the user's explicit device name; ask when ambiguous. Never silently choose the last online device.

OAuth sign-in, tool discovery and device listing do not require an active execution subscription. Actual computer execution requires an eligible subscription. Explain subscription errors without treating them as OAuth failures.

## Execution boundaries

File writes, Shell commands and application operations can change the user's computer. Keep `autoApprove` empty and review tool calls. Use only user-authorized devices and paths. Reuse the original command ID for task status/result queries; do not resubmit a side-effect command because it is still running or its result is uncertain.

The controlled machine needs the AiLinkAny client. Remote MCP transport does not require Node.js, Python, tunnels or a local MCP server on that machine. Node.js is only a dependency if the user chooses the Cline CLI itself.

## References

- Product: https://ailinkany.com/
- Public documentation: https://github.com/AiLinkAnyCom/ailinkany
- Cline MCP configuration: https://docs.cline.bot/mcp/mcp-overview

This guide describes the intended setup procedure. Marketplace approval and installation test results are tracked separately; do not claim a successful test without observing it.
