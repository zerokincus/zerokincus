// イベントハンドラーの登録
(() => {
  'use strict';
  const eventType = 'app.record.create.submit';
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    // 処理内容
    return event;
  });
})();