// カスタマイズ例のコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show'
  ];
  kintone.events.on(eventType, (event) => {
    const record = event.record;

    // ルックアップを自動取得する処理
    record['会社名'].lookup = 'CLEAR';
    
    return event;
  });
})();