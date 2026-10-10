import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const codeLines = [
  { text: 'from fastapi import FastAPI', tone: 'text-sky-300' },
  { text: 'from app.tasks import process_report', tone: 'text-sky-300' },
  { text: '', tone: '' },
  { text: 'app = FastAPI()', tone: 'text-foreground' },
  { text: '', tone: '' },
  { text: '@app.post("/reports", status_code=202)', tone: 'text-blue-400' },
  { text: 'async def create_report(req: ReportIn):', tone: 'text-foreground' },
  { text: '    task = process_report.delay(req.id)', tone: 'text-foreground' },
  { text: '    return {"task_id": task.id}', tone: 'text-emerald-300' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {"Hi, I'm "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>
          <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{siteConfig.role}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            I design and build scalable APIs, asynchronous task pipelines, and data-driven
            services in Python. I care about clean architecture, solid database design, and
            backends that stay fast and reliable as they grow.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-primary/40"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-secondary/60 px-6 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary"
            >
              <Mail className="size-4" />
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/50 via-primary/10 to-transparent"
          />
          <figure className="relative overflow-hidden rounded-2xl bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/70" />
              <span className="size-3 rounded-full bg-amber-400/70" />
              <span className="size-3 rounded-full bg-emerald-400/70" />
              <figcaption className="ml-3 font-mono text-xs text-muted-foreground">
                app/main.py
              </figcaption>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                {codeLines.map((line, i) => (
                  <span key={i} className="flex">
                    <span className="mr-5 w-4 shrink-0 text-right text-muted-foreground/50 select-none">
                      {i + 1}
                    </span>
                    <span className={line.tone}>{line.text || ' '}</span>
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </div>
      </div>
    </section>
  )
}
