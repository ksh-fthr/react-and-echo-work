package contents

import (
	"fmt"
	"net/http"

	"restapi/service/dbconnect"

	"github.com/labstack/echo/v4"
)

func TryConnect(c echo.Context) error {
	fmt.Println("exec contents::TryConnect.")

	db := dbconnect.Connect()

	// 接続が終了したらクローズする
	defer dbconnect.DisConnect(db)

	// 疎通確認
	err := db.Ping()

	if err != nil {
		fmt.Println("データベース接続失敗")
		return c.String(http.StatusOK, "ERROR: DB Connection.\n")
	} else {
		fmt.Println("データベース接続成功")
		return c.String(http.StatusOK, "SUCCESS: DB Connection.\n")
	}
}
