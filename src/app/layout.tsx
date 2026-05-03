import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { SEO_BASE_URL, SEO_SITE_NAME, isProductionEnvironment } from "@/lib/seo";
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

const IS_PRODUCTION = isProductionEnvironment();

export const viewport: Viewport = {
  themeColor: "#2F8C9C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_BASE_URL),
  title: {
    default: `${SEO_SITE_NAME}｜お墓・供養のトータルサポート`,
    template: `%s | ${SEO_SITE_NAME}`,
  },
  description:
    "株式会社清蓮は、お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポートするコーポレートサービスです。専門家が中立な立場でご相談に応じます。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SEO_BASE_URL,
    siteName: SEO_SITE_NAME,
    title: `${SEO_SITE_NAME}｜お墓・供養のトータルサポート`,
    description:
      "お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポート。専門家が中立な立場でご相談に応じます。",
    images: [
      {
        url: `${SEO_BASE_URL}/ogp.png`,
        width: 1200,
        height: 630,
        alt: `${SEO_SITE_NAME}｜お墓・供養のトータルサポート`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO_SITE_NAME}｜お墓・供養のトータルサポート`,
    description:
      "お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポート。専門家が中立な立場でご相談に応じます。",
    images: [`${SEO_BASE_URL}/ogp.png`],
  },
  robots: {
    index: IS_PRODUCTION,
    follow: IS_PRODUCTION,
    googleBot: { index: IS_PRODUCTION, follow: IS_PRODUCTION },
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SEO_BASE_URL}/#organization`,
  name: SEO_SITE_NAME,
  url: SEO_BASE_URL,
  "logo": {
    "@type": "ImageObject",
    url: `${SEO_BASE_URL}/ogp.png`,
    width: "1200",
    height: "630",
  },
  image: `${SEO_BASE_URL}/ogp.png`,
  inLanguage: "ja-JP",
  description:
    "お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポートするコーポレートサービス。",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+81-45-881-9952",
      contactType: "customer service",
      areaServed: "JP",
      availableLanguage: ["ja"],
      email: "contact@seiren.ne.jp",
    },
  ],
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SEO_BASE_URL}/#localbusiness`,
  name: SEO_SITE_NAME,
  url: SEO_BASE_URL,
  image: `${SEO_BASE_URL}/ogp.png`,
  description:
    "お墓・供養のトータルサポート。墓地探し・墓じまい・改葬の専門相談。",
  inLanguage: "ja-JP",
  telephone: "+81-45-881-9952",
  email: "contact@seiren.ne.jp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "戸塚町4170 高橋ビル1F",
    addressLocality: "横浜市戸塚区",
    addressRegion: "神奈川県",
    postalCode: "244-0003",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "横浜市" },
    { "@type": "AdministrativeArea", name: "神奈川県" },
    { "@type": "Country", name: "Japan" },
  ],
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F"),
  serviceType: [
    "海洋散骨", "粉骨", "洗骨", "手元供養", "お墓じまい・改葬", "終活相談", "海外散骨", "遺骨ダイヤモンド紹介"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "サービス一覧",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "お墓探し" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "永代供養" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "樹木葬" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "お墓じまい・改葬" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "海洋散骨" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "粉骨" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "洗骨" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "手元供養" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "終活相談" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "海外散骨" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "遺骨ダイヤモンド紹介" } },
    ],
  },
  parentOrganization: { "@type": "Organization", "@id": `${SEO_BASE_URL}/#organization` },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SEO_BASE_URL}/#website`,
  url: SEO_BASE_URL,
  name: SEO_SITE_NAME,
  description:
    "お墓・供養のトータルサポート。お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してご相談いただけます。",
  inLanguage: "ja-JP",
  publisher: { "@id": `${SEO_BASE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
