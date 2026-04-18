// テーブルの1行目だけにフィールド編集制御のカスタマイズを行う
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

    const row1st = tableArray[0];

    const isDisabled = row1st.value['ドロップダウン'].value !== 'その他';
    row1st.value['その他詳細'].disabled = isDisabled;
    
    return event;
  });
})();