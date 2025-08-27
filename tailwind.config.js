import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VOID REDテーマカラー - ダークテーマ専用
        background: {
          DEFAULT: "var(--background)",
          alt: "var(--background-alt)",
          card: "var(--card-background)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
        },
        border: {
          DEFAULT: "var(--border)",
          card: "var(--card-border)",
        },
        accent: {
          red: "var(--accent-red)",
          "red-dark": "var(--accent-red-dark)",
        },
        // VOIDカラーパレット（ダークモード用）
        void: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        // REDカラーパレット
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "void-glow": "void-glow 2s ease-in-out infinite",
        "void-drift": "void-drift 4s ease-in-out infinite",
        "red-pulse": "red-pulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        "void-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 0 rgba(239, 68, 68, 0))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6))",
          },
        },
        "void-drift": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "red-pulse": {
          "0%, 100%": {
            opacity: "0.6",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      backgroundImage: {
        "void-gradient":
          "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #141414 100%)",
        "red-gradient":
          "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)",
        "void-red-gradient":
          "linear-gradient(135deg, #000000 0%, #0a0a0a 30%, #7f1d1d 70%, #ef4444 100%)",
      },
      boxShadow: {
        void: "0 10px 25px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
        red: "0 10px 25px -3px rgba(239, 68, 68, 0.4), 0 4px 6px -2px rgba(239, 68, 68, 0.1)",
        "void-red":
          "0 20px 40px -12px rgba(239, 68, 68, 0.25), 0 8px 16px -4px rgba(0, 0, 0, 0.2)",
        glow: "0 0 20px rgba(239, 68, 68, 0.3)",
      },
    },
  },
  darkMode: "class", // 常にダークモード
  plugins: [
    heroui({
      themes: {
        "void-red": {
          extend: "dark",
          colors: {
            background: "#000000", // 純黒
            foreground: "#ffffff", // 純白
            primary: {
              50: "#fef2f2",
              100: "#fee2e2",
              200: "#fecaca",
              300: "#fca5a5",
              400: "#f87171",
              500: "#ef4444",
              600: "#dc2626",
              700: "#b91c1c",
              800: "#991b1b",
              900: "#7f1d1d",
              DEFAULT: "#ef4444",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#71717a",
              foreground: "#ffffff",
            },
            content1: "#141414", // カード背景
            content2: "#1f1f1f",
            content3: "#262626",
            content4: "#2a2a2a",
            default: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#141414",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};

export default config;
