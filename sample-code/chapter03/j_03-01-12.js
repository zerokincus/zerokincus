// リクエスト失敗時の記述にはcatch()メソッドを使う
return kintone.api(pathOrUrl, method, params).then((resp) => {
  // リクエスト成功後に行う処理
}).catch((error) => {
  // リクエスト失敗時の処理
  console.error(error.message);
});