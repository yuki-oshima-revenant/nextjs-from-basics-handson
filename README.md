# 『基礎から学ぶ Next.js』ハンズオンコード

https://www.amazon.co.jp/dp/4863544200

## 変更履歴

### 20230912

#### p88

ハンズオンプロジェクトの作成コマンドのプロジェクト名が間違っています。

以下のように記載してありますが、

```bash
npx create-next-app@latest nextjs-sample --no-app --no -tailwind
```

正しくは以下です。

```bash
npx create-next-app@latest nextjs-handson1 --no-app --no-tailwind
```

### 20230817

#### p91

Notionのデータベース作成時に、各ページのタイトルの属性名が「Name」でない場合があります。その場合、p107のコードのタイトルを取得する箇所でエラーになるため、明示的に「Name」という名前に変更するようにしてください。

### 20230722

#### p95

`@notionhq/client`最新バージョンで一部コードの型定義が変更されていたため、インストールバージョンを`2.2.3`に固定する必要があります。以下のコマンドでインストールしてください。

```bash
npm install @notionhq/client@2.2.3
```
