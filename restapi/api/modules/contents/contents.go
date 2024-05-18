package contents

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"strconv"

	"restapi/orm/gen/model"
	"restapi/orm/gen/query"
	"restapi/service/dbconnect"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func GetAllContents(c echo.Context) error {
	log.Println("exec contents::GetAllContents.")

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	// クエリの実行とエラー処理
	contents, err := content.WithContext(ctx).Where(content.Deleted.Is(false)).Order(content.ID.Asc()).Find()
	if err != nil {
		return c.String(http.StatusInternalServerError, "ERROR: Get All Contents.\n")
	}

	return c.JSON(http.StatusOK, contents)
}

func GetOneContents(c echo.Context) error {
	log.Println("exec contents::GetContent.")

	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	row, err := content.WithContext(ctx).Where(content.ID.Eq(id), content.Deleted.Is(false)).First()
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return c.String(http.StatusNotFound, "ERROR: Not Found.\n")
	}

	if err != nil {
		return c.String(http.StatusInternalServerError, "ERROR: Get One Contents.\n")
	}

	return c.JSON(http.StatusOK, row)
}

func RegisterContents(c echo.Context) error {
	log.Println("exec contents::RegisterContent.")

	// RequestBody の情報を読み取る
	data := new(model.Content)
	if err := c.Bind(data); err != nil {
		return err
	}

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	// INSERT の実行とエラー処理
	err := queryInstance.Transaction(func(tx *query.Query) error {
		if err := content.WithContext(ctx).Create(data); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Register Content.\n")
	}

	return c.JSON(http.StatusCreated, data)
}

func UpdateContents(c echo.Context) error {
	log.Println("exec contents::UpdateContent")

	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	// RequestBody の情報を読み取る
	data := new(model.Content)
	if err := c.Bind(data); err != nil {
		return err
	}

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	// UPDATE の実行とエラー処理
	err := queryInstance.Transaction(func(tx *query.Query) error {
		if _, err := content.WithContext(ctx).Where(content.ID.Eq(id)).Updates(data); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Register Content.\n")
	}

	data.ID = id
	return c.JSON(http.StatusOK, data)
}

func DeleteContents(c echo.Context) error {
	log.Println("exec contents::DeleteContent")

	id, _ := strconv.ParseInt(c.Param("id"), 10, 64)

	// テーブル接続準備
	queryInstance := dbconnect.QueryInstanc()
	content := queryInstance.Content
	ctx := context.Background()

	// DELETE( 削除フラグを立てる ) の実行とエラー処理
	// ※ 物理削除は行わずフラグを立てることによる論理削除を行う
	err := queryInstance.Transaction(func(tx *query.Query) error {
		if _, err := content.WithContext(ctx).Where(content.ID.Eq(id)).Update(content.Deleted, true); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Register Content.\n")
	}

	// 削除したデータを返却したい
	deletedContents, _ := content.WithContext(ctx).Where(content.ID.Eq(id)).First()
	return c.JSON(http.StatusOK, deletedContents)
}
