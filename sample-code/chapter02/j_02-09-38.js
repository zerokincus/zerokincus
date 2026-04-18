// インデックス番号を取得してすべての要素に同じ処理を行う
const array = [10, 20, 30];
array.forEach((value, i) => {
  console.log(`#${i}: ${value}`);
});
// 出力結果
// #0: 10
// #1: 20
// #2: 30