// setGoupFieldOpen.jsの内容
(() => {
  'use strict';
  
  // 詳細画面を表示したとき
  kintone.events.on('app.record.detail.show', (event) => {
    // グループフィールドを開く
    kintone.app.record.setGroupFieldOpen('グループ', true);
  });

  // 追加画面または編集画面を表示したとき
  kintone.events.on(['app.record.create.show', 'app.record.edit.show'],
    (event) => {
      // グループフィールドを閉じる
      kintone.app.record.setGroupFieldOpen('グループ', false);
    });
})();