import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { GithubIcon } from './github-icon'

export function Contact() {
  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: `github.com/${siteConfig.githubUsername}`,
      href: siteConfig.githubUrl,
      external: true,
    },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/15 px-6 py-14 text-center sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <p className="relative font-mono text-sm text-accent">04. Contact</p>
          <h2
            id="contact-heading"
            className="relative mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            {"Let's build something together"}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            {"Whether you have a backend role, a freelance project, or just want to talk APIs and data pipelines — my inbox is always open."}
          </p>

          <ul className="relative mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/70 p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-background"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-accent ring-1 ring-primary/30 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${siteConfig.email}`}
            className="relative mt-10 inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-primary/50"
          >
            <Mail className="size-4" />
            Say hello
          </a>
        </div>
      </div>
    </section>
  )
}
