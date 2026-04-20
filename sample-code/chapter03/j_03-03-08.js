// 「案件管理番号」フィールドを編集不可にする
const editEvents = [
  'app.record.create.show',
  'app.record.edit.show',
  'app.record.index.edit.show'
];
kintone.events.on(editEvents, (event) => {
  const record = event.record;
  record['案件管理番号'].disabled = true;
  return event;
});