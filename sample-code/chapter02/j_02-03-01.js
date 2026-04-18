// フィールドの編集可／不可を制御する
(() => {
  'use strict';
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    // フィールドコードを編集不可にする
    record['フィールドコード'].disabled = true;
    return event;
  });
})();