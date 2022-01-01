FROM golang:latest

WORKDIR /api
COPY ./api /api

RUN go get -u github.com/cosmtrek/air
RUN go build

ENV CGO_ENABLED=0 \
  GOOS=linux \
  GOARCH=amd64
EXPOSE 8080


CMD ["go", "run", "server.go"]

