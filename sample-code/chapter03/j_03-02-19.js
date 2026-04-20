// プラグインを追加しているアプリの一覧を取得するAPIのリクエストの例
const url = kintone.api.url('/k/v1/plugin/apps.json', true);
const body = {
  id: 'fdeplpmkengkldpdlaiegpokgmaabkkb',
};

const resp = await kintone.api(url, 'GET', body);
console.log(resp);