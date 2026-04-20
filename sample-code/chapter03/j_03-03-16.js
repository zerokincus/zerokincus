// 完成コード例
(() => {
  'use strict';
  const TARGET_APP_ID = 2045; //物品調達管理アプリのアプリIDに書き換える
  const eventType = 'app.record.detail.process.proceed';
  
  kintone.events.on(eventType, async (event) => {
    const record = event.record;
    // プロセス管理アクションの判定条件
    const isTargetNextStatus = event.nextStatus.value === '承認';

    if (isTargetNextStatus) {
      try {
        // 登録用レコード配列生成
        const tableRows = record['明細'].value;
        const records = tableRows.map((row) => {
          return {
            '申請レコード番号': { value: Number(record['$id'].value) },
            '依頼者': { value: [{ code: record['申請者'].value.code }] },
            '商品名': { value: row.value['商品名'].value },
            '摘要': { value: row.value['摘要'].value },
            '単価': { value: row.value['単価'].value },
            '数量': { value: row.value['数量'].value }
          };
        });
        const param = {
          app: TARGET_APP_ID,
          records: records
        };
        console.log(param);
        const client = new KintoneRestAPIClient();
        await client.record.addRecords(param);
        kintone.showNotification('SUCCESS', ` 物品調達管理アプリに${records.length}件のレコードを登録しました`);
      } catch (error) {
        event.error = 'レコード転記に失敗しました。承認をキャンセルします';
        console.error(error);
      }
    }
    return event;
  });
})();