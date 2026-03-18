'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const newsData = {
  news: [
    { date: '2026.03.01', category: '事業', title: '海洋散骨サービスの新プランを提供開始しました。' },
    { date: '2026.02.15', category: 'コーポレート', title: '株式会社清蓮として事業を開始しました。' },
    { date: '2026.01.20', category: '提携', title: '関東エリアの寺院・石材店との提携ネットワークを構築しました。' },
  ],
  column: [
    { date: '2026.03.05', category: 'コラム', title: '「海洋散骨」とは？費用・手続き・流れを徹底解説' },
    { date: '2026.02.20', category: 'コラム', title: 'お墓じまいを考えるタイミングとよくある質問' },
    { date: '2026.02.01', category: 'コラム', title: '終活を始めるための5つのステップ' },
  ],
  info: [
    { date: '2026.03.10', category: 'お知らせ', title: '年末年始の営業時間についてのご案内' },
    { date: '2026.02.28', category: 'お知らせ', title: '電話受付時間を変更しました（毎日9:00〜18:00）' },
  ],
};

const tabConfig = [
  { key: 'news', label: 'ニュース', en: 'News' },
  { key: 'column', label: 'コラム', en: 'Column' },
  { key: 'info', label: 'お知らせ', en: 'Information' },
] as const;

type TabKey = keyof typeof newsData;

const categoryColor: Record<string, string> = {
  '事業': 'bg-brand-primary text-white',
  'コーポレート': 'bg-gray-700 text-white',
  '提携': 'bg-teal-700 text-white',
  'コラム': 'bg-brand-accent text-white',
  'お知らせ': 'bg-gray-500 text-white',
};


