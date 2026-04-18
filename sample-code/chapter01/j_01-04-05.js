// 複数イベント同時記述の例
kintone.events.on(['app.record.detail.show', 'app.record.create.show'], (event) => {
  // ここにカスタマイズ処理を記述する
});