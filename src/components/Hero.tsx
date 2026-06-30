import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';
import StackDiagram from './StackDiagram';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-grid"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-subtle/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-blue-glow/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[600px] rounded-full bg-blue-subtle/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* ── Left column ── */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Role badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-border bg-navy-800/60 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-mono text-live">
                Available for work
              </span>
              <span className="h-3 w-px bg-border-bright" />
              <span className="font-mono text-[10px] uppercase tracking-mono text-ink-muted">
                {profile.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl font-bold tracking-tightest text-ink glow-text sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            {/* Roles */}
            <div className="mt-3 space-y-1">
              <p className="font-display text-2xl font-semibold tracking-tight text-blue-bright sm:text-3xl">
                {profile.rolePrimary}
              </p>
              <p className="font-mono text-sm uppercase tracking-mono text-ink-muted sm:text-base">
                {profile.roleSecondary}
              </p>
            </div>

            {/* Pitch */}
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-ink-muted sm:text-base">
              {profile.pitch}
            </p>

            {/* Credibility */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-6 bg-blue-glow/50" />
              <p className="font-mono text-[11px] uppercase tracking-mono text-blue-bright/70">
                {profile.credibility}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-glow px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-blue-bright hover:shadow-glow"
              >
                View Projects
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-navy-800/60 px-5 py-2.5 text-sm font-medium text-ink backdrop-blur-sm transition-all duration-200 hover:border-border-bright hover:bg-navy-700"
              >
                <FileText className="h-4 w-4 text-ink-muted" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted transition-all hover:border-border-bright hover:text-blue-bright"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted transition-all hover:border-border-bright hover:text-blue-bright"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted transition-all hover:border-border-bright hover:text-blue-bright"
              >
                <Mail className="h-4 w-4" />
              </a>
              <span className="h-px w-8 bg-border-bright" />
              <span className="font-mono text-[10px] uppercase tracking-mono text-ink-dim">
                Remote · India
              </span>
            </div>
          </div>

          {/* ── Right column — photo + stack diagram ── */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* Profile photo */}
            <div className="relative">
              {/* Outer ring pulse */}
              <div className="absolute -inset-4 rounded-full border border-blue-glow/30 animate-border-glow" />
              <div className="absolute -inset-2 rounded-full border border-blue-glow/20" />

              {/* Corner accent lines */}
              <div className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-blue-electric rounded-tl-sm" />
              <div className="absolute -top-2 -right-2 h-6 w-6 border-t-2 border-r-2 border-blue-electric rounded-tr-sm" />
              <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-blue-electric rounded-bl-sm" />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-blue-electric rounded-br-sm" />

              {/* Photo */}
              <div className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-blue-glow/40 sm:h-56 sm:w-56">
                <img
                  src={profile.photo}
                  alt="Chinni Kesana"
                  className="h-full w-full object-cover object-top"
                />
                {/* Blue tint overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-glow/20 to-transparent mix-blend-overlay" />
              </div>

              {/* Glow underneath */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-16 w-40 rounded-full bg-blue-glow/25 blur-2xl" />
            </div>

            {/* Stack diagram */}
            <div className="w-full max-w-sm">
              <StackDiagram />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-[10px] uppercase tracking-mono text-ink-muted">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-blue-glow to-transparent" />
      </div>
    </section>
  );
}
