# このアプリについて
Go 言語のフレームワークである `Echo` の理解を深めるためにアレコレすることを目的としたものです。


# 環境について
以下の環境で実行・確認しております。

| 環境 | バージョン | 備考 |
| ---- | ---------- | ---- |
| [Go](https://go.dev/)   | go version go1.22.1 linux/amd64 | `go version` で確認 |
| [Echo](https://echo.labstack.com/) | v4.11.4     | Go の Web フレームワーク. バージョンは起動時に表示されるロゴで確認 |
| [Air](https://github.com/cosmtrek/air)  | v1.51.0 | ホットリロードを実現するライブラリ<br /> バージョンは`air -v` で確認 |

<details>
<summary>Go のバージョン確認</summary>

```bash
% go version
go version go1.22.1 linux/amd64
```
</details>

Go 言語の環境構築については [こちら](./README_ENV.md) を参照。


<details>
<summary>Echo 起動時に表示されるバージョン</summary>

```bash
% go run server.go

   ____    __
  / __/___/ /  ___
 / _// __/ _ \/ _ \
/___/\__/_//_/\___/ v4.11.4
High performance, minimalist Go web framework
https://echo.labstack.com
____________________________________O/_______
                                    O\
⇨ http server started on [::]:8080
```

</details>

<details>
<summary>Air のバージョン確認</summary>

```bash
% air -v

  __    _   ___
 / /\  | | | |_)
/_/--\ |_| |_| \_ v1.51.0, built with Go go1.22.1

```
</details>

# 起動
[リポジトリ直下の README](../README.md) を参照

# API の確認
動作検証用に `testapi` API として次の 5つ のメソッドを用意しています。
POST, PUT メソッドにおける body の解釈は未実装なので、実行例の body 部は無視してください

## 取得( 全取得 )
- URL
  - http://localhost:8080/testapi/all
- 実行例
```bash
$ curl http://localhost:8080/testapi/all
All testapi
```

## 取得( ID 指定 )
- URL
  - http://localhost:8080/testapi/:id
- 実行例
```bash
$ curl http://localhost:8080/testapi/asdasdasd # asdasdasd は任意の文字列
Contens, id=asdasdasd
```

## 登録
- URL
  - http://localhost:8080/testapi
- 実行例
```bash
$ curl -X POST -H "Content-Type: application/json" -d '{content: "hjodfsdfsdf"}' localhost:8080/testapi
Register OK
```

## 更新( ID 指定 )
- URL
  - http://localhost:8080/testapi/:id
- 実行例
```bash
$ curl -X PUT -H "Content-Type: application/json" -d '{content: "hjodfsdfsdf"}' localhost:8080/testapi/asdasdasd
Update, id=asdasdasd
```

## 削除( ID 指定 )
- URL
  - http://localhost:8080/testapi/:id
- 実行例
```bash
$ curl -X DELETE -H "Content-Type: application/json" localhost:8080/testapi/dsdwewqas
Delete, id=dsdwewqas
```

