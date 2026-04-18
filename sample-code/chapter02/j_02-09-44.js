// forEach文で結果を出力
const obj = {
  'プロパティ1': '値1',
  'プロパティ2': '値2',
  'プロパティ3': '値3'
};
Object.keys(obj).forEach((key) => {
  console.log(key);
});
// 出力結果
// プロパティ1
// プロパティ2
// プロパティ3