// kintone UI Componentを利用してUI改善したコード
(() => {
  'use strict';

  // 読み込んだkintone UI Componentのバージョンを指定する
  // （例：GitHub リリースページで取得した 1.20.1 を入れる）
  const Kuc = Kucs['1.20.1']; // ← 数字を導入バージョンに合わせて変更

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

  // レコード一覧画面の表示イベントでボタンを配置
  kintone.events.on('app.record.index.show', (event) => {
    if (document.getElementById('fetchUserButton') !== null) return event;

    // Kuc.Button を使用して、kintoneライクなユーザー情報取得ボタンを新規作成
    const fetchUserButton = new Kuc.Button({
      text: 'ユーザー情報取得',
      type: 'normal'
    });

    // ボタンがクリックされたとき、ユーザー情報取得を実行
    fetchUserButton.addEventListener('click', async () => {
      try {
        // --- 既存レコードの全件削除処理 ---
        const appId = kintone.app.getId();

        // 削除対象となる全レコードの $id を取得（kintone REST API Client を使用）
        const existingRecords = await client.record.getAllRecordsWithCursor({
          app: appId,
          fields: ['$id']
        });

        // 削除対象のIDリスト作成
        const deleteRecords = existingRecords.map(record => ({
          id:
            record.$id.value
        }));

        // 既存レコードがある場合、全件削除（kintone REST API Client を使用）
        if (deleteRecords.length > 0) {
          await client.record.deleteAllRecords({
            app: appId,
            records: deleteRecords
          });
          console.log('既に存在するレコードを削除しました:', deleteRecords.length, '件');
        } else {
          console.log('削除するレコードはありません。');
        }

        // -----------------------------------
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
          app: appId,
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
    });
    
    // ヘッダーメニュー領域にボタンを追加
    kintone.app.getHeaderMenuSpaceElement().appendChild(fetchUserButton);
    return event;
  });
})();