// 完成版のコード
(() => {
  'use strict';
  const colorCode = {
    'phase': {
      '商談予定': 'lightcyan',
      '提案中': 'lightcyan',
      '内示': 'palegreen',
      '受注': 'palegreen',
      '失注': 'lightpink',
      '保留/中止': 'silver'
    },
    'orderDate': {
      'future': '',
      'past': 'hotpink'
    }
  };
  const eventType = ['app.record.index.show'];
  kintone.events.on(eventType, (event) => {
    const records = event.records;

    // 商談フェーズの背景色変更処理
    const phaseElements = kintone.app.getFieldElements('商談フェーズ');
    phaseElements.forEach((el, i) => {
      const record = records[i];
      const phaseValue = record['商談フェーズ'].value;
      el.style.backgroundColor = colorCode.phase[phaseValue];
    });

    // 受注予定日の背景色変更処理
    const orderDateElements = kintone.app.getFieldElements('受注予定日');
    orderDateElements.forEach((el, i) => {
      const record = records[i];

      // 各条件の判定
      // 受注予定日が今日より前
      const orderDateValue = record['受注予定日'].value;
      const orderDate = new Date(orderDateValue); // 日付オブジェクトに変換
      const today = new Date(); // 本日の日付を取得
      today.setHours(0, 0, 0, 0); // 時刻の値を0:00:00にする
      // 判定結果
      const checkDate = orderDate < today;

      // 商談フェーズが「失注」「保留/中止」以外
      const phaseValue = record['商談フェーズ'].value;
      // 判定結果
      const checkPhase = phaseValue !== '失注' && phaseValue !== '保留/中止';
      
      if (checkDate && checkPhase) {
        el.style.backgroundColor = colorCode.orderDate.past;
      }
    });
    return event;
  });
  // 一覧のインライン編集後に背景色変更が行われるよう再読み込み処理
  const successEvents = [
    'app.record.index.edit.submit.success'
  ];
  kintone.events.on(successEvents, (event) => {
    event.url = location.href;
    return event;
  });
})();