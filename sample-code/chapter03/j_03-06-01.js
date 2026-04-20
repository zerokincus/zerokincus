// ユーザー情報を取得するコード
(() => {
  'use strict';

  // 一覧画面表示時にユーザー情報取得ボタンを配置

  kintone.events.on('app.record.index.show', (event) => {
    // すでにユーザー情報取得ボタンが存在する場合は、重複追加を防ぐために処理を終了する
    if (document.getElementById('fetchUserButton') !== null) return;
    
    // ユーザー情報取得ボタンを新規作成
    const fetchUserButton = document.createElement('button');
    fetchUserButton.id = 'fetchUserButton';
    fetchUserButton.innerHTML = 'ユーザー情報取得';

    // ボタンがクリックされたとき、アラートを表示
    fetchUserButton.onclick = () => {
      window.alert('ボタンがクリックされました！ ');
    };

    // ヘッダーメニュー領域にボタンを追加
    kintone.app.getHeaderMenuSpaceElement().appendChild(fetchUserButton);

    // イベントオブジェクトを返す
    return event;
  });
})();