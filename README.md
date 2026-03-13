# ゼロから始めるkintoneカスタマイズ入門  
サンプルコード・ダウンロード特典

本リポジトリは、書籍  
**「ゼロから始めるkintoneカスタマイズ入門」**  
で使用するサンプルコードおよび補足資料を公開するためのものです。

書籍を読みながら実際にコードを動かし、kintoneカスタマイズを学習できるように、章ごとに整理して掲載しています。

---

## ダウンロード

サンプルコード一式は以下からダウンロードできます。

https://github.com/zerokincus/zerokincus/archive/refs/heads/main.zip

または Git を使用する場合

```bash
git clone https://github.com/zerokincus/zerokincus.git
```

---

## リポジトリ構成

| フォルダ | 内容 |
|---|---|
| chapter | 書籍各章のサンプルコード |
| bookmarklets | 本書で紹介するブックマークレット |
| sample-app | サンプルアプリ作成用データ |
| plugins | プラグイン作成サンプル |
| docs | PDF形式の補足資料 |

---

## サンプルコード対応表

| 書籍内容 | フォルダ |
|---|---|
| JavaScript基礎 | `chapter/ch01` |
| kintone JavaScript API | `chapter/ch02` |
| イベント処理 | `chapter/ch03` |
| レコード操作 | `chapter/ch04` |
| ルックアップ制御 | `chapter/ch05` |
| テーブル操作 | `chapter/ch06` |
| UIカスタマイズ | `chapter/ch07` |
| 実践カスタマイズ | `chapter/ch08` |

---

## 利用方法

### 1. サンプルコードをダウンロード

ZIPをダウンロードするか、Gitで取得してください。

### 2. JavaScriptカスタマイズに設定

各章フォルダ内のJavaScriptファイルを、kintoneアプリのカスタマイズに設定します。

```
アプリ設定  
→ JavaScript / CSSでカスタマイズ  
→ PC用JavaScript
```

### 3. サンプルアプリを作成

`sample-app` フォルダ内のCSVデータを使用すると、本書と同じ構成のアプリを再現できます。

```
アプリ作成  
→ CSV読み込み
```

---

## 動作環境

- kintone 最新版
- モダンブラウザ（Chrome / Edge / Safari）

---

## 質問・不具合報告

サンプルコードに関する質問や不具合は、GitHubのIssueで受け付けています。

https://github.com/zerokincus/zerokincus/issues

---

## ライセンス

### サンプルコード

本リポジトリのサンプルコードは **MIT License** のもとで公開しています。  
詳細は `LICENSE` ファイルを参照してください。

### PDF資料

`docs` フォルダに含まれるPDF資料は、サンプルコードとは異なるライセンスで提供されています。

```
Copyright © 2026 Shotaro Matsuda
All Rights Reserved
```

これらの資料の無断転載・再配布・改変は禁止されています。

---

## 書籍情報

**ゼロから始めるkintoneカスタマイズ入門**

kintoneカスタマイズをこれから学ぶ方を対象に、  
JavaScriptの基礎からkintone APIの活用、実践的なカスタマイズまでを段階的に解説しています。

---

## 著者

松田 翔太郎  

kintoneを活用した業務改善・システム構築の支援を行っています。

https://asunote.co.jp

---

## 更新履歴

| Version | 内容 |
|---|---|
| v1.0 | 書籍初版対応サンプルコード |
