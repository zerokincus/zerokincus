// ログインユーザーのメールアドレスを取得する
(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    const record = event.record;
    const email = kintone.getLoginUser().email;

    record['メールアドレス'].value = email;
    
    return event;
  });
})();