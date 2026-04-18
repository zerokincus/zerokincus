// 案件管理アプリに入れたカスタマイズ内容の修正
(() => {
  'use strict';
  kintone.events.on('app.record.detail.show', (event) => {

    // カスタマイズ処理
    window.alert(event.record['案件名'].value);
    console.log(event);
    
    return event;
  });
})();