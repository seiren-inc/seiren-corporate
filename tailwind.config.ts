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
          primary:   "#2f8c9c",  // Seiren Teal（ロゴ主役・最多使用）
          hover:     "#246b77",  // brand-primary のホバー/アクティブ
          accent:    "#c9789b",  // Lotus Pink（蓮ピンク・極小アクセント）
          support:   "#8fbf74",  // Soft Sage（若草・補助区切り線のみ）
          secondary: "#e6f3f5",  // Teal の薄い背景色
        },
        neutral: {
          bg:      "#ffffff",  // メイン背景
          surface: "#f5f7f8",  // セクション背景（Apple的ライトグレー）
          text:    "#0f1720",  // 本文テキスト（深い黒）
          muted:   "#5f6b75",  // サブテキスト
          line:    "rgba(15, 23, 32, 0.10)", // 区切り線
        },
        surface: {
          light: "#f5f7f8",
          dark:  "#0f1720",  // ヘッダー・フッター用の深い色（ブランドコンセプト準拠）
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
