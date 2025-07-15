import { mockPosts, mockUsers } from '../shared/mocks/data';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength, type SortOrder } from "../features/PostLengthFilter/lib/filterByLength";

export const PostsPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');

  const sortedPosts = useMemo(() => 
    filterByLength(mockPosts, sortOrder),
    [sortOrder]
  );

  return (
    <div>
      <h1>Посты</h1>
      <PostLengthFilter 
        sortOrder={sortOrder} 
        onSortOrderChange={setSortOrder} 
      />

      {sortedPosts.map(post => {
        const author = mockUsers.find(user => user.id === post.userId);
        return (
          <div key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>Автор: <Link to={`/users/${author?.id}`}>{author?.name}</Link></p>
          </div>
        );
      })}
    </div>
  );
};