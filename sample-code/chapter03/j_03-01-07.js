// コールバック関数を使ってレコード取得を3回行う例
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', (event) => {
    const record = event.record; // イベントオブジェクトのレコード
    const url = kintone.api.url('/k/v1/record.json', true);
    
    // 1回目のリクエスト
    kintone.api(url, 'GET', { app: 10, id: 1 }, (resp1) => {
      // レコード番号：1のレコード
      console.log(resp1.record);
      // 2回目のリクエスト
      kintone.api(url, 'GET', { app: 10, id: 2 }, (resp2) => {
        // レコード番号：2のレコード
        console.log(resp2.record);
        // 3回目のリクエスト
        kintone.api(url, 'GET', { app: 10, id: 3 }, (resp3) => {
          // レコード番号：3のレコード
          console.log(resp3.record);
        }, (error3) => {
          console.error(error3);
        });
      }, (error2) => {
        console.error(error2);
      });
    }, (error1) => {
      console.error(error1);
    });
    return event;
  });
})();