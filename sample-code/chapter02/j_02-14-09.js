// 修正後のコード
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

    tableArray.forEach((row) => {
      const isDisabled = row.value['ドロップダウン'].value !== 'その他';
      row.value['その他詳細'].disabled = isDisabled;
    });
    
    return event;
  });
})();