// 判定条件の結果をブーリアン値となる変数で処理するコード
// 判定結果を true/falseで返す変数
const isDisabled = dropdownValue !== 'その他';

// フィールド編集可不可を制御
row.value['その他詳細'].disabled = isDisabled;