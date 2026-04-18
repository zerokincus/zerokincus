// メールアドレスを取得して文字列（1行）フィールドにセット
(() => {
  'use strict';
  const events = [
    'app.record.create.show',
    'app.record.edit.show'
  ];
  // レコードの値の取得～メールアドレスの取得＆セット～レコードの値をセットを関数化
  function setMailAddress() {  //①
    const recordObj = kintone.app.record.get();
    recordObj.record['メールアドレス'].value = kintone.getLoginUser().email;
    kintone.app.record.set(recordObj);
  }
  // 画面表示時にボタンを設置する処理
  kintone.events.on(events, (event) => {
    const newButton = document.createElement('button');  //②
    newButton.id = 'setEmail';
    newButton.innerText = 'メールアドレスをセットする';
    newButton.onclick = () => {
      setMailAddress();
    };

    const spaceField = kintone.app.record.getSpaceElement('space');
    spaceField.appendChild(newButton);

    return event;
  });
})();