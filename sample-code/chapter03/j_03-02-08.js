// レコードコメントを取得するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/record/comments.json', true);
  const body = {
    app: kintone.app.getId(),
    record: kintone.app.record.getId()
  };
  const result = await kintone.api(url, 'GET', body);
  console.log(result);
})();