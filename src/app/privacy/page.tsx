import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜株式会社 清蓮',
  description: '株式会社 清蓮のプライバシーポリシー（個人情報保護方針）についてのご案内です。お客様の大切な個人情報を安全に管理いたします。',
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#206774] to-[#2F8C9C] z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-widest drop-shadow-md">プライバシーポリシー</h1>
          <p className="text-lg text-brand-secondary font-medium tracking-[0.3em]">PRIVACY POLICY</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white border border-gray-200 p-8 md:p-14 shadow-sm">
           <p className="text-gray-700 leading-relaxed mb-10 text-lg">
             株式会社 清蓮（以下「当社」）は、お客様の個人情報の適切な取り扱いと保護を重要な責務と考え、以下のとおりプライバシーポリシーを定め、これを遵守します。
           </p>

           <div className="space-y-10">
              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">1</span>
                   個人情報の取得について
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11">
                    当社は、お問い合わせ・ご相談の対応、サービスの提供、業務連携の検討などの目的で、お客様の個人情報を適正な手段により取得します。取得にあたっては、利用目的を明示し、必要な範囲内でのみ情報をお預かりします。
                 </p>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">2</span>
                   利用目的
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11 mb-2">当社は、取得した個人情報を以下の目的で利用します。</p>
                 <ul className="list-disc leading-loose text-gray-600 pl-16">
                    <li>お問い合わせ・ご相談への対応</li>
                    <li>各種サービスの提供・運営</li>
                    <li>提携先・取引先との業務連携に関する連絡</li>
                    <li>当社からのご案内・情報提供</li>
                    <li>サービス改善のための分析</li>
                 </ul>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">3</span>
                   管理体制
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11">
                    当社は、個人情報への不正アクセス、紛失、改ざん、漏洩などを防止するため、適切な安全管理措置を講じます。個人情報の取り扱いに関する社内体制を整備し、従業員への教育・指導を徹底します。
                 </p>
              </div>

              <div>
                 <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                   <span className="w-8 h-8 border border-brand-accent text-brand-accent flex items-center justify-center text-sm font-serif">4</span>
                   第三者提供について
                 </h2>
                 <p className="text-gray-600 leading-relaxed pl-11 mb-2">当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。</p>
                 <ul className="list-disc leading-loose text-gray-600 pl-16">
                    <li>お客様ご本人の同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>人の生命・身体・財産の保護のために必要であり、本人の同意を得ることが困難な場合</li>
                 </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-8 ml-11">
                 <h2 className="text-lg md:text-xl font-serif font-bold text-gray-900 mb-4 tracking-wide">5. お問い合わせ窓口</h2>
                 <p className="text-gray-600 leading-relaxed mb-4">本ポリシーに関するお問い合わせは、下記までご連絡ください。</p>
                 <p className="text-gray-800 font-bold leading-relaxed">
                    株式会社 清蓮<br/>
                    〒244-0003 神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F<br/>
                    TEL: 045-881-9952（代表）
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
