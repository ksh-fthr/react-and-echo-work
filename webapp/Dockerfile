# -----------------------------------------------------
# React アプリをビルドするための環境を構築する
# -----------------------------------------------------
FROM node:18.7.0 as build-stage

WORKDIR /app
COPY ./app/package*.json /app/

# npm 資産のインストールとアプリビルド
RUN npm install
COPY ./app/ /app/

RUN npm run build

# -----------------------------------------------------
# Nginx の Docker 環境を構築する
# -----------------------------------------------------
FROM nginx:1.23

# nginx に資産を置く
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx/conf/nginx.conf /etc/nginx/nginx.conf

