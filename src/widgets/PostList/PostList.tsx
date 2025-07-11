import type { FC } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';

type Post = {
  id: number;
  title: string;
  body: string;
}

type PostListProps = {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};