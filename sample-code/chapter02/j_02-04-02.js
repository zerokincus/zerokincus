// フィールドにエラー表示するコード
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
      record['内容'].error = '内容を記載してください！ ';
    }

    return event;
  });
})();