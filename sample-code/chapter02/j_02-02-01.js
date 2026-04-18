// フィールドの値を書き換えるコード
(() => {
  'use strict';
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    record['フィールドコード'].value = '書き換える値';
    return event;
  });
})();