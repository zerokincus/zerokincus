// パスワード認証の例
/*
{
  "X-Cybozu-Authorization": "QWRtaW5pc3RyYXRvcjpjeWJvenU="
}
*/
// Base64エンコードを行う方法
const encoded = btoa('Administrator:cybozu');
console.log(encoded);
// 出力結果：　'QWRtaW5pc3RyYXRvcjpjeWJvenU='