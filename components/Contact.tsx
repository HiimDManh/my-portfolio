"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy, Download, Github, Linkedin, Phone, Send } from "lucide-react";
import { CONTENT, IDENTITY } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const { locale } = usePortfolio();
  const t = CONTENT[locale].contact;
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(IDENTITY.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = IDENTITY.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const formIsConfigured = !t.formAction.includes("TODO");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (formIsConfigured) return;
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${IDENTITY.email}?subject=${encodeURIComponent(
      `Portfolio contact from ${name}`,
    )}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-section contact-section" aria-labelledby="contact-heading">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="contact-heading" className="section-title">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-sub">{t.sub}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.14}>
            <div className="glass contact-card">
              <div className="email-row">
                <span>{IDENTITY.email}</span>
                <button type="button" className={`copy-btn${copied ? " copied" : ""}`} onClick={handleCopy}>
                  {copied ? (
                    <Check className="h-[15px] w-[15px]" aria-hidden="true" />
                  ) : (
                    <Copy className="h-[15px] w-[15px]" aria-hidden="true" />
                  )}
                  <span>{copied ? t.copied : t.copy}</span>
                </button>
              </div>

              <div className="contact-links">
                <a className="contact-link-row" href={IDENTITY.phoneHref}>
                  <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                  {IDENTITY.phone}
                </a>
                <a
                  className="contact-link-row"
                  href={IDENTITY.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-[18px] w-[18px]" aria-hidden="true" />
                  {IDENTITY.githubLabel}
                </a>
                <a
                  className="contact-link-row"
                  href={IDENTITY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>

              <a
                href={IDENTITY.resumeHref}
                download
                className="btn btn-primary mt-5 w-full justify-center"
              >
                <Download className="h-[18px] w-[18px]" aria-hidden="true" />
                <span>{CONTENT[locale].nav.downloadCV}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <form className="glass contact-card" action={t.formAction} method="POST" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="cf-name">{t.formName}</label>
                <input id="cf-name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">{t.formEmail}</label>
                <input id="cf-email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">{t.formMessage}</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                <span>{t.formSubmit}</span>
                <Send className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
              {!formIsConfigured && <p className="form-note">{t.formNote}</p>}
            </form>
          </Reveal>
        </div>

        <footer className="footer-bar">
          <span>
            &copy; {new Date().getFullYear()} {IDENTITY.name}. {t.rights}
          </span>
          <span>{t.builtWith}</span>
        </footer>
      </div>
    </section>
  );
}
