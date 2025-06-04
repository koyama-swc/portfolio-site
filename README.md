# ポートフォリオサイト

シンプルでスタイリッシュなデザインのポートフォリオサイトです。Next.js 14とTailwind CSSを使用して構築されています。

## 技術スタック

- Next.js 14（App Router、TypeScript）
- Tailwind CSS 3.x
- framer-motion（モバイルメニューのアニメーション）
- react-icons（アイコン表示）

## セットアップ手順

### 必要条件

- Node.js 18.x以上
- npm 9.x以上

### インストール

1. リポジトリをクローンします。

```bash
git clone https://github.com/koyama-swc/portfolio-site.git
cd portfolio-site
```

2. 依存関係をインストールします。

```bash
npm install
```

### 開発サーバーの起動

開発サーバーを起動するには、以下のコマンドを実行します。

```bash
npm run dev
```

デフォルトでは、`http://localhost:3000`でサイトが表示されます。

## ビルド方法

本番用にビルドするには、以下のコマンドを実行します。

```bash
npm run build
```

ビルド後、`out`ディレクトリに静的ファイルが生成されます。

ビルド結果をローカルでプレビューするには、以下のコマンドを実行します。

```bash
npm run start
```

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Pagesへのデプロイに対応しています。

### 手動デプロイ

1. 以下のコマンドを実行して、GitHub Pagesにデプロイします。

```bash
npm run deploy
```

このコマンドは、プロジェクトをビルドし、`gh-pages`ブランチにデプロイします。

### 自動デプロイ（GitHub Actions）

`master`ブランチにプッシュすると、GitHub Actionsによって自動的にGitHub Pagesにデプロイされます。

GitHub Actionsのワークフローは`.github/workflows/deploy.yml`で定義されています。

## プロジェクト構造

```
portfolio-site/
├── .github/             # GitHub関連のファイル（Actions設定など）
├── public/              # 静的ファイル（画像など）
├── src/                 # ソースコード
│   ├── app/             # Next.js App Routerのページ
│   ├── components/      # 再利用可能なコンポーネント
│   └── styles/          # グローバルスタイル
├── .gitignore           # Gitの除外ファイル設定
├── next.config.js       # Next.jsの設定
├── package.json         # プロジェクト依存関係と設定
├── tailwind.config.js   # Tailwind CSSの設定
└── tsconfig.json        # TypeScriptの設定
```

## 注意点

- GitHub Pagesでの表示に問題がある場合は、ブラウザのキャッシュをクリアするか、シークレットモードで確認してください。
- 画像などの静的ファイルは`public`ディレクトリに配置してください。

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Pagesにデプロイされます。`master`ブランチにプッシュすると、GitHub Actionsによって自動的にビルドされ、`gh-pages`ブランチにデプロイされます。

### デプロイスクリプト

`package.json`の`deploy`スクリプトは以下のようになっています。

```json
"deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
```

### GitHub Actionsワークフロー

`.github/workflows/deploy.yml`にデプロイ用のワークフローが定義されています。

## プロジェクト構造

- `public/`: 静的ファイル（画像など）
- `src/`: ソースコード
  - `app/`: Next.jsのApp Router関連ファイル（ページ、レイアウトなど）
  - `components/`: 再利用可能なReactコンポーネント
  - `styles/`: グローバルCSSファイル
- `next.config.js`: Next.jsの設定ファイル
- `tailwind.config.ts`: Tailwind CSSの設定ファイル
- `postcss.config.js`: PostCSSの設定ファイル

## 注意点

- GitHub Pagesで正しく表示されるように、`next.config.js`の`basePath`と`assetPrefix`が設定されています。
- `.nojekyll`ファイルがルートディレクトリと`public`ディレクトリに配置されており、GitHub PagesでのJekyll処理を無効にしています。

問題がある場合は、ブラウザのキャッシュをクリアするか、シークレットモードで確認してください。
- 画像などの静的ファイルは`public`ディレクトリに配置してください。

 

