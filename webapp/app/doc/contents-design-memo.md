# Contents 設計メモ

## 全体像
- TOP ページではコンテンツ全体を取得
- コンテンツのリンクを踏むとコンテンツ記事へ遷移
- 記事ではコンテンツに紐づく複数の記事を閲覧することができる

## 詳細
### コンテンツ
- コンテンツは以下の性格を持つ
    - 記事を包括する
    - 一つのコンテンツに対して複数記事
    - コンテンツの「作成」「削除」が行える

### 記事
- 記事は以下の性格を持つ
    - コンテンツ記事では「記事作成」「記事編集」「記事閲覧」「記事削除」が行える

## データ構造
### 親テーブル

- Content テーブル

| 論理名     | 物理名     | 型      | Primary Key | Foreign Key | NOT NULL |
|------------|------------|---------|:-----------:|:-----------:|:--------:|
| id         | id         | INT     | ◯           |             | ◯        |
| タイトル   | title      | VARCHAR |             |             | ◯        |
| 執筆者     | author     | VARCHAR |             |             |          |
| 要約       | summary    | TEXT    |             |             |          |
| 削除フラグ | deleted    | BOOLEAN |             |             | ◯        |
| 作成日時   | created_at | DATE    |             |             | ◯        |
| 更新日時   | updated_at | DATE    |             |             | ◯        |


### 子テーブル

- Article テーブル

| 論理名       | 物理名       | 型      | Primary Key | Foreign Key | NOT NULL |
|--------------|--------------|---------|:-----------:|:-----------:|:--------:|
| id           | id           | INT     | ◯           |             | ◯        |
| コンテンツID | content_id   | INT     | ◯           |             | ◯        |
| サブタイトル | subtitle     | VARCHAR |             |             | ◯        |
| 記事内容     | content_body | TEXT    |             |             | ◯        |
| 備考         | remarks      | TEXT    |             |             |          |
| 削除フラグ   | deleted      | BOOLEAN |             |             | ◯        |
| 作成日時     | created_at   | DATE    |             |             | ◯        |
| 更新日時     | updated_at   | DATE    |             |             | ◯        |

## API
### 作成
**コンテンツ作成**

- HTTP METHOD
    - `POST`
- URL
    - `/content`
- HTTP Body
    ```json
    {
        "title": string,
        "author": string | null,
        "summary": text | null
    }
    ```

**記事作成**
- HTTP METHOD
    - `POST`
- URL
    - `/content/{content_id}/article`
- HTTP Body
    ```json
    {
        "substile": string,
        "content_body": text,
        "remarks": text | null
    }
    ```

### 更新
**コンテンツ更新**

- HTTP METHOD
    - `PATCH`
- URL
    - `/content/{content_id}`
- HTTP Body
    ```json
    {
        "title": string,
        "author": string | null,
        "summary": text | null
    }
    ```

**記事更新**
- HTTP METHOD
    - `PATCH`
- URL
    - `/content/{content_id}/article/{article_id}`
- HTTP Body
    ```json
    {
        "substile": string,
        "content_body": text,
        "remarks": text | null
    }
    ```

### 閲覧
**コンテンツリスト取得**
- HTTP METHOD
    - `GET`
- URL
    - `/contents`
- HTTP Response
    ```json
    {
      "contents": [
        {
          "id": number,
          "title": string,
          "author": string | null,
          "summary": text | null,
          "deleted": boolean,
          "created_at": string,
          "updated_at": string
        }
      ]
    }
    ```

**記事リスト取得**
- HTTP METHOD
    - `GET`
- URL
    - `/content/{content_id}/articles`
- HTTP Response
    ```json
    {
      "contentt_id": number,
      "articles_ids": number[]
    }
    ```

**記事取得**
- HTTP METHOD
    - `GET`
- URL
    - `/content/{content_id}/article/{article_id}`
- HTTP Response
    ```json
    {
      "content_id": number,
      "article": {
        "id": number,
        "substile": string,
        "content_body": text,
        "remarks": text | null,
        "deleted": boolean,
        "created_at": string,
        "updated_at": string
      }
    }
    ```

### 削除
**コンテンツ削除**
- HTTP METHOD
    - `DELETE`
- URL
    - `/content/{content_id}`


**記事削除**
- HTTP METHOD
    - `delete`
- URL
    - `/content/{content_id}/article/{article_id}`

