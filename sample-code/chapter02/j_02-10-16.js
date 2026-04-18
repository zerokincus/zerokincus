// 案件管理アプリのカスタマイズ
(() => {
  'use strict';
  const eventType = 'app.record.detail.show';
  kintone.events.on(eventType, (event) => {
    const record = event.record;
    const chkValue = record['確度'].value;

    let colorName;  //①
    if (chkValue === '100%') {  //②
      colorName = 'blue';
    } else if (chkValue === '20%') {
      colorName = 'red';
    } else {
      colorName = 'black';
    }

    const element = kintone.app.record.getFieldElement('確度');  //③
    element.style.color = colorName;  //④

    return event;
  });
})();