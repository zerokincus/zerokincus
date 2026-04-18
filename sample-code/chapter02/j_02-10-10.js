// 非同期処理でPrimiseオブジェクトをコンソールに出力する
(async () => {
  const result = await kintone.app.get();
  console.log(result);
})();