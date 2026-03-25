'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const BusinessCarousel = dynamic(() => import('@/components/BusinessCarousel'), { ssr: false });

const newsData = {
  news: [
    { date: '2026.04.01', category: 'コーポレート', title: 'コーポレートサイトをリニューアルいたしました。' },
  ],
  column: [] as { date: string; category: string; title: string }[],
  info:   [] as { date: string; category: string; title: string }[],
};

const tabConfig = [
  { key: 'news',   label: 'ニュース', en: 'News' },
  { key: 'column', label: 'コラム',   en: 'Column' },
  { key: 'info',   label: 'お知らせ', en: 'Information' },
] as const;

type TabKey = keyof typeof newsData;

const categoryColor: Record<string, string> = {
  '事業':       'bg-brand-primary text-white',
  'コーポレート': 'bg-gray-700 text-white',
  '提携':       'bg-teal-700 text-white',
  'コラム':     'bg-brand-accent text-white',
  'お知らせ':   'bg-gray-500 text-white',
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('news');

  /* GSAP Hero テキストアニメーション */
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      gsap.fromTo(
        '[data-hero-line]',
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        }
      );
    };
    init();
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* ============================================================
          1. HERO — 明るい海の画像 + 薄い白オーバーレイ + 文字重ね
          ============================================================ */}
      <section
        className="hero-grain relative w-full h-[90vh] min-h-[600px] flex items-end justify-start overflow-hidden bg-sky-100"
        aria-label="メインビジュアル"
      >
        {/* Hero背景：明るい海の画像 + 深度ズームアニメーション */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/hero-sea-bright.jpg"
            alt="穏やかな海の水平線の写真"
            fill
            className="object-cover opacity-95 hero-zoom"
            priority
            sizes="100vw"
          />
          {/* 薄い白グラデオーバーレイ：画像の明るさを残しつつ文字を読みやすく */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-white/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/10 to-transparent" />
        </div>

        {/* Hero テキスト（左寄せ・下配置） */}
        <div className="relative z-10 container mx-auto px-6 lg:px-16 pb-20 md:pb-28">
          {/* Eyebrow */}
          <p
            data-hero-line=""
            className="text-gray-500 font-medium tracking-[0.28em] mb-6 text-xs md:text-sm uppercase flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <span className="inline-block w-8 h-[1px] bg-brand-primary" />
            株式会社 清蓮
          </p>

          {/* H1：1行ずつGSAPアニメーション */}
          <h1 className="font-serif font-bold text-gray-900 leading-[1.1] mb-8 tracking-[0.05em]">
            <span
              data-hero-line=""
              className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{ opacity: 0 }}
            >
              人生の節目に、
            </span>
            <span
              data-hero-line=""
              className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-700"
              style={{ opacity: 0 }}
            >
              確かな判断と実務を。
            </span>
          </h1>

          {/* サブコピー */}
          <p
            data-hero-line=""
            className="text-base md:text-lg text-gray-600 mb-12 max-w-xl leading-[1.9] font-light"
            style={{ opacity: 0 }}
          >
            海洋散骨・遺骨サービス・終活支援など、<br className="hidden md:block" />
            人生の大切な節目を専門知識と誠実さで支えます。
          </p>

          {/* CTA */}
          <div
            data-hero-line=""
            className="flex flex-col sm:flex-row gap-4 items-start"
            style={{ opacity: 0 }}
          >
            <Link
              href="/business"
              className="px-8 py-4 bg-brand-primary text-white font-bold text-base hover:bg-brand-hover transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-brand-primary/20"
            >
              事業紹介を見る
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-900 font-bold text-base hover:bg-white hover:border-gray-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Scroll Indicator：ブランドティールが流れる */}
        <div
          className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 text-gray-400"
          aria-hidden="true"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-light" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-[1px] h-16 overflow-hidden relative bg-gray-200">
            <div
              className="absolute inset-x-0 top-0 h-full bg-brand-primary"
              style={{ animation: 'scrollFlow 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST BASE — 信頼性UI（Hero直下）
          ============================================================ */}
      <section className="bg-white border-b border-gray-100" aria-label="基本情報">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex items-center gap-4 py-6 px-4 md:px-8">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-0.5">Appointment</p>
                <p className="text-sm font-bold text-gray-900">完全予約制</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 px-4 md:px-8">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-0.5">Phone</p>
                <a href="tel:045-881-9952" className="text-sm font-bold text-gray-900 hover:text-brand-primary transition-colors">
                  045-881-9952
                </a>
                <p className="text-xs text-gray-400 mt-0.5">毎日 9:00〜18:00</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-6 px-4 md:px-8">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-0.5">Location</p>
                <p className="text-sm font-bold text-gray-900">横浜市戸塚区</p>
                <a
                  href="https://maps.google.com/?q=神奈川県横浜市戸塚区戸塚町4170+高橋ビル1F"
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs text-brand-primary hover:text-brand-hover transition-colors font-medium"
                >
                  Google Mapを見る →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CORPORATE STATEMENT — 縦書きパーパス
          ============================================================ */}
      <section className="bg-white pt-48 pb-40 relative z-20" aria-label="企業理念">
        <div className="container mx-auto px-6 lg:px-16 flex justify-center">
          <div className="reveal vertical-rl flex items-center justify-center gap-16 md:gap-24 h-[600px] md:h-[700px]">
            <div
              className="vertical-rl-text text-lg md:text-xl text-gray-500 font-serif leading-loose tracking-[0.22em]"
              style={{ transitionDelay: '0.1s' }}
            >
              <p>私たちは、正解の押し付けを良しとしません。</p>
              <br />
              <p>ご本人とご家族の想いを丁寧にお聞きし、</p>
              <p>客観的な情報と選択肢をご提示する。</p>
              <br />
              <p>そして、専門家としての確かな実務を通して、</p>
              <p>その決断を最後まで支え抜きます。</p>
            </div>
            <h2 className="vertical-rl-text text-4xl md:text-5xl lg:text-6xl text-gray-900 font-serif font-bold tracking-[0.25em] leading-relaxed">
              <span className="block">人生の節目に、</span>
              <span className="block mt-12">確かな判断と実務を。</span>
            </h2>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-32 bg-brand-accent opacity-60" aria-hidden="true" />
      </section>

      {/* ============================================================
          ABOUT — 非対称オフセット + backdrop-blur-md
          ============================================================ */}
      <section className="py-40 bg-slate-50" aria-labelledby="about-heading">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="relative flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-5/12 z-10 relative mt-8 lg:mt-0 order-2 lg:order-1">
              <div className="lg:bg-white/90 lg:backdrop-blur-md lg:p-14 lg:shadow-2xl lg:-mr-40 relative z-20">
                <div className="reveal">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-5">About</p>
                  <h2
                    id="about-heading"
                    className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-[0.05em]"
                  >
                    清蓮について
                  </h2>
                  <div className="w-10 h-[1px] bg-brand-primary mt-8 mb-12" />
                </div>
                <div className="reveal prose prose-lg text-gray-600 leading-[2.2]" style={{ transitionDelay: '0.08s' }}>
                  <p>
                    株式会社 清蓮は、人生の節目における意思決定と実務をサポートする専門企業です。
                    海洋散骨、遺骨ケア、お墓じまい、終活相談など、複数の事業を運営し、国内外の専門事業者と連携しながら、お客様一人ひとりの状況に合わせた最適な選択肢をご提案します。
                  </p>
                  <p className="mt-6">
                    私たちは「正解の押し付け」をしません。<br />
                    ご本人・ご家族の想いや事情を丁寧にお聞きし、判断に必要な客観的情報をお伝えし、実務まで責任を持って対応します。
                  </p>
                  <p className="mt-8 font-serif font-bold text-gray-900 text-xl border-l-2 border-brand-accent pl-6 tracking-wide">
                    相談で終わらせず、実行まで伴走する。<br />それが清蓮の役割です。
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 w-full lg:ml-auto order-1 lg:order-2">
              <div className="reveal clip-reveal relative overflow-hidden group h-[420px] lg:h-[700px]" style={{ transitionDelay: '0.1s' }}>
                <Image
                  src="/assets/img/about-office.jpg"
                  alt="清蓮の相談スペースの写真"
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-tier1"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gray-900/5 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BUSINESS — Emblaカルーセル
          ============================================================ */}
      <section className="py-40 bg-white" aria-labelledby="business-heading">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="reveal mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Business</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 id="business-heading" className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-[0.05em]">
                事業領域
              </h2>
              <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                終活・供養に関わる複数の専門事業を、国内外のネットワークで支えます。
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-100 mt-10" />
          </div>
          <BusinessCarousel />
          <div className="reveal mt-14 text-center" style={{ transitionDelay: '0.1s' }}>
            <Link
              href="/business"
              className="inline-flex items-center gap-3 px-10 py-4 border border-gray-900 text-gray-900 font-bold tracking-[0.15em] hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm"
            >
              すべての事業を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          STRENGTH — 階段状カード + hover-card
          ============================================================ */}
      <section className="py-40 bg-slate-50" aria-labelledby="strength-heading">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="reveal text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Strength</p>
            <h2 id="strength-heading" className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-[0.05em] mb-4">
              清蓮が選ばれる理由
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              実務対応・提携体制・来店型相談。清蓮の強みは、相談から実行までの一貫した伴走にあります。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { id: '01', title: '実務対応力', desc: '相談で終わらせず、手続き・段取り・実務まで一貫して対応。判断と実務を分けない姿勢が、負担を最小化します。' },
              { id: '02', title: '提携ネットワーク', desc: '国内寺院・石材店・船舶事業者など、国内外の専門事業者と強固な連携体制を構築しています。' },
              { id: '03', title: '来店型相談', desc: '完全予約制の来店相談により、個別事情を丁寧にお聞きします。最適な選択肢を一緒に考えます。' },
            ].map((item, idx) => (
              <div
                key={item.id}
                data-stagger="strength"
                className={`reveal hover-card relative p-10 bg-white border border-gray-200 text-left flex flex-col items-start cursor-default
                  ${idx === 1 ? 'md:mt-12' : ''}
                  ${idx === 2 ? 'md:mt-24' : ''}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <span className="text-6xl font-serif font-bold text-gray-100 mb-6 block tracking-widest leading-none">{item.id}</span>
                <h3 className="text-xl font-bold mb-4 text-gray-900 tracking-wide border-b-2 border-brand-primary pb-3 self-start">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PARTNER
          ============================================================ */}
      <section className="py-32 bg-white" aria-labelledby="partner-heading">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
            <div className="lg:w-1/3 reveal">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Partners</p>
              <h2 id="partner-heading" className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-[0.05em]">
                提携・取引先
              </h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                国内外の専門事業者と連携し、お客様に最適なサービスをご提供する体制を構築しています。
              </p>
              <Link href="/partner" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-hover transition-colors">
                提携事業者一覧へ
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-gray-200">
              {['寺院 / 納骨堂', '石材店', '船舶事業者', '遺骨関連専門'].map((p, i) => (
                <div key={i} className="reveal bg-white text-center p-8 flex items-center justify-center font-bold text-gray-700 text-sm hover:text-brand-primary transition-colors duration-200">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          NEWS
          ============================================================ */}
      <section className="py-32 bg-slate-50 border-t border-gray-100" aria-labelledby="news-heading">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="reveal mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Topics</p>
              <h2 id="news-heading" className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-[0.05em]">
                ニュース・お知らせ
              </h2>
            </div>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-hover transition-colors">
              一覧を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="flex border-b border-gray-200 mb-0">
            {tabConfig.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-3 text-sm font-bold tracking-wide transition-colors duration-200 focus:outline-none ${
                  activeTab === tab.key
                    ? 'text-gray-900 border-b-2 border-brand-primary -mb-px'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-white border border-t-0 border-gray-200 min-h-[120px]">
            {newsData[activeTab]?.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {newsData[activeTab].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <span className="text-xs text-gray-400 font-medium tracking-widest flex-shrink-0">{item.date}</span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 flex-shrink-0 w-fit ${categoryColor[item.category] ?? 'bg-gray-200 text-gray-600'}`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-800 group-hover:text-brand-primary transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-6 py-12 flex items-center justify-center text-gray-400 text-sm">
                現在、該当するお知らせはありません。
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPANY INFO
          ============================================================ */}
      <section className="py-20 bg-white" aria-labelledby="company-heading">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="reveal mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Company</p>
            <h2 id="company-heading" className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-[0.05em]">
              会社情報
            </h2>
          </div>
          <dl className="reveal divide-y divide-gray-100" style={{ transitionDelay: '0.08s' }}>
            {[
              { label: '商号',      value: '株式会社 清蓮' },
              { label: '代表取締役', value: '眞如 りえ' },
              { label: '所在地',    value: '〒244-0003 神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F' },
              { label: '電話番号',  value: '045-881-9952' },
              { label: '設立',      value: '2026年（令和8年）' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row py-4 gap-2 sm:gap-0">
                <dt className="w-full sm:w-1/4 text-xs text-gray-400 font-bold tracking-[0.2em] uppercase flex-shrink-0 pt-0.5">{label}</dt>
                <dd className="text-gray-800 font-medium text-sm sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="reveal mt-8" style={{ transitionDelay: '0.12s' }}>
            <Link href="/company" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-hover transition-colors">
              詳細な会社情報を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-32 bg-surface-dark relative overflow-hidden text-center text-white" aria-label="お問い合わせ">
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary opacity-60" aria-hidden="true" />
        <div className="container relative z-10 mx-auto px-6 max-w-3xl">
          <p className="reveal text-xs text-brand-primary font-bold tracking-[0.3em] uppercase mb-5">Get in Touch</p>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-[0.05em] leading-tight" style={{ transitionDelay: '0.08s' }}>
            ご相談をご希望の方へ
          </h2>
          <p className="reveal text-sm text-gray-400 mb-14 leading-relaxed" style={{ transitionDelay: '0.12s' }}>
            会社について、提携・業務相談など、<br className="hidden md:block" />
            まずはお気軽にお問い合わせください。
          </p>
          <div className="reveal flex flex-col sm:flex-row justify-center items-center gap-4" style={{ transitionDelay: '0.16s' }}>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 font-bold text-sm hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300">
              Webから問い合わせる
            </Link>
            <a
              href="tel:045-881-9952"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-sm hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              045-881-9952
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
