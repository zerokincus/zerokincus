// レコード詳細画面で年齢を表示するためのコード
const birthday = record['生年月日'].value;
const luxonBirthday = luxon.DateTime.fromISO(birthday);
const today = luxon.DateTime.local();
const age = today.diff(luxonBirthday, ['years', 'months']).years;
console.log(age + '歳');