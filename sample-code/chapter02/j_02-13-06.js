// 日時に対する計算の例
// Luxonオブジェクトを生成
const date = luxon.DateTime.local();

// 3日後
const threeDaysLater = date.plus({ days: 3 });

// 3か月後
const threeMonthLater = date.plus({ months: 3 });

// 月初
const startOfMonth = date.startOf('month');

// 月末
const endOfMonth = date.endOf('month');

// その週の月曜日
const mondayOfTheWeek = date.set({ weekday: 1 });