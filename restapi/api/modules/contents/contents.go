package contents

import (
	"fmt"
	"log"
	"net/http"

	"restapi/service/dbconnect"

	"github.com/labstack/echo/v4"
)

func TryConnect(c echo.Context) error {
	fmt.Println("exec contents::TryConnect.")

	db := dbconnect.Connect()
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

func GetAllContents(c echo.Context) error {
	fmt.Println("exec contents::GetAllContents.")

	var (
		id       int
		title    string
		contents string
		remarks  string
	)

	db := dbconnect.Connect()
	defer dbconnect.DisConnect(db)

	rows, err := db.Query("select id, title, contents, remarks from contents")
	if err != nil {
		log.Fatal(err)
		return c.String(http.StatusInternalServerError, "Exception: DB Exec Query.\n")
	}
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&id, &title, &contents, &remarks)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(id, title, contents, remarks)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
		return c.String(http.StatusInternalServerError, "Exception: DB Validate Rrecords.\n")
	}

	return c.String(http.StatusOK, "Success: DB Exec Query.\n")
}
