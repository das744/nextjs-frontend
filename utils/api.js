import axios from 'axios';

const API_URL = process.env.WORDPRESS_API_URL || "http://localhost:10008/wp-json";

// Fetch posts from WordPress
export const fetchPosts = async () => {
  try {
    const res = await axios.get(`${API_URL}/wp/v2/posts`);
    return res.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    return []; // Return empty array in case of error
  }
};

// Fetch individual post by slug
export const fetchPostBySlug = async (slug) => {
  try {
    const res = await axios.get(`${API_URL}/wp/v2/posts?slug=${slug}`);
    return res.data[0]; // Returns the first post from the result (if exists)
  } catch (error) {
    console.error(`Error fetching post with slug: ${slug}`, error);
    return null; // Return null if the post is not found or there's an error
  }
};
export default API_URL;

// Send contact form data to the API route
// export const sendContactForm = async (data) => {
//   const response = await fetch('/api/contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || 'Failed to send the message.');
//   }

//   return await response.json();
// };


