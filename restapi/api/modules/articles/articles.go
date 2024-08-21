package articles

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

/**
 * DB接続情報
 */
type DBConnection struct {
	query   query.Query
	context context.Context
}

/**
 * DB接続準備
 */
func PrepareDBConnect() DBConnection {
	query := dbconnect.QueryInstance()
	context := context.Background()

	return DBConnection{
		query:   *query,
		context: context,
	}
}

/**
 * 全件取得(GET: "/contents/:contentId/articles")
 */
func GetAllArticles(c echo.Context) error {
	log.Println("exec articles::GetAllArticles.")

	contentId, _ := strconv.ParseInt(c.Param("contentId"), 10, 64)

	// テーブル接続準備
	connection := PrepareDBConnect()
	article := connection.query.Article

	// クエリの実行とエラー処理
	articles, err := article.WithContext(connection.context).Where(article.ContentID.Eq(contentId), article.Deleted.Is(false)).Order(article.ID.Asc()).Find()
	if err != nil {
		return c.String(http.StatusInternalServerError, "ERROR: Get All Articles.\n")
	}

	return c.JSON(http.StatusOK, articles)
}

/**
 * 一件件取得(GET: "/contents/:contentId/article/:articleId")
 */
func GetOneArticles(c echo.Context) error {
	log.Println("exec articles::GetArticle.")

	contentId, _ := strconv.ParseInt(c.Param("contentId"), 10, 64)
	articleId, _ := strconv.ParseInt(c.Param("articleId"), 10, 64)

	// テーブル接続準備
	connection := PrepareDBConnect()
	article := connection.query.Article

	row, err := article.WithContext(connection.context).Where(article.ContentID.Eq(contentId), article.ID.Eq(articleId), article.Deleted.Is(false)).First()
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return c.String(http.StatusNotFound, "ERROR: Not Found.\n")
	}

	if err != nil {
		return c.String(http.StatusInternalServerError, "ERROR: Get One Articles.\n")
	}

	return c.JSON(http.StatusOK, row)
}

/**
 * 登録(POST: "/contents/:contentId/article")
 */
func RegisterArticles(c echo.Context) error {
	log.Println("exec articles::RegisterArticle.")

	// RequestBody の情報を読み取る
	data := new(model.Article)
	if err := c.Bind(data); err != nil {
		return err
	}

	// テーブル接続準備
	connection := PrepareDBConnect()
	article := connection.query.Article

	contentId, _ := strconv.ParseInt(c.Param("contentId"), 10, 64)
	data.ContentID = contentId

	// INSERT の実行とエラー処理
	err := connection.query.Transaction(func(tx *query.Query) error {
		if err := article.WithContext(connection.context).Create(data); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Register Article.\n")
	}

	return c.JSON(http.StatusCreated, data)
}

/**
 * 一件件更新(PUT: "/contents/:contentId/article/:articleId")
 */
func UpdateArticles(c echo.Context) error {
	log.Println("exec articles::UpdateArticles")

	contentId, _ := strconv.ParseInt(c.Param("contentId"), 10, 64)
	articleId, _ := strconv.ParseInt(c.Param("articleId"), 10, 64)

	// RequestBody の情報を読み取る
	data := new(model.Article)
	if err := c.Bind(data); err != nil {
		return err
	}

	// テーブル接続準備
	connection := PrepareDBConnect()
	article := connection.query.Article

	// UPDATE の実行とエラー処理
	err := connection.query.Transaction(func(tx *query.Query) error {
		if _, err := article.WithContext(connection.context).Where(article.ContentID.Eq(contentId), article.ID.Eq(articleId)).Updates(data); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Update Article.\n")
	}

	data.ID = articleId
	return c.JSON(http.StatusOK, data)
}

/**
 * 一件件削除(DELETE: "/contents/:contentId/article/:articleId")
 */
func DeleteArticles(c echo.Context) error {
	log.Println("exec articles::DeleteArticle")

	contentId, _ := strconv.ParseInt(c.Param("contentId"), 10, 64)
	articleId, _ := strconv.ParseInt(c.Param("articleId"), 10, 64)

	// テーブル接続準備
	connection := PrepareDBConnect()
	article := connection.query.Article

	// DELETE( 削除フラグを立てる ) の実行とエラー処理
	// ※ 物理削除は行わずフラグを立てることによる論理削除を行う
	err := connection.query.Transaction(func(tx *query.Query) error {
		if _, err := article.WithContext(connection.context).Where(article.ContentID.Eq(contentId), article.ID.Eq(articleId)).Update(article.Deleted, true); err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Error: DB Delete Article.\n")
	}

	// 削除したデータを返却したい
	deletedArticles, _ := article.WithContext(connection.context).Where(article.ContentID.Eq(contentId), article.ID.Eq(articleId)).First()
	return c.JSON(http.StatusOK, deletedArticles)
}
