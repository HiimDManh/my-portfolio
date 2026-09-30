import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#091540",
        },
        blue: {
          700: "#1B2CC1",
          400: "#7692FF",
          100: "#ABD2FA",
        },
        heading: "#F5F7FF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        glass: "22px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(4,8,30,0.35)",
        "glow-primary": "0 8px 24px rgba(27,44,193,.35)",
        "glow-hover": "0 20px 50px rgba(27,44,193,.35), 0 0 0 1px rgba(118,146,255,.2)",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(6vw,8vh) scale(1.08)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-7vw,-6vh) scale(1.1)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-5vw,5vh)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.6)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        bob: {
          "0%, 100%": { transform: "translate(-50%,0)" },
          "50%": { transform: "translate(-50%,8px)" },
        },
      },
      animation: {
        drift1: "drift1 26s ease-in-out infinite",
        drift2: "drift2 32s ease-in-out infinite",
        drift3: "drift3 22s ease-in-out infinite",
        pulseRing: "pulseRing 2s ease-out infinite",
        bob: "bob 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
