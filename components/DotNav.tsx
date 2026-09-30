"use client";

import { SECTION_IDS } from "@/data/portfolio";
import { usePortfolio } from "@/lib/usePortfolio";

const SECTION_LABELS: Record<string, { en: string; vi: string }> = {
  hero: { en: "Home", vi: "Trang chủ" },
  about: { en: "About", vi: "Giới thiệu" },
  skills: { en: "Skills", vi: "Kỹ năng" },
  services: { en: "Services", vi: "Dịch vụ" },
  experience: { en: "Experience", vi: "Kinh nghiệm" },
  projects: { en: "Projects", vi: "Dự án" },
  education: { en: "Education", vi: "Học vấn" },
  contact: { en: "Contact", vi: "Liên hệ" },
};

export function DotNav() {
  const { locale, activeSection, goToSection } = usePortfolio();

  return (
    <aside className="dot-nav" aria-label="Section quick navigation">
      {SECTION_IDS.map((id) => {
        const label = SECTION_LABELS[id][locale];
        return (
          <button
            key={id}
            type="button"
            aria-label={`Go to ${label} section`}
            aria-current={activeSection === id ? "true" : undefined}
            onClick={() => goToSection(id)}
          >
            <span className="tip">{label}</span>
          </button>
        );
      })}
    </aside>
  );
}
