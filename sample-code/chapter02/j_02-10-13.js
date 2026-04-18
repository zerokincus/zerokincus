// 表示スタイルを変更するためにコンソールから入力するコマンド
const element = kintone.app.record.getFieldElement('確度');
element.style.color = 'red';
console.log(element);