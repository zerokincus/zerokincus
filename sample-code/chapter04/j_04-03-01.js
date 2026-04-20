// setProxyConfig()関数のサンプルコード
await new Promise((resolve) => {
  kintone.plugin.app.setProxyConfig(
    'https://api.example.com',
    'POST',
    {},
    {},
    () => {
      resolve();
    }
  );
});