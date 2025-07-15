import { useParams, Link } from 'react-router-dom';
import { mockPosts } from '../../shared/mocks/data';

export const UserPostsPage = () => {
  const { id } = useParams();
  const userPosts = mockPosts.filter(post => post.userId.toString() === id);

  return (
    <div>
      <h1>Посты пользователя</h1>
      {userPosts.length === 0 ? (
        <p>У пользователя нет постов.</p>
      ) : (
        userPosts.map(post => (
          <div key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
          </div>
        ))
      )}
    </div>
  );
};