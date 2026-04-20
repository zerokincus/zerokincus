// async/awaitの基本形
// async関数
(async () => {
  // async関数の中で awaitをつけて非同期処理APIを実行
  const result = await kintone.app.get(); //アプリ情報を取得するAPI
  // 取得した結果を使った処理を実行
  console.log(result);
})();