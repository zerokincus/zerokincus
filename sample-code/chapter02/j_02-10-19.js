// Helloボタンの設定
const newButton = document.createElement('button');
newButton.id = 'helloButton';
newButton.innerText = 'Hello';
newButton.onclick = () => {
  window.alert('Hello World!');
}

const spaceField = kintone.app.record.getSpaceElement('space');
spaceField.appendChild(newButton);