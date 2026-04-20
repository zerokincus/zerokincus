// 「案件管理番号」フィールドを更新
(() => {
  'use strict';
  const eventType = 'app.record.create.submit';

  kintone.events.on(eventType, async (event) => {
    const record = event.record;

    // 既存の最新レコードを取得
    const client = new KintoneRestAPIClient();
    const param = {
      app: kintone.app.getId(),
      fields: ['$id', '案件管理番号', '作成日時'],
      query: 'order by 作成日時 desc limit 1'
    };

    try {
      const result = await client.record.getRecords(param);
      const lastRecord = result.records[0];
      const lastKeyValue = lastRecord['案件管理番号'].value;

      // 文字列を「-」で分割
      const [prefix, numberPart] = lastKeyValue.split('-');

      // 数字部分を数値に変換して +1、その後文字列に変換して左ゼロ埋め
      const newNumber = String(Number(numberPart) + 1).padStart(numberPart.length, '0');
      
      // 接頭文字と結合して返す
      const newKeyValue = `${prefix}-${newNumber}`;
      record['案件管理番号'].value = newKeyValue;
    } catch (error) {
      console.error(error);
    }
    return event;
  });
})();