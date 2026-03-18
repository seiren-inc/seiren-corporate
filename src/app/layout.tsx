import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import BackToTop from "@/components/BackToTop";
import LenisProvider from "@/components/LenisProvider";
import GSAPScrollAnimator from "@/components/GSAPScrollAnimator";

// グローバルCSSの読み込み
import "./globals.css";
import "../../public/assets/styles.css"; // プレーンHTML時代のスタイルも移行完了まで一時的に読み込み

export const viewport: Viewport = {
  themeColor: "#2F8C9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "株式会社 清蓮｜人生の節目に、確かな判断と実務を。",
  description:
    "株式会社 清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
  openGraph: {
    title: "株式会社 清蓮｜人生の節目に、確かな判断と実務を。",
    description:
      "株式会社 清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
    url: "https://seiren-inc.co.jp/",
    siteName: "株式会社 清蓮",
    images: [
      {
        url: "https://seiren-inc.co.jp/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社 清蓮｜人生の節目に、確かな判断と実務を。",
    description:
      "株式会社 清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
    images: ["https://seiren-inc.co.jp/ogp.png"],
  },
  verification: {
    google: "ZgZMiTSHj1VIbM8rg4BqmAn4bxXSDU_6Ntv7Nv78npU",
  },
  alternates: {
    canonical: "https://seiren-inc.co.jp/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "株式会社 清蓮",
              "url": "https://seiren-inc.co.jp/",
              "logo": "https://seiren-inc.co.jp/icon.png",
              "telephone": "+81-45-881-9952",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "戸塚町4170 高橋ビル1F",
                "addressLocality": "横浜市戸塚区",
                "addressRegion": "神奈川県",
                "postalCode": "244-0003",
                "addressCountry": "JP"
              }
            })
          }}
        />
        {/*
          ファビコンは /src/app に配置済みの favicon.ico, icon.png 等や
          public 以下の manifest.json からNext.jsによって自動解決されます
        */}
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          本文へスキップ
        </a>
        <Header />
        <RevealObserver />
        <LenisProvider />
        <GSAPScrollAnimator />
        <BackToTop />
        <main className="pt-[104px] lg:pt-[108px]">
          {children}
        </main>
        <Footer />
        <Script src="/assets/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
