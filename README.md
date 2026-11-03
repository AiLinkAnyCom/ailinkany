# AiLinkAny — Let ChatGPT, Claude, Grok and Codex control your Windows PC via MCP

**AiLinkAny** is a Windows desktop client that lets AI assistants — ChatGPT, Claude, Grok, Codex and other MCP-capable clients — securely operate **your own PC** through a cloud relay. No API key, no tunnel, no public IP, no Node.js install.

- Website & download: **https://ailinkany.com**
- MCP endpoint: **`https://ailinkany.com/mcp`**
- Sign-in: **OAuth 2.1** (no API key)

> The AiLinkAny client is closed source. This repository hosts public documentation only.

## Key features

- **Cloud relay, zero network setup** – no Cloudflare Tunnel, ngrok, port forwarding or public IP needed.
- **OAuth 2.1 login** – connect from ChatGPT web and other clients without pasting API keys; AI OAuth tokens are kept separate from device tokens.
- **Works with many AI clients** – ChatGPT, Claude, Grok, Codex, Cursor, Gemini CLI, VS Code.
- **100+ tools** – files and search, shell and long-running processes, system info, ports and connection diagnostics.
- **Native Office/PDF handling** – read documents, create PDFs, edit PDF pages and Excel ranges locally, without Microsoft Office.
- **Safe Git workflow** – status/diff/log, conflict prediction before merge, merge only when conflict-free, no force push, worktree helpers.
- **Drive local coding agents** – let a web AI dispatch work to local Codex, Claude Code or OpenCode.
- **MCP Gateway** – reach other MCP servers running on your PC through one endpoint.
- **Network engineering** – SSH, Telnet and serial connections with saved connection profiles.
- **Idle alerts** – email notification when the AI stops sending commands to your host.
- **GUI management** – Tauri desktop app for sign-in, device binding and authorized folders.
- **Audit log** – review recent tool calls.
- **Portable single EXE** – lightweight Rust/Tauri client.

## Quick start

1. Download the Windows client from https://ailinkany.com and sign in.
2. Bind your PC and choose which folders the AI may access.
3. In your AI client, add a custom MCP connector with URL `https://ailinkany.com/mcp` and complete the OAuth login.

See [docs/getting-started.md](docs/getting-started.md) for per-client steps and [docs/features.md](docs/features.md) for details.

## Platform support

Controlled PC: **Windows** (Windows 10/11). Linux support is in development and not yet released.

## Alternatives / comparison

Other projects in this space include [Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) (open source, MIT, multi-platform, distributed via npm). AiLinkAny focuses on Windows users who want a GUI client, OAuth sign-in with a hosted relay, and no Node.js dependency. Choose what fits your workflow.

## FAQ

**Do I need an API key?** No. Clients authenticate with OAuth 2.1.

**Do I need to open ports or set up a tunnel?** No. Traffic goes through the AiLinkAny cloud relay.

**Which AI clients work?** Any MCP client that supports remote servers with OAuth, including ChatGPT, Claude, Grok, Codex, Cursor, Gemini CLI and VS Code.

**Can the AI access my whole disk?** You choose authorized folders in the client, and tool calls are logged.

**Is it open source?** No. The client is proprietary; this repo contains documentation only.

**macOS / Linux?** Not currently. Linux is in development.

## License

Documentation: CC BY 4.0. Software: proprietary, all rights reserved — the client is closed source. See [LICENSE-NOTICE.md](LICENSE-NOTICE.md).
