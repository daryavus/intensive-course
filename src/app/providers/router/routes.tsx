import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../../../shared/layouts/MainLayout';
import { PostsPage } from '../../../pages/PostsPage';
import { PostDetailsPage } from '../../../pages/PostDetailsPage';
import { UserProfileLayout } from '../../../pages/users/UserProfileLayout';
import { UserPostsPage } from '../../../pages/users/UserPostsPage';
import { UserAlbumsPage } from '../../../pages/users/UserAlbumsPage';
import { AlbumPhotosPage } from '../../../pages/users/AlbumPhotosPage';
import { UserTodosPage } from '../../../pages/users/UserTodosPage';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PostsPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
        <Route path="users/:id" element={<UserProfileLayout />}>
          <Route index element={<UserPostsPage />} />
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="albums" element={<UserAlbumsPage />} />
          <Route path="albums/:albumId" element={<AlbumPhotosPage />} />
          <Route path="todos" element={<UserTodosPage />} />
        </Route>
      </Route>
    </Routes>
  );
};