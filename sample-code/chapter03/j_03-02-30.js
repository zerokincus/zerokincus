// nextを使ったカーソルのループ処理
const url = kintone.api.url('/k/v1/records/cursor.json', true);
const body = {
  id: '3c889b6a-5506-4d60-91c3-c579a3e1ec05'
};
let hasMore = true;
let allRecords = [];

while (hasMore) {
  const resp = await kintone.api(url, 'GET', body);
  hasMore = resp.next;
  allRecords.push(...resp.records);
}
console.log(allRecords);