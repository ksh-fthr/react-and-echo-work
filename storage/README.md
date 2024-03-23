# DB の確認
mysql の Docker コンテナに入って DB 操作するときは以下の手順で行えます。


# 作成される DB
リポジトリルートで

```bash
% docker-compose -f docker-compose-backend.yml up --build
```

もしくは

```basha
% docker-compose up -d --build
```

を実行することで `./mysql/init/initialize.sql` が実行され、mysql のコンテナには `mydb` DB が作成されます。
DB の情報は以下のとおりです。

| DB名 | テーブル | ユーザ名 | パスワード |
| ---- | -------- | -------- | ---------- |
| mydb | contnets | mysql    | mysqladmin |


## ホスト側での操作
### コンテナの確認
次のコマンドを実行して `CONTAINER ID` を確認します。

```bash
% docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED              STATUS              PORTS                                                  NAMES
0033e5a73c92   react-and-echo-work_mysql   "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   storage
1a60403f16db   react-and-echo-work_api     "air -c .air.toml"       About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp              restapi
```

( ここで取得した `CONTAINER ID` はあくまで上記コマンド実行時に確認できたものです。実際は実行する毎に異なる値になります )


### コンテナに入る
次のコマンドで `CONTAINER ID` を指定してコンテナに入ります。

```bash
% docker exec -it 0033e5a73c92 bash
bash-4.4#
```

これで mysql のコンテナに入りました｡以降は コンテナ上での作業になります。


## コンテナ上での操作
### mysql に入る
次のコマンドで `psql` に入ります。

```bash
root@storage:/# mysql -umysql -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.28 MySQL Community Server - GPL

Copyright (c) 2000, 2022, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

以降は mysql クライアント 上での作業になります。


### mysql クライアント 上での操作
#### 作成済みのデータベース一覧

```mysql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| mydb               |
| information_schema |
+--------------------+
2 rows in set (0.01 sec)
```


#### mydb DB へ接続

```mysql
mysql> use mydb;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
```


#### テーブル一覧

```mysql
mysql> show tables;
+----------------+
| Tables_in_mydb |
+----------------+
| contents       |
+----------------+
1 row in set (0.00 sec)
```

#### テーブル定義

```mysql
mysql> desc contents;
+------------+-----------------+------+-----+---------+----------------+
| Field      | Type            | Null | Key | Default | Extra          |
+------------+-----------------+------+-----+---------+----------------+
| id         | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| title      | varchar(255)    | NO   |     | NULL    |                |
| contents   | text            | NO   |     | NULL    |                |
| remarks    | varchar(1024)   | NO   |     | NULL    |                |
| created_at | datetime        | YES  |     | NULL    |                |
| updated_at | datetime        | YES  |     | NULL    |                |
+------------+-----------------+------+-----+---------+----------------+
6 rows in set (0.01 sec)
```

