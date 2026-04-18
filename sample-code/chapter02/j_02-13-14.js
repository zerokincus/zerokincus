// 全体のコード
(() => {
  'use strict';
  // 年齢計算の関数： calcAge(record)
  function calcAge(record) {
    const birthday = record['生年月日'].value;
    const luxonBirthday = luxon.DateTime.fromISO(birthday);
    const today = luxon.DateTime.local();
    const age = today.diff(luxonBirthday, ['years', 'months']).years;

    return age;
  }
  // レコード詳細画面の処理
  const detailShowEvent = ['app.record.detail.show'];
  kintone.events.on(detailShowEvent, (event) => {
    const record = event.record;
    const birthday = record['生年月日'].value;
    if (birthday) {
      const age = calcAge(record); // 年齢計算
      // スペースの要素に年齢を表示
      const spaceField = kintone.app.record.getSpaceElement('age');
      spaceField.innerHTML = `今日時点の年齢：<br>${age}歳`;
    }
    return event;
  });
  // レコード一覧画面の処理
  const indexShowEvent = ['app.record.index.show'];
  kintone.events.on(indexShowEvent, (event) => {
    const records = event.records;
    // テーブル各行のフィールド要素を取得
    const elements = kintone.app.getFieldElements('生年月日');
    // 各行に対して繰り返し処理（i:インデックス）
    elements.forEach((element, i) => {
      const record = records[i];
      const age = calcAge(record);
      const span = element.querySelector('span');
      if (span.textContent) {
        span.textContent += `（${age}歳）`;
      }
    });
    return event;
  });
})();   