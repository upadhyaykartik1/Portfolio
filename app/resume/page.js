"use client";

import { Download, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { experience, education, certifications, responsibilities } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0d0e11] text-[#ecebe6] p-4 sm:p-8 print:bg-white print:text-black print:p-0">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="mx-auto max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-mute hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
          >
            <Printer size={16} /> Print / Save as PDF
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Kartik-Upadhyay-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink hover:border-accent transition-colors"
          >
            <Download size={16} /> Direct PDF Download
          </a>
        </div>
      </div>

      {/* Single-Page Printable Resume Container */}
      <div className="mx-auto max-w-4xl rounded-xl border border-line bg-panel p-6 sm:p-10 shadow-2xl print:border-none print:bg-white print:p-0 print:shadow-none print:text-black">
        {/* Header */}
        <header className="text-center border-b border-line/60 pb-5 mb-5 print:border-black print:pb-3 print:mb-3">
          <h1 className="text-3xl font-bold tracking-tight text-ink print:text-black print:text-2xl">
            KARTIK UPADHYAY
          </h1>
          <p className="text-base font-semibold text-accent mt-1 print:text-black print:text-sm">
            AI &amp; Full-Stack Engineer
          </p>
          <p className="text-xs text-mute mt-2 print:text-black print:text-[10px]">
            {profile.location} &nbsp;|&nbsp; +91 7310991482 &nbsp;|&nbsp;{" "}
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/upadhyaykartik1
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/upadhyaykartik
            </a>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-line/50 pb-1 mb-2 print:text-black print:border-black">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-mute print:text-black print:text-[10px]">
            Computer Science Engineering student specializing in building production-grade Generative AI applications and resilient full-stack systems. Hands-on experience engineering Retrieval-Augmented Generation (RAG) pipelines, autonomous tool-calling agents, and scalable RESTful APIs with Python (FastAPI) and Node.js/Express. Proven ability to combine modern LLM orchestration with rigorous automated testing (Cypress), clean OOP architecture, and zero-downtime reliability.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-line/50 pb-1 mb-2 print:text-black print:border-black">
            Technical Skills
          </h2>
          <div className="space-y-1.5 text-xs text-mute print:text-black print:text-[10px]">
            {skills.map((s) => (
              <div key={s.group}>
                <strong className="text-ink print:text-black">{s.group}:</strong>{" "}
                {s.items.join(", ")}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-line/50 pb-1 mb-2 print:text-black print:border-black">
            Work Experience
          </h2>
          <div className="space-y-4 print:space-y-2">
            {experience.map((e) => (
              <div key={e.role} className="text-xs">
                <div className="flex justify-between font-bold text-ink print:text-black">
                  <span>{e.role}</span>
                  <span className="text-mute print:text-black font-normal">{e.period}</span>
                </div>
                <div className="flex justify-between text-mute italic mb-1 print:text-black">
                  <span>{e.org}</span>
                  <span>{e.place}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-mute print:text-black print:text-[10px]">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-line/50 pb-1 mb-2 print:text-black print:border-black">
            Technical Projects
          </h2>
          <div className="space-y-4 print:space-y-2">
            {projects.map((p) => (
              <div key={p.slug} className="text-xs">
                <div className="flex justify-between font-bold text-ink print:text-black">
                  <span>{p.name}</span>
                  <span className="text-mute print:text-black font-normal">{p.period}</span>
                </div>
                <div className="text-mute italic mb-1 print:text-black">
                  {p.stack.join(" · ")}
                </div>
                <ul className="list-disc pl-4 space-y-1 text-mute print:text-black print:text-[10px]">
                  {p.details.map((d, i) => (
                    <li key={i}>
                      <strong className="text-ink print:text-black">{d.h}:</strong> {d.p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-5 print:mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-line/50 pb-1 mb-2 print:text-black print:border-black">
            Education
          </h2>
          <div className="text-xs text-mute print:text-black print:text-[10px]">
            <div className="flex justify-between font-bold text-ink print:text-black">
              <span>{education.school}</span>
              <span className="font-normal">{education.period}</span>
            </div>
            <div>{education.degree}</div>
          </div>
        </section>

        {/* Certifications & Leadership */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent border-b border-line/50 pb-1 mb-2 print:text-black print:border-black">
            Certifications &amp; Leadership
          </h2>
          <div className="space-y-1.5 text-xs text-mute print:text-black print:text-[10px]">
            <div>
              <strong className="text-ink print:text-black">Certifications:</strong>{" "}
              {certifications.join(" · ")}
            </div>
            <div>
              <strong className="text-ink print:text-black">Leadership:</strong>{" "}
              {responsibilities.map((r) => `${r.title} (${r.detail})`).join(" · ")}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
