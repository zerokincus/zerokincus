// スプレッド構文を用いて新たな配列を作る
const array1 = ['要素1', '要素2', '要素3'];
const array2 = ['要素4', '要素5'];
const newArray = [...array1, ...array2];
console.log(newArray);

//出力結果 ['要素1', '要素2', '要素3', '要素4', '要素5']