import type { FC } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list">
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