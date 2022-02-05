package hello

import (
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Hello(c echo.Context) error {
	log.Println("exec hello.")
	return c.String(http.StatusOK, "Hello, World!\n")
}
