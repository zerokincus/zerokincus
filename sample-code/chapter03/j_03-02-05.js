// 複数のレコードを登録するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/records.json', true);
  const body = {
    app: kintone.app.getId(),
    records: [
      {
        "会社名": {
          "value": "株式会社サイボウズ商事"
        },
        "案件名": {
          "value": "サンプル案件1"
        }
      },
      {
        "会社名": {
          "value": "株式会社サイボウズ商事"
        },
        "案件名": {
          "value": "サンプル案件2"
        }
      }
    ]
  };
  const result = await kintone.api(url, 'POST', body);
  console.log(result);
})();