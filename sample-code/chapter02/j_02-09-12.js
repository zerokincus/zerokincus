// コード2-9-7をwhileで書き換えたコード
const array = record['チェックボックス'].value;
const arrayLength = array.length;
// 配列の要素数によって値が変わる　例：3

let i = 0;
while (i < arrayLength) {
  console.log(array[i]);
  i++;
}