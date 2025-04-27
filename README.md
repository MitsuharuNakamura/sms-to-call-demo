# Twilio SMS to Voice Call Demo

このプロジェクトは、TwilioのSMSとVoice APIを使い、エンドユーザーに重要なメッセージを送信し、もしリンクにアクセスしていない場合に自動で音声コールを発信する**動的デモWebアプリケーション**です。

進捗バー、ステップバッジ、完了時の花火アニメーションを備え、デモとして視覚的にも印象的に作られています。

---

## ✨ 機能一覧

- 電話番号を入力
- SMS本文・オートコール本文をブラウザ上で自由に入力
- SMSをリアルにTwilioで送信
- SMS送信成功後も、画面では「失敗」と見せる演出
- オートコールをリアルに発信（音声読み上げ）
- 進捗バーで送信ステップを視覚表示
- 完了時には画面いっぱいに花火（Confetti）演出

---

## 🚀 GitHubへの公開手順

### 1. GitHubでリポジトリを作成
- リポジトリ名を設定し（例: `twilio-sms-call-demo`）、**Public**に設定して作成します。

### 2. ローカルでプロジェクトを準備

```
twilio-sms-call-demo/
├── assets/
│   └── index.html
├── functions/
│   ├── send_sms.js
│   └── make_call.js
├── README.md
```

### 3. Git初期化＆リモート接続

```bash
cd path/to/twilio-sms-call-demo
git init
git add .
git commit -m "Initial commit: Twilio SMS & Call Demo"
git remote add origin https://github.com/あなたのアカウント名/twilio-sms-call-demo.git
git push -u origin main
```

---

## 🚀 Twilio CLIを使った環境構築・デプロイ手順

このプロジェクトは、Twilio CLIを使ってFunctions & Assetsへデプロイできます。

### 1. Twilio CLIのインストール

- https://www.twilio.com/docs/twilio-cli/quickstart

macOS例：
```bash
brew install twilio
```

Windows例：
```bash
npm install -g twilio-cli
```

### 2. Twilio CLIのセットアップ

```bash
twilio login
```

### 3. Twilio Serverlessプラグインをインストール

```bash
twilio plugins:install @twilio-labs/plugin-serverless
```

### 4. プロジェクト用ファイルを準備

```
twilio-sms-call-demo/
├── assets/
│   └── index.html
├── functions/
│   ├── send_sms.js
│   └── make_call.js
├── .env
├── README.md
twilio-run.json
```

### 5. `.env` ファイルを作成

```
TWILIO_ACCOUNT_SID=（あなたのAccount SID）
TWILIO_AUTH_TOKEN=（あなたのAuth Token）
CALLER_ID=（購入済みTwilio電話番号）
TWILIO_PHONE_NUMBER=（任意：日本向けSMS用）
```

### 6. `twilio-run.json` ファイルを作成

```json
{
  "serviceName": "sms-to-call-demo",
  "functionsFolder": "functions",
  "assetsFolder": "assets",
  "runtime": "node18",
  "env": ".env",
  "region": "jp1"
}
```

### 7. Functions & Assetsをデプロイ

```bash
twilio serverless:deploy
```

✅ デプロイ成功すると、FunctionsとAssetsのURLが発行されます。

---

## 📌 注意事項

- `.env`ファイルは**絶対にGitHubへプッシュしない**でください。
- 日本向けSMSではSenderID（例: "TWILIODEMO"）は使えず、購入済み番号を使用する必要があります。
- FunctionsやAssetsの修正後は毎回`twilio serverless:deploy`が必要です。

---

## 📚 参考情報

- [Twilio SMS API ドキュメント](https://www.twilio.com/docs/sms/send-messages)
- [Twilio Voice API ドキュメント](https://www.twilio.com/docs/voice/make-calls)
- [Twilio Functions ドキュメント](https://www.twilio.com/docs/runtime/functions)

---

## ✨ Future Enhancements

- Excel/CSVを読み込んで複数人に一括送信
- 送信・通話の履歴管理機能
- 通話録音機能追加
- 完了時に効果音/BGMを追加

---

## 🛠 作者メモ

このプロジェクトはデモ目的のため、できるだけわかりやすく、視覚的に印象に残る作りにしています。
実運用時には、エラーハンドリングや認証・認可を追加することを推奨します。

