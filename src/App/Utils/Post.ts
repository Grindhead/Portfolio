const post = {
  title: "",
  description: "",
  content: "",
  id: "",
  tags: "",
  tagList: "",
  authorId: "",
} as const;

export type PostType = [keyof typeof post];
