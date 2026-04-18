// 関数式は巻き上げの対象外なので、関数の呼び出しがエラーになる例
sayHello();

const sayHello = function () {
  console.log('Hello!');
}