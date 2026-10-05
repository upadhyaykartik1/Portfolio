import { ChevronDown, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.slug}>
            <article className="group rounded-lg border border-line bg-panel/60 transition-colors hover:border-accent/60">
              <details>
                <summary className="block p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <p className="mt-1 text-sm text-mute">{p.category}{p.period ? ` · ${p.period}` : ""}</p>
                    </div>
                    <ChevronDown className="chev mt-1 shrink-0 text-mute transition-transform" size={20} aria-hidden="true" />
                  </div>
                  <p className="mt-4 max-w-2xl text-mute">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.stack.map((s) => <li key={s} className="rounded border border-line px-2 py-0.5 text-xs text-mute">{s}</li>)}
                  </ul>
                  <span className="mt-4 inline-block text-sm text-accent">Read the details</span>
                </summary>
                <div className="space-y-4 border-t border-line p-6">
                  {p.details.map((d) => (
                    <div key={d.h}>
                      <h4 className="text-sm text-ink">{d.h}</h4>
                      <p className="mt-1 max-w-2xl text-mute">{d.p}</p>
                    </div>
                  ))}
                  {(p.github || p.demo) && (
                    <div className="flex gap-4 pt-2 text-sm">
                      {p.github && <a className="inline-flex items-center gap-1 text-accent" href={p.github} target="_blank" rel="noopener noreferrer">View on GitHub <ExternalLink size={14} /></a>}
                      {p.demo && <a className="inline-flex items-center gap-1 text-accent" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}
                    </div>
                  )}
                </div>
              </details>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
