"use client";

import { CONTENT, IDENTITY } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

export function About() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].about;

  return (
    <section id="about" className="scroll-section" aria-labelledby="about-heading">
      <div className="section-inner about-grid">
        <Reveal>
          <div className="avatar-wrap">
            <span className="avatar-initials">{IDENTITY.initials}</span>
            <span className="avatar-badge">{t.photoTodo}</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="about-heading" className="section-title">
              {t.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="about-text">{t.paragraph}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="stats-row">
              {t.stats.map((stat) => (
                <div className="glass stat-card" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
