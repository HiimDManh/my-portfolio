"use client";

import { Code2, ExternalLink, Github } from "lucide-react";
import { CONTENT } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

export function Projects() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].projects;

  return (
    <section id="projects" className="scroll-section" aria-labelledby="projects-heading">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="projects-heading" className="section-title">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">{t.sub}</p>
        </Reveal>

        <div className="projects-grid">
          {t.items.map((project, i) => (
            <Reveal delay={i * 0.1} key={project.title}>
              <div className="glass project-card">
                <div className="project-top">
                  <span className="project-icon">
                    <Code2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-period">{project.period}</div>
                </div>
                <p className="project-block">
                  <b>Problem — </b>
                  {project.problem}
                </p>
                <p className="project-block">
                  <b>Solution — </b>
                  {project.solution}
                </p>
                <p className="project-block">
                  <b>Result — </b>
                  {project.result}
                </p>
                <div className="project-stack">
                  {project.stack.map((tag) => (
                    <span className={`stack-tag${tag.includes("TODO") ? " todo-tag" : ""}`} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
