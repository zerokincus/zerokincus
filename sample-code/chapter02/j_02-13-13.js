// レコード一覧画面用に関数として用意
function calcAge(record) {
  const birthday = record['生年月日'].value;
  const luxonBirthday = luxon.DateTime.fromISO(birthday);
  const today = luxon.DateTime.local();
  const age = today.diff(luxonBirthday, ['years', 'months']).years;
  
  return age;
}