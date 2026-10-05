import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const description = `${profile.name} is an early-career AI and full-stack developer. B.Tech CSE, expected 2027. Node.js, React, REST APIs and LLM/RAG applications.`;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: `${profile.name} | AI & Full-Stack Developer`,
  description,
  openGraph: { title: `${profile.name} | AI & Full-Stack Developer`, description, type: "website" },
  twitter: { card: "summary", title: `${profile.name} | AI & Full-Stack Developer`, description },
};

export const viewport = { themeColor: "#0d0e11" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
