// レコードコメントを投稿するAPIのリクエストの例
(async () => {
  const url = kintone.api.url('/k/v1/record/comment.json', true);
  const comment = {
    text: 'APIで投稿したコメントです。\n2行目です。',
    mentions: [
      {
        code: 'admin', // 実際に存在するユーザーのコードに変更する
        type: 'USER'
      }
    ]
  };
  const body = {
    app: kintone.app.getId(),
    record: kintone.app.record.getId(),
    comment: comment
  };
  const result = await kintone.api(url, 'POST', body);
  console.log(result);
})();