export type ServiceCategory = "memorial" | "scattering" | "support";

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  category: ServiceCategory;
};

export const SERVICES: Service[] = [
  {
    id: "find-grave",
    name: "お墓探し",
    shortDescription:
      "寺院墓地・公営墓地・民営霊園からご希望条件に合うお墓をご紹介します。",
    category: "memorial",
  },
  {
    id: "perpetual-memorial",
    name: "永代供養",
    shortDescription:
      "後継者がいなくても安心の永代供養墓・納骨堂をご案内します。",
    category: "memorial",
  },
  {
    id: "tree-burial",
    name: "樹木葬",
    shortDescription:
      "自然に還る樹木葬墓地を全国の認可墓地からご紹介します。",
    category: "memorial",
  },
  {
    id: "grave-closure",
    name: "お墓じまい",
    shortDescription:
      "撤去工事から閉眼供養・行政手続きまで一貫して代行します。",
    category: "memorial",
  },
  {
    id: "relocation",
    name: "改葬",
    shortDescription:
      "既存の遺骨を別の墓地・納骨堂へ移すご相談と手続きを代行します。",
    category: "memorial",
  },
  {
    id: "marine-scattering",
    name: "海洋散骨",
    shortDescription:
      "国内海域での合同・個別・代行散骨プランをご用意しています。",
    category: "scattering",
  },
  {
    id: "overseas-scattering",
    name: "海外散骨",
    shortDescription:
      "ハワイなど海外海域での散骨を現地パートナーと連携して手配します。",
    category: "scattering",
  },
  {
    id: "powderization",
    name: "粉骨",
    shortDescription:
      "散骨・手元供養に必要な粉骨処理を自社で丁寧に行います。",
    category: "scattering",
  },
  {
    id: "bone-cleaning",
    name: "洗骨",
    shortDescription:
      "古いご遺骨の洗浄・乾燥処理を専門技術でご対応します。",
    category: "scattering",
  },
  {
    id: "home-memorial",
    name: "手元供養",
    shortDescription:
      "ミニ骨壺・遺骨ペンダントなど、お手元に残せる供養品をご紹介します。",
    category: "support",
  },
  {
    id: "end-of-life-consulting",
    name: "終活相談",
    shortDescription:
      "お墓・供養を含めた終活全般のご相談を中立な立場でお受けします。",
    category: "support",
  },
  {
    id: "memorial-diamond",
    name: "遺骨ダイヤモンド紹介",
    shortDescription:
      "ご遺骨を加工した記念ダイヤモンドの製作をご案内します。",
    category: "support",
  },
];

export const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: "memorial", label: "お墓・供養" },
  { id: "scattering", label: "散骨・粉骨" },
  { id: "support", label: "手元供養・相談" },
];

export const NAV_ITEMS = [
  { label: "私たちについて", href: "#about" },
  { label: "サービス", href: "#services" },
  { label: "アクセス", href: "#access" },
] as const;

export const COMPANY_INFO = {
  name: "株式会社清蓮",
  nameEn: "Seiren Inc.",
  postalCode: "244-0003",
  addressLine: "神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F",
  addressRegion: "神奈川県",
  addressLocality: "横浜市戸塚区",
  phone: "045-881-9952",
  phoneTelLink: "tel:+81-45-881-9952",
  email: "contact@seiren.ne.jp",
  hours: "9:00〜17:00（年中無休）",
  mapQuery:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F"),
  mapEmbedQuery:
    "https://www.google.com/maps?output=embed&q=" +
    encodeURIComponent("神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F"),
} as const;

export const ABOUT_PILLARS = [
  {
    title: "中立性",
    body: "特定の寺院・霊園・墓石業者に偏らない独立した立場で、ご家族にとって最適な選択肢をご提案します。",
  },
  {
    title: "ワンストップ",
    body: "お墓探しから墓じまい・改葬・散骨・終活相談まで、供養に関するすべてを一社で完結できます。",
  },
  {
    title: "専門性",
    body: "供養業界の制度・慣習・行政手続きに通じた専門スタッフが、複雑な調整を代行します。",
  },
] as const;
