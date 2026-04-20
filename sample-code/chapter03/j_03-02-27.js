// offsetを利用するコード例
// ループ処理
const url = kintone.api.url('/k/v1/records.json', true);
let allRecords = [];
const limit = 500;
let offset = 0; // offsetの初期値
let hasMore = true; // まだレコードが残っているかの初期値

while (hasMore) {
  const body = {
    app: kintone.app.getId(),
    query: `limit ${limit} offset ${offset}`
  };
  const resp = await kintone.api(url, 'GET', body);
  const len = resp.records.length;

  if (len > 0) {
    allRecords.push(...resp.records);
    // offset更新
    offset = offset + limit;
  }
  // hasMore更新（ループ継続条件）
  hasMore = len === limit;

  // 取得状況をログ出力
  console.log(`Get: ${len}, offset: ${offset}, hasMore: ${hasMore}`)
}
console.log(allRecords);