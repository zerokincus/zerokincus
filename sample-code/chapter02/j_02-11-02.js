// VIEW_IDをコンソールへ出力する
(async () => {
  const result = await kintone.app.getView();
  console.log(result.id);
})();