import { cdate } from "cdate";

export class ContentModel {
  id = null;
  title = null;
  author = null
  summary = null;
  deleted = null;
  created_at = null;
  updated_at = null;

  constructor(content) {
    this.id = content.id;
    this.title = content.title;
    this.author = content.author ?? '';
    this.summary = content.summary ?? '';
    this.deleted = content.deleted;
    this.created_at = cdate(content.created_at);
    this.updated_at = cdate(content.updated_at);
  }
}

export class ContentsModel {
  contents = [];
  constructor(contents) {
    this.contents = contents;
  }
}

export const transportContentsModel = (response) => {
  return new ContentsModel(
    response.contents.map((content) => new ContentsModel(content))
  );
}

