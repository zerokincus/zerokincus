// kintone.proxy関数のコーディング例
try {
  const [body, status, headers] = await kintone.proxy(
    'https://api.example.com',
    'GET',
    {},
    {}
  );
  // success
  console.log(status, body, headers);
} catch (error) {
  // error
  console.log(error); // proxy APIのレスポンスボディ(文字列)
}