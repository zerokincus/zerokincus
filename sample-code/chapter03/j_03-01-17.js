// レコードを取得して新規レコード保存時にフィールドの値を書き換える
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', async (event) => {
    const record = event.record; // イベントオブジェクトのレコード

    const url = kintone.api.url('/k/v1/record.json', true);
    const param = { app: appId, id: recordId };

    // async/awaitでkintone.api()を実行する
    const result = await kintone.api(url, 'GET', param);

    const respRecord = result.record; //REST APIで取得したレコード
    // フィールド値を書き換える処理
    record['売上'].value = respRecord['金額'].value;
    return event;
  });
})();