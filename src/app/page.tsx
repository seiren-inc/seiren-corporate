import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img/hero-sea.jpg"
            alt="穏やかな海の水平線の写真"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-16">
          <p className="text-white/80 font-medium tracking-[0.2em] mb-4 text-sm md:text-md uppercase reveal-animate">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-primary mr-3 animate-pulse"></span>
            株式会社 清蓮
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 reveal-animate" style={{ animationDelay: '0.1s' }}>
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">人生の節目に、</span>
            <span className="block text-white drop-shadow-lg">確かな判断と実務を。</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-medium reveal-animate" style={{ animationDelay: '0.2s' }}>
            海洋散骨・遺骨サービス・終活支援など、<br className="hidden md:block" />
            人生の大切な節目を支えるハブ企業です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md reveal-animate" style={{ animationDelay: '0.3s' }}>
             <Link href="/business" className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:bg-[#206774] transition-all duration-300 shadow-[0_0_20px_rgba(47,140,156,0.4)] hover:shadow-[0_0_30px_rgba(47,140,156,0.6)] hover:-translate-y-1">
              事業紹介を見る
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/70">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white absolute top-0 animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* 2. Trust Base */}
      <section className="bg-white py-12 border-b border-gray-100 relative -mt-8 z-20 rounded-t-[3rem] shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="bg-brand-secondary text-brand-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-3">完全予約制</span>
              <p className="text-gray-600 font-medium">心を込めて個別に対応いたします。</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-gray-500 text-sm font-semibold tracking-wider mb-2">お電話でのご相談</span>
              <a href="tel:045-881-9952" className="text-3xl font-bold text-gray-900 hover:text-brand-primary transition-colors duration-200">
                045-881-9952
              </a>
              <span className="text-gray-400 text-xs mt-1">受付時間 毎日 9:00〜18:00</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
               <span className="text-gray-500 text-sm font-semibold tracking-wider mb-2">来店相談アクセス</span>
               <a 
                 href="https://maps.google.com/?q=神奈川県横浜市戸塚区戸塚町4170+高橋ビル1F" 
                 target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 group text-brand-primary font-bold hover:text-gray-900 transition-colors"
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
               <div>
                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-primary mb-2">About</p>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">清蓮について</h2>
                 <div className="w-12 h-1 bg-brand-primary mt-6"></div>
               </div>
               <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                 <p>
                   株式会社 清蓮は、人生の節目における意思決定と実務をサポートする会社です。
                   海洋散骨、遺骨ケア、お墓じまい、終活コンシェルジュなど、複数の事業を運営・企画し、国内外の専門事業者と連携しながら、お客様一人ひとりの状況に合わせた選択肢をご提案します。
                 </p>
                 <p className="mt-4">
                   私たちは「正解の押し付け」をしません。<br/>
                   ご本人・ご家族の想いや事情を丁寧にお聞きし、判断に必要な情報をお伝えし、実務まで責任を持って対応します。
                 </p>
                 <p className="mt-4 font-bold text-gray-800 text-xl border-l-4 border-brand-primary pl-4">
                   相談で終わらせず、実行まで伴走する。<br/>それが清蓮の役割です。
                 </p>
               </div>
             </div>
             <div className="lg:w-1/2 w-full">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                 <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                 <img 
                   src="/assets/img/about-office.jpg" 
                   alt="清蓮の相談スペースの写真" 
                   className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                   loading="lazy"
                 />
                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-dots-pattern opacity-50 z-0"></div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. Business Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
             <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-primary mb-2">Business</p>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">事業領域</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">終活・供養に関わる複数の専門事業を、国内外のネットワークで支えます。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "海洋散骨", desc: "国内・海外を含め、安心して海洋散骨を行うための専門サービスを提供しています。" },
              { title: "遺骨サービス", desc: "洗骨・粉骨など、遺骨の状態やご事情に合わせた専門的なケア・加工を行います。" },
              { title: "お墓じまい・改葬", desc: "お墓の整理や改葬に関する意思決定と段取りを、わかりやすくご案内します。" },
              { title: "終活コンシェルジュ", desc: "終活についての不安や検討事項を丁寧にお聞きし、ご本人の負担を軽くする伴走サービスです。" },
              { title: "墓地・納骨先検索", desc: "墓地・納骨先を探すための検索プラットフォームを開発・運営しています。" },
              { title: "手元供養品", desc: "日々の暮らしの中で手元に祈れる供養品を企画・販売しています。" }
            ].map((biz, idx) => (
               <div key={idx} className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold text-gray-900 mb-4">{biz.title}</h3>
                   <p className="text-gray-600 leading-relaxed mb-6">{biz.desc}</p>
                   <Link href="/business" className="inline-flex items-center text-brand-primary font-bold group-hover:text-[#206774] transition-colors">
                     詳しく見る
                     <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </Link>
                 </div>
               </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/business" className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-brand-primary transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              すべての事業を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Strength Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/img/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
             <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-primary mb-2">Strength</p>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">清蓮が選ばれる理由</h2>
             <p className="text-lg text-gray-300 max-w-2xl mx-auto">実務対応・提携体制・来店型相談。清蓮の強みは、相談から実行までの一貫した伴走にあります。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { id: "01", title: "実務対応力", desc: "相談で終わらせず、手続き・段取り・実務まで一貫して対応。判断と実務を分けない姿勢が、負担を最小化します。" },
              { id: "02", title: "提携ネットワーク", desc: "国内寺院・石材店・船舶事業者など、国内外の専門事業者と強固な連携体制を構築しています。" },
              { id: "03", title: "来店型相談", desc: "完全予約制の来店相談により、個別事情を丁寧にお聞きします。最適な選択肢を一緒に考えます。" }
            ].map(item => (
              <div key={item.id} className="relative p-8 rounded-2xl border border-gray-800 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 hover:border-brand-primary/50 transition-all duration-300">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-gray-700/50">{item.id}</span>
                <h3 className="text-xl font-bold mt-4 mb-4 text-brand-secondary">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Minimal Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/3">
               <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-primary mb-2">Partners</p>
               <h2 className="text-3xl font-bold text-gray-900 mb-6">提携・取引先</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">国内外の専門事業者と連携し、お客様に最適なサービスをご提供する体制を構築しています。</p>
               <Link href="/partner" className="inline-flex items-center text-brand-primary font-bold hover:text-gray-900 transition-colors">
                 提携事業者一覧へ
                 <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
               {["寺院 / 納骨堂", "石材店", "船舶事業者", "遺骨関連専門"].map((p, i) => (
                 <div key={i} className="bg-white border text-center border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center font-bold text-gray-700">
                   {p}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Company Minimal */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto rounded-3xl bg-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               
               <div className="text-center mb-10">
                 <h2 className="text-2xl font-bold text-gray-900">会社情報</h2>
                 <p className="text-gray-500 mt-2">神奈川県横浜市戸塚区にて、完全予約制の来店相談を承っております。</p>
               </div>
               
               <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                 <div className="border-b border-gray-200 pb-4">
                   <dt className="text-sm text-gray-500 mb-1">商号</dt>
                   <dd className="font-bold text-gray-900">株式会社 清蓮</dd>
                 </div>
                 <div className="border-b border-gray-200 pb-4">
                   <dt className="text-sm text-gray-500 mb-1">代表取締役</dt>
                   <dd className="font-bold text-gray-900">眞如 りえ</dd>
                 </div>
                 <div className="border-b border-gray-200 pb-4 md:col-span-2">
                   <dt className="text-sm text-gray-500 mb-1">所在地</dt>
                   <dd className="font-bold text-gray-900">〒244-0003 神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F</dd>
                 </div>
               </dl>
               
               <div className="mt-10 text-center">
                 <Link href="/company" className="inline-block px-8 py-3 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-white transition-colors duration-300">
                   会社概要を詳しく見る
                 </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-brand-primary relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#206774] to-[#2F8C9C] z-0"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 mix-blend-overlay"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-overlay"></div>
        
        <div className="container relative z-10 mx-auto px-6 max-w-3xl">
          <p className="text-brand-secondary font-bold tracking-widest text-sm uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            会社について、提携・業務相談など、<br className="hidden md:block"/>
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-brand-primary rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
              Webから問い合わせる
            </Link>
            <a href="tel:045-881-9952" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
