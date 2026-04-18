// カスタマイズ処理の記述
(() => {
  'use strict';
  const eventType = 'app.record.create.show';
  kintone.events.on(eventType, (event) => {
    event.record['内容'].value = '※具体的な商談内容を箇条書きで簡潔に記載してください';
    return event;
  });
})();