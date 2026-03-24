import Link from 'next/link';
export default async function BlogPost({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="p-8 max-w-2xl mx-auto">
        <Link href="/blog" className="text-2xl font-bold text-blue-600 mb-4">
                ← Back
        </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
}
