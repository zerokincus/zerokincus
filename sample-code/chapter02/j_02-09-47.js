// フィールドコードの一覧を配列で取り出す
const record = kintone.app.record.get();
const fields = Object.keys(record.record);
console.log(fields);