// ループ処理でレコードを取得するコード
const url = kintone.api.url('/k/v1/records.json', true);
let allRecords = []; // 取得したレコードを貯めていく配列
let lastId = 0; // レコードID最大値の初期値（1回目の取得で使う値）
const limit = 500;
let hasMore = true; // まだレコードが残っているかの初期値

// レコードの繰り返し取得（whileループ）
while (hasMore) {
  const body = {
    app: kintone.app.getId(),
    query: `$id > ${lastId} order by $id asc limit ${limit}`
  };
  const resp = await kintone.api(url, 'GET', body);

  // 取得レコード件数
  const len = resp.records.length;

  if (len > 0) {
    // allRecordsに取得したレコード情報を追加
    allRecords.push(...resp.records);
    // 取得したレコードの中のレコードID最大値を取得
    lastId = Math.max(...resp.records.map(r => Number(r.$id.value)));
  }
  
  // レコードが残っているかの判定（取得レコード件数 = limit）
  hasMore = len === limit;
  // 取得状況をログ出力
  console.log(`Get: ${len}, LastId: ${lastId}, hasMore: ${hasMore}`)
}
console.log(allRecords);