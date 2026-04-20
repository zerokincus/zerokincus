// スペースのスレッド内コメントの投稿APIのリクエストの例
const url = kintone.api.url('/k/v1/space/thread/comment.json', true);
const body = {
  space: 1,
  thread: 1,
  comment: {
    text: '本日いちばん運勢がいいのは。。。\n「さそり座」のあなたです！！！ ',
    mentions: [
      {
        code: 'admin',
        type: 'USER'
      },
      {
        code: 'guest/matsuda@test.jp',
        type: 'USER'
      },
      {
        code: '全社_ALLCOMPANY',
        type: 'ORGANIZATION'
      },
      {
        code: 'kintone管理者_admin',
        type: 'GROUP'
      }
    ],
    files: [
      {
        fileKey: 'c15b3870-7505-4ab6-9d8d-b9bdbc74f5d6',
        width: 500
      }
    ]
  }
};
const resp = await kintone.api(url, 'POST', body);
console.log(resp);