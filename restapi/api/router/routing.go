package router

import (
	"fmt"
	"net/http"
	"restapi/contents"

	"github.com/labstack/echo/v4"
)

// Note: package 内で定義する関数名は大文字で始める

/**
 * API のルーティングを管理する
 */
func Routing(e *echo.Echo) {
	// Todo: Routing メソッドで利用する api は package 化 & メソッド化する
	e.GET("/hello", func(c echo.Context) error {
		fmt.Println("exec hello.")
		return c.String(http.StatusOK, "Hello, World!\n")
	})

	// Contents API
	e.GET("/contents/all", contents.All)
	e.GET("/contents/:id", contents.Content)
	e.POST("/contents", contents.Register)
	e.PUT("/contents/:id", contents.Update)
	e.DELETE("/contents/:id", contents.Delete)
}
