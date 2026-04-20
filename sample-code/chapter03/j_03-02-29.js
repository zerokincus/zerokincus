// カーソルからレコードを取得するAPIのコード例
const url = kintone.api.url('/k/v1/records/cursor.json', true);
const body = {
  id: '3c889b6a-5506-4d60-91c3-c579a3e1ec05'
};
await kintone.api(url, 'GET', body);