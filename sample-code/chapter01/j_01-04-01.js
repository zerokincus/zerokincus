(() => {
  'use strict';
  kintone.events.on('app.record.detail.show', (event) => {
    // ここにカスタマイズ処理を記述する
    return event;
  });
})();