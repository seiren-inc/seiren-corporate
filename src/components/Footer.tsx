import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-gray-300 py-16 lg:py-24 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white text-2xl font-serif font-bold tracking-widest drop-shadow-sm">株式会社 清蓮</h3>
            <p className="leading-relaxed text-gray-400">
              〒244-0003<br />
              神奈川県横浜市戸塚区戸塚町4170<br />
              高橋ビル1F
            </p>
            <div className="pt-4">
              <a 
                href="tel:045-881-9952" 
                className="inline-flex items-center gap-2 text-xl font-medium text-white hover:text-white/70 transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                045-881-9952
              </a>
              <p className="text-sm text-gray-500 mt-2">受付時間：毎日 9:00〜18:00</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold tracking-widest text-sm uppercase opacity-90">事業領域</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/business" className="hover:text-white transition-colors duration-200">事業紹介</Link>
              <Link href="/strength" className="hover:text-white transition-colors duration-200">清蓮の強み</Link>
              <Link href="/partner" className="hover:text-white transition-colors duration-200">提携・取引先</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold tracking-widest text-sm uppercase opacity-90">企業情報</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-white transition-colors duration-200">TOP</Link>
              <Link href="/company" className="hover:text-white transition-colors duration-200">会社情報</Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-serif font-bold tracking-widest text-sm uppercase opacity-90">サポート</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/contact" className="hover:text-white transition-colors duration-200">お問い合わせ</Link>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">プライバシーポリシー</Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">利用規約</Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-serif tracking-widest">
            &copy; 2026 株式会社 清蓮 All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {/* SNSアイコン等があればここに追加 */}
          </div>
        </div>
      </div>
    </footer>
  );
}
