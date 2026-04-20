// 「ユーザーを取得する」リクエストを実装したコード（再帰処理あり）
(() => {
  'use strict';

  // 全ユーザー情報を取得するために再帰処理を行う非同期関数
  const fetchUserInfo = async (offset = 0, size = 100, fetchedUsers = []) => {
    // GETリクエスト用のパラメータ設定
    const params = { offset, size };

    try {
      // User APIにGETリクエストを送信
      const response = await kintone.api('/v1/users.json', 'GET', params);
      // 取得したユーザー情報を既存のデータと合成
      const users = fetchedUsers.concat(response.users);
      // 取得件数が上限に達している場合、次のデータを取得するために再帰呼び出し
      if (response.users.length === size) {
        return await fetchUserInfo(offset + size, size, users);
      }
      // すべてのユーザー情報を取得したら結果を返す
      return users;
    } catch (error) {
      console.error('ユーザー情報取得中にエラーが発生:', error);
      throw error;
    }
  };

  // 一覧画面表示時にユーザー情報取得ボタンを配置
  kintone.events.on('app.record.index.show', (event) => {
    // すでにユーザー情報取得ボタンが存在する場合は何もしない
    if (document.getElementById('fetchUserButton') !== null) return event;

    // ユーザー情報取得ボタンを新規作成
    const fetchUserButton = document.createElement('button');
    fetchUserButton.id = 'fetchUserButton';
    fetchUserButton.innerHTML = 'ユーザー情報取得';

    // ボタンがクリックされたとき、ユーザー情報取得を実行
    fetchUserButton.onclick = async () => {
      try {
        // ユーザー情報の取得
        const allUsers = await fetchUserInfo();
        console.log('取得した全ユーザー情報:', allUsers);
        window.alert(`全${allUsers.length}件のユーザー情報を取得しました。詳細はコンソールをご確認ください。`);
      } catch (error) {
        window.alert('ユーザー情報の取得に失敗しました。');
      }
    };
    
    // ヘッダーメニュー領域にボタンを追加
    kintone.app.getHeaderMenuSpaceElement().appendChild(fetchUserButton);
    return event;
  });
})();