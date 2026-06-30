import { useEffect, useState } from 'react';
import { profile } from '../data';

export default function StatusBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 border-b border-border backdrop-blur-xl shadow-glow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo / Name */}
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label={`${profile.name} — home`}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-glow/20 border border-blue-glow/40 group-hover:border-blue-glow/70 transition-colors">
            <span className="font-display text-[11px] font-bold text-blue-bright">CK</span>
          </div>
          <span className="hidden sm:block font-mono text-[11px] font-medium uppercase tracking-mono text-ink-muted group-hover:text-ink transition-colors">
            chinni_kesana
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] uppercase tracking-mono text-ink-muted hover:text-blue-bright transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Status badge */}
        <div className="flex items-center gap-2 rounded-full border border-border bg-navy-800/60 px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-mono text-live hidden sm:block">
            Open to roles
          </span>
          <span className="font-mono text-[10px] uppercase tracking-mono text-live sm:hidden">
            Hiring
          </span>
        </div>
      </div>
    </header>
  );
}
