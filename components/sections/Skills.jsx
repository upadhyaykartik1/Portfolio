import Section from "@/components/Section";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-mute">{g.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-md border border-line bg-panel px-2.5 py-1 text-sm">{s}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
