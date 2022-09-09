# streamlit-work
フロントエンド: React, バックエンド: Go + Echo の学習用リポジトリです。
上記の学習にあたり Docker + React + Echo + MySQL で環境構築をしています。


# 起動
## webapp + restapi + mysql の全部入りで起動
```bash
% pwd
/path/to/react-and-echo-work
% docker-compose up --build # バックグラウンドで起動したければ `-d` もつける
```

## webapp のみ起動
```bash
% pwd
/path/to/react-and-echo-work
% cd webapp/app
% npm i
% npm run start
```

## restapi + mysql のみ起動
### docker-compose 経由で起動する場合
ホットリロードありで起動します。
( ホットリロードは [Air](https://github.com/cosmtrek/air) によって実現しています )

```bash
% pwd
/path/to/react-and-echo-work
% docker-compose -f docker-compose-backend.yml up --build # バックグラウンドで起動したければ `-d` もつける
```

### docker-compose を経由しない場合
#### ホットリロードなし

```bash
% pwd
/path/to/react-and-echo-work
% cd restapi/api
% go run server.go
```

#### ホットリロードあり

```bash
% pwd
/path/to/react-and-echo-work
% cd restapi/api
% air -c .air.toml
```

# 動作確認
```bash
http://localhost:3000/
```
にアクセスしてください。

( `npm run start`, `docker-compose up --build` のどちらで起動しても、上記 URL から動作確認できます  )

<img width="1278" alt="スクリーンショット 2022-08-08 17 00 22" src="https://user-images.githubusercontent.com/3907225/183370113-2e941bed-1911-4038-a68e-4023e82a4ef2.png">


# 注意事項
docker 起動時、

```bash
% docker-compose -f docker-compose-backend.yml up --build
```

もしくは

```bash
% docker-compose up --build
```

で次のエラーが出た場合、

```
Creating network "react-and-echo-work_backend-work-net" with driver "bridge"
ERROR: Pool overlaps with other one on this address space
```

ネットワークのアドレス空間が `docker-compose.yml` と `docker-compose-backend.yml` で重複していることが原因です。
(現状、アプリでネットワークアドレスをハードコーディングしているため、両者で同じアドレス空間を指定しています)

次のコマンドを実行して docker オブジェクトを削除してください。

```bash
% docker system prune
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Are you sure you want to continue? [y/N] # <- `y` を入力
```

# TODO
- `docker-compose.yml` と `docker-compose-backend.yml` でネットワークアドレスを別にしてもアプリが正常動作するようにする


