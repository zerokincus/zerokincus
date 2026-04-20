// イベントハンドラーの登録
(() => {
  'use strict';
  const eventType = [
    'app.record.detail.process.proceed',
    'mobile.app.record.detail.process.proceed'
  ];
  
  kintone.events.on((event) => {
    const record = event.record;
    // 処理内容
    return event;
  });
})();