const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/posts`);
    if (!res.ok) throw new Error("Failed to fetch posts");
    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  console.log("Test");
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch post");
    return await res.json();
  } catch (error) {
    console.error("Error fetching post:", error.message);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`); // fixed
    if (!res.ok) throw new Error("Failed to fetch user");
    return await res.json();
  } catch (error) {
    console.error("Error fetching user:", error.message);
    throw error;
  }
};
