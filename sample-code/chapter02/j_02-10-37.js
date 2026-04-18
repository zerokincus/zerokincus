// 商談フェーズの背景色を変更
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

    const record = records[0];
    const phaseValue = record['商談フェーズ'].value;
    const phaseElements = kintone.app.getFieldElements('商談フェーズ');
    const el = phaseElements[0];
    el.style.backgroundColor = colorCode.phase[phaseValue];
    
    return event;
  });
})();