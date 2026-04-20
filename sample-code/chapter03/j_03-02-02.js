// 1件のレコードを登録するAPIによるリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/record.json', true);
  const body = {
    app: kintone.app.getId(),
    record: {
      "会社名": {
        "value": "株式会社サイボウズ商事"
      },
      "案件名": {
        "value": "サンプル登録案件" // 連続実行する際はvalueを変更する（重複禁止のため）
      },
      "確度": {
        "value": "100%"
      },
      "商談フェーズ": {
        "value": "内示"
      }
    }
  };
  const result = await kintone.api(url, 'POST', body);
  console.log(result);
})();