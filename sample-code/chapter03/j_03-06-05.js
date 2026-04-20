// アプリへのユーザー情報のレコード登録を追加したコード
(() => {
  'use strict';

  // kintone REST API Client の初期化
  const client = new KintoneRestAPIClient();

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
        // 登録用レコードの配列に変換（User APIの形式 → kintoneアプリの形式）
        const records = allUsers.map((user) => {
          return {
            id: { value: user.id },
            code: { value: user.code },
            ctime: { value: user.ctime },
            mtime: { value: user.mtime },
            valid: { value: user.valid },
            name: { value: user.name },
            surName: { value: user.surName },
            givenName: { value: user.givenName },
            surNameReading: { value: user.surNameReading },
            givenNameReading: { value: user.givenNameReading },
            localName: { value: user.localName },
            localNameLocale: { value: user.localNameLocale },
            timezone: { value: user.timezone },
            locale: { value: user.locale },
            description: { value: user.description },
            phone: { value: user.phone },
            mobilePhone: { value: user.mobilePhone },
            extensionNumber: { value: user.extensionNumber },
            email: { value: user.email },
            callto: { value: user.callto },
            url: { value: user.url },
            employeeNumber: { value: user.employeeNumber },
            birthDate: { value: user.birthDate },
            joinDate: { value: user.joinDate },
            primaryOrganization: { value: user.primaryOrganization },
            sortOrder: { value: user.sortOrder }
          };
        });

        // レコード登録処理（kintone REST API Client を使用）
        const result = await client.record.addAllRecords({
          app: kintone.app.getId(),
          records: records
        });
        console.log('レコード登録結果:', result);
        window.alert(`全${records.length}件のユーザー情報を登録しました。`);
        
        // 画面のリロード処理
        location.reload();
      } catch (error) {
        console.error('登録処理中にエラーが発生しました:', error);
        window.alert('ユーザー情報の取得に失敗しました。');
      }
    };
    // ヘッダーメニュー領域にボタンを追加
    kintone.app.getHeaderMenuSpaceElement().appendChild(fetchUserButton);
    return event;
  });
})();