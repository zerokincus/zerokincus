// チェックボックスへのレコード状態を反映するコード例
(() => {
  'use strict';

  // 対象とするカスタマイズビューの一覧ID
  const TARGET_VIEW_ID = 一覧ID; // ご自身の一覧IDに書き換えてください

  kintone.events.on('app.record.index.show', (event) => {
    const records = event.records;

    // 対象のカスタマイズビュー以外では処理しない
    if (event.viewId !== TARGET_VIEW_ID) {
      return event;
    }

    // 対象レコードが0件の場合は処理しない
    if (!records || records.length === 0) {
      return event;
    }

    // カスタマイズビューのルート要素を取得
    const root = document.getElementById('custom-view-root');
    if (!root) {
      return event;
    }

    // 要素の増殖防止
    root.innerHTML = '';
    /* ===== ヘッダーの表示 ===== */
    const header = document.createElement('div');
    header.textContent = '所属長確認済';
    root.appendChild(header);

    // レコード数分のチェックボックスを生成して配置
    records.forEach((record) => {
      // 1レコード分の表示単位として行用の要素を作成する
      const row = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // チェックボックスフィールド値の配列を取得する
      const checkedValues = record.所属長確認済.value;

      // 選択肢「所属長確認済」が含まれている場合は ON にする
      checkbox.checked = checkedValues.includes('所属長確認済');
      
      row.appendChild(checkbox);
      root.appendChild(row);
    });
    return event;
  });
})();