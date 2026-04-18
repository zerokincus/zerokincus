// 日時データのフォーマット変換
const date = luxon.DateTime.local();

// yyyy-MM-dd形式
date.toFormat('yyyy-MM-dd');

// 例 2025-11-08
// 年月日形式（0埋めなし）
date.toFormat('yyyy年M月d日');

// 例 2025年11月8日
// 年月形式（0埋めあり）
date.toFormat('yyyy年MM月');

// 例 2025年11月
// 曜日
date.setLocale('ja').toFormat('EEEE')
// 例 土曜日