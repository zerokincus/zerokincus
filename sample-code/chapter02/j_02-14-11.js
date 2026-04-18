// テーブルの値を取得できていることを確認
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.create.change.テーブル',
    'app.record.edit.change.テーブル',
    'app.record.create.change.ドロップダウン',
    'app.record.edit.change.ドロップダウン'
  ];

  kintone.events.on(eventType, (event) => {
    const record = event.record;
    const tableArray = record['テーブル'].value;

    console.log(tableArray); //テーブルデータをコンソールで確認する
    
    return event;
  });
})();