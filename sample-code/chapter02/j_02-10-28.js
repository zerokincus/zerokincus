// ダイアログを作成するコード
(async () => {
  // STEP 1: ダイアログ本文（表示する要素）を作る
  const body = document.createElement('div');
  body.style.display = 'grid';
  body.style.gap = '8px';
  body.style.textAlign = 'center';

  const msg = document.createElement('div');
  msg.textContent = 'テキストを入力してください';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'ここに入力してください';
  input.style.width = '100%';

  body.append(msg, input);

  // STEP 2: ダイアログを用意（※ await が必須）
  const config = {
    title: '確認',
    body: body,
    showOkButton: true,
    okButtonText: '実行',
    showCancelButton: true,
    cancelButtonText: 'キャンセル',
    showCloseButton: true
  };
  const dialog = await kintone.createDialog(config);

  // STEP 3: ダイアログを表示して、ユーザーの操作結果を待つ
  // 結果は 'OK' 'CANCEL' 'CLOSE'
  const result = await dialog.show();

  // STEP 4: 結果を確認（OKのときに入力内容を表示）
  if (result === 'OK') {
    console.log('[入力テキスト]', input.value);
  } else {
    console.log('[結果]', result);
  }
})();