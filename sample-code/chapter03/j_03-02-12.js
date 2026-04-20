// 100件以上のアプリ情報を取得するコード
const url = kintone.api.url('/k/v1/apps.json', true);
let allApps = [];
const limit = 100; // 最大取得数
let offset = 0; // offsetの初期値
let hasMore = true; // まだレコードが残っているかの初期値

while (hasMore) {
  const body = {
    name: '管理',
    offset: offset
  };
  console.log(body);
  const resp = await kintone.api(url, 'GET', body);
  const len = resp.apps.length;

  if (len > 0) {
    allApps.push(...resp.apps);
    // offset更新
    offset = offset + limit;
  }
  // hasMore更新（ループ継続条件）
  hasMore = len === limit;
  
  // 取得状況をログ出力
  console.log(`Get: ${len}, offset: ${offset}, hasMore: ${hasMore}`)
}
console.log(allApps);