// フィールド値に応じたフィールドの書き替え（switch文を使用）
(() => {
  'use strict';
  const eventType = [
    'app.record.create.change.対応種別',
    'app.record.edit.change.対応種別'
  ];

  kintone.events.on(eventType, (event) => {
    const record = event.record;

    // 対応種別の変更後の値を取得する
    const actionCategory = event.changes.field.value;
    let setValue = '';

    // 対応種別の値に応じてsetValueに値を格納する
    switch (actionCategory) {
      case '商談（初回）':
        setValue = '資料は別途添付ファイルに保存してください';
        break;
      case '商談（2回目以降）':
        setValue = 'これまでとの変更点を分かりやすく記載してください';
        break;
      case 'その他':
        setValue = '活動内容を簡潔に記入してください';
        break;
      default:
        setValue = '';
    }
    // イベントオブジェクトを書き換える
    record['内容'].value = setValue;
    return event;
  });
})();