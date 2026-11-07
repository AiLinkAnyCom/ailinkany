# AiLinkAny for Cursor

Connect Cursor to your own authorized Windows computer through hosted Remote MCP and individual account OAuth. This plugin contains public connection metadata only; the AiLinkAny Windows client and cloud service remain proprietary and are not included in this repository.

## Set up

1. Download the AiLinkAny Windows client from <https://ailinkany.com/>, sign in, bind your own computer, and configure authorized folders.
2. Add this repository as a Cursor plugin source using the plugin installation options supported by your Cursor version, and select `ailinkany`. The publisher application has been submitted and is awaiting review; do not assume it is listed in the public store.
3. Review the MCP connection to `https://mcp.ailinkany.com/mcp` and complete Cursor's browser OAuth flow with your own AiLinkAny account. No API key or shared Bearer token is used.
4. Check tools appear, then call `list_devices` read-only to discover your authorized computers. If multiple devices are bound, choose by explicit user-specified name; ask when ambiguous.

For manual connection without the plugin, merge the `mcpServers` entry from [mcp.json](mcp.json) into your Cursor MCP settings. Preserve existing servers. Cursor infers remote HTTP transport from `url`.

## Permissions and subscription

File changes, Shell commands, process and application operations can modify the target computer. Keep tool approval enabled, act only on the user's authorized devices/paths, and do not automatically approve all tools. Use `connection_diagnostics` for connectivity or subscription issues.

For long-running commands, reuse the original command ID to query task status/results; do not resubmit a side-effect command because its result is delayed or uncertain.

The plugin configuration can be downloaded without a charge. The hosted AiLinkAny service requires an eligible subscription for actual computer execution. Registration, OAuth and device discovery are available separately from execution entitlement. This commercial requirement is disclosed for Marketplace review; no exemption from Cursor publisher terms has been confirmed.

## Publication and license status

The plugin configuration is public, with no private implementation or credentials. Existing documentation remains under the repository's [license notice](../../LICENSE-NOTICE.md); no software-source license is granted for the proprietary product. The publisher application was submitted on 2026-11-07 with the subscription requirement disclosed. Marketplace licensing and paid-service eligibility remain subject to Cursor review. This directory is a review candidate, not a statement that Cursor has approved it.

## Validation status

Static structure checks only for this Cursor package. Prior Cline CLI OAuth and MCP SDK checks demonstrate a service baseline, not Cursor-specific installation, authorization or execution acceptance. Those checks must not be presented as a completed Cursor test.

Official references: <https://cursor.com/docs/reference/plugins> and <https://cursor.com/marketplace-publisher-terms>.
