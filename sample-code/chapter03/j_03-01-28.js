// async/awaitを使ったREST APIのリクエスト処理を追加
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', async (event) => {
    try {
      // パラメーターの設定
      const url = kintone.api.url('/k/v1/record.json', true);
      const param = { app: appId, id: recordId };
      
      // リクエスト処理　async/awaitを意識
      const result = await kintone.api(url, 'GET', param);
      console.log(result); // チェック用コンソール出力
    } catch (error) {
      console.error(error);
    }
    return event;
  });
})();