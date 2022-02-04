package dbconnect

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func Connect() *sql.DB {
	fmt.Println("exec dbconnect::Connect.")

	// [ユーザ名]:[パスワード]@tcp([ホスト名]:[ポート番号])/[データベース名]?charset=[文字コード]
	dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4"

	db, err := sql.Open("mysql", dbconf)

	if err != nil {
		fmt.Println(err.Error())
	}

	return db
}

func DisConnect(db *sql.DB) {
	fmt.Println("exec dbconnect::DisConnect.")
	db.Close()
}
