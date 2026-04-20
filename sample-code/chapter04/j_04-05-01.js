// Promiseオブジェクトを使った記述方法
const data = {
  format: 'RAW',
  value: '<some blob object>'
};
kintone.plugin.app.proxy.upload('mjjfipoklghomcgafnajfibfgllhpocm', 'https://sample.com', 'POST', {}, data).then((args) => {
  // success
  /* args[0] -> body(文字列)
  * args[1] -> status(数値)
  * args[2] -> headers(オブジェクト)
  */
  console.log(args[1], JSON.parse(args[0]), args[2]);
}, (error) => {
  // error
  console.log(error); // proxy APIのレスポンスボディ(文字列)を表示
});