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
  if (data.status !== 200 || data.results.length === 0) {
    // data中のエラーメッセージを、上位のcatchに渡す
    throw new Error(data.message);
  }
  // results配列の1つめの要素を取得する
  const r = data.results[0];
  
  // 関数の戻り値でオブジェクトを返す
  return {
    address1: r.address1, address2: r.address2, address3: r.address3
  };
};