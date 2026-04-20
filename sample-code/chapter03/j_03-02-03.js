// 1件のレコードを更新するAPIによるリクエスト例
(async () => {
  const url = kintone.api.url('/k/v1/record.json', true);
  const body = {
    app: kintone.app.getId(),
    id: 17, // 更新したいレコードIDに書き換える
    record: {
      "提案商品": {
        "value": "商品A"
      }
    }
  };
  const result = await kintone.api(url, 'PUT', body);
  console.log(result);
})();