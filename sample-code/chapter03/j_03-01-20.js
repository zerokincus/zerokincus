// 非同期処理を繰り返す例
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', async (event) => {
    const record = event.record; // イベントオブジェクトのレコード

    try {
      const url = kintone.api.url('/k/v1/record.json', true);
      
      const resp1 = await kintone.api(url, 'GET', { app: 10, id: 1 });
      console.log(resp1.record);
      const resp2 = await kintone.api(url, 'GET', { app: 10, id: 2 });
      console.log(resp2.record);
      const resp3 = await kintone.api(url, 'GET', { app: 10, id: 3 });
      console.log(resp3.record);
    } catch (error) {
      console.error(error);
    }
    return event;
  });
})();