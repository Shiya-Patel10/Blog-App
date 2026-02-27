import { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../services/api";
import BlogCard from "../componets/BlogCard";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );
  const togglefavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const postsData = await fetchPosts();
        const usersData = await fetchUsers();

        console.log("POSTS:", postsData);
        console.log("USERS:", usersData);

        const userMap = {};
        usersData.forEach((u) => {
          userMap[u.id] = u.name;
        });

        setPosts(postsData);
        setUsers(userMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Blogs</h1>
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            author={users[post.userId]}
            isFav={favorites.includes(post.id)}
            toggleFav={togglefavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
