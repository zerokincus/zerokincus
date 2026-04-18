// kintoneのフィールド値から日時データを取得
const record = kintone.app.record.get().record;
const value = record['日時'].value;
const date = luxon.DateTime.fromISO(value);