import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        dark: {
          950: "#0B0B0D", // Rich near-black charcoal base
          900: "#121214", // Elevated panels and card containers
          800: "#1A1A1E", // Secondary structures
          700: "#2A2A30", // Border and interactive elements
        },
        brand: {
          red: "#E11D2A", // Primary high-end crimson accent
          gold: "#D4AF37", // Metallic gold luxury details
        },
        light: "#F5F5F5", // Off-white clean text
        muted: "#A1A1AA", // Muted secondary text
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "red-glow": "radial-gradient(circle at center, rgba(225, 29, 42, 0.15) 0%, transparent 70%)",
        "gold-glow": "radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%": { opacity: "0.4", transform: "scale(1)" },
          "100%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
