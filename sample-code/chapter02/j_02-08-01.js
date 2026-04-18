// 変更されたフィールド情報の出力とフィールド値のアラート表示をする
(() => {
  'use strict';
  const eventType = [
    'app.record.create.change.ドロップダウン',
    'app.record.edit.change.ドロップダウン'
  ];
  kintone.events.on(eventType, (event) => {

    // 変更されたフィールド情報をコンソールに出力する
    console.log(event.changes.field);
    // 変更されたフィールド値をアラート表示する
    window.alert(event.changes.field.value);

    return event;
  });
})();