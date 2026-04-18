// 案件管理アプリ（営業支援パック）に設定するカスタマイズ処理
(() => {
  'use strict';
  kintone.events.on('app.record.detail.show', (event) => {

    // カスタマイズ処理
    window.alert(event.type);
    console.log(event);

    return event;
  });
})();