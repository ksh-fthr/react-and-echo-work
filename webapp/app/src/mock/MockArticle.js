const body = `
これはポスティングサイトにおけるコンテンツ内の一記事です.
改行込の文章が表示できるかを確認してます。
`

export const MockArticle = {
  article: {
    id: 1,
    contentId: 1,
    subtitle: '副題はここです',
    body,
    remarks: '',
    deleted: false,
    createdAt: '2023-07-22',
    updatedAt: '2023-07-22'
  }
}
