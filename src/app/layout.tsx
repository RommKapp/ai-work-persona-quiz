import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "What is your AI Work Persona? — Gcore",
  description: "A short internal Gcore quiz for discovering your AI work style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--brand-cloud)] text-[var(--brand-ink)]">
        <header className="border-b border-[#251b29]/10 bg-[var(--brand-polar)]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <a href="/" aria-label="Gcore" className="inline-flex items-center">
              <Image
                src="/gcore-logo.svg"
                alt="Gcore"
                width={128}
                height={32}
                priority
              />
            </a>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-ink)]/60 sm:block">
              Internal · AI Enablement
            </span>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-[#251b29]/10 bg-[var(--brand-polar)]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-[var(--brand-ink)]/60 sm:flex-row sm:items-center sm:px-6">
            <span>© {new Date().getFullYear()} Gcore. Internal use only.</span>
            <span>Anonymous responses · No grades · Built for fun</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
