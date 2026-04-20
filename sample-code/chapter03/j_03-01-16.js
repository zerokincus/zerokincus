// レコードを取得するREST API
// async関数
(async () => {
  const url = kintone.api.url('/k/v1/record.json', true);
  const param = { app: appId, id: recordId };
  // awaitを付けてkintone.api()を実行する
  const result = await kintone.api(url, 'GET', param);
  // 後続処理（取得したオブジェクトをコンソール出力）
  console.log(result);
})(); 