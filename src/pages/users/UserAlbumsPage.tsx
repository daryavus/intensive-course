import { useParams, Link } from 'react-router-dom';
import { mockAlbums } from '../../shared/mocks/data';

export const UserAlbumsPage = () => {
  const { id } = useParams();
  const userAlbums = mockAlbums.filter(album => album.userId.toString() === id);

  return (
    <div>
      <h1>Альбомы пользователя</h1>
      {userAlbums.length === 0 ? (
        <p>У пользователя нет альбомов.</p>
      ) : (
        userAlbums.map(album => (
          <div key={album.id}>
            <h2>
              <Link to={`/users/${id}/albums/${album.id}`}>{album.title}</Link>
            </h2>
          </div>
        ))
      )}
    </div>
  );
};