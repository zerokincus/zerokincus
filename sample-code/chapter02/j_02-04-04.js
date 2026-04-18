// 画面上部にエラー表示するコード
(() => {
  'use strict';

  const eventType = [
    'app.record.create.submit',
    'app.record.edit.submit'
  ];

  kintone.events.on(eventType, (event) => {

    const record = event.record;
    const checkValue = record['内容'].value;

    if (checkValue === undefined) {
      event.error = '内容に何も入力されていません！ ';
    }

    return event;
  });
})();