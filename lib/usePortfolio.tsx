"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SECTION_IDS, type Locale, type SectionId } from "@/data/portfolio";

interface PortfolioContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  activeSection: SectionId;
  mainRef: React.RefObject<HTMLElement>;
  goToSection: (id: SectionId) => void;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function sectionIndexFromScroll(main: HTMLElement | null): number {
  if (!main) return 0;
  const scrollPos = main.scrollTop + main.clientHeight * 0.4;
  let idx = 0;
  SECTION_IDS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) idx = i;
  });
  return idx;
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Must run post-mount: localStorage is unavailable during SSR, and the
    // initial "en" render has to match the server output before this syncs
    // in the saved preference (avoids a hydration mismatch).
    const stored = window.localStorage.getItem("portfolio_lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "en" || stored === "vi") setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("portfolio_lang", next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const goToSection = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const idx = sectionIndexFromScroll(main);
        const id = SECTION_IDS[idx];
        setActiveSection(id);
        if (`#${id}` !== window.location.hash && window.history.replaceState) {
          window.history.replaceState(null, "", `#${id}`);
        }
        ticking = false;
      });
    }
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (SECTION_IDS.includes(hash)) {
      requestAnimationFrame(() => goToSection(hash));
    }
  }, [goToSection]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const idx = sectionIndexFromScroll(mainRef.current);
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goToSection(SECTION_IDS[Math.min(idx + 1, SECTION_IDS.length - 1)]);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goToSection(SECTION_IDS[Math.max(idx - 1, 0)]);
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSection(SECTION_IDS[0]);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSection(SECTION_IDS[SECTION_IDS.length - 1]);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [goToSection]);

  return (
    <PortfolioContext.Provider value={{ locale, setLocale, activeSection, mainRef, goToSection }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within a PortfolioProvider");
  return ctx;
}
