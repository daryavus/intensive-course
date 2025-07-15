import type { Post } from "../../../shared/mocks/data";

export type SortOrder = 'asc' | 'desc' | 'none';

export const filterByLength = (posts: Post[], order: SortOrder = 'none'): Post[] => {
  if (order === 'none') return [...posts];
  
  return [...posts].sort((a, b) => {
    const lengthA = a.title.length;
    const lengthB = b.title.length;
    
    return order === 'asc' 
      ? lengthA - lengthB 
      : lengthB - lengthA;
  });
};