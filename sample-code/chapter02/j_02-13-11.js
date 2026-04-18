// 確認のためにコンソールに入力するコマンド
const elements = kintone.app.getFieldElements('生年月日');
elements.forEach((element) => {
  const span = element.querySelector('span');
  if (span.textContent) {
    span.textContent += '（XX歳）'
  }
});