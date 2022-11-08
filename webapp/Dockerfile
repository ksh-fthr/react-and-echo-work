# -----------------------------------------------------
# React アプリをビルドするための環境を構築する
# -----------------------------------------------------
FROM node:18.12.1 as build-stage

WORKDIR /app
COPY ./app/package*.json /app/

# npm 資産のインストールとアプリビルド
# `use^http` が React 18.2.0 に追従していないのでエラーになる
# その一時的な回避策として `--legacy-peer-deps` を指定する
RUN npm install --legacy-peer-deps
COPY ./app/ /app/

RUN npm run build

# -----------------------------------------------------
# Nginx の Docker 環境を構築する
# -----------------------------------------------------
FROM nginx:1.23

# nginx に資産を置く
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./nginx/conf/nginx.conf /etc/nginx/nginx.conf

