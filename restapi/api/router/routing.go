package router

import (
	"restapi/hello"
	"restapi/testapi"

	"github.com/labstack/echo/v4"
)

// Note: package 内で定義する関数名は大文字で始める

/**
 * API のルーティングを管理する
 */
func Routing(e *echo.Echo) {
	e.GET("/hello", hello.Hello)

	// Contents API
	e.GET("/testapi/all", testapi.All)
	e.GET("/testapi/:id", testapi.Content)
	e.POST("/testapi", testapi.Register)
	e.PUT("/testapi/:id", testapi.Update)
	e.DELETE("/testapi/:id", testapi.Delete)
}
