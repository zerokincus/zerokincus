// フォームのレイアウトを取得するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/app/form/layout.json', true);
  const body = {
    app: kintone.app.getId()
  };
  
  const resp = await kintone.api(url, 'GET', body);
  console.log(resp);
})();