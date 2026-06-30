import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Network,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data';
import Reveal from './Reveal';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-4 w-4" />,
  sparkles: <Sparkles className="h-4 w-4" />,
  network: <Network className="h-4 w-4" />,
  layers: <Layers className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
  code: <Code2 className="h-4 w-4" />,
  cloud: <Cloud className="h-4 w-4" />,
};

const categoryAccent: Record<string, { icon: string; dot: string; border: string; bg: string }> = {
  brain: {
    icon: 'text-blue-bright',
    dot: 'bg-blue-bright',
    border: 'border-blue-glow/30 hover:border-blue-glow/60',
    bg: 'bg-blue-glow/8',
  },
  sparkles: {
    icon: 'text-cyan-400',
    dot: 'bg-cyan-400',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    bg: 'bg-cyan-500/5',
  },
  network: {
    icon: 'text-violet-400',
    dot: 'bg-violet-400',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    bg: 'bg-violet-500/5',
  },
  layers: {
    icon: 'text-orange-400',
    dot: 'bg-orange-400',
    border: 'border-orange-500/20 hover:border-orange-500/50',
    bg: 'bg-orange-500/5',
  },
  database: {
    icon: 'text-green-400',
    dot: 'bg-green-400',
    border: 'border-green-500/20 hover:border-green-500/50',
    bg: 'bg-green-500/5',
  },
  code: {
    icon: 'text-blue-electric',
    dot: 'bg-blue-electric',
    border: 'border-blue-electric/20 hover:border-blue-electric/50',
    bg: 'bg-sky-500/5',
  },
  cloud: {
    icon: 'text-sky-400',
    dot: 'bg-sky-400',
    border: 'border-sky-500/20 hover:border-sky-500/50',
    bg: 'bg-sky-500/5',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 bg-blue-subtle/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs text-blue-electric uppercase tracking-wide">02</span>
            <div className="h-px max-w-[60px] flex-1 bg-blue-glow/40" />
            <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">Skills</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
            Tools I ship with.
          </h2>
          <p className="mt-2 text-sm text-ink-muted max-w-xl">
            Grouped by what they&apos;re for — not a flat tag cloud.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const accent = categoryAccent[cat.icon];
            return (
              <Reveal key={cat.label} delay={i * 60}>
                <div
                  className={`group rounded-xl border p-5 transition-all duration-300 ${accent.border} ${accent.bg} backdrop-blur-sm`}
                >
                  {/* Category header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg border border-current/20 bg-current/10 ${accent.icon}`}>
                      {iconMap[cat.icon]}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-tight text-ink">
                        {cat.label}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={`h-1 w-1 rounded-full ${accent.dot}`} />
                        <span className="font-mono text-[9px] uppercase tracking-mono text-ink-dim">
                          {cat.items.length} technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="skill-pill cursor-default rounded-md px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
