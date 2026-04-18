// 文字列結合とテンプレートリテラルのコードの違い
// 文字列結合を使った場合
const targetURL = 'https://SUBDOMAIN.cybozu.com/k/' + kintone.app.getId() + '/';
// テンプレートリテラルを使った場合
const targetURL2 = `https://SUBDOMAIN.cybozu.com/k/${kintone.app.getId()}/`;