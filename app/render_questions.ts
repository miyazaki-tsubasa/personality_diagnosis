import { questions } from './questions.js';

// `renderQuestions` 関数は、質問をフォームに動的に追加するための関数です。
export function renderQuestions() {
    // `psych-test` IDを持つHTMLフォーム要素を取得します。
    const formElement = document.getElementById('psych-test') as HTMLFormElement;
  
    // 質問のリストをループして、各質問について処理を行います。
    questions.forEach(question => {
      // 質問ごとにdiv要素を作成します。
      const questionDiv = document.createElement('div');
      // 作成したdivにクラス名 'question' を設定します。
      questionDiv.className = 'question';
      
      // 質問文を表示するためのp要素を作成します。
      const questionParagraph = document.createElement('p');
      // p要素のテキスト内容として質問文を設定します。
      questionParagraph.textContent = question.text;
      // p要素をdiv要素に追加します。
      questionDiv.appendChild(questionParagraph);
      
      // 各質問の選択肢に対してループを行います。
      question.options.forEach(option => {
        // ラジオボタンを含むlabel要素を作成します。
        const label = document.createElement('label');
        // ラジオボタンとなるinput要素を作成します。
        const input = document.createElement('input');
        // input要素のタイプを 'radio' に設定します。
        input.type = 'radio';
        // input要素の名前を質問のIDに設定します（これによりグループ化されます）。
        input.name = question.id;
        // input要素の値を選択肢に設定します。
        input.value = option;
        // input要素をlabel要素に追加します。
        label.appendChild(input);
        // ラジオボタンの後に表示されるテキストを、選択肢に応じて設定します。
        label.append(option === 'yes' ? ' はい' : option === 'neither' ? ' どちらでもない' : ' いいえ');
        // label要素を質問のdiv要素に追加します。
        questionDiv.appendChild(label);
      });
      
      // 最終的に作成した質問のdiv要素をフォーム要素に追加します。
      formElement.appendChild(questionDiv);
    });
  }
  