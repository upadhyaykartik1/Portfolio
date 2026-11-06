import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-mute">
<p>
  I’m Kartik Upadhyay, a Computer Science Engineering undergraduate at Birla Institute of Applied Sciences,
  Bhimtal, graduating in 2027 with a CGPA of 7.64. I work at the intersection of
  <strong> AI Engineering and Full-Stack Systems</strong>.
</p>

<p>
  As an <strong>AI Engineer Intern</strong>, I’ve integrated LLM-powered chatbots into a live e-commerce platform,
  engineering prompts and a knowledge base for context-aware customer responses across
  <strong> 4+ service categories and 30+ delivery locations</strong>.
</p>

<p>
  I build with <strong>Node.js, Express.js, React.js, and MongoDB</strong>, and use ChatGPT, Gemini, and Claude
  for content generation, FAQ automation, and e-commerce workflows. I also write automated API tests with
  Cypress and care about clean validation and reliable delivery.
</p>
 </div>
    </Section>
  );
}
