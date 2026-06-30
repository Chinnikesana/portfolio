import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, Github, ImagePlus } from 'lucide-react';
import { projects, type Project } from '../data';
import Reveal from './Reveal';

function ScreenshotPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-navy-900/60"
      style={{ aspectRatio: '16/9' }}
      aria-label={`Screenshot placeholder for ${name}`}
    >
      <div className="flex flex-col items-center gap-2 text-ink-dim">
        <ImagePlus className="h-5 w-5 opacity-50 transition-opacity group-hover:opacity-80" />
        <span className="font-mono text-[9px] uppercase tracking-mono opacity-60 text-center px-2">
          [ADD SCREENSHOT / DEMO GIF]
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.03)_0%,transparent_60%)]" />
    </div>
  );
}

function CategoryBadge({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    'AI / RAG': 'border-blue-glow/40 bg-blue-glow/10 text-blue-bright',
    'Full-Stack': 'border-orange-500/30 bg-orange-500/8 text-orange-400',
    'Computer Vision': 'border-violet-500/30 bg-violet-500/8 text-violet-400',
    'ML Research': 'border-cyan-500/30 bg-cyan-500/8 text-cyan-400',
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-mono ${colorMap[label] ?? 'border-border text-ink-muted'}`}>
      {label}
    </span>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group relative grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-border bg-navy-800/50 transition-all duration-300 hover:border-border-bright hover:shadow-card-hover lg:grid-cols-2">
        {/* Image side */}
        <div className="relative overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-navy-800/20 pointer-events-none" />
          <div className="p-4 sm:p-5">
            <ScreenshotPlaceholder name={project.name} />
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CategoryBadge label={project.category} />
                <span className="inline-flex items-center rounded-full border border-blue-electric/30 bg-blue-electric/8 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-mono text-blue-electric">
                  Featured
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-blue-bright transition-colors sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-0.5 text-sm text-ink-muted">{project.tagline}</p>
            </div>
          </div>

          {/* Problem → Approach → Result */}
          <dl className="mt-5 space-y-3 flex-1">
            <div className="rounded-lg bg-navy-900/60 p-3 border border-border">
              <dt className="font-mono text-[9px] font-semibold uppercase tracking-mono text-accent mb-1">
                Problem
              </dt>
              <dd className="text-[13px] leading-relaxed text-ink">{project.problem}</dd>
            </div>
            <div className="rounded-lg bg-navy-900/60 p-3 border border-border">
              <dt className="font-mono text-[9px] font-semibold uppercase tracking-mono text-ink-dim mb-1">
                Approach
              </dt>
              <dd className="text-[13px] leading-relaxed text-ink-muted">{project.approach}</dd>
            </div>
            <div className="rounded-lg bg-navy-900/60 p-3 border border-live/20 bg-live/5">
              <dt className="font-mono text-[9px] font-semibold uppercase tracking-mono text-live mb-1">
                Result
              </dt>
              <dd className="text-[13px] leading-relaxed text-ink">{project.result}</dd>
            </div>
          </dl>

          {/* Stack pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="skill-pill rounded-md px-2 py-0.5 font-mono text-[10px] text-ink-muted">
                {s}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded-lg bg-blue-glow px-4 py-2 text-[13px] font-medium text-white shadow-glow-sm transition-all hover:bg-blue-bright"
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-navy-900/50 px-4 py-2 text-[13px] font-medium text-ink-dim">
                Company Product — Private
              </span>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 rounded-lg border border-border bg-navy-900/50 px-4 py-2 text-[13px] font-medium text-ink-muted transition-all hover:border-border-bright hover:text-ink"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ScrollCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex-shrink-0 w-[320px] overflow-hidden rounded-xl border border-border bg-navy-800/50 transition-all duration-300 hover:border-border-bright hover:shadow-card-hover hover:-translate-y-1">
      <div className="p-4">
        <ScreenshotPlaceholder name={project.name} />
      </div>

      <div className="flex flex-col p-4 pt-0">
        <div className="flex items-start justify-between gap-2 mb-3">
          <CategoryBadge label={project.category} />
        </div>

        <h3 className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-blue-bright transition-colors">
          {project.name}
        </h3>
        <p className="mt-0.5 text-[12px] text-ink-muted">{project.tagline}</p>

        <div className="mt-3 space-y-2 flex-1">
          <div>
            <span className="font-mono text-[9px] font-bold uppercase tracking-mono text-accent">Problem · </span>
            <span className="text-[12px] text-ink line-clamp-2">{project.problem}</span>
          </div>
          <div>
            <span className="font-mono text-[9px] font-bold uppercase tracking-mono text-live">Result · </span>
            <span className="text-[12px] text-ink-muted line-clamp-2">{project.result}</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="skill-pill rounded px-1.5 py-0.5 font-mono text-[9px] text-ink-muted">
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-1.5 py-0.5 font-mono text-[9px] text-ink-dim">+{project.stack.length - 4}</span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-medium text-blue-bright hover:text-blue-electric transition-colors"
            >
              Demo <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-muted hover:text-ink transition-colors"
            >
              <Github className="h-3 w-3" />
              {project.liveUrl ? 'Code' : 'GitHub (repo only)'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ScrollingRow({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>(0);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered) {
        scrollPosRef.current += speed * (delta / 16);
        const maxScroll = track.scrollWidth / 2;
        if (scrollPosRef.current >= maxScroll) {
          scrollPosRef.current = 0;
        }
        track.style.transform = `translateX(-${scrollPosRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  const duplicated = [...projects, ...projects];

  return (
    <div
      className="relative mt-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-900 to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-4 will-change-transform"
        style={{ width: 'max-content' }}
      >
        {duplicated.map((p, i) => (
          <ScrollCard key={`${p.id}-${i}`} project={p} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 h-80 w-80 bg-blue-subtle/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs text-blue-electric uppercase tracking-wide">03</span>
            <div className="h-px max-w-[60px] flex-1 bg-blue-glow/40" />
            <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">Projects</span>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
              Shipped. Not prototyped.
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-mono text-ink-dim">
              Problem → Approach → Result
            </p>
          </div>
        </Reveal>

        {/* Featured — 2 column grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <FeaturedProject key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Other projects — auto-scrolling row */}
        <div className="mt-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 max-w-[40px] bg-blue-glow/30" />
              <span className="font-mono text-[11px] uppercase tracking-mono text-ink-dim">More Projects</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </Reveal>
          <ScrollingRow projects={rest} />
        </div>
      </div>
    </section>
  );
}