export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('news');

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Hero Section */}
      <section className="hero-grain relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/assets/img/hero-sea.jpg"
            alt="穏やかな海の水平線の写真"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-16">
          <p className="reveal text-white/80 font-medium tracking-[0.2em] mb-4 text-sm md:text-md uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-primary mr-3"></span>
            株式会社 清蓮
          </p>
          <h1 className="reveal text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-widest drop-shadow-md" style={{ transitionDelay: '0.08s' }}>
            <span className="block mb-2">人生の節目に、</span>
            <span className="block">確かな判断と実務を。</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-medium" style={{ transitionDelay: '0.16s' }}>
            海洋散骨・遺骨サービス・終活支援など、<br className="hidden md:block" />
            人生の大切な節目を支えるハブ企業です。
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md" style={{ transitionDelay: '0.24s' }}>
             <Link href="/business" className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white rounded-none font-bold text-lg hover:bg-brand-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              事業紹介を見る
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-none font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5">
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60" aria-hidden="true">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-10 bg-white/20 overflow-hidden relative">
            <div className="w-full bg-white/80 absolute top-0 h-1/2" style={{ animation: 'scrollLine 1.6s ease-in-out infinite' }}></div>
          </div>
        </div>
      </section>

      {/* 2. Trust Base */}
      <section className="bg-white py-10 border-t border-b border-gray-100 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="border border-gray-900 text-gray-900 px-4 py-1.5 text-sm font-bold tracking-wider mb-3">完全予約制</span>
              <p className="text-gray-600 font-medium text-sm">心を込めて個別に対応いたします。</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-gray-500 text-xs font-semibold tracking-widest mb-2 uppercase">お電話でのご相談</span>
              <a href="tel:045-881-9952" className="text-3xl font-bold text-gray-900 hover:text-brand-primary transition-colors duration-200">
                045-881-9952
              </a>
              <span className="text-gray-400 text-xs mt-1">受付時間 毎日 9:00〜18:00</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
               <span className="text-gray-500 text-xs font-semibold tracking-widest mb-2 uppercase">来店相談アクセス</span>
               <a 
                 href="https://maps.google.com/?q=神奈川県横浜市戸塚区戸塚町4170+高橋ビル1F" 
                 target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 group text-brand-primary font-bold hover:text-gray-900 transition-colors text-sm"
               >
                 <span>Google Mapを見る</span>
                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 space-y-8">
               <div className="reveal">
                 <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-3">About</p>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight tracking-wider">清蓮について</h2>
                 <div className="w-10 h-[1px] bg-gray-900 mt-6"></div>
               </div>
               <div className="reveal prose prose-lg text-gray-600 leading-relaxed" style={{ transitionDelay: '0.08s' }}>
                 <p>
                   株式会社 清蓮は、人生の節目における意思決定と実務をサポートする会社です。
                   海洋散骨、遺骨ケア、お墓じまい、終活コンシェルジュなど、複数の事業を運営・企画し、国内外の専門事業者と連携しながら、お客様一人ひとりの状況に合わせた選択肢をご提案します。
                 </p>
                 <p className="mt-4">
                   私たちは「正解の押し付け」をしません。<br/>
                   ご本人・ご家族の想いや事情を丁寧にお聞きし、判断に必要な情報をお伝えし、実務まで責任を持って対応します。
                 </p>
                 <p className="mt-4 font-bold text-gray-900 border-l-2 border-brand-accent pl-4">
                   相談で終わらせず、実行まで伴走する。<br/>それが清蓮の役割です。
                 </p>
               </div>
             </div>
             <div className="lg:w-1/2 w-full">
               <div className="reveal clip-reveal relative overflow-hidden group border border-gray-200 p-2 bg-white h-[400px]" style={{ transitionDelay: '0.1s' }}>
                 <div className="absolute inset-0 bg-gray-900/8 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
                 <Image 
                   src="/assets/img/about-office.jpg" 
                   alt="清蓮の相談スペースの写真" 
                   fill
                   className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                   sizes="(max-width: 1024px) 100vw, 50vw"
                 />
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. Business Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="reveal text-center mb-16">
             <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-3">Business</p>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-wider">事業領域</h2>
             <p className="text-base text-gray-500 max-w-2xl mx-auto">終活・供養に関わる複数の専門事業を、国内外のネットワークで支えます。</p>
          </div>
          
          {/* 住友不動産スタイル：ソリッドグリッドカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
            {[
              { title: "海洋散骨", en: "Sea Burial", img: "/assets/img/hero-sea.jpg", desc: "国内・海外を含め、安心して海洋散骨を行うための専門サービスを提供しています。" },
              { title: "遺骨サービス", en: "Remains Care", img: "/assets/img/hero-sea.jpg", desc: "洗骨・粉骨など、遺骨の状態やご事情に合わせた専門的なケア・加工を行います。" },
              { title: "お墓じまい・改葬", en: "Grave Reform", img: "/assets/img/hero-sea.jpg", desc: "お墓の整理や改葬に関する意思決定と段取りを、わかりやすくご案内します。" },
              { title: "終活コンシェルジュ", en: "Life Ending Support", img: "/assets/img/about-office.jpg", desc: "終活についての不安や検討事項を丁寧にお聞きし、ご本人の負担を軽くする伴走サービスです。" },
              { title: "墓地・納骨先検索", en: "Grave Search", img: "/assets/img/hero-sea.jpg", desc: "墓地・納骨先を探すための検索プラットフォームを開発・運営しています。" },
              { title: "手元供養品", en: "Memorial Items", img: "/assets/img/about-office.jpg", desc: "日々の暮らしの中で手元に祈れる供養品を企画・販売しています。" }
            ].map((biz, idx) => (
               <Link
                 key={idx}
                 href="/business"
                 data-stagger="business"
                 className="reveal group relative block overflow-hidden border-b border-r border-gray-200"
               >
                 {/* 画像エリア */}
                 <div className="relative h-52 overflow-hidden bg-gray-800">
                   <Image
                     src={biz.img}
                     alt={biz.title}
                     fill
                     className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                 </div>
                 {/* テキストエリア：住友式ダークグレーべた帯 */}
                 <div className="relative bg-surface-dark group-hover:bg-gray-700 transition-colors duration-300 px-6 py-5 flex items-center justify-between">
                   <div>
                     <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">{biz.en}</p>
                     <h3 className="text-base font-serif font-bold text-white tracking-wide">{biz.title}</h3>
                   </div>
                   <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </div>
               </Link>
            ))}
          </div>
          
          <div className="reveal mt-14 text-center" style={{ transitionDelay: '0.1s' }}>
            <Link href="/business" className="inline-block px-10 py-4 border border-gray-900 text-gray-900 rounded-none font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm">
              すべての事業を見る
            </Link>
          </div>
        </div>
      </section>


      {/* 5. Strength Section */}
      <section className="py-24 bg-surface-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/img/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="reveal text-center mb-16">
             <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-3">Strength</p>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-wider">清蓮が選ばれる理由</h2>
             <p className="text-sm text-gray-400 max-w-2xl mx-auto">実務対応・提携体制・来店型相談。清蓮の強みは、相談から実行までの一貫した伴走にあります。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "01", title: "実務対応力", desc: "相談で終わらせず、手続き・段取り・実務まで一貫して対応。判断と実務を分けない姿勢が、負担を最小化します。" },
              { id: "02", title: "提携ネットワーク", desc: "国内寺院・石材店・船舶事業者など、国内外の専門事業者と強固な連携体制を構築しています。" },
              { id: "03", title: "来店型相談", desc: "完全予約制の来店相談により、個別事情を丁寧にお聞きします。最適な選択肢を一緒に考えます。" }
            ].map((item, idx) => (
              <div key={item.id} data-stagger="strength" className="reveal relative p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-left flex flex-col items-start" style={{ transitionDelay: `${idx * 0.08}s` }}>
                <span className="text-5xl font-serif font-bold text-white/15 mb-5 block tracking-widest">{item.id}</span>
                <h3 className="text-lg font-bold mb-3 text-white tracking-wide border-b border-brand-accent pb-2 self-start">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Minimal Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/3 reveal">
               <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-3">Partners</p>
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-5 tracking-wider">提携・取引先</h2>
               <p className="text-gray-500 mb-8 leading-relaxed text-sm">国内外の専門事業者と連携し、お客様に最適なサービスをご提供する体制を構築しています。</p>
               <Link href="/partner" className="inline-flex items-center text-brand-primary font-bold hover:text-gray-900 transition-colors text-sm">
                 提携事業者一覧へ
                 <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-3">
               {["寺院 / 納骨堂", "石材店", "船舶事業者", "遺骨関連専門"].map((p, i) => (
                 <div key={i} data-stagger="partners" className="reveal bg-white border text-center border-gray-200 p-5 flex items-center justify-center font-bold text-gray-700 hover:border-gray-400 hover:-translate-y-0.5 transition-all duration-200 text-sm">
                   {p}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. News / Topics タブ（住友不動産スタイル） */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="reveal mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-3">Topics</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-wider">ニュース・お知らせ</h2>
            </div>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-gray-900 transition-colors">
              一覧を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* タブナビゲーション */}
          <div className="flex border-b border-gray-200 mb-0">
            {tabConfig.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-3 text-sm font-bold tracking-wide transition-colors duration-200 focus:outline-none ${
                  activeTab === tab.key
                    ? 'text-gray-900 border-b-2 border-gray-900 -mb-px'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* タブコンテンツ */}
          <div className="bg-white border border-t-0 border-gray-200 divide-y divide-gray-100">
            {newsData[activeTab].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                <span className="text-xs text-gray-400 font-medium tracking-widest flex-shrink-0">{item.date}</span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-sm flex-shrink-0 w-fit ${categoryColor[item.category] ?? 'bg-gray-200 text-gray-600'}`}>
                  {item.category}
                </span>
                <span className="text-sm text-gray-800 group-hover:text-brand-primary transition-colors">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right md:hidden">
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-gray-900 transition-colors">
              一覧を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Company Info Minimal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="reveal mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent mb-3">Company</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-wider">会社情報</h2>
          </div>
          <dl className="reveal divide-y divide-gray-100" style={{ transitionDelay: '0.08s' }}>
            {[
              { label: "商号",     value: "株式会社 清蓮" },
              { label: "代表取締役", value: "眞如 りえ" },
              { label: "所在地",   value: "〒244-0003 神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F" },
              { label: "電話番号", value: "045-881-9952" },
              { label: "設立",     value: "2026年（令和8年）" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row py-4 gap-2 sm:gap-0">
                <dt className="w-full sm:w-1/4 text-xs text-gray-400 font-bold tracking-widest uppercase flex-shrink-0 pt-0.5">{label}</dt>
                <dd className="text-gray-800 font-medium text-sm sm:text-base">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="reveal mt-8" style={{ transitionDelay: '0.12s' }}>
            <Link href="/company" className="text-sm text-brand-primary font-bold hover:text-gray-900 transition-colors inline-flex items-center gap-1.5">
              詳細な会社情報を見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-surface-dark relative overflow-hidden text-center text-white border-t border-gray-800">
        <div className="container relative z-10 mx-auto px-6 max-w-3xl">
          <p className="reveal text-xs text-brand-accent font-bold tracking-[0.25em] uppercase mb-3">Get in Touch</p>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-wider" style={{ transitionDelay: '0.08s' }}>ご相談をご希望の方へ</h2>
          <p className="reveal text-base text-gray-400 mb-12 leading-relaxed" style={{ transitionDelay: '0.12s' }}>
            会社について、提携・業務相談など、<br className="hidden md:block"/>
            まずはお気軽にお問い合わせください。
          </p>
          <div className="reveal flex flex-col sm:flex-row justify-center items-center gap-4" style={{ transitionDelay: '0.16s' }}>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 font-bold text-base hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300">
              Webから問い合わせる
            </Link>
            <a href="tel:045-881-9952" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/40 text-white font-bold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
