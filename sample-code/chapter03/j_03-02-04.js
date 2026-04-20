// 複数のレコードを取得するAPIによるリクエスト例
(async () => {
  const url = kintone.api.url('/k/v1/records.json', true);
  const body = {
    app: kintone.app.getId(),
    fields: ['レコード番号', '会社名', '案件名', '確度'],
    query: '提案商品 in ("商品A")'
  };
  const result = await kintone.api(url, 'GET', body);
  console.log(result);
})();