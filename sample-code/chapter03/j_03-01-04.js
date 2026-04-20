// コンソール実行するコード
const url = kintone.api.url('/k/v1/record.json', true);
const param = { app: appId, id: recordId };

kintone.api(url, 'GET', param, (resp) => {
  console.log(resp);
}, (error) => {
  console.error(error);
});