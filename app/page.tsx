"use client";

import { About } from "@/components/About";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { Contact } from "@/components/Contact";
import { DotNav } from "@/components/DotNav";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { usePortfolio } from "@/lib/usePortfolio";

export default function Home() {
  const { mainRef } = usePortfolio();

  return (
    <>
      <BackgroundOrbs />
      <Navbar />
      <DotNav />
      <main id="main-content" className="scroll-main" ref={mainRef}>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
