import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById } from "../services/api";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPostById(id)
      .then((data) => setPost(data))
      .catch((err) => setError("Failed to load blog"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>Loading blog...</h2>;
  if (error) return <p>{error}</p>;

  const imageUrl = `https://picsum.photos/id/${id}/800/400`;

  return (
    <div className="container">
      <button className="btn back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="details">
        <img src={imageUrl} alt="blog" className="detail-img" />

        <h1>{post.title}</h1>

        <p className="content">{post.body}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
