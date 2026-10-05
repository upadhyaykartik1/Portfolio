import { Download, Mail } from "lucide-react";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl font-display text-3xl leading-snug md:text-4xl">
        Hiring for an AI or full-stack internship or entry-level role? I'd like to hear about it.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg hover:opacity-90">
          <Mail size={16} /> {profile.email}
        </a>
        <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm hover:border-accent">
          <Download size={16} /> Download resume
        </a>
      </div>
      <ul className="mt-8 space-y-2 text-mute">
        <li>GitHub: <a className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent" href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github.replace("https://", "")}</a></li>
        {profile.linkedin && <li>LinkedIn: <a className="text-ink underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin.replace("https://", "")}</a></li>}
      </ul>
    </Section>
  );
}
