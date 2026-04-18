// 文字の色と太さを変更するコード
const element = kintone.app.record.getFieldElement('確度');
element.style.color = 'red';
element.style.fontWeight = 'bold';
console.log(element);