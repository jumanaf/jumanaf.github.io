import { socials } from '@/data/content';
import { iconMap } from './icons';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border pt-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.name}
                href={s.href}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-muted">
          © {'2026'} Jumana Fathima
        </p>
      </div>
    </footer>
  );
}
