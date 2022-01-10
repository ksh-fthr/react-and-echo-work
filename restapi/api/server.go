package main

import (
	"restapi/router"

	"github.com/labstack/echo/v4"
)

// echo による rest-api
func main() {
	e := echo.New()
	router.Routing(e)
	e.Logger.Fatal(e.Start(":8080"))
}
