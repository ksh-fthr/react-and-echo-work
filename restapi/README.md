# このアプリについて
Go 言語のフレームワークである `Echo` の理解を深めるためにアレコレすることを目的としたものです。 


# 環境について
以下の環境で実行・確認しております。

| 環境 | バージョン | 備考 |
| ---- | ---------- | ---- |
| [Go](https://go.dev/)   | v1.16.7 linux/amd64 | `go version` で確認 |
| [Echo](https://echo.labstack.com/) | v4.6.1     | Go の Web フレームワーク. バージョンは起動時に表示されるロゴで確認 |
| [Air](https://github.com/cosmtrek/air)  | ??? | ホットリロードを実現するライブラリ<br /> バージョンは `built with Go` と出るだけで不明 |

<details>
<summary>Go のバージョン確認</summary>

```bash
% go version
go version go1.16.7 linux/amd64
```
</details>

<details>
<summary>Echo 起動時に表示されるバージョン</summary>

```bash

   ____    __
  / __/___/ /  ___
 / _// __/ _ \/ _ \
/___/\__/_//_/\___/ v4.6.1
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
/_/--\ |_| |_| \_ , built with Go 

```
</details>

