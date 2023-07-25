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
| 記事内容     | body         | TEXT    |             |             | ◯        |
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
    - `/content/{contentId}/article`
- HTTP Body
    ```json
    {
        "substile": string,
        "body": text,
        "remarks": text | null
    }
    ```

### 更新
**コンテンツ更新**

- HTTP METHOD
    - `PATCH`
- URL
    - `/content/{contentId}`
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
    - `/content/{contentId}/article/{articleId}`
- HTTP Body
    ```json
    {
        "substile": string,
        "body": text,
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
          "createdAt": string,
          "updatedAt": string
        }
      ]
    }
    ```

**記事リスト取得**
- HTTP METHOD
    - `GET`
- URL
    - `/content/{contentId}/articles`
- HTTP Response
    ```json
    {
      "contenttId": number,
      "articlesIds": number[]
    }
    ```

**記事取得**
- HTTP METHOD
    - `GET`
- URL
    - `/content/{contentId}/article/{articleId}`
- HTTP Response
    ```json
    {
      "article": {
        "id": number,
        "contentId": number,
        "substile": string,
        "body": text,
        "remarks": text | null,
        "deleted": boolean,
        "createdAt": string,
        "updatedAt": string
      }
    }
    ```

### 削除
**コンテンツ削除**
- HTTP METHOD
    - `DELETE`
- URL
    - `/content/{contentId}`


**記事削除**
- HTTP METHOD
    - `delete`
- URL
    - `/content/{content_id}/article/{articleId}`

