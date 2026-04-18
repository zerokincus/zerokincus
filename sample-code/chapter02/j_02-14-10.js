// イベントの指定とイベントハンドラーの登録のみのコード
(() => {
  'use strict';
  const eventType = [
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.create.change.テーブル',
    'app.record.edit.change.テーブル',
    'app.record.create.change.ドロップダウン',
    'app.record.edit.change.ドロップダウン'
  ];
  
  kintone.events.on(eventType, (event) => {
    console.log(event); //イベント発火をコンソールで確認
    return event;
  });
})();