//eventオブジェクトへの参照を変数に代入している例

kintone.events.on(events, (event) => {
  const record = event.record; // eventオブジェクトを参照
});