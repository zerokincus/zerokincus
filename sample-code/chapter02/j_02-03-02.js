// フィールドの編集可／不可制御を行うコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.create.change.提案商品',
    'app.record.edit.change.提案商品'
  ];
  
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    const plan = record['提案商品'].value;

    if (plan !== 'その他') {
      record['その他詳細'].disabled = true;
    } else {
      record['その他詳細'].disabled = false;
    }

    return event;
  });
})();