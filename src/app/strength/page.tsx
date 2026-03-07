import Link from 'next/link';

export default function Strength() {
  const strengths = [
    {
      id: "01",
      title: "相談から実行まで、一貫した実務対応力",
      desc: "ご相談にお答えするだけでなく、行政手続きのアドバイスから現場の段取り、当日の同行まで、必要な実務をワンストップでサポートします。「どこに頼めばいいかわからない」というお客様の負担をゼロに近づけます。",
    },
    {
      id: "02",
      title: "国内外のプロフェッショナルとの連携ネットワーク",
      desc: "優良な寺院や霊園、確かな技術を持つ石材店、安全基準をクリアした船舶事業者、専門の粉骨・洗浄業者など、独自のネットワークを構築。お客様のご希望に合わせて、最適なパートナーを手配いたします。",
    },
    {
      id: "03",
      title: "正解を押し付けない、完全予約制の来店相談",
      desc: "落ち着いた環境でプライバシーに配慮しながらお話を伺うため、完全予約制の相談スペースを設けています。マニュアル通りの提案や特定の宗教・宗派の押し付けは決していたしません。",
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/assets/img/pattern.svg')] opacity-10"></div>
         <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">清蓮の強み</h1>
            <p className="text-lg text-brand-secondary font-medium tracking-wide">STRENGTH</p>
         </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl text-center">
        <p className="text-xl text-gray-800 leading-relaxed font-medium mb-12">
          インターネットには情報が溢れ、<br className="hidden md:block"/>
          何が本当に自分や家族に合っているのか判断するのは困難です。<br/>
          だからこそ清蓮は、「情報を提供する」だけでなく<br className="hidden md:block"/>
          「最適な選択肢を共に考え、実務まで伴走する」ことをお約束します。
        </p>
      </section>

      {/* Strength List */}
      <section className="container mx-auto px-6 lg:px-12 mt-12 max-w-5xl">
        <div className="space-y-12">
          {strengths.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-6 -right-6 text-9xl font-black text-gray-50 group-hover:text-brand-secondary/50 transition-colors duration-500 select-none z-0">
                {item.id}
              </div>
              <div className="relative z-10 w-full md:w-auto flex-shrink-0">
                 <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-md">
                   {item.id}
                 </div>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                <div className="w-12 h-1 bg-brand-primary mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Layer */}
      <section className="container mx-auto px-6 lg:px-12 mt-24 max-w-4xl">
         <div className="bg-gray-900 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">些細なことでも、まずはご相談ください</h2>
            <p className="text-gray-300 mb-8 relative z-10 text-lg">
               「まだ具体的に決まっていない」「何からはじめていいかわからない」という段階から、よき相談相手として伴走いたします。
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#206774] transition-all hover:-translate-y-1">
                 Webから相談する
               </Link>
               <a href="tel:045-881-9952" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                 お電話：045-881-9952
               </a>
            </div>
         </div>
      </section>
    </main>
  );
}
