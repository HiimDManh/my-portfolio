"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { CONTENT, IDENTITY, type SectionId } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";

const NAV_SECTIONS: Array<Exclude<SectionId, "hero">> = [
  "about",
  "skills",
  "services",
  "experience",
  "projects",
  "education",
  "contact",
];

export function Navbar() {
  const { locale, setLocale, activeSection, goToSection } = usePortfolio();
  const [open, setOpen] = useState(false);
  const t = CONTENT[locale];

  function handleNavClick(id: SectionId) {
    setOpen(false);
    goToSection(id);
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a
          href="#hero"
          className="logo"
          aria-label={`${IDENTITY.name} — home`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("hero");
          }}
        >
          <span className="logo-mark">{IDENTITY.initials}</span>
          <span>{IDENTITY.name}</span>
        </a>

        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks" aria-label="Section navigation">
          {NAV_SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="nav-actions flex items-center gap-2.5">
          <div className="lang-toggle" role="group" aria-label="Language selector">
            <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>
              EN
            </button>
            <button type="button" aria-pressed={locale === "vi"} onClick={() => setLocale("vi")}>
              VI
            </button>
          </div>
          <a
            href={IDENTITY.resumeHref}
            download
            className="btn btn-primary btn-sm cv-btn-nav"
            aria-label="Download CV (PDF)"
          >
            <Download className="h-[18px] w-[18px]" aria-hidden="true" />
            <span>{t.nav.downloadCV}</span>
          </a>
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>
    </header>
  );
}
