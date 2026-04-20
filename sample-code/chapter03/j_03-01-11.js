// 引数であるresp変数で非同期処理の結果を受け取る
return kintone.api(pathOrUrl, method, params).then((resp) => {
  // リクエスト成功後に行う処理
});