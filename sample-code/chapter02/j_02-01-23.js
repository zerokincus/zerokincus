//イベントオブジェクトの処理の記述
(() => {
  'use strict';
  kintone.events.on(eventType, (event) => {
    // カスタマイズ処理
    return event;
  });
})();