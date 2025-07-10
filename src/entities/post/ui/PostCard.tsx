import { memo, useState, useCallback } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import type { Comment } from '../types';

type PostCardProps = {
  title: string;
  body: string;
  comments?: Comment[];
};

export const PostCard = memo(({ title, body, comments = [] }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  
  const toggleComments = useCallback(() => {
    setShowComments(prev => !prev);
  }, []);

  const hasComments = comments.length > 0;

  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
      
      <div className="comments-section">
        {hasComments ? (
          <>
            <Button 
              onClick={toggleComments}
              className="toggle-comments-btn"
            >
              {showComments ? 'Скрыть комментарии' : `Показать комментарии (${comments.length})`}
            </Button>
            
            {showComments && (
              <div className="comments-container">
                <h4>Комментарии:</h4>
                <ul className="comments-list">
                  {comments.map(comment => (
                    <li key={comment.id} className="comment-item">
                      <strong>{comment.author}:</strong> {comment.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="no-comments">
            Нет комментариев
          </div>
        )}
      </div>
    </div>
  );
});

PostCard.displayName = 'PostCard';