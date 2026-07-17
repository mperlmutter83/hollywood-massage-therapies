export interface BlogPost { slug: string; title: string; date: string; category: string; excerpt: string; content: string; }

export const blogPosts: BlogPost[] = [
  { slug: 'benefits-of-regular-massage', title: 'The Benefits of Regular Massage Therapy', date: 'April 29, 2026', category: 'Wellness', excerpt: 'Discover how regular massage can improve your physical and mental health.', content: '<p>Regular massage therapy offers numerous benefits including reduced stress, improved circulation, and better sleep. Learn why making massage a part of your routine is one of the best investments in your health.</p>' },
  { slug: 'deep-tissue-vs-swedish', title: 'Deep Tissue vs Swedish Massage: Which is Right for You?', date: 'April 4, 2026', category: 'Massage Types', excerpt: 'Learn the differences between these popular massage styles to choose the best one for your needs.', content: '<p>Swedish and deep tissue are two of the most popular massage styles, but they serve different purposes. Swedish is ideal for relaxation, while deep tissue targets chronic pain and muscle tension.</p>' },
];

export function getPostBySlug(slug: string) { return blogPosts.find((p) => p.slug === slug); }
export function getAllPostSlugs() { return blogPosts.map((p) => p.slug); }
