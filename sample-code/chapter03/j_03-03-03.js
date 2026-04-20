// getAllRecordsのコーディング例
const client = new KintoneRestAPIClient();

(async () => {
  try {
    const param = {
      app: kintone.app.getId(),
      fields: ['$id', '会社名', '初回商談日', '詳細'],
      condition: '会社名 = "株式会社サイボウズ商事"',
      orderBy: '初回商談日 asc'
    };
    const res = await client.record.getAllRecords(param);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})();