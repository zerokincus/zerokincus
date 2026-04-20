// ボタンを表示する関数
const addButton = () => {
  const space = kintone.app.record.getSpaceElement('getAddress');
  //ボタンの要素を生成する
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = '住所取得';
  btn.className = 'kintoneplugin-button-normal'; //装飾しない場合は不要
  
  space.appendChild(btn);
};