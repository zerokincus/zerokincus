// さまざまな単位での差分計算例
const start = luxon.DateTime.fromISO('2023-11-08');
const end = luxon.DateTime.local();

const diff1 = end.diff(start, ['years', 'months', 'days', 'hours', 'minutes']);
console.log(diff1.toObject());
// {years: 1, months: 10, days: 27, hours: 8, minutes: 9.881616666666673}

const diff2 = end.diff(start, ['months', 'days', 'hours', 'minutes']);
console.log(diff2.toObject());
// {months: 22, days: 27, hours: 8, minutes: 9.881616666666673}

const diff3 = end.diff(start, ['days', 'hours', 'minutes']);
console.log(diff3.toObject());
// {days: 697, hours: 8, minutes: 9.881616666666673}

// 年齢計算の例
const startDate = luxon.DateTime.fromISO('1967-11-08');
const endDate = luxon.DateTime.local();

const age = endDate.diff(startDate['years', 'months']).years;
console.log(age + '歳');