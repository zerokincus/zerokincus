// setFieldShown.jsの内容
(() => {
  'use strict';

  // 詳細画面を表示したとき
  kintone.events.on('app.record.detail.show', (event) => {
    // グループフィールドを表示する
    kintone.app.record.setFieldShown('グループ', true);
  });

  // 追加画面または編集画面を表示したとき
  kintone.events.on(['app.record.create.show', 'app.record.edit.show'],
    (event) => {
      // グループフィールドを非表示にする
      kintone.app.record.setFieldShown('グループ', false);
    });
})();