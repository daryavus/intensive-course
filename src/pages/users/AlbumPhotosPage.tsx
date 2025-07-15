import { useParams } from 'react-router-dom';
import { mockPhotos } from '../../shared/mocks/data';

export const AlbumPhotosPage = () => {
  const { albumId } = useParams();
  const albumPhotos = mockPhotos.filter(photo => photo.albumId.toString() === albumId);

  return (
    <div>
      <h1>Фотографии Альбома {albumId}</h1>
      {albumPhotos.length === 0 ? (
        <p>В этом альбоме нет фотографий.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {albumPhotos.map(photo => (
            <div key={photo.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
              <img 
                src={photo.url} 
                alt={photo.title} 
                style={{ width: '100%', height: 'auto' }}
              />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};