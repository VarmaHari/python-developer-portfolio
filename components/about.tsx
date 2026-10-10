import { Database, Gauge, Layers, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const focusAreas = [
  {
    icon: Layers,
    title: 'API Design',
    text: 'Well-structured, documented REST APIs with FastAPI and Django REST Framework.',
  },
  {
    icon: Database,
    title: 'Data Modeling',
    text: 'Relational schemas, query optimization, and migrations on PostgreSQL and MySQL.',
  },
  {
    icon: Gauge,
    title: 'Async Processing',
    text: 'Background jobs, queues, and caching with Celery and Redis.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'Containerized deployments, testing, and clean Git workflows.',
  },
]

export function About() {
  return (
    <section aria-labelledby="about-heading" id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="about-heading" eyebrow="01. About me" title="Building the engine behind great products" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              {"I'm a backend developer who enjoys turning complex requirements into simple, maintainable services. Most of my work lives on the server side — designing APIs, structuring databases, and making sure long-running work happens reliably in the background."}
            </p>
            <p>
              Lately I have been exploring how large language models can sit on top of
              traditional data systems — building retrieval-augmented pipelines and
              agent-style workflows that let people query data in plain English.
            </p>
            <p>
              {"I value readable code, thoughtful trade-offs, and close collaboration with frontend and product teams. When I'm not coding, I'm usually reading about distributed systems or tinkering with side projects."}
            </p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group rounded-xl border border-border bg-card/60 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-accent ring-1 ring-primary/25 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
