export type PostType = {
  title: string;
  description: string;
  content: string;
  id: string;
};

class Post implements PostType {
  title: string;
  description: string;
  content: string;
  id: string;

  constructor(title: string, description: string, content: string, id: string) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.id = id;
  }
}

export default Post;
