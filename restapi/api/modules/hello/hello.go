package hello

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Hello(c echo.Context) error {
	fmt.Println("exec hello.")
	return c.String(http.StatusOK, "Hello, World!\n")
}
