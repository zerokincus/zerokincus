// サイドバーの開閉を制御するコード
(() => {
  'use strict';
  const showHistoryEvents = [
    'app.record.edit.show'
  ];
  const closeSideBarEvents = [
    'app.record.detail.show'
  ];

  // 関数の宣言（非同期処理のため async関数）
  async function showDescription(state) {
    await kintone.app.record.showSideBar(state);
  }

  kintone.events.on(showHistoryEvents, (event) => {
    showDescription('HISTORY');
    return event;
  });
  
  kintone.events.on(closeSideBarEvents, (event) => {
    showDescription('CLOSED');
    return event;
  });
})();