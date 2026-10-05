import Section from "@/components/Section";
import { experience, education, certifications, responsibilities } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span aria-hidden="true" className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-mute">{e.period} · {e.kind}</p>
            <h3 className="mt-1 text-xl">{e.role}, {e.org}</h3>
            <p className="text-sm text-mute">{e.place}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-mute marker:text-line">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl">Education</h3>
          <p className="mt-3">{education.degree}</p>
          <p className="text-mute">{education.school}</p>
          <p className="text-sm text-mute">{education.period}</p>
          <h3 className="mt-10 text-xl">Responsibilities</h3>
          <ul className="mt-3 space-y-3">
            {responsibilities.map((r) => (
              <li key={r.title}><span className="block">{r.title}</span><span className="text-sm text-mute">{r.detail}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl">Certifications</h3>
          <ul className="mt-3 space-y-2 text-mute">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
