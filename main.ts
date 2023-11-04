// main.ts

// ユーザーに対する歓迎メッセージを表示する役割
function displayMessage() {
    var message = "心理テストアプリへようこそ！";
    // HTMLドキュメント内のIDが 'message' の要素を取得
    document.getElementById('message').textContent = message;
}

// フォームが送信されたときのイベントを処理する。
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const answers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q1.value,
        q5: form.q2.value,
        q6: form.q3.value,
        q7: form.q1.value,
        q8: form.q2.value,
        q9: form.q3.value,
        q10: form.q1.value,
    };
    displayResults(answers);
}

// ラベルのテキストを取得する関数
function getLabelText(questionNumber: string, answerValue: string): string {
    return document.querySelector(`label[for="${answerValue}"]`).textContent;
}
    
function displayResults(answers) {  
  // 全ての回答ラベルを取得
  const labels = [
    getLabelText('q1', answers.q1),
    getLabelText('q2', answers.q2),
    getLabelText('q3', answers.q3),
    getLabelText('q4', answers.q4),
    getLabelText('q5', answers.q5),
    getLabelText('q6', answers.q6),
    getLabelText('q7', answers.q7),
    getLabelText('q8', answers.q8),
    getLabelText('q9', answers.q9),
    getLabelText('q10', answers.q10)
  ];
  
  // 回答結果を表示する文字列をテンプレートリテラルで作成
  const results = `
    あなたの回答は以下の通りです<br>
    質問1: ${labels[0]}<br>
    質問2: ${labels[1]}<br>
    質問3: ${labels[2]}<br>
    質問4: ${labels[3]}<br>
    質問5: ${labels[4]}<br>
    質問6: ${labels[5]}<br>
    質問7: ${labels[6]}<br>
    質問8: ${labels[7]}<br>
    質問9: ${labels[8]}<br>
    質問10: ${labels[9]}
  `;
 
    // 結果を表示する前にフォームを非表示にする
    const form = document.getElementById('psych-test');
    form.style.display = 'none'; // フォームを非表示にする

    // HTMLドキュメント内のIDが 'message' の要素を取得
    // HTMLコンテンツを results 文字列に置き換え
    // 回答結果を表示する
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = results;
    // document.getElementById('message').innerHTML = results;
}

document.addEventListener('DOMContentLoaded', () => {
    // 歓迎メッセージを表示
    displayMessage();
    // IDが 'psych-test' のHTML要素（フォーム）を取得
    const form = document.getElementById('psych-test');
    // ユーザーがフォームを送信すると、この関数が呼び出される。
    form.addEventListener('submit', handleFormSubmit);
});
