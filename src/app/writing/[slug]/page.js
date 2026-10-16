import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost, formatDate } from '@/data/writing';

import RigorousStorytelling from '@/content/writing/rigorous-storytelling.mdx';

const bodies = {
  'rigorous-storytelling': RigorousStorytelling,
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return post ? { title: `${post.title} — Jumana Fathima` } : {};
}

export default function Post({ params }) {
  const post = getPost(params.slug);
  const Body = bodies[params.slug];

  if (!post || !Body) notFound();

  return (
    <article>
      <Link href="/" className="text-sm text-muted transition-colors hover:text-accent">
        ← Back
      </Link>

      <header className="mt-6">
        <h1 className="font-display text-2xl font-bold leading-tight text-fg">{post.title}</h1>
        <p className="mt-2 text-xs text-muted">
          {formatDate(post.date)} · {post.readingTime}
        </p>
      </header>

      <div className="prose mt-8">
        <Body />
      </div>
    </article>
  );
}
