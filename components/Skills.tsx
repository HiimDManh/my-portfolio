"use client";

import { Code2, Database, Layers, Terminal, type LucideIcon } from "lucide-react";
import { CONTENT } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

const GROUP_ICONS: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  database: Database,
  terminal: Terminal,
};

export function Skills() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].skills;

  return (
    <section id="skills" className="scroll-section" aria-labelledby="skills-heading">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="skills-heading" className="section-title">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">{t.sub}</p>
        </Reveal>

        <div className="skills-grid">
          {t.groups.map((group, i) => {
            const Icon = GROUP_ICONS[group.icon];
            return (
              <Reveal delay={i * 0.07} key={group.name}>
                <div className="glass skill-group">
                  <div className="skill-group-head">
                    <span className="skill-group-icon">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="skill-group-title">{group.name}</span>
                  </div>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
