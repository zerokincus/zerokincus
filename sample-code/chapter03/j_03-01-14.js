// 繰り返す場合のPromise構文
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', (event) => {
    const record = event.record; // イベントオブジェクトのレコード
    const url = kintone.api.url('/k/v1/record.json', true);
    
    return kintone.api(url, 'GET', { app: 10, id: 1 }).then((resp1) => {
      // レコード番号：1のレコード
      console.log(resp1.record);
      return kintone.api(url, 'GET', { app: 10, id: 2 });
    }).then((resp2) => {
      // レコード番号：2のレコード
      console.log(resp2.record);
      return kintone.api(url, 'GET', { app: 10, id: 3 });
    }).then((resp3) => {
      // レコード番号：3のレコード
      console.log(resp3.record);
      return event;
    }).catch((error) => {
      console.error(error);
    });
  });
})();