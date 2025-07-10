import { memo, useCallback } from 'react';
import type { SortOrder } from '../lib/filterByLength';

type PostLengthFilterProps = {
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
}

export const PostLengthFilter = memo(({ 
  sortOrder, 
  onSortOrderChange 
}: PostLengthFilterProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSortOrderChange(e.target.value as SortOrder);
    },
    [onSortOrderChange]
  );

  return (
    <div className="post-length-filter">
      <select
        value={sortOrder}
        onChange={handleChange}
      >
        <option value="none">Без сортировки</option>
        <option value="asc">По возрастанию длины</option>
        <option value="desc">По убыванию длины</option>
      </select>
    </div>
  );
});

PostLengthFilter.displayName = 'PostLengthFilter';