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
    };
    displayResults(answers);
}

function displayResults(answers) {
    // const results = `あなたの回答は以下の通りです:\n質問1: ${answers.q1}\n質問2: ${answers.q2}\n質問3: ${answers.q3}`;
    // 質問で選択されたラジオボタンのラベルテキストを取得
    const q1Label = document.querySelector(`label[for="${answers.q1}"]`).textContent;
    const q2Label = document.querySelector(`label[for="${answers.q2}"]`).textContent;
    const q3Label = document.querySelector(`label[for="${answers.q3}"]`).textContent;

    // 回答結果を表示する文字列を作成
    const results = `あなたの回答は以下の通りです<br>質問1: ${q1Label}<br>質問2: ${q2Label}<br>質問3: ${q3Label}`;

    // HTMLドキュメント内のIDが 'message' の要素を取得
    // HTMLコンテンツを results 文字列に置き換え
    document.getElementById('message').innerHTML = results;
}

document.addEventListener('DOMContentLoaded', () => {
    // 歓迎メッセージを表示
    displayMessage();
    // IDが 'psych-test' のHTML要素（フォーム）を取得
    const form = document.getElementById('psych-test');
    // ユーザーがフォームを送信すると、この関数が呼び出される。
    form.addEventListener('submit', handleFormSubmit);
});
