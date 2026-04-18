// フォーマット変換の例

// 3日後の日付をISO 8600形式の日時で取得する
const threeDaysLaterISO = date.plus({ days: 3 }).toISO();
// 出力例　2025-11-08T08:23:03.807+09:00

// 3日後の日付をISO 8600形式の日付で取得する（日付フィールドに登録するフォーマット）
const threeDaysLaterISODate = date.plus({ days: 3 }).toISODate();
// 出力例　2025-11-08