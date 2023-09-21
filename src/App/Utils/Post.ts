export type PostType = {
  title: string;
  description: string;
  content: string;
  id: string;
  tags: string;
  tagList: string[];
  authorId?: string;
};

class Post implements PostType {
  title: string;
  description: string;
  content: string;
  id: string;
  tags: string;
  tagList: string[];

  constructor(
    title: string,
    description: string,
    content: string,
    id: string,
    tags: string,
    tagList: string[]
  ) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.id = id;
    this.tags = tags;
    this.tagList = tagList;
  }
}

export default Post;
