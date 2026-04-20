// 完成コード例
(() => {
  'use strict';
  const events = [
    'app.record.detail.show'
  ];
  kintone.events.on(events, async (event) => {
    const record = event.record;
    try {
      // 関連レコード一覧の連携アプリIDを取得 ①
      const relatedAppId = kintone.app.getRelatedRecordsTargetAppId('案件一覧');

      // 連携先アプリのレコード取得（複数レコード） ②
      const url = kintone.api.url('/k/v1/records.json', true);
      const relatedKeyValue = record['顧客No'].value;
      const body = {
        app: relatedAppId,
        fields: ['$id', '売上'],
        query: `顧客No_ = ${relatedKeyValue}`
      };
      const resp = await kintone.api(url, 'GET', body);
      console.log(resp);

      // 売上の合計値算出 ③
      const totalSales = resp.records.reduce((prev, record) => {
        return prev + Number(record['売上'].value);
      }, 0);

      // 数値の表示用フォーマット（¥ 999,999）への変換 ④
      const formatted = totalSales.toLocaleString('ja-JP', {
        style: 'currency', currency: 'JPY'
      });
      console.log(formatted);

      // スペース要素への表示 ⑤
      const spaceField = kintone.app.record.getSpaceElement('totalSales');
      spaceField.innerHTML = `売上合計：<br>${formatted}`;

    } catch (error) {
      console.error(error);
    }
    return event;
  });
})();