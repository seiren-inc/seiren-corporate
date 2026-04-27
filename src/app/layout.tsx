import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const viewport: Viewport = {
  themeColor: "#2F8C9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "株式会社清蓮",
  description: "株式会社清蓮のコーポレートサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
