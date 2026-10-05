"use client";
import { motion, MotionConfig } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="relative mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.4fr_1fr] md:pb-28 md:pt-28"
        >
          <div>
            <motion.p variants={item} className="mb-5 text-sm text-mute">{profile.name} · {profile.role}</motion.p>
            <motion.h1 id="hero-title" variants={item} className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl">
              {profile.headline}
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{profile.intro}</motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">
                Explore projects <ArrowDown size={16} />
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent">
                <Download size={16} /> Download resume
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent">
                <GithubIcon /> GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm transition-colors hover:border-accent">
                <Mail size={16} /> Email
              </a>
            </motion.div>
          </div>

          <motion.aside variants={item} aria-label="Current and recent roles" className="self-end rounded-lg border border-line bg-panel/70 p-5">
            <p className="font-display text-7xl leading-none text-accent" aria-hidden="true">KU</p>
            <ul className="mt-6 space-y-4 text-sm">
              {profile.now.map((n, i) => (
                <li key={n.label} className="flex gap-3">
                  <span aria-hidden="true" className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${i === 0 ? "bg-accent" : "bg-line"}`} />
                  <span>
                    <span className="block text-ink">{n.label}</span>
                    <span className="text-mute">{n.where} · {n.since}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
