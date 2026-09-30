"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";
import { CONTENT } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

export function Experience() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].experience;

  return (
    <section id="experience" className="scroll-section" aria-labelledby="experience-heading">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="experience-heading" className="section-title">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">{t.sub}</p>
        </Reveal>

        <div className="timeline">
          {t.items.map((item, i) => (
            <Reveal delay={i * 0.09} key={`${item.company}-${item.period}`}>
              <div className="glass timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-head">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                  </div>
                  <span className="timeline-period">
                    <Briefcase className="h-[14px] w-[14px]" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, bi) => (
                    <li key={bi}>
                      <CheckCircle2 className="h-[15px] w-[15px]" aria-hidden="true" />
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
