import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const description = `${profile.name} is an AI Engineer Intern and full-stack developer. B.Tech CSE, expected 2027. LLM chatbots, prompt engineering, Node.js/Express, React, MongoDB, and Cypress.`;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: `${profile.name} | ${profile.role}`,
  description,
  openGraph: { title: `${profile.name} | ${profile.role}`, description, type: "website" },
  twitter: { card: "summary", title: `${profile.name} | ${profile.role}`, description },
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
