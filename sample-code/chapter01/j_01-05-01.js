// レコード印刷画面でグループを非表示にする
(() => {
  'use strict';

  // レコード印刷画面を表示したとき
  kintone.events.on('app.record.print.show', (event) => {
    
    // グループフィールドを非表示にする
    kintone.app.record.setFieldShown('グループ', false);
  });

})();