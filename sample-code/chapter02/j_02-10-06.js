// コード2-10-5の簡略表現
(() => {
  'use strict';
  kintone.events.on('app.record.create.show', (event) => {
    const record = event.record;

    record['メールアドレス'].value = kintone.getLoginUser().email;
    
    return event;
  });
})();