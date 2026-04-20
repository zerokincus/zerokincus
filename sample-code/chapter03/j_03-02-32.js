// バルクリクエストのコーディング例
(async () => {
  const url = kintone.api.url('/k/v1/bulkRequest.json', true);
  const body = {
    requests: [
      {
        method: 'POST',
        api: '/k/v1/record.json',
        payload: {
          app: 101,
          record: {
            文字列1行: {
              value: '文字列1行を追加します。'
            }
          }
        }
      },
      {
        method: 'PUT',
        api: '/k/v1/record.json',
        payload: {
          app: 102,
          id: 3,
          revision: 2,
          record: {
            文字列1行: {
              value: '文字列1行を更新します。'
            }
          }
        }
      },
      {
        method: 'POST',
        api: '/k/v1/record.json',
        payload: {
          app: 103,
          record: {
            文字列1行: {
              value: '文字列1行を追加します。'
            }
          }
        }
      }
    ]
  };
  
  try {
    const resp = await kintone.api(url, 'POST', body);
    console.log(resp);
  } catch (error) {
    console.error(error);
  }
})();