import Header from "../../widgets/LayoutHeader/Header";
import { PostList } from "../../widgets/PostList/PostList";
import Footer from "../../widgets/LayoutFooter/Footer";

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

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>{
        <PostList posts={mockPosts} />
      }
      </main>
      <Footer />
    </div>
  );
};