import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "#8B1B1B", // 深い赤（クリムゾンレッド系のアクセント）
        },
        surface: {
          light: "var(--bg-light)",
          dark: "#1A1A1D", // 高級感のある重厚な黒/ダークグレー
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
