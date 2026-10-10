import { ArrowUp } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'
import { GithubIcon } from './github-icon'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 font-mono text-sm font-bold text-accent ring-1 ring-primary/30">
                {siteConfig.initials}
              </span>
              <span className="font-semibold">{siteConfig.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.role} building reliable APIs, data pipelines, and background
              processing systems.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent">Elsewhere</p>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            {'© '}
            {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-primary/40 sm:w-auto"
          >
            Back to Top
            <ArrowUp
              className="size-4 transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
