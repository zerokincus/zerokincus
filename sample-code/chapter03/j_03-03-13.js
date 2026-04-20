// 登録データの作成
const tableRows = record['明細'].value;
const records = tableRows.map((row) => {
  const rowValue = row.value;
  return {
    '申請レコード番号': { value: Number(record['$id'].value) },
    '依頼者': { value: [{ code: record['申請者'].value.code }] },
    '商品名': { value: rowValue['商品名'].value },
    '摘要': { value: rowValue['摘要'].value },
    '単価': { value: rowValue['単価'].value },
    '数量': { value: rowValue['数量'].value }
  };
});
console.log(records);