// 確認ダイアログを表示するコード
// 基本的な確認ダイアログ（async/await）
(async () => {
  const config = {
    title: '確認',
    body: 'このレコードを削除しますか？ ',
    showOkButton: true,
    showCancelButton: true,
    okButtonText: '削除',
    cancelButtonText: 'キャンセル',
    showCloseButton: true
  };
  const result = await kintone.showConfirmDialog(config);  //①
  console.log(`result: ${result}`);

  if (result === 'OK') {
    console.log('削除を実行します');
    // 削除処理
  } else {
    console.log('削除をキャンセルしました');
  }
})();