package contents

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"restapi/orm/gen/model"
	"restapi/orm/gen/query"
	"restapi/service/dbconnect"

	"github.com/labstack/echo/v4"
)

type ContentData struct {
	Title   string `json:"title"`
	Author  string `json:"author"`
	Summary string `json:"summary"`
}

func GetAllContents(c echo.Context) error {
	log.Println("exec contents::GetAllContents.")

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	// クエリの実行とエラー処理
	contents, err := content.WithContext(ctx).Order(content.ID.Asc()).Find()
	if err != nil {
		return c.String(http.StatusInternalServerError, "ERROR: Get All Contents.\n")
	}

	return c.JSON(http.StatusOK, contents)
}

func GetContents(c echo.Context) error {
	log.Println("exec contents::GetContent.")
	return c.String(http.StatusOK, "Success: DB Get Content.\n")
}

func RegisterContents(c echo.Context) error {
	log.Println("exec contents::RegisterContent.")

	// RequestBody の情報を読み取る
	data := new(ContentData)
	if err := c.Bind(data); err != nil {
		return err
	}

	// データ登録用のインスタンスを作る
	contents := &model.Content{
		Title:   data.Title,
		Author:  data.Author,
		Summary: data.Summary,
	}

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	// INSERT の実行とエラー処理
	err := queryInstance.Transaction(func(tx *query.Query) error {
		if err := content.WithContext(ctx).Create(contents); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Register Content.\n")
	}

	return c.JSON(http.StatusCreated, contents)
}

func UpdateContents(c echo.Context) error {
	log.Println("exec contents::UpdateContent")
	return c.String(http.StatusOK, "Success: DB Update Content.\n")
}

func DeleteContents(c echo.Context) error {
	log.Println("exec contents::DeleteContent")
	return c.String(http.StatusOK, "Success: DB Delete Content.\n")
}
