// 1001件目から1500件目までのレコードを取得するコード
// 3回目の処理
const url = kintone.api.url('/k/v1/records.json', true);
const body = {
  app: kintone.app.getId(),
  query: '$id > 1000 order by $id asc limit 500'
};
const resp = await kintone.api(url, 'GET', body);
console.log(resp.records); // 1001～1300のレコードが取得される