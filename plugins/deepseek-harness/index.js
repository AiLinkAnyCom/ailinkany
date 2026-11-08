import { createRequire } from 'node:module';
import * as mcpClient from '@deepseek-ai/dsh-mcp-client';

export const name = 'ailinkany';
export const inject = ['tools'];

// This connector runs in the user's own Harness host. No shared credentials,
// custom token store, secondary server, or changes to AiLinkAny are required.
export function apply(ctx) {
  const require = createRequire(import.meta.url);
  return ctx.plugin(mcpClient, {
    transport: 'stdio',
    serverName: 'ailinkany',
    command: process.execPath,
    args: [require.resolve('mcp-remote/dist/proxy.js'), 'https://mcp.ailinkany.com/mcp', '--auth-timeout', '300'],
    env: {},
    cwd: '',
    toolCallTimeoutMs: 600000,
    failOnStartupError: false,
    reconnect: { enabled: true, initialDelayMs: 1000, maxDelayMs: 30000, maxAttempts: 3 }
  });
}
