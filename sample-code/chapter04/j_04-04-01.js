// async/awaitを使った記述方法
(async () => {
  try {
    const url = 'https://api.example.com';
    // successCallbackを省略したのでPromiseオブジェクトを返す
    const resp = await kintone.plugin.app.proxy(PLUGIN_ID, url, 'GET', {},
      {});
    // success
    console.log(resp);
  } catch (error) {
    // error
    console.log(error);
  }
})();