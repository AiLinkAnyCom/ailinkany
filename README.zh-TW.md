[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [繁體中文](README.zh-TW.md)

# AiLinkAny — 更換 AI 及其執行的電腦，工作不必重來。

**無論在哪裡執行，都能安全存取你的本機開發機。**

AiLinkAny 讓 AI 與工作電腦脫鉤：換一個 AI（ChatGPT、Claude、Grok、Codex……），或換一台執行 AI 的裝置，本機開發機上既有的工作都不受影響。

- 官網：**https://ailinkany.com** · 免費開始：**https://ailinkany.com/register**
- MCP 網址：**`https://mcp.ailinkany.com/mcp`**
- 登入方式：**OAuth 2.1**（不需要 API 金鑰）

> AiLinkAny 用戶端為閉源軟體，本儲存庫僅提供公開文件。

## 三種連線方式

| 方式 | AI 在哪裡執行 | 範例 |
|---|---|---|
| **網頁版** | 雲端 | ChatGPT 網頁版、Claude 網頁版 |
| **桌面版** | 任何一台電腦上的 AI 用戶端 | Claude Desktop、Cursor、VS Code |
| **命令列** | 遠端伺服器 | 透過 SSH 使用 Codex / Gemini CLI |

無論哪種方式，AI 都能在你自己的電腦上讀程式碼、改檔案、跑測試、提交程式碼。

## 快速開始（3 分鐘完成連線）

1. 從 [Releases](https://github.com/AiLinkAnyCom/ailinkany/releases) 下載 Windows 用戶端（單一免安裝 EXE），或用 Scoop 安裝：
   ```
   scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket
   scoop install ailinkany
   ```
   （WinGet 即將推出。）
2. 執行並登入，綁定電腦，選擇允許 AI 存取的資料夾。
3. 在 AI 用戶端新增自訂 MCP 連接器，網址填 `https://mcp.ailinkany.com/mcp`，完成 OAuth 登入。

詳見：[快速上手](docs/zh-TW/getting-started.md) · [功能介紹](docs/zh-TW/features.md)

## 主要功能

- **雲端中繼，零網路設定**：不需要通道、連接埠轉送或公用 IP。
- **OAuth 2.1 登入**：不需要 API 金鑰；AI 的 OAuth 權杖與裝置權杖彼此隔離。
- **支援多種 AI 用戶端**：ChatGPT、Claude、Grok、Codex、Cursor、Gemini CLI、VS Code。
- **100+ 項工具**：檔案與搜尋、命令列與長時間執行的程序、系統資訊、連線診斷。
- **原生 Office/PDF 處理**：不需安裝 Microsoft Office。
- **安全的 Git 流程**：合併前預測衝突，無衝突才合併，禁止強制推送。
- **調度本機程式設計代理**：把任務交給本機的 Codex、Claude Code 或 OpenCode。
- **MCP 閘道**：透過同一個網址存取本機其他 MCP 伺服器。
- **網路工程**：SSH、Telnet、序列埠連線，可儲存連線設定檔。
- **閒置提醒**：AI 停止向主機傳送指令時寄送電子郵件通知。
- **圖形介面管理**：在桌面應用程式中完成登入、裝置綁定與授權資料夾設定。
- **稽核紀錄**，**單一檔案免安裝 EXE**（Rust/Tauri）。

## 平台支援

受控電腦：**Windows 10/11**。Linux 版開發中，尚未推出。

## 常見問題

**需要 API 金鑰嗎？** 不需要，使用 OAuth 2.1。**需要開連接埠或架通道嗎？** 不需要，走雲端中繼。**AI 能存取整顆硬碟嗎？** 不能，只能存取你授權的資料夾，工具呼叫都有紀錄。**開源嗎？** 用戶端閉源，本儲存庫只有文件。

## 授權

文件：CC BY 4.0。軟體：專有軟體，閉源。詳見 [LICENSE-NOTICE.md](LICENSE-NOTICE.md)。
