import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約｜株式会社 清蓮',
  description: '株式会社 清蓮のコーポレートサイトの利用規約をご案内します。本サイトをご利用の際は、ご一読いただきますようお願いいたします。',
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/img/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-widest drop-shadow-md">利用規約</h1>
          <p className="text-lg text-brand-secondary font-medium tracking-[0.3em]">TERMS OF SERVICE</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white border border-gray-200 p-8 md:p-14 shadow-sm">
           <p className="text-gray-700 leading-relaxed mb-10 text-lg">
             株式会社 清蓮（以下「当社」）は、当社が運営するウェブサイト（以下「本サイト」）の利用条件を以下の通り定めます。本サイトをご利用いただく際は、本規約に同意の上ご利用ください。
           </p>

           <div className="space-y-10">
              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">1</span>
                   適用範囲
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11">
                    本規約は、本サイトを利用するすべての方に適用されます。本サイトを利用した時点で、本規約に同意したものとみなします。
                 </p>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">2</span>
                   禁止事項
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11 mb-2">本サイトの利用にあたり、以下の行為を禁止します。</p>
                 <ul className="list-disc leading-loose text-gray-600 pl-16">
                    <li>法令または公序良俗に反する行為</li>
                    <li>当社または第三者の権利を侵害する行為</li>
                    <li>本サイトの運営を妨害する行為</li>
                    <li>不正アクセスまたはそのおそれのある行為</li>
                    <li>当社の承諾なく本サイトの情報を商業目的で利用する行為</li>
                 </ul>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">3</span>
                   免責事項
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11 mb-4">
                    当社は、本サイトに掲載される情報の正確性・完全性について万全を期しますが、その内容を保証するものではありません。本サイトの利用により生じた損害について、当社は法令上の責任が認められる場合を除き、一切の責任を負いません。
                 </p>
                 <p className="text-gray-600 leading-relaxed pl-11">
                    当社は、本サイトの内容を予告なく変更・中断・終了する場合があります。
                 </p>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">4</span>
                   知的財産権
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11">
                    本サイトに掲載されている文章、画像、デザイン、ロゴその他のコンテンツに関する著作権・商標権その他の知的財産権は、当社または正当な権利者に帰属します。当社の事前の書面による承諾なく、これらを複製・転載・改変・配布することを禁止します。
                 </p>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">5</span>
                   規約の変更
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11">
                    当社は、必要に応じて本規約を変更する場合があります。変更後の規約は、本サイトに掲載した時点で効力を生じるものとします。
                 </p>
              </div>
           </div>

           <div className="mt-12 text-right text-sm text-gray-500 font-medium">
              制定日：2026年2月23日
           </div>
        </div>
      </section>
    </main>
  );
}
