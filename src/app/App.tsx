import { ThemeProvider } from "../shared/lib/theme/ThemeContext";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";

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
    <ThemeProvider>
      <MainLayout>
        <PostList posts = {mockPosts} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
