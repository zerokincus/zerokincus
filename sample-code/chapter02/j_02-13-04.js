// JavaScriptのオブジェクト形式に変換する
const now = luxon.DateTime.local();
const nowObj = now.toObject();
console.log(nowObj);

/* 出力例
{
  "year": 2025, //nowObj.year
  "month": 11,
  "day": 8,
  "hour": 10,
  "minute": 30,
  "second": 20,
  "millisecond": 675
  }
*/