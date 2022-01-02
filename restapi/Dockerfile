FROM golang:1.16.7

WORKDIR /api
COPY ./api /api

RUN go mod tidy
RUN go get github.com/cosmtrek/air

# air による build と api の起動を行う
CMD ["air", "-c", ".air.toml"]

