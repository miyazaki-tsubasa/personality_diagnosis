# 心理診断テストをするためのWebアプリ

## アプリの使い方
1. Start-Process によってブラウザにリクエストを送る。
2. ブラウザ上で質問に答えて、最後に「診断する」ボタンを押す。
3. 診断結果を確認する。

## 環境構築
### Node.jsのインストール
1. Node.jsの公式ウェブサイト（nodejs.org）にアクセスします。
2. 推奨されるバージョン(今回はv21.1.0)を選択し、インストーラーをダウンロードします。
3. インストーラの流れ通りにインストールまで進める。(PATHはC:\Program Files\nodejs\ で良い)
4. インストールの確認 
```
node -v
```
を実行する。

### TypeScriptのインストール
```
npm install -g typescript
```
を実行する。
この時点でTypeScriptファイルをJavaScriptにコンパイルするためのTypeScriptコンパイラを使えるようになる。

具体的には
```
tsc 
```
を実行すると.jsファイルが生成され、JavaScriptファイルはブラウザで直接実行することができる。

ターミナル上でローカルサーバを立てる。(ブラウザ上で、appディレクトリにアクセスできないため)
```
http-server -p 8000
```
実行した際に``` http://127.0.0.1:8000```を実行する。

## 各関数の構成

### main.ts
コメント通りbrowser.html場で生成している「診断する」ボタンを押すと実行される。

#### displayMessage関数(app/display_results.ts)
簡単なタイトルテキストをブラウザで表示させる

#### handleFormSubmit関数(app/handle_form_submit.ts)
1. ブラウザ上で選択した項目を再定義
2. 全ての質問が選択されていないと警告文を出力
3. ビッグファイブの項目ごとの集計
4. displayResults関数を実行して、メッセージテキストを取得

#### displayResults関数(app/display_results.ts)
handleFormSubmit関数で取得したscoresを引数として
ブラウザ上に表示させるテキストメッセージを定義。

