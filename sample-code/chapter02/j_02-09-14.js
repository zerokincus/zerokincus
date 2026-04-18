// フィールドコードテキストを編集不可とする
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show',
    'app.record.edit.show'
  ];

  kintone.events.on(eventType, (event) => {
    const record = event.record;
    const tableArray = record['テーブル'].value; //テーブル全体（各行が配列要素）
    
    // 配列要素（テーブル各行）に対して同じ処理を行う
    tableArray.forEach((row) => {
      row.value['テキスト'].disabled = true;
    });
    
    return event;
  });
})();