// 条件に合った要素を取り出す
const array = [10, 20, 30];
const newArray = array.filter((value) => {
  return value > 15; // 15よりも大きい値
});
console.log(newArray); // 出力結果　[20, 30]