// 案件管理番号のカウントアップ
const lastKeyValue = lastRecord['案件管理番号'].value;
// 文字列を「-」で分割
const [prefix, numberPart] = lastKeyValue.split('-');
// 数字部分を数値に変換して +1、その後文字列に変換して左ゼロ埋め
const newNumber = String(Number(numberPart) + 1).padStart(numberPart.length, '0');
// 接頭文字と結合して返す
const newKeyValue = `${prefix}-${newNumber}`;