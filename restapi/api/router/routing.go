package router

import (
	"restapi/modules/articles"
	"restapi/modules/contents"
	"restapi/modules/hello"
	"restapi/modules/testapi"

	"github.com/labstack/echo/v4"
)

// Note: package 内で定義する関数名は大文字で始める

/**
 * API のルーティングを管理する
 */
func Routing(e *echo.Echo) {
	e.GET("/hello", hello.Hello)

	// testapi API
	e.GET("/testapi/all", testapi.All)
	e.GET("/testapi/:id", testapi.Content)
	e.POST("/testapi", testapi.Register)
	e.PUT("/testapi/:id", testapi.Update)
	e.DELETE("/testapi/:id", testapi.Delete)

	// contents API
	e.GET("/contents", contents.GetAllContents)
	e.GET("/contents/:id", contents.GetOneContents)
	e.POST("/contents", contents.RegisterContents)
	e.PUT("/contents/:id", contents.UpdateContents)
	e.DELETE("/contents/:id", contents.DeleteContents)

	// contents API
	e.GET("/contents/:contentId/articles", articles.GetAllArticles)
	e.GET("/contents/:contentId/article/:articleId", articles.GetOneArticles)
	e.POST("/contents/:contentId/article", articles.RegisterArticles)
	e.PUT("/contents/:contentId/article/:articleId", articles.UpdateArticles)
	e.DELETE("/contents/:contentId/article/:articleId", articles.DeleteArticles)
}
