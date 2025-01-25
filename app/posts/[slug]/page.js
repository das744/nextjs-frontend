
import { fetchPostBySlug } from "@/utils/api";


export default async function PostPage({ params }) {
  const { slug } = params; // Extract the slug from params
  const post = await fetchPostBySlug(slug); // Fetch the post data using the slug

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      
      <main>
        <h1>{post.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        />
      </main>
     
    </div>
  );
}

