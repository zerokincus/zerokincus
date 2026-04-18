// 条件に一致した最初の要素を取り出す
const array = [10, 20, 30];
const newArray = array.find((value) => {
  return value > 15; // 15よりも大きい値を探す
});
console.log(newArray); // 出力結果　20