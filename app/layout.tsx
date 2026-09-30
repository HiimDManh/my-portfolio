import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { IDENTITY } from "@/data/portfolio";
import { PortfolioProvider } from "@/lib/usePortfolio";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://your-domain.example";
const title = `${IDENTITY.name} — Full-Stack Developer`;
const description =
  "Junior Full-Stack Developer with 2+ years of experience in ASP.NET Core, RESTful APIs and modern web technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: IDENTITY.name }],
  openGraph: {
    type: "website",
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: ["/og-image.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#091540",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: IDENTITY.name,
  jobTitle: "Full-Stack Developer",
  email: `mailto:${IDENTITY.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: IDENTITY.location,
  },
  url: siteUrl,
  sameAs: [IDENTITY.github, IDENTITY.linkedin],
  knowsAbout: [
    "ASP.NET Core",
    "C#",
    "JavaScript",
    "RESTful APIs",
    "Microservices",
    "MSSQL Server",
    "PostgreSQL",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-body">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <PortfolioProvider>{children}</PortfolioProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
