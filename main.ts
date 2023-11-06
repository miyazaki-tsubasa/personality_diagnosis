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
    const form = event.target as HTMLFormElement;
    let isAllQuestionsAnswered = true;
    let warningMessage = '';

    // 各質問項目に対して回答があるかを確認
    for (let i = 1; i <= 10; i++) {
        if (!form[`q${i}`].value) {
            isAllQuestionsAnswered = false;
            warningMessage += `質問${i}に回答してください。<br>`;
        }
    }

    // 全ての質問に回答されていなければ警告メッセージを表示
    if (!isAllQuestionsAnswered) {
        document.getElementById('warning-message').innerHTML = warningMessage;
        return; // ここで処理を中断
    }

    // 警告メッセージをクリア
    document.getElementById('warning-message').innerHTML = '';
    console.log('form.q1.value : ', form.q1.value)
    console.log('form.q2.value : ', form.q2.value)
    console.log('form.q3.value : ', form.q3.value)
    console.log('form.q4.value : ', form.q4.value)
    console.log('form.q5.value : ', form.q5.value)
    console.log('form.q6.value : ', form.q6.value)
    console.log('form.q7.value : ', form.q7.value)
    console.log('form.q8.value : ', form.q8.value)
    console.log('form.q9.value : ', form.q9.value)
    console.log('form.q10.value : ', form.q10.value)

    const answers = {
        q1: form.q1.value === 'morning' ? 'Aの選択肢' : 'Bの選択肢',
        q2: form.q2.value === 'planner' ? 'Aの選択肢' : 'Bの選択肢',
        q3: form.q3.value === 'thinker' ? 'Aの選択肢' : 'Bの選択肢',
        q4: form.q4.value === 'leader' ? 'Aの選択肢' : 'Bの選択肢',
        q5: form.q5.value === 'adaptable' ? 'Aの選択肢' : 'Bの選択肢',
        q6: form.q6.value === 'detailed' ? 'Aの選択肢' : 'Bの選択肢',
        q7: form.q7.value === 'logical' ? 'Aの選択肢' : 'Bの選択肢',
        q8: form.q8.value === 'listener' ? 'Aの選択肢' : 'Bの選択肢',
        q9: form.q9.value === 'careful' ? 'Aの選択肢' : 'Bの選択肢',
        q10: form.q10.value === 'practical' ? 'Aの選択肢' : 'Bの選択肢',
    };
      // 警告メッセージがなければ結果を表示
    if (document.getElementById('warning-message').innerHTML === '') {
        const personalityType = determinePersonalityType(answers);
        displayResults(personalityType); // この関数は性格タイプを表示するように更新する必要がある
    }
    // displayResults(answers);
}

// ユーザーが選択したラジオボタンの値に基づいてラベルのテキストを取得するために使用
function getLabelText(answerValue: string): string {
    const labelElement = document.querySelector(`label[for="${answerValue}"]`);
    if (labelElement) {
      return labelElement.textContent;
    } else {
      return '未選択'; // ラベルが見つからない場合はこのテキストを返す
    }
}
    
function displayResults(personalityType) {  
 
    // 結果を表示する前にフォームを非表示にする
    const form = document.getElementById('psych-test');
    form.style.display = 'none'; // フォームを非表示にする

    // 診断結果を表示する文字列をテンプレートリテラルで作成
    const results = `
    <h2>診断結果</h2>
    あなたの性格タイプは「${personalityType}」です。<br>
    以下にあなたの回答に基づいた性格の特徴をいくつか紹介します：<br>
    <!-- ここに性格タイプに応じた説明を追加 -->
    `;

    // HTMLドキュメント内のIDが 'message' の要素を取得
    // HTMLコンテンツを results 文字列に置き換え
    // 回答結果を表示する
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = results;
    // document.getElementById('message').innerHTML = results;
}

// 回答に基づいて性格タイプを決定する関数
function determinePersonalityType(answers: Record<string, string>): string {
    let typeACount = 0;
    let typeBCount = 0;
  
    // ここで「A」または「B」をカウントするためのロジックを追加
    for (const key of Object.keys(answers)) {
      if (answers[key] === 'Aの選択肢') {
        typeACount++;
      } else {
        typeBCount++;
      }
    }
    console.log("typeACount : ", typeACount)
    console.log("typeBCount : ", typeBCount)

    // ここでカウントに基づいて性格タイプを決定
    if (typeACount >= 10) {
      return '思考タイプ';
    } else if (typeACount >= 8) {
      return '感情タイプ';
    } else if (typeACount >= 6) {
      return 'バランスタイプ';
    } else if (typeACount >= 4) {
      return '直感タイプ';
    } else if (typeACount <= 3){
      return '感覚タイプ';
    }
}  

document.addEventListener('DOMContentLoaded', () => {
    // 歓迎メッセージを表示
    displayMessage();
    // IDが 'psych-test' のHTML要素（フォーム）を取得
    const form = document.getElementById('psych-test');
    // ユーザーがフォームを送信すると、この関数が呼び出される。
    form.addEventListener('submit', handleFormSubmit);
});
