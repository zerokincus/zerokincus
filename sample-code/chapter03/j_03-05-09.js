// ボタンクリック時の処理を追加
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

      // 次のように直接オブジェクト内のプロパティを変数に取得する方法もあります（分割代入）
      // const { address1, address2, address3 } = await

      fetchAddressByZip(zipcode);
      // フィールドへ反映（フィールドコード：都道府県、市区町村、町域名、住所）
      record['都道府県'].value = resp.address1;
      record['市区町村'].value = resp.address2;
      record['町域名'].value = resp.address3;
      record['住所'].value = resp.address1 + resp.address2 + resp.address3;
      kintone.app.record.set({ record });
      console.log(' 住所取得:', `${resp.address1}${resp.address2}${resp.address3}`);
    } catch (err) {
      console.error('住所取得エラー:', err);
      alert(`住所の取得に失敗しました。\n${err?.message || err}`);
    }
  });
  // スペース要素にボタンを表示
  space.appendChild(btn);
};