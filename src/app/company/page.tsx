import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: '会社情報｜株式会社 清蓮',
  description: '株式会社 清蓮の会社概要、代表挨拶、アクセス情報などをご案内します。横浜市戸塚区を拠点に全国の終活・供養をサポートしています。',
};

export default function Company() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-24">
      <Breadcrumbs paths={[{ label: '会社情報', href: '/company' }]} />
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#206774] to-[#2F8C9C] z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-widest drop-shadow-md">会社情報</h1>
          <p className="text-lg text-brand-secondary font-medium tracking-[0.3em]">COMPANY</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white p-8 md:p-16 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 border-b border-gray-900 inline-block pb-2 tracking-wide">会社概要</h2>
          
          <dl className="divide-y divide-gray-100">
            <div className="py-6 flex flex-col sm:flex-row">
              <dt className="w-full sm:w-1/3 text-gray-500 font-medium mb-2 sm:mb-0">商号</dt>
              <dd className="w-full sm:w-2/3 text-gray-900 font-bold">株式会社 清蓮</dd>
            </div>
            <div className="py-6 flex flex-col sm:flex-row">
              <dt className="w-full sm:w-1/3 text-gray-500 font-medium mb-2 sm:mb-0">設立</dt>
              <dd className="w-full sm:w-2/3 text-gray-900 font-bold">2026年（令和8年）</dd>
            </div>
            <div className="py-6 flex flex-col sm:flex-row">
              <dt className="w-full sm:w-1/3 text-gray-500 font-medium mb-2 sm:mb-0">代表取締役</dt>
              <dd className="w-full sm:w-2/3 text-gray-900 font-bold">眞如 りえ</dd>
            </div>
            <div className="py-6 flex flex-col sm:flex-row">
              <dt className="w-full sm:w-1/3 text-gray-500 font-medium mb-2 sm:mb-0">所在地</dt>
              <dd className="w-full sm:w-2/3 text-gray-900 text-base leading-relaxed">
                〒244-0003<br/>
                神奈川県横浜市戸塚区戸塚町4170 高橋ビル1F
                <a 
                  href="https://maps.google.com/?q=神奈川県横浜市戸塚区戸塚町4170+高橋ビル1F" 
                  target="_blank" rel="noopener noreferrer" 
                  className="block mt-3 text-brand-primary text-sm font-bold hover:underline"
                >
                  Google Mapで見る →
                </a>
              </dd>
            </div>
            <div className="py-6 flex flex-col sm:flex-row">
              <dt className="w-full sm:w-1/3 text-gray-500 font-medium mb-2 sm:mb-0">電話番号</dt>
              <dd className="w-full sm:w-2/3 text-gray-900 font-bold">045-881-9952</dd>
            </div>
            <div className="py-6 flex flex-col sm:flex-row">
              <dt className="w-full sm:w-1/3 text-gray-500 font-medium mb-2 sm:mb-0">事業内容</dt>
              <dd className="w-full sm:w-2/3 text-gray-900 leading-relaxed text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>海洋散骨事業の企画・運営</li>
                  <li>遺骨の特殊清掃（洗骨・粉骨等）の手配</li>
                  <li>墓じまい・改葬に関する手続き代行サポート</li>
                  <li>終活コンシェルジュサービスの提供</li>
                  <li>手元供養品の企画・販売</li>
                  <li>提携石材店・寺院の紹介</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Access */}
      <section className="container mx-auto px-6 lg:px-12 mt-24 max-w-4xl">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-wide">アクセス・来店について</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 p-2 bg-white relative h-[300px] md:h-full min-h-[300px]">
               <Image 
                 src="/assets/img/about-office.jpg" 
                 alt="清潔感のある来店スペース" 
                 fill
                 className="object-cover grayscale-[20%]" 
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
            <div>
               <h3 className="text-2xl font-serif font-bold text-brand-accent mb-4">完全予約制</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 お客様のご事情をゆっくりお伺いするため、ご来店は「完全予約制」とさせていただいております。<br/>
                 お電話、またはお問い合わせフォームよりご希望の日時をお伝えください。
               </p>
               <div className="bg-gray-50 p-6 border border-gray-200">
                 <p className="font-bold text-gray-900 mb-2">営業時間</p>
                 <p className="text-gray-800 text-lg">9:00 〜 18:00（土日祝も対応可）</p>
                 <p className="text-sm text-gray-500 mt-2">※年末年始を除く</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
