// レコード登録処理
const param = {
  app: TARGET_APP_ID,
  records: records
};
await client.record.addRecords(param);