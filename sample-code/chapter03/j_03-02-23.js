// 1件目から500件目までのレコードを取得するコード
// 1回目の処理
const url = kintone.api.url('/k/v1/records.json', true);
const body = {
  app: kintone.app.getId(),
  query: '$id > 0 order by $id asc limit 500'
};

const resp = await kintone.api(url, 'GET', body);
console.log(resp.records); // 1～500のレコードが取得される