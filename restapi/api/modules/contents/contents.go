package contents

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"restapi/orm/gen/model"
	"restapi/orm/gen/query"

	"github.com/labstack/echo/v4"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type ContentData struct {
	Title   string `json:"title"`
	Author  string `json:"author"`
	Summary string `json:"summary"`
}

func GetAllContents(c echo.Context) error {
	log.Println("exec contents::GetAllContents.")

	dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4"
	gormdb, _ := gorm.Open(mysql.Open(dbconf))

	qu := query.Use(gormdb)
	ctx := context.Background()
	contentsQuery := qu.Content

	_, err := contentsQuery.WithContext(ctx).Order(contentsQuery.ID.Desc()).Find()
	if err != nil {
		return c.String(http.StatusOK, "ERROR: Get All Contents.\n")
	}

	return c.String(http.StatusOK, "Success: DB Get All Contents.\n")
}

func GetContents(c echo.Context) error {
	log.Println("exec contents::GetContent.")
	return c.String(http.StatusOK, "Success: DB Get Content.\n")
}

func RegisterContents(c echo.Context) error {
	log.Println("exec contents::RegisterContent.")
	data := new(ContentData)

	if err := c.Bind(data); err != nil {
		return err
	}

	dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4"
	gormdb, _ := gorm.Open(mysql.Open(dbconf))

	qu := query.Use(gormdb)
	ctx := context.Background()
	contentsQuery := qu.Content

	contents := &model.Content{
		Title:   data.Title,
		Author:  data.Author,
		Summary: data.Summary,
	}

	err := qu.Transaction(func(tx *query.Query) error {
		if err := contentsQuery.WithContext(ctx).Create(contents); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusOK, "Error: DB Register Content.\n")
	}

	return c.String(http.StatusOK, "Success: DB Register Content.\n")
}

func UpdateContents(c echo.Context) error {
	log.Println("exec contents::UpdateContent")
	return c.String(http.StatusOK, "Success: DB Update Content.\n")
}

func DeleteContents(c echo.Context) error {
	log.Println("exec contents::DeleteContent")
	return c.String(http.StatusOK, "Success: DB Delete Content.\n")
}
