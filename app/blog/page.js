import Link from "next/link";
export default async function BlogPost() {
    const fetchBlogPost = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const blogPost = await fetchBlogPost.json();    
    
    return (
    <>
    {blogPost.map((post) => (
      <div key={post.id} className="flex items-center justify-between p-24">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-4 text-lg">{post.body}</p>
        <Link href={`/blog/${post.id}`}>Read More</Link>
      </div>
    ))}
    
    </>
  );
}