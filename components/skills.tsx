import { Boxes, Code2, Database, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'

const skillGroups = [
  {
    icon: Code2,
    title: 'Languages & Frameworks',
    skills: ['Python', 'FastAPI', 'Django'],
  },
  {
    icon: Boxes,
    title: 'APIs & Async',
    skills: ['REST APIs', 'Celery', 'Redis'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    icon: Wrench,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub'],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-border bg-card/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="skills-heading"
          eyebrow="02. Skills"
          title="Tools I work with every day"
          description="A focused backend toolkit for building, scaling, and shipping production-ready Python services."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-background/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <Icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-xs text-blue-200 transition-colors hover:border-primary/50 hover:bg-primary/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
