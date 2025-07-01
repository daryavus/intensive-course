import { PostList } from '../widgets/PostList/PostList';


const mockPosts = [
  {
    id: 1,
    title: 'Как выучить React за 24 часа',
    body: 'Если бы всё было так просто'
  },
  {
    id: 2,
    title: 'TypeScript vs JavaScript',
    body: 'Почему TypeScript — это не просто мода, а необходимость.'
  },
  {
    id: 3,
    title: 'Лучшие практики FSD',
    body: 'Как не запутаться в собственной структуре проекта.'
  }
];

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <PostList posts={mockPosts} />
    </div>
  );
}

export default App;
