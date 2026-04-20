// Chromeでファイルをダウンロードするサンプルコードの全体
// fileKeyの取得
const recordObj = kintone.app.record.get(); // コンソールからの実行を前提
const fileKey = recordObj.record['添付ファイル'].value[0].fileKey;
const fileName = recordObj.record['添付ファイル'].value[0].name;

// クエリ付きのURL生成
const params = {
  fileKey: fileKey
};
const urlForDownload = kintone.api.urlForGet('/k/v1/file.json', params,
  true);

// リクエストヘッダー
const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

// リクエスト実行
const resp = await fetch(urlForDownload, {
  method: 'GET',
  headers,
});
const blob = await resp.blob();

// ファイルダウンロード処理
const urlObject = window.URL || window.webkitURL;

// BlobURLの取得
const blobUrl = urlObject.createObjectURL(blob);

// リンクを作成し、そこにBlobオブジェクトを設定する
const alink = document.createElement('a');
alink.textContent = 'Download File';
alink.download = fileName;
alink.href = blobUrl;
alink.target = '_blank';

// マウスイベントを設定
const e = new MouseEvent('click', {
  view: window, bubbles: true, cancelable:
    true
});
// aタグのクリックイベントをディスパッチする
alink.dispatchEvent(e);