[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [繁體中文](README.zh-TW.md)

# AiLinkAny — AI も、AI を動かすコンピューターも、作業をやり直さずに乗り換えられる。

**どこで動いていても、ローカルの開発マシンに安全にアクセス。**

AiLinkAny は AI と作業用コンピューターを切り離します。AI アシスタント（ChatGPT、Claude、Grok、Codex など）を変えても、AI を動かすデバイスを変えても、ローカル開発マシン上の作業はそのまま残ります。

- 公式サイト：**https://ailinkany.com** · 無料で始める：**https://ailinkany.com/register**
- MCP エンドポイント：**`https://mcp.ailinkany.com/mcp`**
- サインイン：**OAuth 2.1**（API キー不要）

> AiLinkAny クライアントはクローズドソースです。このリポジトリでは公開ドキュメントのみを提供しています。

## 3 つの接続方法

| 方法 | AI の実行場所 | 例 |
|---|---|---|
| **Web** | クラウド | ChatGPT（Web 版）、Claude（Web 版） |
| **デスクトップ** | 任意のコンピューター上の AI クライアント | Claude Desktop、Cursor、VS Code |
| **CLI** | リモートサーバー | SSH 経由の Codex / Gemini CLI |

どの方法でも、AI はあなた自身のマシン上でコードを読み、ファイルを編集し、テストを実行し、コミットまで行えます。

## クイックスタート（3 分で接続）

1. [Releases](https://github.com/AiLinkAnyCom/ailinkany/releases) から Windows クライアント（インストール不要の単一 EXE）をダウンロード、または Scoop でインストール：
   ```
   scoop bucket add ailinkany https://github.com/AiLinkAnyCom/scoop-bucket
   scoop install ailinkany
   ```
   （WinGet は近日対応予定。）
2. 起動してサインインし、PC を登録して AI にアクセスを許可するフォルダーを選びます。
3. AI クライアントでカスタム MCP コネクタを追加し、URL に `https://mcp.ailinkany.com/mcp` を入力して OAuth ログインを完了します。

詳細：[はじめに](docs/ja/getting-started.md) · [機能](docs/ja/features.md)

## 主な機能

- **クラウドリレーでネットワーク設定不要**：トンネル、ポート転送、グローバル IP は不要。
- **OAuth 2.1 ログイン**：API キー不要。AI の OAuth トークンとデバイストークンは分離。
- **多くの AI クライアントに対応**：ChatGPT、Claude、Grok、Codex、Cursor、Gemini CLI、VS Code。
- **100 以上のツール**：ファイルと検索、シェルと長時間実行プロセス、システム情報、接続診断。
- **Office/PDF のネイティブ処理**：Microsoft Office 不要。
- **安全な Git ワークフロー**：マージ前に競合を予測し、競合がない場合のみマージ。強制プッシュは禁止。
- **ローカルのコーディングエージェントを操作**：ローカルの Codex、Claude Code、OpenCode に作業を任せられます。
- **MCP ゲートウェイ**：1 つのエンドポイントからローカルの他の MCP サーバーへアクセス。
- **ネットワークエンジニアリング**：SSH、Telnet、シリアル接続。接続プロファイルを保存可能。
- **アイドル通知**：AI からホストへのコマンドが止まるとメールで通知。
- **GUI で管理**：サインイン、デバイス登録、許可フォルダーをデスクトップアプリで設定。
- **監査ログ**、**ポータブルな単一 EXE**（Rust/Tauri）。

## 対応プラットフォーム

操作対象マシン：**Windows 10/11**。Linux 版は開発中で、まだリリースされていません。

## FAQ

**API キーは必要？** いいえ、OAuth 2.1 を使います。**ポート開放やトンネルは？** 不要です。クラウドリレー経由です。**ディスク全体にアクセスされる？** いいえ、許可したフォルダーのみで、ツール呼び出しは記録されます。**オープンソース？** いいえ、クライアントはプロプライエタリで、このリポジトリはドキュメントのみです。

## ライセンス

ドキュメント：CC BY 4.0。ソフトウェア：プロプライエタリ（クローズドソース）。詳しくは [LICENSE-NOTICE.md](LICENSE-NOTICE.md) を参照。
