import Link from 'next/link';
import { posts, formatDate } from '@/data/writing';

export const metadata = {
  title: 'Writing — Jumana Fathima',
};

export default function Writing() {
  return (
    <div>
      <h1 className="font-display text-xl font-bold text-fg">Writing</h1>
      <p className="mt-2 text-base leading-relaxed text-muted">
        Occasional notes on data, storytelling, and things I’m curious about.
      </p>

      <ul className="mt-8 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h2 className="font-display text-base font-semibold text-fg transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <span className="text-xs text-muted">
                  {formatDate(post.date)} · {post.readingTime}
                </span>
              </div>
              {post.excerpt && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
