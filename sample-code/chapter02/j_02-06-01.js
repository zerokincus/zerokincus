// ルックアップを自動取得する
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show'
  ];
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    record['ルックアップ'].value = 'A001';
    
    // ルックアップを自動取得する処理
    record['ルックアップ'].lookup = true;
    // または record['ルックアップ'].lookup = 'UPDATE';

    return event;
  });
})();