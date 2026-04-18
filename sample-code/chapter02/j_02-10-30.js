// ローディング表示のコード例
// ①表示させるだけの例
// ローディングUIを表示
kintone.showLoading('VISIBLE');

// ②設定時間が経過したらローディングを閉じる例
// ローディングUIを表示
kintone.showLoading('VISIBLE');

// 長時間の処理を実行（3000ms経過後にローディング非表示）
setTimeout(() => {
  // ローディングUIを非表示
  kintone.showLoading('HIDDEN');
}, 3000);