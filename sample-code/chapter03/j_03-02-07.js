// 複数のレコードを削除するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/records.json', true);
  const body = {
    app: kintone.app.getId(),
    ids: [18, 19]
  };
  const result = await kintone.api(url, 'DELETE', body);
  console.log(result);
})();