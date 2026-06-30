import { useEffect, useRef, useState } from 'react';
import { stackLayers } from '../data';

export default function StackDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div ref={ref} className="relative w-full" aria-label="System layers" role="group">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-wide text-ink-dim">system_stack</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-blue-glow/70">
          <span className="h-1 w-1 rounded-full bg-blue-electric animate-pulse" />
          hover to explore
        </span>
      </div>

      <div className="relative rounded-xl border border-border bg-navy-800/50 p-3 backdrop-blur-sm">
        {/* connector line */}
        <div
          className="pointer-events-none absolute bottom-6 left-[26px] top-8 w-px sm:left-[30px]"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.25), transparent)' }}
          aria-hidden="true"
        >
          {!reduced && (
            <div className="stack-pulse-line absolute h-12 w-px animate-pulse-down" />
          )}
        </div>

        <ul className="relative space-y-1">
          {stackLayers.map((layer, i) => {
            const isActive = activeId === layer.id;
            return (
              <li
                key={layer.id}
                className={reduced ? '' : 'animate-layer-in'}
                style={reduced ? undefined : { animationDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(layer.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(layer.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => setActiveId((p) => (p === layer.id ? null : layer.id))}
                  aria-expanded={isActive}
                  aria-controls={`sl-${layer.id}`}
                  className={`group flex w-full items-start gap-3 rounded-lg border px-2.5 py-2 text-left transition-all duration-200 ${
                    isActive
                      ? 'border-blue-glow/40 bg-blue-glow/10 shadow-glow-sm'
                      : 'border-transparent hover:border-border hover:bg-navy-700/50'
                  }`}
                >
                  {/* node */}
                  <span
                    className={`relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isActive
                        ? 'border-blue-bright bg-blue-glow/30'
                        : 'border-border bg-navy-800'
                    }`}
                  >
                    {layer.live && <span className="h-1 w-1 rounded-full bg-live" />}
                    {!layer.live && isActive && <span className="h-1 w-1 rounded-full bg-blue-electric" />}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className={`font-mono text-[10px] font-semibold uppercase tracking-mono sm:text-[11px] ${isActive ? 'text-blue-bright' : 'text-ink-muted'}`}>
                        {layer.label}
                      </span>
                      {layer.live && (
                        <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-mono text-live">
                          <span className="h-1 w-1 rounded-full bg-live" />
                          live
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 font-mono text-[9px] text-ink-dim sm:text-[10px]">
                      {layer.stack}
                    </div>
                    <div
                      id={`sl-${layer.id}`}
                      className={`grid transition-all duration-300 ${isActive ? 'grid-rows-[1fr] pt-1 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <p className="overflow-hidden text-[11px] leading-relaxed text-ink-muted">
                        {layer.detail}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
