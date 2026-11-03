# AiLinkAny 快速上手

更換 AI 及其執行的電腦，工作不必重來。3 分鐘完成連線。

## 1. 安裝用戶端（Windows）
1. 從 https://github.com/AiLinkAnyCom/ailinkany/releases 下載單一免安裝 EXE（或執行 `scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket`，再執行 `scoop install ailinkany`；WinGet 即將推出）。
2. 執行 EXE（不需要 Node.js）並登入。
3. 綁定這台電腦，設定允許 AI 存取的資料夾。

## 2. 連接 AI 用戶端
所有用戶端都使用同一個遠端 MCP 網址：

```
https://mcp.ailinkany.com/mcp
```

第一次連線會導向 OAuth 2.1 登入頁，按同意即可，不需要 API 金鑰。

### ChatGPT（網頁版）
設定 → 連接器（開發人員模式／自訂連接器）→ 以上方網址新增連接器 → 登入。

### Claude
設定 → 連接器 → 新增自訂連接器 → 貼上網址 → 登入。

### Grok
新增遠端 MCP 伺服器／連接器，填入上方網址，完成 OAuth 流程。

### Codex、Cursor、VS Code、Gemini CLI
在用戶端的 MCP 設定中新增遠端（HTTP）MCP 伺服器，填入上方網址；依提示完成 OAuth。

不同版本的選單名稱可能不同，找「MCP」、「連接器（Connectors）」或「自訂連接器」即可。

## 3. 試試看
對 AI 說：「列出我授權資料夾裡的檔案」或「顯示我的系統資訊」。

## 疑難排解
- 確認電腦上的用戶端正在執行且已登入。
- 使用用戶端內建的連線診斷。
- 登入過期時重新授權連接器。

更多資訊：https://ailinkany.com
