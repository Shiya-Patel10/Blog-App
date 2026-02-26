import { Link } from "react-router-dom";

const BlogCard = ({ post, author }) => {
  if (!post) return null;

  const imageUrl = `https://picsum.photos/id/${post.id}/300/200`;

  return (
    <div className="card">
      <img src={imageUrl} alt="blog" className="card-img" />

      <h2>{post.title}</h2>

      <p>{post.body?.substring(0, 80)}...</p>

      <p>Author: {author}</p>

      <Link to={`/post/${post.id}`} className="btn">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
