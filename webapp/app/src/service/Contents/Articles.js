export class ArticlesModel {
  contentId = null
  articleIds = []

  constructor(contentId, articleIds) {
    this.contentId = contentId
    this.articleIds = articleIds
  }
}

export const transportArticlesModel = (response) => {
  return new ArticlesModel(response.contentId, response.articleIds)
}
