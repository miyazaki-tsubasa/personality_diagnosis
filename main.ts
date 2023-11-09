import { handleFormSubmit } from './app/handle_form_submit.js';
import { displayMessage } from './app/display_results.js';
import { renderQuestions } from './app/render_questions.js';

// browser.html場で生成している「診断する」ボタンを押すと実行される。
document.addEventListener('DOMContentLoaded', () => {
displayMessage(); // 歓迎メッセージを表示
renderQuestions(); // 質問を動的に生成
// IDが 'psych-test' のHTML要素（フォーム）を取得
const form = document.getElementById('psych-test');
// ユーザーがフォームを送信すると、この関数が呼び出される。
form.addEventListener('submit', handleFormSubmit);
});
