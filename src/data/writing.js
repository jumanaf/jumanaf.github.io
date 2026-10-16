// Post metadata registry. Bodies live in src/content/writing/<slug>.mdx and are
// wired to slugs in src/app/writing/[slug]/page.js. Keep newest first.
export const posts = [
  {
    slug: 'rigorous-storytelling',
    title: 'Rigorous storytelling',
    date: '2026-10-15',
    readingTime: '2 min read',
    excerpt: '',
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
