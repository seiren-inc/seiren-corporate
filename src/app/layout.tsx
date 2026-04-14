import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import BackToTop from "@/components/BackToTop";
import LenisProvider from "@/components/LenisProvider";
import GSAPScrollAnimator from "@/components/GSAPScrollAnimator";
import LayoutWrapper from "@/components/LayoutWrapper";

// グローバルCSSの読み込み
import "./globals.css";
import "../../public/assets/styles.css"; // プレーンHTML時代のスタイルも移行完了まで一時的に読み込み

export const viewport: Viewport = {
  themeColor: "#2F8C9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "株式会社清蓮｜人生の節目に、確かな判断と実務を。",
  description:
    "株式会社清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
  openGraph: {
    title: "株式会社清蓮｜人生の節目に、確かな判断と実務を。",
    description:
      "株式会社清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
    url: "https://seiren-inc.co.jp/",
    siteName: "株式会社清蓮",
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
    title: "株式会社清蓮｜人生の節目に、確かな判断と実務を。",
    description:
      "株式会社清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://seiren-inc.co.jp/#organization",
  url: "https://seiren-inc.co.jp/",
  name: "株式会社清蓮",
  description:
    "株式会社清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
  inLanguage: "ja",
  logo: "https://seiren-inc.co.jp/icon.png",
  telephone: "045-881-9952",
  address: {
    "@type": "PostalAddress",
    postalCode: "244-0003",
    streetAddress: "戸塚町4170 高橋ビル1F",
    addressLocality: "横浜市戸塚区",
    addressRegion: "神奈川県",
    addressCountry: "JP",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://seiren-inc.co.jp/#website",
  url: "https://seiren-inc.co.jp/",
  name: "株式会社清蓮",
  description:
    "株式会社清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
  inLanguage: "ja",
  publisher: {
    "@id": "https://seiren-inc.co.jp/#organization",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://seiren-inc.co.jp/#localbusiness",
  url: "https://seiren-inc.co.jp/",
  name: "株式会社清蓮",
  description:
    "株式会社清蓮は、海洋散骨、遺骨サービス、終活支援など、人生の節目に関わる複数事業を運営・企画・連携するハブ企業です。",
  inLanguage: "ja",
  logo: "https://seiren-inc.co.jp/icon.png",
  telephone: "045-881-9952",
  openingHours: "Mo-Su 09:00-17:00",
  address: {
    "@type": "PostalAddress",
    postalCode: "244-0003",
    streetAddress: "戸塚町4170 高橋ビル1F",
    addressLocality: "横浜市戸塚区",
    addressRegion: "神奈川県",
    addressCountry: "JP",
  },
  parentOrganization: {
    "@id": "https://seiren-inc.co.jp/#organization",
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
            __html: JSON.stringify([
              organizationJsonLd,
              websiteJsonLd,
              localBusinessJsonLd,
            ])
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
        <LayoutWrapper
          header={<Header />}
          footer={<Footer />}
          extras={
            <>
              <RevealObserver />
              <LenisProvider />
              <GSAPScrollAnimator />
              <BackToTop />
            </>
          }
        >
          {children}
        </LayoutWrapper>
        <Script src="/assets/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
