package testapi

import (
	"log"
	"net/http"

	"github.com/labstack/echo/v4"
)

func All(c echo.Context) error {
	log.Println("exec get::contnets.All.")
	return c.String(http.StatusOK, "All Contents\n")
}

func Content(c echo.Context) error {
	id := c.Param("id")
	log.Println("exec get::contnets.Content. id=" + id)
	return c.String(http.StatusOK, "Contens, id="+id+"\n")
}

func Register(c echo.Context) error {
	log.Println("exec post::contents.Regsiter.")
	return c.String(http.StatusOK, "Register OK\n")
}

func Update(c echo.Context) error {
	id := c.Param("id")
	log.Println("exec put::contents.Update. id=" + id)
	return c.String(http.StatusOK, "Update, id="+id+"\n")
}

func Delete(c echo.Context) error {
	id := c.Param("id")
	log.Println("exec delete::contens.Delete. id=" + id)
	return c.String(http.StatusOK, "Delete, id="+id+"\n")
}
