FROM golang:latest

WORKDIR /api
COPY ./api /api

RUN go mod init restapi \
  && go mod tidy \
  && go build

ENV CGO_ENABLED=0 \
  GOOS=linux \
  GOARCH=amd64
EXPOSE 8080


CMD ["go", "run", "server.go"]

