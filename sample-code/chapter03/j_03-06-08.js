// 組織APIから取得した組織情報を登録するコード
(() => {
  'use strict';

  // 読み込んだkintone UI Componentのバージョンを指定する
  // （例：GitHub リリースページで取得した 1.20.1 を入れる）
  const Kuc = Kucs['1.20.1']; // ← 数字を導入バージョンに合わせて変更

  // kintone REST API Client の初期化
  const client = new KintoneRestAPIClient();

  // 組織情報を取得するために再帰処理を行う非同期関数
  const fetchOrgInfo = async (offset = 0, size = 100, fetchedOrgs = []) => {
    // GETリクエスト用のパラメータ設定
    const params = { offset, size };

    try {
      // User APIにGETリクエストを送信
      const response = await kintone.api('/v1/organizations.json', 'GET', params);

      // 取得したユーザー情報を既存のデータと合成
      const orgs = fetchedOrgs.concat(response.organizations);

      // 取得件数が上限に達している場合、次のデータを取得するために再帰呼び出し
      if (response.organizations.length === size) {
        return await fetchOrgInfo(offset + size, size, orgs);
      }

      // すべての組織情報を取得したら結果を返す
      return orgs;
    } catch (error) {
      console.error('組織情報取得中にエラーが発生:', error);
      throw error;
    }
  };

  // レコード一覧画面の表示イベントでボタンを配置
  kintone.events.on('app.record.index.show', (event) => {
    if (document.getElementById('fetchOrgButton') !== null) return event;

    // Kuc.Button を使用して、kintoneライクな組織情報取得ボタンを新規作成
    const fetchOrgButton = new Kuc.Button({
      text: '組織情報登録',
      type: 'normal'
    });

    // ボタンがクリックされたとき、組織情報取得を実行
    fetchOrgButton.addEventListener('click', async () => {
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
          console.log('既に存在するレコードを削除しました:', deleteRecords.length,
            '件');
        } else {
          console.log('削除するレコードはありません。');
        }

        // -----------------------------------
        // 組織情報の取得
        const allOrgs = await fetchOrgInfo();
        console.log('取得した全組織情報:', allOrgs);

        // 登録用レコードの配列に変換（User APIの形式 → kintoneアプリの形式）
        const records = allOrgs.map((org) => {
          return {
            id: { value: org.id },
            code: { value: org.code },
            name: { value: org.name },
            localName: { value: org.localName },
            localNameLocale: { value: org.localNameLocale },
            parentCode: { value: org.parentCode },
            description: { value: org.description }
          };
        });

        // レコード登録処理（kintone REST API Client を使用）
        const result = await client.record.addAllRecords({
          app: appId,
          records: records
        });
        console.log('レコード登録結果:', result);
        window.alert(`全${records.length}件の組織情報を登録しました。`);

        // 画面のリロード処理
        location.reload();
      } catch (error) {
        console.error('登録処理中にエラーが発生しました:', error);
        window.alert('組織情報の取得または登録に失敗しました。');
      }
    });
    
    // ヘッダーメニュー領域にボタンを追加
    kintone.app.getHeaderMenuSpaceElement().appendChild(fetchOrgButton);
    return event;
  });
})();