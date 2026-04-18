// 指定したURLに遷移するコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.submit.success'
  ];
  
  kintone.events.on(eventType, (event) => {
    // 指定したURLに遷移する処理
    event.url = 'https://google.com';

    return event;
  });
})();