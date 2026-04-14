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
          primary:   "#2f8c9c",  // Seiren Teal (信頼・誠実)
          secondary: "#8fbf74",  // Lotus Lime (自然・再生)
          accent:    "#c9789b",  // Lotus Pink (愛・華やかさ)
          gold:      "#c4a96a",  // Champagne Gold (品質・格式)
          hover:     "#246b77",
          "teal-light": "#e6f3f5",
          "lime-light": "#f1f8ed",
          "pink-light": "#fdf6f9",
        },
        neutral: {
          bg:      "#ffffff",  // メイン背景（純白）
          surface: "#f8f9fa",  // セクション背景（明るいグレー）
          text:    "#1a1e21",  // 本文（柔らかい黒）
          muted:   "#6c757d",  // サブテキスト
          line:    "rgba(0, 0, 0, 0.05)",
        },
        surface: {
          light: "#fafafa",
          dark:  "#002f34",    // 深いティール（フッター等で引き締め用）
        },
        aftercare: {
          warm:       "#faf8f5",
          gold:       "#c4a96a",
          "gold-light": "#e8dcc8",
          navy:       "#1e2a3a",
          "navy-hover": "#2a3a4e",
        },
      },
      fontFamily: {
        sans:  ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
      keyframes: {
        // 2026: Shimmer — スケルトンローディング・プレミアム感演出
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // 2026: Floating — 要素の浮遊感（清蓮向け・ゆっくり）
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        // 2026: FloatingSlow — 背景・装飾要素向けの超緩やか浮遊
        "floating-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-6px) rotate(0.5deg)" },
          "66%":      { transform: "translateY(-3px) rotate(-0.3deg)" },
        },
        // 2026: PulseGlow — Tealカラーの水の輝き演出（清蓮ブランド専用）
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", filter: "blur(14px)" },
          "50%":      { opacity: "1",   filter: "blur(8px)" },
        },
        // Aftercare: フェードイン
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Aftercare: 下からスライド + フェードイン
        fadeSlideIn: {
          "0%":   { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Aftercare: ボタン周囲の控えめパルス（1回のみ）
        gentlePulse: {
          "0%":   { boxShadow: "0 0 0 0 rgba(47, 140, 156, 0.4)" },
          "70%":  { boxShadow: "0 0 0 12px rgba(47, 140, 156, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(47, 140, 156, 0)" },
        },
      },
      animation: {
        shimmer:         "shimmer 2.0s linear infinite",
        floating:        "floating 5.0s ease-in-out infinite",
        "floating-slow": "floating-slow 10.0s ease-in-out infinite",
        "pulse-glow":    "pulse-glow 4.0s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
