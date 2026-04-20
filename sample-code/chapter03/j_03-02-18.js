// インストール済みのプラグインの一覧を取得するAPIのリクエストの例
const url = kintone.api.url('/k/v1/plugins.json', true);
const body = {
  limit: 10,
};

const resp = await kintone.api(url, 'GET', body);
console.log(resp);