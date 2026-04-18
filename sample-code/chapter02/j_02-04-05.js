// コード2-4-4にフィールドのエラー表示を同時に行う修正を加えた
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
      event.error = '内容に何も入力されていません！ ';
    }

    return event;
  });
})();