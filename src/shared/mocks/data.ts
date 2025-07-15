export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  text: string;
  authorId: number;
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
}

export const mockUsers: User[] = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' }
];

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Как выучить React за 24 часа. Если бы всё было так просто...',
    body: 'Текст поста про React.',
    userId: 1,
    comments: [
      { id: 1, text: 'Отличная статья!', authorId: 2 },
      { id: 2, text: 'Не согласен', authorId: 3 }
    ]
  },
  {
    id: 2,
    title: 'TypeScript vs JavaScript. Почему TypeScript — это не просто мода, а необходимость.',
    body: 'Текст поста про TypeScript',
    userId: 2,
    comments: [
      { id: 3, text: 'Полезная информация', authorId: 4 } 
    ]
  },
  {
    id: 3,
    title: 'Лучшие практики FSD: Как не запутаться в собственной структуре проекта.',
    body: 'Текст поста про FSD',
    userId: 2,
    comments: [
      { id: 4, text: 'Полезная информация', authorId: 1 },
      { id: 5, text: 'Буду использовать', authorId: 2 } 
    ]
  },
];

export const mockAlbums: Album[] = [
  { id: 1, userId: 1, title: 'Альбом 1' }
];

export const mockTodos: Todo[] = [
  { id: 1, userId: 1, title: 'Задача 1', completed: false },
  { id: 2, userId: 1, title: 'Задача 2', completed: false },
  { id: 3, userId: 2, title: 'Задача 1', completed: true }
];

export const mockPhotos: Photo[] = [
  {
    id: 1,
    albumId: 1,
    title: 'Фото 1',
    url: 'https://via.placeholder.com/600/92c952'
  },
  {
    id: 2,
    albumId: 1,
    title: 'Фото 2',
    url: 'https://via.placeholder.com/600/771796'
  },
  {
    id: 3,
    albumId: 1,
    title: 'Фото 3',
    url: 'https://via.placeholder.com/600/24f355'
  }
];