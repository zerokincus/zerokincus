// レコードの値を取得して、修正後、セットする
// #1 レコードの値を取得する
const recordObj = kintone.app.record.get();

// #2 取得したオブジェクトに修正点を反映する
recordObj.record['フィールドコード'].value = '変更後の値';

// #3 レコードの値をセットする
kintone.app.record.set(recordObj);