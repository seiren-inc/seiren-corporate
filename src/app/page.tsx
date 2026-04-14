'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoBlooming from '@/components/LogoBlooming';
import ServiceHub from '@/components/ServiceHub';

gsap.registerPlugin(ScrollTrigger);

const BusinessCarousel = dynamic(() => import('@/components/BusinessCarousel'), { ssr: false });

const newsData = {
  news: [
    { date: '2026.04.13', category: 'コーポレート', title: 'コーポレートサイトをリニューアルいたしました。' },
    { date: '2026.04.01', category: '事業', title: '遺骨ダイヤモンドアドバイザーによる個別相談会を実施します。' },
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
  '提携':       'bg-brand-secondary text-white',
  'コラム':     'bg-brand-accent text-white',
  'お知らせ':   'bg-gray-500 text-white',
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('news');
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Text Animation
    const heroTl = gsap.timeline();
    heroTl.fromTo(
      '[data-hero-text]',
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.8 // LogoBloomingが終わる頃に開始
      }
    );

    // 2. Generic Reveal Animation for all sections
    const revealElements = gsap.utils.toArray('.reveal') as HTMLElement[];
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // 3. Horizontal line animation
    gsap.fromTo('.section-line',
      { scaleX: 0, transformOrigin: 'left' },
      {
        scaleX: 1,
        duration: 2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.section-line',
          start: 'top 90%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-white flex flex-col pt-[var(--header-height)]">

      {/* ============================================================
          1. HERO — 明るい海 + 開花ロゴアニメーション
          ============================================================ */}
      <section className="relative w-full h-[calc(100vh-var(--header-height))] min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
        {/* 背景画像の明るい海の演出 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/img/hero-sea-premium.jpg"
            alt="穏やかな海の水平線の写真"
            fill
            className="object-cover opacity-60 hero-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80" />
        </div>

        {/* Heroコンテクスト */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Logo Blooming Intro */}
          <LogoBlooming className="mb-12" />

          {/* H1 Main Copy */}
          <h1 className="font-serif text-gray-900 leading-[1.2] mb-10 tracking-[0.1em]">
            <span data-hero-text className="block text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-2">
              人生の節目に、
            </span>
            <span data-hero-text className="block text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-medium text-brand-primary">
              確かな判断と実務を。
            </span>
          </h1>

          <p data-hero-text className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12 font-light">
            海洋散骨・遺骨サービス・終活ナビゲーション。多角的な専門知識を一つの窓口に集約し、前向きな「これから」を支えます。
          </p>

          <div data-hero-text className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link
              href="/contact"
              className="px-12 py-5 bg-brand-primary text-white font-bold tracking-widest text-sm hover:bg-brand-hover transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-brand-primary/20 rounded-full"
            >
              無料相談はこちら
            </Link>
            <Link
              href="/business"
              className="px-12 py-5 bg-white border border-gray-200 text-gray-900 font-bold tracking-widest text-sm hover:border-brand-primary hover:text-brand-primary transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              SERVICE HUBを見る
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-400">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-primary animate-scrollFlow" />
          </div>
        </div>
      </section>

      {/* ============================================================
          2. CORPORATE STATEMENT — 浮遊感のあるメッセージ
          ============================================================ */}
      <section className="py-32 md:py-52 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32 justify-center">
            {/* 縦書きの美しい日本語 */}
            <div className="reveal vertical-rl flex gap-12 md:gap-20 h-[500px] md:h-[650px] items-center">
              <p className="text-xl md:text-2xl text-muted font-serif leading-loose tracking-[0.2em] pt-12">
                私たちは、正解の押し付けをしません。
                ご本人とご家族の想いを丁寧にお聞きし、
                客観的な選択肢をご提示します。
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-relaxed tracking-[0.25em]">
                相談で終わらせず、<br /><span className="text-brand-primary mt-12 block">実務まで伴走する。</span>
              </h2>
            </div>
          </div>
        </div>
        {/* 背景の装飾的な「ゆらぎ」 */}
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-teal-light/20 blur-[120px] rounded-full -z-10 animate-floating-slow" />
      </section>

      {/* ============================================================
          3. SERVICE ECOSYSTEM — 統合された高品質な体験
          ============================================================ */}
      <ServiceHub />

      {/* ============================================================
          4. BRAND PORTFOLIO — 各サービスの専門性
          ============================================================ */}
      <section className="py-32 md:py-48 bg-surface" aria-labelledby="portfolio-heading">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="reveal mb-20 text-center">
            <span className="text-xs font-bold tracking-[0.4em] text-brand-primary uppercase mb-4 block">Brand Portfolio</span>
            <h2 id="portfolio-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-8">
              専門ブランドの連携
            </h2>
            <div className="section-line h-[1px] bg-brand-primary/20 w-48 mx-auto" />
          </div>
          
          <BusinessCarousel />
          
          <div className="reveal mt-20 text-center">
            <p className="text-muted mb-10 max-w-xl mx-auto leading-relaxed">
              海洋散骨から遺骨ダイヤモンド、お墓じまいの実務まで。各分野のプロフェッショナルが連携し、高品質な終活支援を実現します。
            </p>
            <Link 
              href="/company" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-gray-950 text-white text-sm font-bold tracking-widest hover:bg-brand-primary hover:-translate-y-1 transition-all shadow-xl"
            >
              会社概要・ビジョンを見る
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. NEWS & TOPICS
          ============================================================ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
            <div className="lg:col-span-1 reveal">
              <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">Topics</h2>
              <p className="text-sm text-muted leading-relaxed mb-10">
                最新のニュースや、終活に役立つ情報を定期的にお届けしています。
              </p>
              <Link href="/contact" className="text-xs font-bold tracking-widest text-brand-primary border-b border-brand-primary pb-1 hover:opacity-70 transition-opacity">
                ALL TOPICS →
              </Link>
            </div>
            
            <div className="lg:col-span-3 reveal">
              <div className="flex gap-8 border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
                {tabConfig.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative pb-4 text-sm font-bold tracking-widest transition-colors whitespace-nowrap ${
                      activeTab === tab.key ? 'text-gray-900' : 'text-gray-300 hover:text-gray-500'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-primary" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="space-y-1 min-h-[300px]">
                {newsData[activeTab]?.length > 0 ? (
                  newsData[activeTab].map((item, idx) => (
                    <Link 
                      key={idx} 
                      href="/contact" 
                      className="group flex flex-col md:flex-row md:items-center py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-xl"
                    >
                      <span className="text-xs text-gray-400 font-medium tracking-widest w-32 mb-2 md:mb-0">{item.date}</span>
                      <span className={`text-[10px] font-bold px-3 py-1 mr-6 rounded-full w-fit mb-3 md:mb-0 ${categoryColor[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-base text-gray-800 group-hover:text-brand-primary transition-colors flex-1 font-medium">{item.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary hidden md:block">→</span>
                    </Link>
                  ))
                ) : (
                  <div className="py-20 text-center text-gray-300 text-sm font-medium">現在、該当するお知らせはありません。</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. FINAL CTA — 光の煌めきの中でお問い合わせ
          ============================================================ */}
      <section className="py-40 bg-gray-950 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[150px] animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[150px] opacity-30 animate-floating-slow" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 max-w-3xl">
          <p className="reveal text-xs text-brand-gold font-bold tracking-[0.5em] uppercase mb-8">Partner with Us</p>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-10 tracking-[0.05em] leading-tight">
            人生の節目を、<br />共により良く。
          </h2>
          <p className="reveal text-gray-400 mb-16 leading-relaxed text-lg font-light">
            個人のお客様から事業者様まで。清蓮は、あらゆる想いに誠実に応える体制を整えています。<br />
            まずはお気軽にご相談ください。
          </p>
          
          <div className="reveal flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-16 py-6 bg-white text-gray-900 font-bold tracking-widest text-sm hover:bg-brand-teal-light hover:-translate-y-1 transition-all shadow-2xl rounded-full"
            >
              無料相談・問い合わせ
            </Link>
            <a
              href="tel:045-881-9952"
              className="w-full sm:w-auto px-16 py-6 bg-transparent border border-white/20 text-white font-bold tracking-widest text-sm hover:border-white/50 hover:-translate-y-1 transition-all rounded-full flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              045-881-9952
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
