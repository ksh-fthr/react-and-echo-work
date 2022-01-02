package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

// echo による rest-api
func main() {
	e := echo.New()
	e.GET("/hello", func(c echo.Context) error {
		fmt.Println("exec hello.")
		return c.String(http.StatusOK, "Hello, World!\n")
	})
	e.Logger.Fatal(e.Start(":8080"))
}
