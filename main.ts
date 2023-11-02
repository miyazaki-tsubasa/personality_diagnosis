// まずはテストでブラウザ上でtypescriptを実行する
function displayMessage(): void {
    const message: string = "心理テストアプリへようこそ！";
    document.body.textContent = message;
}

// ドキュメントが読み込まれたらメッセージを表示
document.addEventListener('DOMContentLoaded', displayMessage);
