// 案件名も自動取得できるように修正したコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show'
  ];
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    // ルックアップを自動取得する処理

    record['会社名'].lookup = true;
    record['案件名'].lookup = true;

    return event;
  });
})();