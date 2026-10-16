'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './theme-toggle';

export default function SiteHeader() {
  const pathname = usePathname();

  // Hide the greeting header on individual writing pages — the post has its own header.
  if (pathname.startsWith('/writing/')) return null;

  return (
    <header className="mb-12">
      <div className="flex items-start justify-between gap-4">
        <Link
          href="/"
          className="font-sans text-4xl font-extrabold tracking-tight text-fg transition-colors hover:text-accent sm:text-5xl"
        >
          Hi! I&apos;m Jumana
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
