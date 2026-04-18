// カスタマイズのコード
(() => {
  'use strict';
  const eventType = 'app.record.detail.show';

  kintone.events.on(eventType, (event) => {
    const newButton = document.createElement('button');
    newButton.id = 'helloButton';
    newButton.innerText = 'Hello';
    newButton.onclick = () => {
      window.alert('Hello World!');
    };
    const spaceField = kintone.app.record.getSpaceElement('space');
    spaceField.appendChild(newButton);
    
    return event;
  });
})();