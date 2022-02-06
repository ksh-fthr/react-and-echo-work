package main

import (
	"net/http"
	"restapi/router"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// echo による rest-api
func main() {
	e := echo.New()

	var allowedOrigins = []string{
		"http://172.30.10.30:3000",
	}

	// CORS用のmiddlewareはあるものの、403を勝手に返してくれるわけではない。
	// 以下のレスポンスヘッダを付与する役割がある。
	// Access-Control-Allow-Credentials: true
	// Access-Control-Allow-Origin: https://www.example.com:8080
	e.Use(
		middleware.CORSWithConfig(middleware.CORSConfig{
			AllowCredentials: true,
			AllowOrigins:     allowedOrigins,
			AllowHeaders: []string{
				echo.HeaderAccessControlAllowHeaders,
				echo.HeaderContentType,
				echo.HeaderContentLength,
				echo.HeaderAcceptEncoding,
				echo.HeaderXCSRFToken,
				echo.HeaderAuthorization,
			},
			AllowMethods: []string{
				http.MethodGet,
				http.MethodPut,
				http.MethodPatch,
				http.MethodPost,
				http.MethodDelete,
			},
			MaxAge: 86400,
		}),
	)

	router.Routing(e)
	e.Logger.Fatal(e.Start(":8080"))
}
