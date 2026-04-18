// オブジェクト型は参照がコピー
const userA = { name: 'Taro' };
const userB = userA;

userB.name = 'Hanako';

// 同じ実体を指しているので、userAも変わる
console.log(userA.name);  // 'Hanako'

// 配列も参照がコピー
const listA = ['red', 'blue'];
const listB = listA;

listB.push('green');

console.log(listA); // ['red', 'blue', 'green']