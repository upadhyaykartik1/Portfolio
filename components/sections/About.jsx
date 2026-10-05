import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
<p>
  I’m Kartik Upadhyay, a Computer Science student at Birla Institute of Applied Sciences (graduating 2027). 
  I operate at the intersection of <strong>AI Engineering and Full-Stack Systems</strong>.
</p>

<p>
  My focus is building production-grade Generative AI applications — designing 
  <strong> RAG pipelines, autonomous agents, and vector search workflows</strong>, 
  and connecting them to fast, resilient backends (Python/FastAPI, Node.js) and intuitive React interfaces.
</p>

<p>
  With production internship experience building end-to-end APIs and leading AI-driven workflow automations, 
  I prioritize clean code, automated testing (Cypress), and measurable system reliability.
</p>
 </div>
    </Section>
  );
}
