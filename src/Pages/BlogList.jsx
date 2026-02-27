import { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../services/api";
import BlogCard from "../componets/BlogCard"; // ✅ fixed spelling

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showFavorites, setShowFavorites] = useState(false);

  // ✅ Filter posts (search + favorites)
  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .filter((post) => (showFavorites ? favorites.includes(post.id) : true));

  // ✅ Toggle favorite
  const toggleFavorite = (id) => {
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

      {/* ✅ Search */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleCount(6); // reset pagination on search
        }}
        className="search-input"
      />

      {/* ✅ Show Favorites Toggle */}
      <button
        className="fav-toggle-btn"
        onClick={() => setShowFavorites(!showFavorites)}
      >
        {showFavorites ? "Show All Blogs" : "Show Favorites"}
      </button>

      {/* ✅ Blog Grid */}
      <div className="blog-grid">
        {filteredPosts.slice(0, visibleCount).map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            author={users[post.userId]}
            isFav={favorites.includes(post.id)}
            toggleFav={toggleFavorite}
          />
        ))}
      </div>

      {/* ✅ Load More Pagination */}
      {visibleCount < filteredPosts.length && (
        <button
          className="load-more-btn"
          onClick={() => setVisibleCount(visibleCount + 6)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default BlogList;
