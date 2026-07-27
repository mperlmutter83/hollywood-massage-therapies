export interface BlogPost { slug: string; title: string; date: string; publishedAt: string; category: string; excerpt: string; content: string; }

export const blogPosts: BlogPost[] = [
  { slug: 'benefits-of-regular-massage', title: 'The Benefits of Regular Massage Therapy', date: 'April 29, 2026', publishedAt: '2026-04-29', category: 'Wellness', excerpt: 'Discover how regular massage can improve your physical and mental health.', content: '<p>Regular massage therapy offers numerous benefits including reduced stress, improved circulation, and better sleep. Learn why making massage a part of your routine is one of the best investments in your health.</p>' },
  { slug: 'deep-tissue-vs-swedish', title: 'Deep Tissue vs Swedish Massage: Which is Right for You?', date: 'April 4, 2026', publishedAt: '2026-04-04', category: 'Massage Types', excerpt: 'Learn the differences between these popular massage styles to choose the best one for your needs.', content: '<p>Swedish and deep tissue are two of the most popular massage styles, but they serve different purposes. Swedish is ideal for relaxation, while deep tissue targets chronic pain and muscle tension.</p>' },
];


/** Current date in America/Los_Angeles as YYYY-MM-DD. */
function getTodayLA(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
}

/**
 * Only posts whose publishedAt is <= today (America/Los_Angeles).
 * Use for all public-facing listings and lookups so scheduled posts
 * stay invisible until their date.
 */
export function getPublishedPosts(): BlogPost[] {
  const today = getTodayLA();
  return blogPosts.filter(post => post.publishedAt <= today);
}

/** Published post by slug — undefined if not found or not yet published. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedPosts().find(post => post.slug === slug);
}

/** Slugs of published posts (generateStaticParams). */
export function getAllPostSlugs(): string[] {
  return getPublishedPosts().map(post => post.slug);
}

/** ALL posts (published + scheduled) — /api/posts feed & admin only. */
export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
