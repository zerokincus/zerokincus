// フィールド値の書き替え処理を追加
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', async (event) => {
    const record = event.record;
    try {
      // パラメーターの設定
      const url = kintone.api.url('/k/v1/record.json', true);
      const param = { app: appId, id: recordId };
      
      // リクエスト処理　async/awaitを意識
      const result = await kintone.api(url, 'GET', param);
      const respRecord = result.record;
      record['売上'].value = respRecord['金額'].value;
    } catch (error) {
      console.error(error);
    }
    return event;
  });
})();