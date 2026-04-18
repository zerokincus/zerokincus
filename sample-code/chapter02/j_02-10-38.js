// すべての行に処理を行う
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
      const record = records[i]; // i行目のレコードオブジェクトを取得
      const phaseValue = record['商談フェーズ'].value;
      el.style.backgroundColor = colorCode.phase[phaseValue];
    });
    return event;
  });
})();