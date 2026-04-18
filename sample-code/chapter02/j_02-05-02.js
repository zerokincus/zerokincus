// レコード保存時にレコード一覧画面に遷移させるコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.submit.success',
    'app.record.edit.submit.success'
  ];

  kintone.events.on(eventType, (event) => {
    // レコード一覧画面へのURLを生成
    const targetURL = 'https://SUBDOMAIN.cybozu.com/k/' + kintone.app.getId() + '/';

    // 指定したURLに遷移する処理
    event.url = targetURL;

    return event;
  });
})();