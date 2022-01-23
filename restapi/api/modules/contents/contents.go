package contents

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

func TryConnect(c echo.Context) error {
	fmt.Println("exec db::connect.")

	// [ユーザ名]:[パスワード]@tcp([ホスト名]:[ポート番号])/[データベース名]?charset=[文字コード]
	dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4"

	db, err := sql.Open("mysql", dbconf)

	// 接続が終了したらクローズする
	defer db.Close()

	if err != nil {
		fmt.Println(err.Error())
	}

	err = db.Ping()

	if err != nil {
		fmt.Println("データベース接続失敗")
		return c.String(http.StatusOK, "ERROR: DB Connection.\n")
	} else {
		fmt.Println("データベース接続成功")
		return c.String(http.StatusOK, "SUCCESS: DB Connection.\n")
	}
}
