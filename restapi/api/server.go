package main

import (
	"restapi/api_routing"

	"github.com/labstack/echo/v4"
)

// echo による rest-api
func main() {
	e := echo.New()
	api_routing.Routing(e)
	e.Logger.Fatal(e.Start(":8080"))
}
