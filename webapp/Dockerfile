FROM node:16-alpine

WORKDIR /app
COPY ./app/package*.json /app/

RUN npm install
COPY ./app/ /app/
ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15

# ビルドした成果物を Docker 上の Nginx のドキュメントとして扱うためにコピー(デプロイ)
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# Nginx の設定ファイルを Docker 上の Nginx にコピー
COPY ./nginx/conf/nginx.conf /etc/nginx/nginx.conf

