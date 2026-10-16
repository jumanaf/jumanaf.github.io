import Link from 'next/link';
import { posts, formatDate } from '@/data/writing';

const linkClass = 'text-accent underline-offset-2 hover:underline';

export default function About() {
  return (
    <div className="space-y-12">
      <section className="space-y-4 text-base leading-relaxed text-fg sm:text-[17px]">
        <p>
          I&apos;m a co-founder at{' '}
          <a href="https://www.kiwicharge.ca/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Kiwi Charge
          </a>
          , building out the software infrastructure for autonomous EV charging robots. Before this, I
          was at{' '}
          <a href="https://www.dynotx.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Dyno Therapeutics
          </a>
          , where I scaled data science pipelines across millions of datapoints to help create gene
          therapy vectors. I studied{' '}
          <a href="https://bioe.uw.edu/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            bioengineering at the University of Washington
          </a>
          , and during my undergrad, researched T-cell memory and immunity.
        </p>
        <p>
          My experiences seem a bit random, but what stays constant is that I truly enjoy working at
          hard problems, particularly at their seams: where hardware meets software, where a model
          meets messy data, where research meets something that has to ship fast.
        </p>
        <p>In my free time, I enjoy reading, scrapbooking, and drinking ample amounts of coffee.</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-bold text-fg">Writing</h2>
        <ul className="mt-4 space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="group block rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-display text-base font-semibold text-fg transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
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
      </section>
    </div>
  );
}
