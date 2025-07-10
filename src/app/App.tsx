import { useState, useMemo } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength, type SortOrder } from "../features/PostLengthFilter/lib/filterByLength";
import type { Post } from "../entities/post/types";

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Как выучить React за 24 часа',
    body: 'Если бы всё было так просто',
    comments: [
      { id: 1, text: 'Отличная статья!', author: 'User1' },
      { id: 2, text: 'Спасибо за материал', author: 'User2' }
    ]
  },
  {
    id: 2,
    title: 'TypeScript vs JavaScript',
    body: 'Почему TypeScript — это не просто мода, а необходимость.',
    comments: [
      { id: 3, text: 'Полностью согласен!', author: 'User3' },
      { id: 4, text: 'Интересное сравнение', author: 'User4' }
    ]
  },
  {
    id: 3,
    title: 'Лучшие практики FSD',
    body: 'Как не запутаться в собственной структуре проекта.',
    comments: []
  }
];

function App() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
  const sortedPosts = useMemo(() => 
    filterByLength(mockPosts, sortOrder),
    [sortOrder]
  );

  return (
    <MainLayout>
      <PostLengthFilter 
        sortOrder={sortOrder} 
        onSortOrderChange={setSortOrder} 
      />
      <PostList posts={sortedPosts} />
    </MainLayout>
  );
}

export default App;
