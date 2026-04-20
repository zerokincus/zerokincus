// 501件目から1000件目までのレコードを取得するコード
// 2回目の処理
const url = kintone.api.url('/k/v1/records.json', true);
const body = {
  app: kintone.app.getId(),
  query: '$id > 500 order by $id asc limit 500'
};
const resp = await kintone.api(url, 'GET', body);
console.log(resp.records); // 501～1000のレコードが取得される