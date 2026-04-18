// 確度の未選択を選ぶとフィールドにエラー表示を出す
(() => {
  'use strict';
  const eventType = [
    'app.record.create.change.確度',
    'app.record.edit.change.確度'
  ];
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    const changeValue = event.changes.field.value;

    console.log('変更後の値：' + changeValue);

    if (changeValue === undefined) {
      record['確度'].error = '確度が未入力です！ ';
    } else {
      record['確度'].error = null;
    }
    
    return event;
  });
})();