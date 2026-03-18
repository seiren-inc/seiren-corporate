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
    },
  },
  plugins: [],
};
export default config;
