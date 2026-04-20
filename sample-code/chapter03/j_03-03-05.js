// 最新レコードの取得
const client = new KintoneRestAPIClient();
const param = {
  app: kintone.app.getId(),
  fields: ['$id', '案件管理番号', '作成日時'],
  query: 'order by 作成日時 desc limit 1'
};
const result = await client.record.getRecords(param);
console.log(result);
const lastRecord = result.records[0];
console.log(lastRecord);