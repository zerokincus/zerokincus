// 新規レコードを保存しようとしたときに画面上部にエラーを表示
kintone.events.on('app.record.create.submit', (event) => {
  event.error = 'エラーです！ ';
  return event;
});