// 複数のレコードを更新するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/records.json', true);
  const body = {
    app: kintone.app.getId(),
    records: [
      {
        id: 18,
        record: {
          "商談フェーズ": {
            "value": "受注"
          },
          "確度": {
            "value": "100%"
          }
        }
      },
      {
        id: 19,
        record: {
          "商談フェーズ": {
            "value": "受注"
          },
          "確度": {
            "value": "100%"
          }
        }
      }
    ]
  };
  const result = await kintone.api(url, 'PUT', body);
  console.log(result);
})();