// コンソールから入力するコード
const client = new KintoneRestAPIClient();

(async () => {
  try {
    const param = {
      app: kintone.app.getId(),
      id: 1
    };
    const res = await client.record.getRecord(param);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})();