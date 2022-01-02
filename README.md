# このプロジェクトについて
Docker + React + Echo + MySQL の環境構築を試したものです。

# 起動
## 開発環境
### webapp
```bash
% pwd
/path/to/react-and-echo-work
% cd webapp/app
% npm i
% npm run start
```

### restapi
#### docker-compose 経由で起動する場合

```bash
% pwd
/path/to/react-and-echo-work
% docker-compose -f docker-compose-backend.yml up --build # バックグラウンドで起動したければ `-d` もつける
```

#### docker-compose を経由しない場合
(ホットリロードなし)

```bash
% pwd
/path/to/react-and-echo-work
% cd restapi/api
% go run server.go
```

(ホットリロードあり)

```bash
% pwd
/path/to/react-and-echo-work
% cd restapi/api
% air -c .air.toml
```

