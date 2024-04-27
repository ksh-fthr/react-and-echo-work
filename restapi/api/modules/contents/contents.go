package contents

import (
	"context"
	"database/sql"
	"log"
	"net/http"

	"restapi/orm/gen/query"
	"restapi/service/dbconnect"

	"github.com/labstack/echo/v4"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func TryConnect(c echo.Context) error {
	log.Println("exec contents::TryConnect.")

	db := dbconnect.Connect()
	defer dbconnect.DisConnect(db)

	// 疎通確認
	err := db.Ping()

	if err != nil {
		log.Println("データベース接続失敗")
		return c.String(http.StatusOK, "ERROR: DB Connection.\n")
	} else {
		log.Println("データベース接続成功")
		return c.String(http.StatusOK, "SUCCESS: DB Connection.\n")
	}
}

func GetAllContents(c echo.Context) error {
	log.Println("exec contents::GetAllContents.")

	// db := dbconnect.Connect()
	// defer dbconnect.DisConnect(db)

	dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4"
	gormdb, _ := gorm.Open(mysql.Open(dbconf))

	qu := query.Use(gormdb)
	ctx := context.Background()
	contentsQuery := qu.Content

	_, err := contentsQuery.WithContext(ctx).Order(contentsQuery.ID.Desc()).Find()
	if err != nil {
		log.Println("クエリ実行失敗")
		return c.String(http.StatusOK, "ERROR: Execute Query.\n")
	}

	return c.String(http.StatusOK, "Success: DB Execute Query.\n")
}

func checkCount(rows *sql.Rows) (count int) {
	for rows.Next() {
		err := rows.Scan(&count)
		checkErr(err)
	}
	return count
}

func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
		panic(err)
	}
}
