# ORM と ジェネレータ

## GORM/Gen

このリポジトリでは ORM として [GORM](https://gorm.io/) を利用しています。
また ORM で利用する model や query の出力に [Gem](https://gorm.io/gen/) を利用しています。

## ジェネレータスクリプト

model や query を出力するスクリプトとして [orm_generator.go](./orm_generator.go) を作りました。
下記を実行することで[./gen/model](./gen/model) と [./gen/query](./gen/query) に model とquery が出力されます。


```zsh
% pwd
${repository_root}/restapi/api/orm
% go run orm_generator.go
```

なお実行には事前に DB サーバを起動しておく必要があります。
下記のいずれかを実行して DB サーバを起動してください。


**DB サーバの起動**

リポジトリルートで下記を実行する。

```bash
# restapi, mysql のコンテナだけを起動する
% docker-compose -f docker-compose-backend.yml up --build
```

もしくは、同じくリポジトリルートで下記を実行する。

```bash
# restapi, mysql, react と、本リポジトリで扱うすべてのコンテナを起動する
% docker-compose up -d --build
```


詳しくは [storage/README](../../../storage/README.md) をご参照ください。

## 参考

本ディレクトリに関する記事を下記で公開しています。
よろしければご参照ください。

TBD...

