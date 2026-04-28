import type { Metadata } from "next";
import { SEO_BASE_URL, SEO_SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SEO_SITE_NAME}｜お墓・供養のトータルサポート`,
  description:
    "株式会社清蓮は、お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポートするコーポレートサービスです。専門家が中立な立場でご相談に応じます。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SEO_SITE_NAME}｜お墓・供養のトータルサポート`,
    description:
      "株式会社清蓮は、お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポートするコーポレートサービスです。専門家が中立な立場でご相談に応じます。",
    url: SEO_BASE_URL,
    siteName: SEO_SITE_NAME,
    type: "website",
    locale: "ja_JP",
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
      "株式会社清蓮は、お墓探し・永代供養・樹木葬・墓じまい・改葬を一貫してサポートするコーポレートサービスです。専門家が中立な立場でご相談に応じます。",
    images: [`${SEO_BASE_URL}/ogp.png`],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-widest text-[#2f8c9c]">Seiren</h1>
        <p className="text-gray-500 text-sm">Corporate Website - Under Reconstruction</p>
      </div>
    </main>
  );
}
