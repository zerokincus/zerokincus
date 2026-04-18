// アプリの説明欄の開閉を制御するコード
(() => {
  'use strict';
  const openEvents = [
    'app.record.create.show',
    'app.record.edit.show'
  ];
  const closeEvents = [
    'app.record.detail.show',
    'app.record.index.show'
  ];

  // 関数の宣言（非同期処理のため async関数）
  async function showDescription(state) {
    await kintone.app.showDescription(state);
  }

  kintone.events.on(openEvents, (event) => {
    showDescription('OPEN');
    return event;
  });
  
  kintone.events.on(closeEvents, (event) => {
    showDescription('CLOSED');
    return event;
  });
})();