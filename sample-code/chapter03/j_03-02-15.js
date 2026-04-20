// Fetch APIによるリクエストの例
// fileKeyの取得 ①
const recordObj = kintone.app.record.get(); // コンソールからの実行を前提
const fileKey = recordObj.record['添付ファイル'].value[0].fileKey;

// クエリ付きのURL生成 ②
const params = {
  fileKey: fileKey
  };
  const urlForDownload = kintone.api.urlForGet('/k/v1/file.json', params,
  true);

  // リクエストヘッダー ③
  const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  };
  
  // リクエスト実行 ④
  const resp = await fetch(urlForDownload, {
  method: 'GET',
  headers,
  });
  const blob = await resp.blob();