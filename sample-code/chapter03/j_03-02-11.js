// 複数のアプリの情報を取得するAPIのリクエストの例
const body = {
  name: '顧客管理'
};

await kintone.api(kintone.api.url('/k/v1/apps.json', true), 'GET', body);