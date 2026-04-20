// reduce()メソッドの使用例
const array = [1, 2, 3, 4];
const sum = array.reduce((prev, value) => {
  return prev + value;
}, 0);
console.log(sum); // 出力結果：10