// レコード追加ボタンの表示／非表示を制御するコード
(() => {
  'use strict';
  const events = [
    'app.record.index.show'
  ];

  // 関数の宣言（非同期処理のため async関数）
  async function showAddRecordButton(state) {
    await kintone.app.showAddRecordButton(state);
  }

  kintone.events.on(events, (event) => {
    const viewId = event.viewId;
    
    // 一覧のviewIdは環境に合わせて設定してください
    if (viewId === 13308897) {
      showAddRecordButton('HIDDEN');
    }
    return event;
  });
})();