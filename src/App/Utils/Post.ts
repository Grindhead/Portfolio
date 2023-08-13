export type PostType = {
  title: string;
  description: string;
  content: string;
};

class Post implements PostType {
  title: string;
  description: string;
  content: string;

  constructor(title: string, description: string, content: string) {
    this.title = title;
    this.description = description;
    this.content = content;
  }
}

export default Post;
