// 「ユーザーを取得する」リクエストを実装したコード（再帰処理なし）
(() => {
  'use strict';

  // ユーザー情報を取得する非同期関数
  const fetchUserInfo = async () => {
    // GETリクエスト用のパラメータ設定
    // ここではユーザーを指定せずに取得する例です。特定のユーザーを取得する場合は、idsまたはcodesパラメータを追加してください。
    const params = { offset: 0, size: 100 };

    // 例：特定のユーザーIDを指定する場合
    // const params = { offset: 0, size: 100, ids: '123,456,789' };

    try {
      // User APIにGETリクエストを送信
      const response = await kintone.api('/v1/users.json', 'GET', params);
      // ユーザー情報を取得したら結果を返す
      return response.users;
    } catch (error) {
      console.error('ユーザー情報取得中にエラーが発生:', error);
      throw error;
    }
  };

  // 一覧画面表示時にユーザー情報取得ボタンを配置
  kintone.events.on('app.record.index.show', (event) => {
    // すでにユーザー情報取得ボタンが存在する場合は、重複追加を防ぐために処理を終了する
    if (document.getElementById('fetchUserButton') !== null) return;

    // ユーザー情報取得ボタンを新規作成
    const fetchUserButton = document.createElement('button');
    fetchUserButton.id = 'fetchUserButton';
    fetchUserButton.innerHTML = 'ユーザー情報取得';

    // ボタンがクリックされたとき、ユーザー情報取得を実行
    fetchUserButton.onclick = async () => {
      try {
        const users = await fetchUserInfo();
        console.log('取得したユーザー情報:', users);
        window.alert('ユーザー情報を取得しました。詳細はコンソールをご確認ください。');
      } catch (error) {
        window.alert('ユーザー情報の取得に失敗しました。');
      }
    };

    // ヘッダーメニュー領域にボタンを追加
    kintone.app.getHeaderMenuSpaceElement().appendChild(fetchUserButton);
    
    // イベントオブジェクトを返す
    return event;
  });
})();