// 画面にメッセージを表示する
// エラーメッセージを表示
kintone.showNotification('ERROR', 'データの保存に失敗しました。');

// 成功メッセージを表示
kintone.showNotification('SUCCESS', 'データが正常に保存されました。');

// 情報メッセージを表示
kintone.showNotification('INFO', '処理を開始しました。');

// 非同期処理での使用例（async/await）
(async () => {
  const result = await kintone.showNotification('SUCCESS', '処理が完了しました。');
  console.log('通知が表示されました')
})();

// 非同期処理での使用例（Promise）
kintone.showNotification('SUCCESS', '処理が完了しました。').then(() => {
  console.log('通知が表示されました');
});