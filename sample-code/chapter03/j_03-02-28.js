// カーソルを作成するAPIのコード例
const url = kintone.api.url('/k/v1/records/cursor.json', true);
const body = {
  app: kintone.app.getId(),
  fields: ['レコード番号', '作成者', '作成日時'],
  query: 'order by レコード番号 asc',
  size: 500
};

await kintone.api(url, 'POST', body);

// 出力例
// {
// "id": "3c889b6a-5506-4d60-91c3-c579a3e1ec05",
// "totalCount": "1465"
// }