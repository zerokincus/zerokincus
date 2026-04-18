// 新しい配列を作成する
const array = [10, 20, 30];
const newArray = array.map((value) => {
  return value * 1.1 // 各要素の値に1.1をかけた値を返す
});
console.log(newArray); // 出力結果　[11, 22, 33]