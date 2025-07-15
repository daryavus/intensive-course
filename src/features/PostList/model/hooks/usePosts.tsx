import { useState, useEffect } from 'react';
import { mockPosts, type Post } from '../../../../shared/mocks/data';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 300);
  }, []);

  return { posts, isLoading };
};