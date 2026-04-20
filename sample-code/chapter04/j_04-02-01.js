// setConfig()関数のサンプルコード
const config = {
  key1: 'value1',
  key2: 'value2'
};

await new Promise((resolve) => {
  kintone.plugin.app.setConfig(config, () => {
    resolve();
  });
});