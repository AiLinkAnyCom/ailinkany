# AiLinkAny for Gemini CLI

## Install

1. Download the AiLinkAny Windows client from <https://ailinkany.com/>, sign in, bind your own PC and configure allowed folders.
2. With Gemini CLI installed, run:

```sh
gemini extensions install https://github.com/AiLinkAnyCom/ailinkany
```

3. Review the extension's connection and context before approving installation. It points to `https://mcp.ailinkany.com/mcp` using Streamable HTTP (`httpUrl`). No local MCP process, shared API key or tunnel is added.
4. Start Gemini CLI. When account authorization is needed, use `/mcp auth ailinkany` and complete the browser flow with your own AiLinkAny account. This is separate from signing into Google/Gemini for model access. Keep both accounts' credentials private.
5. Inspect `/mcp` status, confirm tools appear, and call `list_devices` read-only. Use explicit device selection when multiple computers are bound.

Actual computer execution requires an eligible AiLinkAny subscription. OAuth and device discovery remain available independently of the execution subscription. Keep tool approval enabled for operations that can modify files, launch processes or control applications.

## Updates and removal

```sh
gemini extensions update ailinkany
gemini extensions uninstall ailinkany
```

Removing the extension does not delete files from the controlled PC. To revoke account access, use the account authorization controls provided by AiLinkAny and your host.

## Publication and testing

The extension is distributed through this public GitHub repository. Gallery discovery requires the `gemini-cli-extension` topic and a root `gemini-extension.json`; the gallery crawler decides whether and when to list it. Do not assume that publishing the repository means gallery indexing is complete.

Extension validation/installation checks are separate from model login, AiLinkAny OAuth and actual tool-call acceptance. Only claim the checks that were observed; prior Cline tests do not establish Gemini CLI compatibility.

The Windows client and hosted backend remain proprietary. Repository documentation retains its existing license; no private source code or credentials are included in this extension.

Official references: <https://geminicli.com/docs/extensions/releasing/> and <https://geminicli.com/docs/tools/mcp-server/>.
