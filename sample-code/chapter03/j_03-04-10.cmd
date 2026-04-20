:: ラジオボタン決裁権が「あり」のレコードを担当者No.の降順で取得
cli-kintone.exe record export --app 299 --base-url https://sample.cybozu.com --api-token APIトークン --fields "顧客No_,顧客名,お名前" --condition "決裁権 in (\"あり\")"