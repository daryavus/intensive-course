interface PostCardProps {
  title: string;
  body: string;
}

export const PostCard = ({ title, body }: PostCardProps) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};