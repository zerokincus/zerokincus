// kintoneにログインした画面で実行するコード
const zipcode = '1030027';
const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
const resp = await kintone.proxy(url, 'GET', {}, {});
console.log(resp);