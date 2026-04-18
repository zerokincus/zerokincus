// ルックアップのコピー先のフィールドの値を自動でクリアする
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show'
  ];
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    // ルックアップのコピー先のフィールドの値を自動でクリアする処理
    record['ルックアップ'].lookup = 'CLEAR';
    
    return event;
  });
})();