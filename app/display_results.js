// ブラウザ上を開いたときににタイトルを表示する
export function displayMessage() {
    var message = "心理テストアプリへようこそ！";
    // HTMLドキュメント内のIDが 'message' の要素を取得
    document.getElementById('message').textContent = message;
}
export function displayResults(scores) {
    // 結果を表示する前にフォームを非表示にする
    var form = document.getElementById('psych-test');
    form.style.display = 'none'; // フォームを非表示にする
    // スコアの日本語名称マッピング
    var scoreNamesInJapanese = {
        openness: '開放性',
        conscientiousness: '誠実性',
        extraversion: '外向性',
        agreeableness: '協調性',
        neuroticism: '神経症的傾向'
    };
    // 日本語でのスコア文字列を作成
    var scoresInJapanese = '';
    for (var key in scores) {
        if (scores.hasOwnProperty(key)) {
            scoresInJapanese += "".concat(scoreNamesInJapanese[key]).concat(scores[key], "<br>");
        }
    }
    // 最後のコンマを取り除く
    scoresInJapanese = scoresInJapanese.slice(0, -1);
    // コンソールに表示
    console.log("scoresInJapanese：", scoresInJapanese);
    // 診断結果を表示する文字列をテンプレートリテラルで作成
    var results = "\n    <h2>\u8A3A\u65AD\u7D50\u679C</h2>\n    \u3042\u306A\u305F\u306E\u6027\u683C\u30BF\u30A4\u30D7\u306F\u4E0B\u8A18\u306E\u7D50\u679C\u306B\u306A\u308A\u307E\u3057\u305F\u3002\n    \u56DE\u7B54\u306B\u57FA\u3065\u3044\u305F\u6027\u683C\u306E\u7279\u5FB4\u3092\u3044\u304F\u3064\u304B\u7D39\u4ECB\u3057\u307E\u3059<br>\n    ".concat(scoresInJapanese, "<br>\n    ");
    // HTMLドキュメント内のIDが 'message' の要素を取得
    // HTMLコンテンツを results 文字列に置き換え
    // 回答結果を表示する
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = results;
}
