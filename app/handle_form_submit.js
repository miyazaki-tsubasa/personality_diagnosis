import { displayResults } from './display_results.js';
// フォームが送信されたときのイベントを処理する。
export function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var isAllQuestionsAnswered = true;
    var warningMessage = '';
    // 各質問項目に対して回答があるかを確認
    for (var i = 1; i <= 10; i++) {
        if (!form["q".concat(i)].value) {
            isAllQuestionsAnswered = false;
            warningMessage += "\u8CEA\u554F".concat(i, "\u306B\u56DE\u7B54\u3057\u3066\u304F\u3060\u3055\u3044\u3002<br>");
        }
    }
    // 全ての質問に回答されていなければ警告メッセージを表示
    if (!isAllQuestionsAnswered) {
        document.getElementById('warning-message').innerHTML = warningMessage;
        return; // ここで処理を中断
    }
    // 警告メッセージをクリア
    document.getElementById('warning-message').innerHTML = '';
    var scores = {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0
    };
    // FormDataから直接値を取得してscoresを更新
    // 質問1 : 新しい経験を積極的に求めますか？(開放性)
    scores.openness += Number(formData.get('q1') === 'yes' ? 2 : 0);
    scores.openness -= Number(formData.get('q1') === 'no' ? 1 : 0);
    // 質問2 : 日々のタスクに対して計画的ですか？(誠実性)
    scores.conscientiousness += Number(formData.get('q2') === 'yes' ? 2 : 0);
    scores.conscientiousness -= Number(formData.get('q2') === 'no' ? 1 : 0);
    // 質問3 : 社交的なイベントが好きですか？(外向性)
    scores.extraversion += Number(formData.get('q3') === 'yes' ? 2 : 0);
    scores.extraversion -= Number(formData.get('q3') === 'no' ? 1 : 0);
    // 質問4 : 他人の感情に共感しやすいと感じますか？(協調性)
    scores.agreeableness += Number(formData.get('q4') === 'yes' ? 2 : 0);
    scores.agreeableness -= Number(formData.get('q4') === 'no' ? 1 : 0);
    // 質問5 : 小さな問題でも簡単に心配になることがありますか？(神経症的傾向)
    scores.neuroticism += Number(formData.get('q5') === 'yes' ? 2 : 0);
    scores.neuroticism -= Number(formData.get('q5') === 'no' ? 1 : 0);
    // 質問6 : 芸術作品や音楽を深く理解することができると感じますか？(開放性)
    scores.openness += Number(formData.get('q6') === 'yes' ? 2 : 0);
    scores.openness -= Number(formData.get('q6') === 'no' ? 1 : 0);
    // 質問7 : タスクを完了するために余分な時間を費やすことが多いですか？(誠実性)
    scores.conscientiousness += Number(formData.get('q7') === 'yes' ? 2 : 0);
    scores.conscientiousness -= Number(formData.get('q7') === 'no' ? 1 : 0);
    // 質問8 : 新しい人と出会うのが楽しみですか？(外向性)
    scores.extraversion += Number(formData.get('q8') === 'yes' ? 2 : 0);
    scores.extraversion -= Number(formData.get('q8') === 'no' ? 1 : 0);
    // 質問9 : 人の助けを借りずに問題を解決することが多いですか？(協調性)
    scores.agreeableness -= Number(formData.get('q9') === 'yes' ? 1 : 0);
    scores.agreeableness += Number(formData.get('q9') === 'no' ? 2 : 0);
    // 質問10 : 将来に対して不安を感じることがよくありますか？(神経症的傾向)
    scores.neuroticism += Number(formData.get('q10') === 'yes' ? 2 : 0);
    scores.neuroticism -= Number(formData.get('q10') === 'no' ? 1 : 0);
    // 警告メッセージがなければ結果を表示
    if (document.getElementById('warning-message').innerHTML === '') {
        // const personalityType = determinePersonalityType(answers);
        displayResults(scores);
    }
    console.log("scores : ", scores);
    displayResults(scores);
}
