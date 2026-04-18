// 数値や文字列などは値がコピーされる
let a = 10;
let b = a;
b = 20;

// aは10のまま
console.log(a); // 10
console.log(b); // 20