// 入力内容をクリアする処理を追加したコード2-3-2の修正版
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
      record['その他詳細'].value = ''; // この処理を追加
    } else {
      record['その他詳細'].disabled = false;
    }
    
    return event;
  });
})();