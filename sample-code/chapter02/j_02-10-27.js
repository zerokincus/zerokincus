// コード2-10-26の別の書き方をしたコード
// 基本的な確認ダイアログ（Promise構文）
kintone.showConfirmDialog({
  title: '確認',
  body: 'このレコードを削除しますか？ ',
  showOkButton: true,
  showCancelButton: true,
  okButtonText: '削除',
  cancelButtonText: 'キャンセル',
  showCloseButton: true
}).then((result) => {
  if (result === 'OK') {
    console.log('削除を実行します');
    // 削除処理
  } else {
    console.log('削除をキャンセルしました');
  }
}); 