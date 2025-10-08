FROM golang:1.25.2

# ENV GOPATH /go
# ENV PATH /go/bin:$PATH

WORKDIR /api
COPY ./api /api

RUN go get -u ./...
RUN go mod tidy
#
# 2024/01/06
# 下記エラーが出るようになったので air を明示的にインストールする
# ---
# Error:
#   ERROR: for restapi  Cannot start service api: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "air": executable file not found in $PATH: unknown
# ---
RUN go install github.com/air-verse/air@latest

# air による build と api の起動を行う
CMD ["air", "-c", ".air.toml"]
