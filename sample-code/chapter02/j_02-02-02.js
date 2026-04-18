// レコード追加画面を開いたときのイベントタイプの宣言と代入
(() => {
  'use strict';
  const eventType = 'app.record.create.show';
  kintone.events.on(eventType, (event) => {

    // カスタマイズ処理
    // 処理中でイベントオブジェクト:event に対して処理を行う
    
    return event;
  });
})();