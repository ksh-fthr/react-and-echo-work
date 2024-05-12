package dbconnect

import (
	"log"

	_ "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() *gorm.DB {
	log.Println("exec dbconnect::Connect.")

	// [ユーザ名]:[パスワード]@tcp([ホスト名]:[ポート番号])/[データベース名]?charset=[文字コード]&parseTime=true
	//
	// 注) TIMESTAMP型 のカラムを返却するために parseTime=true をつける
	// https://stackoverflow.com/questions/45040319/unsupported-scan-storing-driver-value-type-uint8-into-type-time-time
	dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4&parseTime=true"
	gormdb, err := gorm.Open(mysql.Open(dbconf))
	if err != nil {
		log.Println(err.Error())
	}

	return gormdb
}
