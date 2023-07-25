import { cdate } from "cdate";

export class ArticleModel {
  id = null;
  contentId = null;
  substile = null;
  body = null;
  remarks = null;
  deleted = null;
  createdAt = null;
  updatedAt = null;

  constructor(article) {
    this.id = article.id;
    this.contentId = article.contentId;
    this.substile = article.subtitle;
    this.body = article.body;
    this.remarks = article.remarks ?? '';
    this.deleted = article.deleted;
    this.created_at = cdate(article.created_at);
    this.updated_at = cdate(article.updated_at);
  }
}

export const transportArticleModel = (response) => {
  return new ArticleModel( response.article);
}


