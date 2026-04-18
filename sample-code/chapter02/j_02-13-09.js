// 基本形とイベントハンドラーの登録
(() => {
  'use strict';
  const detailShowEvent = ['app.record.detail.show'];
  kintone.events.on(detailShowEvent, (event) => {
    const record = event.record;
    // 処理内容
    return event;
  });
  
  const indexShowEvent = ['app.record.index.show'];
  kintone.events.on(indexShowEvent, (event) => {
    const records = event.records;
    // 処理内容
    return event;
  });
})();