// スプレッド構文を用いてarray2の配列を展開してからpush
const array1 = ['要素1', '要素2', '要素3'];
const array2 = ['要素4', '要素5'];
array1.push(...array2);
console.log(array1);

//出力結果 ['要素1', '要素2', '要素3', '要素4', '要素5']