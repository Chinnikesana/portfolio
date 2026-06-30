import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, profile } from '../data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative border-t border-border overflow-hidden">
      {/* Section glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-blue-subtle/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-blue-electric uppercase tracking-wide">01</span>
            <div className="h-px flex-1 max-w-[60px] bg-blue-glow/40" />
            <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">About</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* About text */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
                Building at the intersection of web and AI.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-ink-muted">{profile.about}</p>

              {/* Education card */}
              <div className="mt-6 rounded-xl border border-border bg-navy-800/50 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-glow/15 border border-blue-glow/25">
                    <GraduationCap className="h-4 w-4 text-blue-bright" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-ink">RGUKT Nuzvid</div>
                    <div className="text-[13px] text-ink-muted">B.Tech Computer Science · Final Year</div>
                    <div className="mt-1 font-mono text-[11px] text-blue-electric/80">CGPA 8.2 / 10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience timeline */}
            <div className="lg:col-span-7">
              <div className="mb-4 flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5 text-blue-glow" />
                <span className="font-mono text-[11px] uppercase tracking-mono text-ink-muted">Experience</span>
              </div>

              <ol className="space-y-4">
                {experiences.map((exp, i) => (
                  <Reveal key={`${exp.company}-${exp.period}`} delay={i * 80}>
                    <li className={`rounded-xl border p-5 transition-all duration-300 hover:border-border-bright ${
                      exp.current
                        ? 'border-blue-glow/35 bg-blue-glow/8'
                        : 'border-border bg-navy-800/40'
                    }`}>
                      {exp.current && (
                        <div className="mb-2.5 flex items-center gap-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-mono text-live">Current</span>
                        </div>
                      )}

                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-display text-base font-semibold text-ink">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[10px] uppercase tracking-mono text-ink-dim">
                          {exp.period}
                        </span>
                      </div>
                      <div className="mt-0.5 font-mono text-[11px] text-blue-bright/70">{exp.company}</div>

                      <p className="mt-2.5 text-[13px] leading-[1.7] text-ink-muted">{exp.summary}</p>

                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <li key={s} className="skill-pill rounded-md px-2 py-0.5 font-mono text-[9px] uppercase tracking-mono text-blue-bright/80">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
