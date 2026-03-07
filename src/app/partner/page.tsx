import Link from 'next/link';

export default function Partner() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#206774] to-[#2F8C9C] z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">提携・取引先</h1>
          <p className="text-lg text-brand-secondary font-medium tracking-wide">PARTNERS</p>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="mb-12 text-center text-gray-700 text-lg leading-relaxed">
          <p>
            清蓮では、お客様に安心してサービスをご利用いただけるよう、<br className="hidden md:block"/>
            厳格な基準を満たした各分野の専門事業者等とパートナーシップを結んでいます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                 <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">寺院 / 納骨堂 / 霊園</h3>
              <p className="text-gray-600 leading-relaxed text-sm">良心的な対応と明瞭な費用体系を持つ提携先のみをご案内。宗派を問わずご相談いただけます。</p>
           </div>
           
           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                 <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">石材店</h3>
              <p className="text-gray-600 leading-relaxed text-sm">確かな技術力と丁寧な施工実績を持つ石材店。建墓から墓じまい作業まで、ご安心してお任せください。</p>
           </div>
           
           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                 <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">船舶事業者</h3>
              <p className="text-gray-600 leading-relaxed text-sm">海洋散骨を専門とし、安全運航とマニュアルを遵守する優良事業者。国内・海外の海域をカバーしています。</p>
           </div>
           
           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                 <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">遺骨メンテナンス・手元供養</h3>
              <p className="text-gray-600 leading-relaxed text-sm">専用の洗浄・粉骨設備を持つ専門業者、および手元供養品やメモリアルダイヤモンドの製造メーカー等。</p>
           </div>
        </div>

        {/* Info */}
        <div className="bg-brand-secondary rounded-2xl p-8 mt-16 border border-brand-primary/20 text-center">
           <p className="text-brand-primary font-bold mb-2">提携をご希望の事業者様へ</p>
           <p className="text-sm text-gray-700 leading-relaxed mb-6">
             当社のお客様に対し、誠実かつ透明性の高いサービスをご提供いただけるパートナー様を随時募集しております。<br/>
             ご提案は下記のお問い合わせフォームよりお寄せください。
           </p>
           <Link href="/contact" className="inline-block px-8 py-3 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-white transition-colors duration-300">
             事業者様向けのお問い合わせ
           </Link>
        </div>
      </section>
    </main>
  );
}
