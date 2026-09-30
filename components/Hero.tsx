"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTENT, IDENTITY } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState(roles[0] ?? "");
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedRef.current) {
      setText(roles[0] ?? "");
      return;
    }
    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const word = roles[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1500);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    }
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles.join("|")]);

  return text;
}

export function Hero() {
  const { locale, goToSection } = usePortfolio();
  const t = CONTENT[locale].hero;
  const typedRole = useTypedRoles(t.roles);

  return (
    <section id="hero" className="scroll-section" aria-labelledby="hero-heading">
      <div className="section-inner flex flex-col gap-5">
        {IDENTITY.availableForWork && (
          <Reveal className="glass availability-badge">
            <span className="pulse-dot" aria-hidden="true" />
            <span>{t.availability}</span>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <h1 id="hero-heading" className="hero-title">
            {t.greeting} <span className="accent">{IDENTITY.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="hero-role">
            <span>{typedRole}</span>
            <span className="caret" aria-hidden="true">
              &nbsp;
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="hero-tagline">{t.tagline}</p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="hero-meta">
            <span>
              <MapPin className="h-[18px] w-[18px]" aria-hidden="true" />
              {IDENTITY.location}
            </span>
            <span>
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              {IDENTITY.phone}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="hero-cta-row">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                goToSection("projects");
              }}
            >
              <span>{t.ctaProjects}</span>
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                goToSection("contact");
              }}
            >
              <span>{t.ctaContact}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-socials">
            <a
              className="social-btn"
              href={IDENTITY.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              className="social-btn"
              href={IDENTITY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a className="social-btn" href={`mailto:${IDENTITY.email}`} aria-label="Send an email">
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="scroll-indicator"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault();
          goToSection("about");
        }}
      >
        <span>{t.scrollHint}</span>
        <ChevronDown className="h-[18px] w-[18px]" aria-hidden="true" />
      </a>
    </section>
  );
}
