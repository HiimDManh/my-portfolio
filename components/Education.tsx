"use client";

import { Award, GraduationCap } from "lucide-react";
import { CONTENT } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

export function Education() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].education;

  return (
    <section id="education" className="scroll-section" aria-labelledby="education-heading">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="education-heading" className="section-title">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">{t.sub}</p>
        </Reveal>

        <div className="edu-grid">
          <div>
            {t.degrees.map((degree, i) => (
              <Reveal delay={i * 0.09} key={degree.degree}>
                <div className="glass edu-card">
                  <div className="edu-head">
                    <span className="edu-icon">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="edu-degree">{degree.degree}</h3>
                      <div className="edu-school">{degree.school}</div>
                      <div className="edu-period">{degree.period}</div>
                    </div>
                  </div>
                  <p className="edu-note">{degree.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="cert-list">
            {t.certifications.map((cert, i) => (
              <Reveal delay={i * 0.09} key={cert.name}>
                <div className="glass cert-item">
                  <span className="edu-icon">
                    <Award className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-meta">{cert.meta}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
