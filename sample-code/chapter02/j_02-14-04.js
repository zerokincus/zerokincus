// 修正後のサンプルコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.create.change.テーブル',
    'app.record.edit.change.テーブル',
    'app.record.create.change.その他詳細',
    'app.record.edit.change.その他詳細'
  ];
  
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    const tableArray = record['テーブル'].value;

    tableArray.forEach((row) => {
      const dropdownValue = row.value['ドロップダウン'].value; // 修正箇所 row => row.value
      console.log(dropdownValue);

      if (dropdownValue === 'その他') {
        row.value['その他詳細'].disabled = true;
      } else {
        row.value['その他詳細'].disabled = false;
      }
    });
    
    return event;
  });
})();