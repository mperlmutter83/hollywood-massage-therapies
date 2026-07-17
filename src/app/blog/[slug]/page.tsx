import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() { return getAllPostSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const post = getPostBySlug(slug); if (!post) return { title: 'Not Found' }; return { title: post.title }; }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div>
      <section className="bg-teal-800 text-white py-16"><div className="max-w-4xl mx-auto px-4"><span className="text-teal-200">{post.category}</span><h1 className="text-3xl font-bold mt-2">{post.title}</h1><p className="text-teal-200 mt-2">{post.date}</p></div></section>
      <article className="py-12 bg-white"><div className="max-w-4xl mx-auto px-4"><div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} /><Link href="/blog" className="inline-block mt-8 text-teal-600 font-medium">← Back to Blog</Link></div></article>
    </div>
  );
}
