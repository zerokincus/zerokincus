// kintoneカスタマイズの基本形を書く
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', (event) => {
    //処理
    return event;
  });
})();