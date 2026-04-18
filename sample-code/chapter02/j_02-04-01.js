// フィールドにエラーを表示する
kintone.events.on('app.record.create.submit', (event) => {
  const record = event.record;
  record['フィールドコード'].error = 'エラーです！ ';
  return event;
});