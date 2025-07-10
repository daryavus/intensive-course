export type Comment = {
  id: number;
  text: string;
  author: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};