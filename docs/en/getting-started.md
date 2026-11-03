# Getting started with AiLinkAny

Switch your AI and the computer it runs on — without starting your work over. Connect in 3 minutes.

## 1. Install the client (Windows)
1. Download the single portable EXE from https://github.com/AiLinkAnyCom/ailinkany/releases (or `scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket` then `scoop install ailinkany`; WinGet coming soon).
2. Run the EXE (no Node.js required) and sign in.
3. Bind this PC and set the folders the AI is allowed to access.

## 2. Connect your AI client
All clients use the same remote MCP URL:

```
https://mcp.ailinkany.com/mcp
```

On first connect you are redirected to an OAuth 2.1 login — approve it. No API key is needed.

### ChatGPT (web)
Settings → Connectors (developer mode / custom connector) → add a connector with the URL above → sign in.

### Claude
Settings → Connectors → Add custom connector → paste the URL → sign in.

### Grok
Add a remote MCP server / connector with the URL above and complete the OAuth flow.

### Codex, Cursor, VS Code, Gemini CLI
Add a remote (HTTP) MCP server with the URL above in the client's MCP configuration; complete OAuth when prompted.

Menu names vary by client version; look for "MCP", "Connectors" or "Custom connector".

## 3. Try it
Ask your AI: "List the files in my authorized folder" or "Show my system info".

## Troubleshooting
- Make sure the client is running and signed in on the PC.
- Use the connection diagnostics in the client.
- Re-authorize the connector if the login expired.

More: https://ailinkany.com
