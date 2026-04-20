// コード3-1-6の修正版
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', (event) => {
    const record = event.record; // イベントオブジェクトのレコード
    
    const url = kintone.api.url('/k/v1/record.json', true);
    const param = { app: appId, id: recordId };

    // kintone.api()の4,5引数を省略 => Promiseオブジェクトを返す
    // Promiseオブジェクトをreturnする
    // .then() .catch()のコールバック関数で処理を記載
    return kintone.api(url, 'GET', param).then((resp) => {
      const respRecord = resp.record; //REST APIで取得したレコード
      record['売上'].value = respRecord['金額'].value;
      return event;
    }).catch((error) => {
      console.error(error);
    });
  });
})();