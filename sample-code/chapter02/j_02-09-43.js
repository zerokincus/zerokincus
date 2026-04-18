// オブジェクトのプロパティ名を配列で取り出す
const obj = {
  'プロパティ1': '値1',
  'プロパティ2': '値2',
  'プロパティ3': '値3'
};
const properties = Object.keys(obj);
console.log(properties); //出力結果　['プロパティ1', 'プロパティ2', 'プロパティ3']