<p align="center">
  <a href="https://nishantpainter.github.io/personal-kanban/" rel="noopener" target="_blank"><img width="756" src="https://nishantpainter.github.io/personal-kanban/readme_logo_jp.png" alt="Personal Kanban logo"></a></p>
</p>

#

<p align="center">
  個人的なプロジェクトやワークフローのための仮想オフラインかんばんボード。
</p>

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/description.gif" alt="Description GIF" style="border-radius:16px"></p>
</p>

[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://nishantpainter.github.io/personal-kanban) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/github/license/day8/re-frame.svg)](https://github.com/nishantpainter/personal-kanban/blob/main/license.txt) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/nishantpainter/personal-kanban/commits/main) [![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/nishantpainter/personal-kanban/issues)

[English](https://github.com/nishantpainter/personal-kanban/blob/main/README.md) - [Français](https://github.com/nishantpainter/personal-kanban/blob/main/README_FR.md) - [Español](https://github.com/nishantpainter/personal-kanban/blob/main/README_ES.md) - [Pусский](https://github.com/nishantpainter/personal-kanban/blob/main/README_RU.md) - [Deutsch](https://github.com/nishantpainter/personal-kanban/blob/main/README_DE.md) - [हिंदी](https://github.com/nishantpainter/personal-kanban/blob/main/README_IN.md) - [中文](https://github.com/nishantpainter/personal-kanban/blob/main/README_CN.md) - [日本語](https://github.com/nishantpainter/personal-kanban/blob/main/README_JP.md)

個人かんばんは、個人レベルで作業を管理するためにかんばんを実装するオフライン対応のアプリケーションまたはツールです。作業項目は、作業プロセスの各段階を表すレコードおよび列として表すことができます。列は、「todo」、「in-progress」、「done」のように単純な場合もあれば、フローに合わせて複雑な場合もあります。

これは、ワークフローを視覚化して最適化するためのツールです。物理的なボードは少数の人々の間で人気がありますが、パーソナルかんばんのような仮想ボードは、そのアクセシビリティ、シンプルさ、エレガントな表示を考慮して、アジャイルソフトウェア開発において重要な役割を果たします。ボードが物理的であるか仮想的であるかに関係なく、障害物やその他の依存関係を明確に識別するとともに、作業を視覚的に表現する必要があります。これらの各機能は、パーソナルかんばんによってシームレスに提供されます。

柔軟性を持って作業を計画し、ボトルネックを特定して解決し、作業全体を視覚的に概観します。

# 目次

- **[前書き](#前書き)**
- **[特徴](#特徴)**
- **[使い方](#使い方)**
  - **[列を追加](#列を追加)**
  - **[列の編集](#列の編集)**
  - **[列を削除](#列を削除)**
  - **[列を移動](#列を移動)**
  - **[レコードを追加](#レコードを追加)**
  - **[レコードの編集](#レコードの編集)**
  - **[レコードを削除する](#レコードを削除する)**
  - **[レコードを移動](#レコードを移動)**
  - **[すべてのレコードを削除](#すべてのレコードを削除)**
  - **[クリアボード](#クリアボード)**
  - **[言語を変えてください](#言語を変えてください)**
  - **[ダークモードを切り替えます](#ダークモードを切り替えます)**
- **[ダークモード](#ダークモード)**
- **[ローカリゼーション](#ローカリゼーション)**
- **[オフラインでの使用](#オフラインでの使用)**
- **[開発](#開発)**
- **[プライバシー](#プライバシー)**
- **[その他の参考資料](#その他の参考資料)**

## 前書き

これは、作業を視覚化し、進行中の作業（wip）を制限し、ワークフローを作成および最適化して最大の出力を得るのに役立つアジャイルプロジェクト管理ツールです。これを実現するために、列とレコードを利用します。個人かんばんは、視覚的な手がかり、列、仕掛品の制限、開始点と終了点を提供して、成功に向けて準備します。

## 特徴

パーソナルかんばんでできることのいくつか：

- 列の追加、編集、削除
- 列を移動する
- レコードの追加、編集、削除
- レコードの移動
- 列の仕掛品制限を制限する
- 列とレコードの背景色を管理する
- クリアボード
- ダークモード
- ローカリゼーションサポート
- オフラインローカルストレージ

## 使い方

にアクセスしてアプリケーションにアクセスできます [ウェブサイト](https://nishantpainter.github.io/personal-kanban/). アプリケーションには、次のような機能セットがあります :

### 列を追加

ツールバーの+アイコンボタンをクリックして、新しい列を追加します。タイトル（必須）、説明、背景色、仕掛品の制限など、列の詳細を入力します。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/add_column.gif" alt="Add Column GIF" style="border-radius:16px"></p>
</p>

### 列の編集

列タイトルの横にある編集アイコンボタンをクリックして、列を編集します。フォームを更新し、[送信]をクリックして変更をコミットするか、[キャンセル]をクリックしてダイアログを閉じます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/edit_column.gif" alt="Edit Column GIF" style="border-radius:16px"></p>
</p>

### 列を削除

編集アイコンボタンの横にある削除アイコンボタンをクリックして、列を削除します。これにより、列のすべてのレコードとともに列が削除されます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_column.gif" alt="Delete Column GIF" style="border-radius:16px"></p>
</p>

### 列を移動

列を本体または列ヘッダーから押したままドラッグして、ボード上の他の列間で移動します。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/move_column.gif" alt="Move Column GIF" style="border-radius:16px"></p>
</p>

### レコードを追加

列のタイトル/説明の下にあるアイコンの追加ボタンをクリックして、新しいレコードを追加します。レコードタイトル（必須）、説明、背景色の詳細を入力します。送信すると、作成されたタイムスタンプをキャプションとして列に新しいレコードが追加されます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/add_record.gif" alt="Add Record GIF" style="border-radius:16px"></p>
</p>

### レコードの編集

レコードタイトルの横にある編集アイコンボタンをクリックして、レコードを編集します。フォームを更新し、[送信]をクリックして変更をコミットするか、[キャンセル]をクリックしてダイアログを閉じます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/edit_record.gif" alt="Edit Record GIF" style="border-radius:16px"></p>
</p>

### レコードを削除する

レコード編集アイコンボタンの横にある削除アイコンボタンをクリックして、レコードを削除します。これにより、列からレコードが削除されます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_record.gif" alt="Delete Record GIF" style="border-radius:16px"></p>
</p>

### レコードを移動

レコードを本体またはレコードヘッダーから押したままドラッグして、ボード上の他の列のレコードリスト間で移動します。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/move_record.gif" alt="Move Record GIF" style="border-radius:16px"></p>
</p>

### すべてのレコードを削除

[レコードの追加]アイコンボタンのほかに[削除]アイコンボタンをクリックして、列に属するすべてのレコードを削除します。レコードリスト全体が列から削除されます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_all_record.gif" alt="Delete All Record GIF" style="border-radius:16px"></p>
</p>

### クリアボード

ボード全体をクリアするには、ツールバーの削除アイコンボタンをクリックします。ボードからすべての列とレコードを削除します。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/clear_board.gif" alt="Clear Board GIF" style="border-radius:16px"></p>
</p>

### 言語を変えてください

ツールバーの地球アイコンボタンをクリックすると、アプリケーションの言語を変更できます。メニューから適切な言語を選択すると、アプリケーションのロケールが選択した言語に変更されます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/change_language.gif" alt="Change Language GIF" style="border-radius:16px"></p>
</p>

### ダークモードを切り替えます

ツールバーのアイコンボタンをクリックすると、ダークモードを切り替えることができます。

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/toggle_dark_mode.gif" alt="Toggle Dark Mode GIF" style="border-radius:16px"></p>
</p>

## ダークモード

ダークモードを使用すると、画面をすばやく暗くすることができます（夜間の使用中）。ツールバーには、ダークモードのオン/オフスイッチとして機能するアイコンボタンがあります。

## ローカリゼーション

個人かんばんは、次のような言語のローカルサポートを提供します。

- English
- Français
- Español
- Pусский
- Deutsch
- हिंदी
- 中文
- 日本語

## オフラインでの使用

アプリケーションはサービスワーカーに登録され、プログレッシブWebアプリケーションとして動作します ([PWA](https://en.wikipedia.org/wiki/Progressive_web_application)). オフラインで使用する場合は、 **ホームに追加** ブラウザでアプリケーションにアクセスしているときに、モバイルデバイスにアプリケーションをローカルにインストールするオプション.

## 開発

アプリケーションは、create-react-appを使用してスキャフォールディングされます ([CRA](https://create-react-app.dev/docs/getting-started/)) と [Typescript](https://www.typescriptlang.org/) テンプレート. あなたはクローンを作ることができます [個人かんばん](https://github.com/nishantpainter/personal-kanban) カスタム開発用のリポジトリ.

マシン上でローカルにアプリケーションを実行するには、以下の手順に従います。

- npmの使用

```
1: git clone https://github.com/nishantpainter/personal-kanban.git
2: cd personal-kanban
3: npm install
4: npm run build
5: sudo npm install -g serve
6: serve -s build
```

- yarnの使用

```
1: git clone https://github.com/nishantpainter/personal-kanban.git
2: cd personal-kanban
3: yarn install
4: yarn build
5: sudo npm install -g serve
6: serve -s build
```

## プライバシー

このアプリケーションは、ローカルストレージを使用して作業列とレコードを永続化し、個人のかんばんデータをどのような種類のサーバーにも保存しません。アプリケーションは、Googleアナリティクスを使用して、アプリケーションの使用状況の概要を取得します。

## その他の参考資料

- [アジャイルソフトウェア開発とは](https://en.wikipedia.org/wiki/Agile_software_development)
- [かんばんとは](https://www.atlassian.com/agile/kanban)
- [かんばんボードとは](https://en.wikipedia.org/wiki/Kanban_board#:~:text=A%20Kanban%20board%20is%20one,each%20stage%20of%20the%20process.)
- [かんばんvsスクラム](https://www.atlassian.com/agile/kanban/kanban-vs-scrum)
