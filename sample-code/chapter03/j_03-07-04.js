// チェックボックスクリック時にレコード更新するコード例
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

    // レコード数分の行を生成し、チェックボックスの状態を反映・更新処理を追加
    records.forEach((record) => {
      // 1レコード分の表示単位として行用の要素を作成する
      const row = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // チェックボックスフィールド値の配列を取得する
      const checkedValues = record.所属長確認済.value;

      // 選択肢「所属長確認済」が含まれている場合は ON にする
      checkbox.checked = checkedValues.includes('所属長確認済');

      // チェックボックスをクリックしたときにレコードを更新する
      checkbox.addEventListener('change', async () => {
        const param = {
          app: kintone.app.getId(),
          id: Number(record.$id.value),
          record: {
            所属長確認済: {
              value: checkbox.checked ? ['所属長確認済'] : []
            }
          }
        };
        try {
          await kintone.api(
            kintone.api.url('/k/v1/record', true),
            'PUT',
            param
          );
        } catch (error) {
          console.error('レコード更新に失敗しました:', error);
          window.alert('更新処理に失敗しました。画面を再読み込みしてください。');
        }
      });

      row.appendChild(checkbox);
      root.appendChild(row);
    });
    
    return event;
  });
})();