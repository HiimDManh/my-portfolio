"use client";

import { Bug, Code2, Database, LayoutGrid, type LucideIcon } from "lucide-react";
import { CONTENT } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  code: Code2,
  database: Database,
  layout: LayoutGrid,
  bug: Bug,
};

export function Services() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].services;

  return (
    <section id="services" className="scroll-section" aria-labelledby="services-heading">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="services-heading" className="section-title">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">{t.sub}</p>
        </Reveal>

        <div className="services-grid">
          {t.items.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <Reveal delay={i * 0.08} key={service.title}>
                <div className="glass service-card">
                  <span className="service-icon">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
