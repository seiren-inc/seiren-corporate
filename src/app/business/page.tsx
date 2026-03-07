import Link from 'next/link';

export default function Business() {
  const businesses = [
    {
      id: "ocean",
      title: "海洋散骨",
      subtitle: "自然に還る、心安らぐお見送り",
      desc: "海を愛した方や、自然に囲まれて眠りたいと願う方のために。国内・海外を含め、豊富な実績と安全基準をクリアしたチャーター船での散骨をトータルサポートいたします。",
      img: "/assets/img/hero-sea.jpg"
    },
    {
      id: "care",
      title: "遺骨サービス",
      subtitle: "たいせつなお骨のケア・メンテナンス",
      desc: "長年お墓に眠っていたお骨の洗浄（洗骨）や、コンパクトにするための粉骨など、次世代へ繋ぐための遺骨メンテナンスを専門設備を持つパートナーと実施します。",
      img: "/assets/img/hero-sea.jpg" // 仮
    },
    {
      id: "grave",
      title: "お墓じまい・改葬",
      subtitle: "負担のない、最適なお引っ越し",
      desc: "遠方のお墓の管理が難しい、継承者がいないなどのお悩みに。行政手続きのアドバイスから石材店の手配など、「お墓のお引っ越し」をスムーズに進めます。",
      img: "/assets/img/hero-sea.jpg" // 仮
    },
    {
      id: "concierge",
      title: "終活コンシェルジュ",
      subtitle: "あなたの人生の「これから」を整理する",
      desc: "何から手をつければいいかわからない終活。専任のコンシェルジュがご要望を丁寧にヒアリングし、財産把握から葬儀・供養の希望まで、オーダーメイドでプランニングします。",
      img: "/assets/img/about-office.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/img/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider">事業紹介</h1>
          <p className="text-lg text-brand-secondary font-medium tracking-wide">BUSINESS</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 mt-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-lg leading-relaxed">
            清蓮では、ご葬儀後の供養から生前の終活プランニングまで、<br className="hidden md:block"/>
            一貫してお客様のサポートを行える複数事業を展開しています。<br/>
            複雑な手続きも、専門家が連携して窓口一つで対応いたします。
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {businesses.map((biz, idx) => (
            <div key={biz.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} group`}>
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg relative">
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={biz.img} 
                  alt={biz.title} 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <p className="text-brand-primary font-bold text-sm tracking-widest uppercase">{`Service 0${idx + 1}`}</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{biz.title}</h2>
                <h3 className="text-xl text-gray-600 font-medium">{biz.subtitle}</h3>
                <div className="w-12 h-1 bg-brand-primary"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {biz.desc}
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex px-8 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold rounded-full transition-colors duration-300">
                    この事業について相談する
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Layer */}
      <section className="container mx-auto px-6 lg:px-12 mt-32">
        <div className="bg-white rounded-3xl p-12 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-secondary rounded-full opacity-50 blur-3xl"></div>
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative z-10">どのサービスが合うか迷われている方へ</h2>
           <p className="text-gray-600 mb-8 max-w-xl mx-auto relative z-10">
             清蓮の無料カウンセリングでは、状況をお伺いし、最適な選択肢をご提案いたします。無理な勧誘は一切ございません。
           </p>
           <Link href="/contact" className="relative z-10 inline-block px-10 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all hover:-translate-y-1">
             無料相談を予約する
           </Link>
        </div>
      </section>
    </main>
  );
}
