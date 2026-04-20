// 完成したコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show',
    'app.record.edit.show'
  ];

  // 住所を取得する関数
  const fetchAddressByZip = async (zipcode) => {
    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
    const resp = await kintone.proxy(url, 'GET', {}, {});
    const body = resp[0];
    const status = resp[1];

    // const [body, status] = await kintone.proxy(url, 'GET', {}, {});
    // のようにまとめて記述する方法もあります。
    
    if (status !== 200) throw new Error(`HTTP ${status}`);
    const data = JSON.parse(body); // JSONをオブジェクトに変換
    // リクエストは成功したが住所が得られなかったときのエラー処理
    if (data.status === 200 && data.results === null) {
      // data中のエラーメッセージを、上位のcatchに渡す
      throw new Error('住所が存在しませんでした');
    }
    // results配列の1つめの要素を取得する
    const r = data.results[0];
    // 関数の戻り値でオブジェクトを返す
    return {
      address1: r.address1, address2: r.address2, address3: r.address3
    };
  };

  // ボタン表示・クリック時の処理を行う関数
  const addButton = () => {
    const space = kintone.app.record.getSpaceElement('getAddress');

    //ボタンの要素を生成する
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = '住所取得';
    btn.className = 'kintoneplugin-button-normal'; //装飾しない場合は不要

    // ボタンクリック時の処理
    btn.addEventListener('click', async () => {
      try {
        const record = kintone.app.record.get().record;
        const raw = record['郵便番号'].value;

        // ハイフン等が入っていたときに数字だけにする処理（正規表現）
        const zipcode = String(raw).replace(/\D/g, '');

        // 郵便番号の桁数チェック
        if (zipcode.length !== 7) {
          alert('郵便番号は7桁の半角数字で入力してください。');
          return;
        }
        const resp = await fetchAddressByZip(zipcode);

        // 直接オブジェクト内のプロパティを変数に取得する方法もあります（分割代入）
        // const { address1, address2, address3 } = await
        fetchAddressByZip(zipcode);

        // フィールドへ反映（フィールドコード：都道府県、市区町村、町域名、住所）
        record['都道府県'].value = resp.address1;
        record['市区町村'].value = resp.address2;
        record['町域名'].value = resp.address3;
        record['住所'].value = resp.address1 + resp.address2 + resp.address3;
        kintone.app.record.set({ record });
        console.log(resp);
      } catch (err) {
        console.error('住所取得エラー:', err);
        alert(`住所の取得に失敗しました。\n${err?.message || err}`);
      }
    });
    // スペース要素にボタンを表示
    space.appendChild(btn);
  };

  // イベントハンドラーの登録
  kintone.events.on(eventType, (event) => {
    addButton();
    return event;
  });
})();