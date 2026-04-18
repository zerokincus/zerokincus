// オブジェクトのプロパティの値を配列で取り出す
const obj = {
  'プロパティ1': '値1',
  'プロパティ2': '値2',
  'プロパティ3': '値3'
};
const values = Object.values(obj);
console.log(values); //出力結果　['値1', '値2', '値3']