// Fetch APIによるファイルアップロードのリクエストの例
const blob = new Blob(['テストファイルです'], {
  type: 'text/plain',
});
const formData = new FormData();
// ファイルをアップロードするAPIはPOSTメソッドのため、CSRFトークンを設定する
formData.append('__REQUEST_TOKEN__', kintone.getRequestToken());
formData.append('file', blob, 'test.txt');

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};
const resp = await fetch('/k/v1/file.json', {
  method: 'POST',
  headers,
  body: formData,
});
const respData = await resp.json();
console.log(respData);