package main

import (
  // ご自身の環境にあわせてドライバを変更してください
  "gorm.io/driver/mysql"
  "gorm.io/gen"
  "gorm.io/gen/field"
  "gorm.io/gorm"
)

func main() {
  // コード生成ジェネレータの設定です
  // 各パラメータはこちらをご参照ください
  // https://gorm.io/gen/dao.html#gen-Config
  g := gen.NewGenerator(gen.Config{
    OutPath: "./gen/query",  // 出力先
    // 各モードのリファレンスはこちらです
    // https://gorm.io/gen/dao.html#Generator-Modes
    Mode: gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface,
  })

  // ご自身の環境に応じて Open の引数は変更してください
  dbconf := "mysql:mysqladmin@tcp(172.30.10.100:3306)/mydb?charset=utf8mb4"
  gormdb, _ := gorm.Open(mysql.Open(dbconf))
  g.UseDB(gormdb)

  // リレーションを張りたいテーブルを指定し親子関係を設定します
  // Contents はArticles テーブルを子テーブルに持ちます
  article := g.GenerateModel("Articles")

  // Artilcles はContents テーブルを親テーブルに持ちます
  content := g.GenerateModel("Contents",
    gen.FieldRelate(field.HasMany, "Articles", article, &field.RelateConfig {
      GORMTag: field.GormTag{
        "foreignKey": []string{"ContentID"},
        "references": []string{"ID"},
      },
    }),
  )

  // コードを生成する対象のモデルを設定して...
  g.ApplyBasic(article, content)

  // コード生成を実行します
  g.Execute()
}

