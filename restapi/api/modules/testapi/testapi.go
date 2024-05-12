package testapi

import (
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
)

/**
 * 全件取得
 */
func All(c echo.Context) error {
	// 全件取得できたという体でレスポンスを返却する
	return c.String(http.StatusOK, "All Contents\n")
}

/**
 * 指定された ID に紐づくデータを取得
 */
func Content(c echo.Context) error {
	id := c.Param("id")

	// 指定されたデータを取得できたという体でレスポンスを返却する
	return c.String(http.StatusOK, "Contens, id="+id+"\n")
}

/**
 * 登録
 */
func Register(c echo.Context) error {
	log.Println("exec post::contents.Regsiter.")

	// 指定されたデータを登録できたという体でレスポンスを返却する
	return c.String(http.StatusOK, "Register OK\n")
}

/**
 * 指定された ID に紐づくデータを更新
 */
func Update(c echo.Context) error {
	id := c.Param("id")
	log.Println("exec put::contents.Update. id=" + id)

	// 指定されたデータを更新できたという体でレスポンスを返却する
	return c.String(http.StatusOK, "Update, id="+id+"\n")
}

/**
 * 指定された ID に紐づくデータを削除
 */
func Delete(c echo.Context) error {
	id := c.Param("id")
	log.Println("exec delete::contens.Delete. id=" + id)

	// 指定されたデータを削除できたという体でレスポンスを返却する
	return c.String(http.StatusOK, "Delete, id="+id+"\n")
}
