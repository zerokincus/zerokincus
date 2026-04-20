// 関数式でコールバック関数を定義
const url = kintone.api.url('/k/v1/record.json', true);
const param = { app: appId, id: recordId };
const successCallback = (resp) => {
  console.log(resp);
};
const failureCallback = (error) => {
  console.error(error);
};

kintone.api(url, 'GET', param, successCallback, failureCallback);