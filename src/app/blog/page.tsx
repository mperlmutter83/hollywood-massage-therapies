import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <div>
      <section className="bg-teal-800 text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-bold">Blog</h1></div></section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-teal-50 p-6 rounded-lg">
              <span className="text-teal-600 text-sm">{post.category}</span>
              <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mt-1 text-lg">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
