# AiLinkAny はじめに

AI も、AI を動かすコンピューターも、作業をやり直さずに乗り換えられる。3 分で接続できます。

## 1. クライアントのインストール（Windows）
1. https://github.com/AiLinkAnyCom/ailinkany/releases からインストール不要の単一 EXE をダウンロードします（または `scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket` の後に `scoop install ailinkany`。WinGet は近日対応予定）。
2. EXE を起動（Node.js 不要）してサインインします。
3. この PC を登録し、AI にアクセスを許可するフォルダーを設定します。

## 2. AI クライアントの接続
すべてのクライアントで同じリモート MCP URL を使います：

```
https://mcp.ailinkany.com/mcp
```

初回接続時に OAuth 2.1 のログイン画面が開くので、承認してください。API キーは不要です。

### ChatGPT（Web 版）
設定 → コネクタ（開発者モード／カスタムコネクタ）→ 上記 URL でコネクタを追加 → サインイン。

### Claude
設定 → コネクタ → カスタムコネクタを追加 → URL を貼り付け → サインイン。

### Grok
リモート MCP サーバー／コネクタを追加し、上記 URL を入力して OAuth を完了します。

### Codex、Cursor、VS Code、Gemini CLI
クライアントの MCP 設定でリモート（HTTP）MCP サーバーとして上記 URL を追加し、表示に従って OAuth を完了します。

メニュー名はバージョンによって異なります。「MCP」「コネクタ」「カスタムコネクタ」などを探してください。

## 3. 試してみる
AI に「許可したフォルダーのファイル一覧を見せて」や「システム情報を表示して」と頼んでみましょう。

## トラブルシューティング
- PC 上でクライアントが起動し、サインイン済みか確認してください。
- クライアントの接続診断を使ってください。
- ログインの有効期限が切れた場合は、コネクタを再認可してください。

詳しくは：https://ailinkany.com
