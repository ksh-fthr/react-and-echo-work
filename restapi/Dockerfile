FROM golang:1.20.6

WORKDIR /api
COPY ./api /api

RUN go get -u ./...
RUN go mod tidy
#RUN go get github.com/cosmtrek/air

# air による build と api の起動を行う
CMD ["air", "-c", ".air.toml"]

