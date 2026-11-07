[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [繁體中文](README.zh-TW.md)

# AiLinkAny — Switch your AI and the computer it runs on, without starting your work over.

**Wherever it runs, it can securely reach your local dev machine.**

AiLinkAny decouples your AI from your work computer. Change AI assistants (ChatGPT, Claude, Grok, Codex…) or change the device they run on — your existing work on your local dev machine stays where it is.

- Website: **https://ailinkany.com** · Get started free: **https://ailinkany.com/register**
- MCP endpoint: **`https://mcp.ailinkany.com/mcp`**
- Sign-in: **OAuth 2.1** (no API key)

> The AiLinkAny client is closed source. This repository hosts public documentation only.

## Three ways to connect

| Mode | Where the AI runs | Example |
|---|---|---|
| **Web** | In the cloud | ChatGPT web, Claude web |
| **Desktop** | An AI client on any computer | Claude Desktop, Cursor, VS Code |
| **CLI** | A remote server | Codex / Gemini CLI over SSH |

In every mode the AI can read code, edit files, run tests and commit — on your own machine.

## Quick start (connect in 3 minutes)

1. Download the Windows client from [Releases](https://github.com/AiLinkAnyCom/ailinkany/releases) (single portable EXE, no installer), or via Scoop:
   ```
   scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket
   scoop install ailinkany
   ```
   (WinGet: coming soon.)
2. Run it, sign in, bind your PC and choose which folders the AI may access.
3. In your AI client, add a custom MCP connector with URL `https://mcp.ailinkany.com/mcp` and complete the OAuth login.

Details: [Getting started](docs/en/getting-started.md) · [Features](docs/en/features.md)

## Cline connection

See [the Cline installation guide](llms-install.md) and [example configuration](examples/cline-mcp.json). The endpoint uses individual OAuth authorization; no shared API key is required. Cline CLI OAuth was verified; Marketplace review is pending and this is not an approved Marketplace listing.

## Key features

- **Cloud relay, zero network setup** – no tunnel, port forwarding or public IP.
- **OAuth 2.1 login** – no API keys; AI OAuth tokens kept separate from device tokens.
- **Works with many AI clients** – ChatGPT, Claude, Grok, Codex, Cursor, Gemini CLI, VS Code.
- **100+ tools** – files and search, shell and long-running processes, system info, diagnostics.
- **Native Office/PDF handling** – no Microsoft Office required.
- **Safe Git workflow** – conflict prediction before merge, merge only when conflict-free, no force push.
- **Drive local coding agents** – dispatch work to local Codex, Claude Code or OpenCode.
- **MCP Gateway** – reach other local MCP servers through one endpoint.
- **Network engineering** – SSH, Telnet and serial connections with saved profiles.
- **Idle alerts** – email notification when the AI stops sending commands to your host.
- **GUI management** – desktop app for sign-in, device binding and authorized folders.
- **Audit log** and **portable single EXE** (Rust/Tauri).

## Platform support

Controlled machine: **Windows 10/11**. Linux is in development and not yet released.

## FAQ

**API key?** No — OAuth 2.1. **Open ports / tunnel?** No — cloud relay. **Whole disk access?** No — only folders you authorize; tool calls are logged. **Open source?** No — the client is proprietary; this repo is docs only.

## License

Documentation: CC BY 4.0. Software: proprietary, closed source. See [LICENSE-NOTICE.md](LICENSE-NOTICE.md).
