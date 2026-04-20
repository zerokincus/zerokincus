// 他フィールドを表示するコード例
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

    /* ===== テーブル作成 ===== */
    const table = document.createElement('table');

    /* ===== ヘッダー ===== */
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const detailTh = document.createElement('th');
    detailTh.textContent = '詳細';
    headerRow.appendChild(detailTh);
    const checkTh = document.createElement('th');
    checkTh.textContent = '所属長確認済';
    headerRow.appendChild(checkTh);
    const dateTh = document.createElement('th');
    dateTh.textContent = '日付';
    headerRow.appendChild(dateTh);
    const creatorTh = document.createElement('th');
    creatorTh.textContent = '作成者';
    headerRow.appendChild(creatorTh);
    const workTh = document.createElement('th');
    workTh.textContent = '業務内容';
    headerRow.appendChild(workTh);
    const impressionTh = document.createElement('th');
    impressionTh.textContent = '所感、学び';
    headerRow.appendChild(impressionTh);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    /* ===== レコード行 ===== */
    const tbody = document.createElement('tbody');
    records.forEach((record) => {
      const row = document.createElement('tr');

      /* 詳細（レコード番号リンク） */
      const detailTd = document.createElement('td');
      const detailLink = document.createElement('a');
      detailLink.href = `${location.origin}/k/${kintone.app.getId()}/show#record=${record.$id.value}`;
      detailLink.textContent = record.$id.value;
      detailLink.target = '_blank';
      detailTd.appendChild(detailLink);
      row.appendChild(detailTd);

      /* 所属長確認済（チェックボックス） */
      const checkTd = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const checkedValues = record.所属長確認済.value;
      checkbox.checked = checkedValues.includes('所属長確認済');
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

      checkTd.appendChild(checkbox);
      row.appendChild(checkTd);

      /* 日付 */
      const dateTd = document.createElement('td');
      dateTd.textContent = record.日付.value;
      row.appendChild(dateTd);

      /* 作成者 */
      const creatorTd = document.createElement('td');
      creatorTd.textContent = record.作成者.value.name;
      row.appendChild(creatorTd);

      /* 業務内容 */
      const workTd = document.createElement('td');
      workTd.textContent = record.業務内容.value;
      row.appendChild(workTd);

      /* 所感、学び */
      const impressionTd = document.createElement('td');
      impressionTd.textContent = record.所感_学び.value;
      row.appendChild(impressionTd);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    root.appendChild(table);

    return event;
  });
})();