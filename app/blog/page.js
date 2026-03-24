import Card from '../components/card';
import Link from 'next/link';

export default async function BlogPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {posts.slice(0, 9).map((post) => (
        <Card key={post.id} title={post.title} description={post.body.substring(0, 60) + "..."}>
          <Link href={`/blog/${post.id}`} className="text-blue-500 font-bold">
            Read More →
          </Link>
        </Card>
      ))}
    </div>
  );
}