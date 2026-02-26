import { Link } from "react-router-dom";

const BlogCard = ({ posts, author }) => {
  const imageUrl = `https://picsum.photos/id/${posts.id}/300/200`;

  return (
    <div className="card">
      <img src={imageUrl} alt="blog" className="card-img" />

      <div className="card-content">
        <h2>{posts.title}</h2>

        <p>{posts.body.substring(0, 80)}...</p>

        <p className="author">Author: {author}</p>

        <Link to={`/post/${posts.id}`} className="btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
