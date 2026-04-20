// try...catch構文の形を書く
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', (event) => {
    try {
      // 成功時処理
    } catch (error) {
      // エラー処理
    }
    return event;
  });
})();