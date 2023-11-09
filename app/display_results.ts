// ブラウザ上を開いたときににタイトルを表示する
export function displayMessage() {
    var message = "心理テストアプリへようこそ！";
    // HTMLドキュメント内のIDが 'message' の要素を取得
    document.getElementById('message').textContent = message;
}

export function displayResults(scores) {  
 
    // 結果を表示する前にフォームを非表示にする
    const form = document.getElementById('psych-test');
    form.style.display = 'none'; // フォームを非表示にする

    // スコアの日本語名称マッピング
    const scoreNamesInJapanese = {
        openness: '開放性',
        conscientiousness: '誠実性',
        extraversion: '外向性',
        agreeableness: '協調性',
        neuroticism: '神経症的傾向'
    };

    // 日本語でのスコア文字列を作成
    let scoresInJapanese = '';
    for (const key in scores) {
        if (scores.hasOwnProperty(key)) {
          scoresInJapanese += `${scoreNamesInJapanese[key]}${scores[key]}<br>`;
        }
    }

    // 最後のコンマを取り除く
    scoresInJapanese = scoresInJapanese.slice(0, -1);

    // コンソールに表示
    console.log("scoresInJapanese：", scoresInJapanese);

    // 診断結果を表示する文字列をテンプレートリテラルで作成
    const results = `
    <h2>診断結果</h2>
    あなたの性格タイプは下記の結果になりました。
    回答に基づいた性格の特徴をいくつか紹介します<br>
    ${scoresInJapanese}<br>
    `;

    // HTMLドキュメント内のIDが 'message' の要素を取得
    // HTMLコンテンツを results 文字列に置き換え
    // 回答結果を表示する
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = results;
}
