package contents

import (
	"database/sql"
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
	checkErr(err)
	defer rows.Close()

	fmt.Println("Total count:", checkCount(rows))
	for rows.Next() {
		err := rows.Scan(&id, &title, &contents, &remarks)
		checkErr(err)
		log.Println(id, title, contents, remarks)
	}
	err = rows.Err()
	checkErr(err)

	return c.String(http.StatusOK, "Success: DB Exec Query.\n")
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
