// 51-modern-defaultを適用したコード例
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

    /* ===== テーブル作成（51-modern-default 前提） ===== */
    const table = document.createElement('table');
    table.className = 'kintoneplugin-table';

    /* ===== ヘッダー ===== */
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const thDetail = document.createElement('th');
    thDetail.className = 'kintoneplugin-table-th';
    thDetail.textContent = '詳細';
    thDetail.style.padding = '8px 12px';
    headerRow.appendChild(thDetail);

    const thCheck = document.createElement('th');
    thCheck.className = 'kintoneplugin-table-th';
    thCheck.textContent = '所属長確認済';
    thCheck.style.padding = '8px 12px';
    headerRow.appendChild(thCheck);

    const thDate = document.createElement('th');
    thDate.className = 'kintoneplugin-table-th';
    thDate.textContent = '日付';
    thDate.style.padding = '8px 12px';
    headerRow.appendChild(thDate);

    const thCreator = document.createElement('th');
    thCreator.className = 'kintoneplugin-table-th';
    thCreator.textContent = '作成者';
    thCreator.style.padding = '8px 12px';
    headerRow.appendChild(thCreator);

    const thWork = document.createElement('th');
    thWork.className = 'kintoneplugin-table-th';
    thWork.textContent = '業務内容';
    thWork.style.padding = '8px 12px';
    headerRow.appendChild(thWork);

    const thImpression = document.createElement('th');
    thImpression.className = 'kintoneplugin-table-th';
    thImpression.textContent = '所感、学び';
    thImpression.style.padding = '8px 12px';
    headerRow.appendChild(thImpression);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    /* ===== ボディ ===== */
    const tbody = document.createElement('tbody');

    records.forEach((record) => {
      const row = document.createElement('tr');

      /* 詳細リンク（レコード番号） */
      const detailTd = document.createElement('td');
      detailTd.style.padding = '8px 12px';

      const detailLink = document.createElement('a');
      detailLink.href = `${location.origin}/k/${kintone.app.getId()}/show#record=${record.$id.value}`;
      detailLink.textContent = record.$id.value;
      detailLink.target = '_blank';

      detailTd.appendChild(detailLink);
      row.appendChild(detailTd);

      /* チェックボックス */
      const checkTd = document.createElement('td');
      checkTd.style.padding = '8px 12px';
      checkTd.style.textAlign = 'center';

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
      dateTd.style.padding = '8px 12px';
      row.appendChild(dateTd);

      /* 作成者 */
      const creatorTd = document.createElement('td');
      creatorTd.textContent = record.作成者.value.name;
      creatorTd.style.padding = '8px 12px';
      row.appendChild(creatorTd);

      /* 業務内容 */
      const workTd = document.createElement('td');
      workTd.textContent = record.業務内容.value;
      workTd.style.padding = '8px 12px';
      row.appendChild(workTd);

      /* 所感、学び */
      const impressionTd = document.createElement('td');
      impressionTd.textContent = record.所感_学び.value;
      impressionTd.style.padding = '8px 12px';
      row.appendChild(impressionTd);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    root.appendChild(table);
    
    return event;
  });
})();