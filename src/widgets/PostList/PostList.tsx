import { memo } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/post/types';
import { withLoading } from '../../shared/lib/hoc/withLoading';

type PostListProps = {
  posts: Post[];
}

const PostListComponent = memo(({ posts }: PostListProps) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          comments={post.comments}
        />
      ))}
    </div>
  );
});

PostListComponent.displayName = 'PostListComponent';

export const PostList = withLoading(PostListComponent, 'Загружаем посты...');