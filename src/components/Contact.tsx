import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { normalizeUrl, profile } from '../data';
import Reveal from './Reveal';

export default function Contact() {
  const githubUrl = normalizeUrl(profile.github);
  const linkedinUrl = normalizeUrl(profile.linkedin);

  return (
    <footer id="contact" className="relative border-t border-border overflow-hidden bg-navy-950">
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[700px] bg-blue-subtle/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs text-blue-electric uppercase tracking-wide">04</span>
            <div className="h-px max-w-[60px] flex-1 bg-blue-glow/40" />
            <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">Contact</span>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-bold tracking-tightest text-ink glow-text-sm sm:text-5xl">
                Let&apos;s build something
                <span className="text-blue-bright"> real.</span>
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-muted">
                Open to full-stack and AI engineering roles, internships, and contract work.
                Fastest reply over email — I read every one.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-blue-glow px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-blue-bright hover:shadow-glow"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-navy-800/60 px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-border-bright hover:bg-navy-700"
                >
                  <Download className="h-4 w-4 text-ink-muted" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border bg-navy-800/50 p-5 backdrop-blur-sm">
                <div className="font-mono text-[10px] uppercase tracking-mono text-ink-dim mb-3">
                  Find me online
                </div>
                <ul className="space-y-0.5">
                  {[
                    { icon: <Mail className="h-4 w-4" />, label: 'Email', href: `mailto:${profile.email}`, display: profile.email },
                    { icon: <Github className="h-4 w-4" />, label: 'GitHub', href: githubUrl, display: 'github.com/Chinnikesana' },
                    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', href: linkedinUrl, display: 'in/chinni-kesana' },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-all hover:bg-navy-700/60"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-ink-dim group-hover:text-blue-bright transition-colors">
                            {link.icon}
                          </span>
                          <span className="text-sm text-ink group-hover:text-blue-bright transition-colors">
                            {link.label}
                          </span>
                        </span>
                        <span className="font-mono text-[11px] text-ink-dim group-hover:text-ink-muted transition-colors">
                          {link.display}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer bottom */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-mono text-ink-dim">
            © {new Date().getFullYear()} {profile.name} · Built end-to-end · React + Vite + Tailwind
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-mono text-ink-dim">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            Deployed · Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}
