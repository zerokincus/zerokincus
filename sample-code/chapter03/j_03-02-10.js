// 1件のアプリの情報を取得するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/app.json', true);
  const body = {
    id: kintone.app.getId()
  };
  const result = await kintone.api(url, 'GET', body);
  console.log(result);
})();