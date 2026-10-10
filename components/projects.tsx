import { ArrowUpRight, DatabaseZap, Workflow } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { GithubIcon } from './github-icon'
import { SectionHeading } from './section-heading'

const projects = [
  {
    icon: DatabaseZap,
    title: 'Text-to-SQL Assistant',
    subtitle: 'RAG + LangGraph',
    description:
      'Lets users ask questions about a relational database in plain English. A LangGraph agent retrieves relevant table schemas and example queries via RAG, generates SQL, validates it, and self-corrects on errors before returning results.',
    highlights: [
      'Schema-aware retrieval over a vector store',
      'Multi-step agent graph with validation and retry nodes',
      'Read-only, sandboxed query execution',
    ],
    stack: ['Python', 'LangGraph', 'RAG', 'FastAPI', 'PostgreSQL'],
  },
  {
    icon: Workflow,
    title: 'Background Task Processor',
    subtitle: 'FastAPI + Redis + Celery',
    description:
      'A FastAPI service that offloads long-running jobs to Celery workers using Redis as the broker and result backend. Clients submit work, receive a task ID instantly, and poll for real-time status and results.',
    highlights: [
      'Non-blocking 202 responses with task tracking',
      'Retries, timeouts, and failure handling',
      'Fully containerized with Docker Compose',
    ],
    stack: ['FastAPI', 'Celery', 'Redis', 'Docker', 'Python'],
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="projects-heading"
          eyebrow="03. Projects"
          title="Selected work"
          description="A couple of backend projects that showcase API design, asynchronous processing, and applied AI."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map(({ icon: Icon, title, subtitle, description, highlights, stack }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:bg-primary/25"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-accent ring-1 ring-primary/30">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>

              <p className="relative mt-6 font-mono text-xs text-accent">{subtitle}</p>
              <h3 className="relative mt-1 text-xl font-semibold">{title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>

              <ul className="relative mt-5 space-y-2 text-sm">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="relative mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-7">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-blue-300"
                >
                  <GithubIcon className="size-4" />
                  View source
                  <span className="sr-only">for {title} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
