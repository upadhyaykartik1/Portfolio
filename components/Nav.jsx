"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const link = (l, mobile) => (
    <a
      key={l.id}
      href={`#${l.id}`}
      onClick={() => setOpen(false)}
      aria-current={active === l.id ? "true" : undefined}
      className={`rounded px-3 py-2 text-sm transition-colors hover:text-ink ${active === l.id ? "text-ink" : "text-mute"} ${mobile ? "block text-base" : ""}`}
    >
      {l.label}
      {!mobile && active === l.id && <span className="mt-1 block h-px bg-accent" />}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-display text-xl tracking-wide">KU</a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => link(l))}
          <a href={profile.resume} download className="ml-3 rounded-md border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent">
            Resume
          </a>
        </div>
        <button
          className="rounded p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line px-4 pb-4 md:hidden">
          {links.map((l) => link(l, true))}
          <a href={profile.resume} download className="mt-2 block rounded px-3 py-2 text-base text-accent">Resume</a>
        </div>
      )}
    </header>
  );
}
