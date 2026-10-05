import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ChatWidget from "@/components/ChatWidget";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ChatWidget />
      <footer className="border-t border-line px-6 py-8 text-sm text-mute">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js and Tailwind CSS</span>
        </div>
      </footer>
    </>
  );
}
