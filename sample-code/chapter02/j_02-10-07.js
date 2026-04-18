// 取得したメールアドレスを編集不可とする
(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    const record = event.record;
    record['メールアドレス'].value = kintone.getLoginUser().email;
    record['メールアドレス'].disabled = true;

    return event;
  });

  const editEvents = [
    'app.record.edit.show',
    'app.record.index.edit.show'
  ];
  
  kintone.events.on(editEvents, (event) => {
    const record = event.record;
    record['メールアドレス'].disabled = true;
    return event;
  });
})();