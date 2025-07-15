import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockPosts, mockUsers } from '../shared/mocks/data';

export const PostDetailsPage = () => {
  const { id } = useParams();
  const post = mockPosts.find(p => p.id.toString() === id);
  const [showComments, setShowComments] = useState(false);

  if (!post) {
    return <p>Пост не найден.</p>;
  }

  const author = mockUsers.find(user => user.id === post.userId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Автор: <Link to={`/users/${author?.id}`}>{author?.name}</Link></p>
      <p>{post.body}</p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>
      {showComments && (
        <div>
          <h3>Комментарии:</h3>
          {post.comments?.map(comment => {
            const commenter = mockUsers.find(user => user.id === comment.authorId);
            return (
              <div key={comment.id}>
                <p>{comment.text} - <Link to={`/users/${commenter?.id}`}>{commenter?.name}</Link></p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};