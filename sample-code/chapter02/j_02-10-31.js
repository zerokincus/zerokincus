// カスタマイズの基本形でハンドラーを登録
(() => {
  'use strict';
  const eventType = ['app.record.index.show'];
  kintone.events.on(eventType, (event) => {
    const records = event.records;
    // 処理内容
    return event;
  });
})();