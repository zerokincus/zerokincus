// 1件のレコードを取得するAPIによるリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/record.json', true);
  const body = {
    app: kintone.app.getId(),
    id: kintone.app.record.getId()
  };
  const result = await kintone.api(url, 'GET', body);
  console.log(result);
})(); 