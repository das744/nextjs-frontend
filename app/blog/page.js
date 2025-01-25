

"use client";
import Link from "next/link";
import { fetchPosts } from "@/utils/api";

export default async function page () {
  const posts = await fetchPosts();

  return (
        <section>
          <h2> All Blog Posts</h2>
          {posts.length > 0 ? (
            <ul style={styles.postsGrid}>
              {posts.map((post) => (
                <li style={styles.postItem}  key={post.id}>
                  <h3>{post.title.rendered}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />
                  <Link href={`/posts/${post.slug}`}>Read more</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts available</p>
          )}
        </section>
  );
}
const styles = {
  postsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  postItem: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
};
