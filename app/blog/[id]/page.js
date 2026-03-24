
export default async function SingleBlog({ params }) {
  const { id } = await params;

  const fetchBlogPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blogPost = await fetchBlogPost.json();


  return (
    <div key={blogPost.id} className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{blogPost.title}</h1>
      <p className="mt-4 text-lg">{blogPost.body}</p>
    </div>
  );
}