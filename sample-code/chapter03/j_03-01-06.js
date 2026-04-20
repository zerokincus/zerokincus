// 金額フィールドの値を売上フィールドに入れて保存する意図のサンプルコード
(() => {
  'use strict';
  kintone.events.on('app.record.create.submit', (event) => {
    const record = event.record; // イベントオブジェクトのレコード

    const url = kintone.api.url('/k/v1/record.json', true);
    const param = { app: appId, id: recordId };

    // ここから非同期処理
    kintone.api(url, 'GET', param, (resp) => {
      const respRecord = resp.record; //REST APIで取得したレコード
      record['売上'].value = respRecord['金額'].value;
    }, (error) => {
      console.error(error);
    });
    // 非同期処理はここまで

    return event; // kinotne.apiの結果を待たずに実行されてしまう
  });
})();