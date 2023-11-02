# 心理診断テストをするためのWebアプリ

## 環境構築
### Node.jsのインストール
1. Node.jsの公式ウェブサイト（nodejs.org）にアクセスします。
2. 推奨されるバージョンを選択し、インストーラーをダウンロードします。
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
tsc main.ts
```
を実行するとmain.jsが生成され、JavaScriptファイルはブラウザで直接実行することができる。