import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'お問い合わせ｜株式会社 清蓮',
  description: '株式会社 清蓮への各種ご相談・お問い合わせはこちらから。海洋散骨、遺骨サービス、お墓じまいなど、お気軽にご連絡ください。',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-24">
      <Breadcrumbs paths={[{ label: 'お問い合わせ', href: '/contact' }]} />
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#206774] to-[#2F8C9C] z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-widest drop-shadow-md">お問い合わせ</h1>
          <p className="text-lg text-brand-secondary font-medium tracking-[0.3em]">CONTACT</p>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 mt-16 max-w-4xl">
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
           
           {/* Phone Contact */}
           <div className="bg-surface-dark text-white p-10 md:p-12 text-center">
              <p className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-2">お急ぎの方・お電話でのご相談</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 tracking-wide">お電話でのお問い合わせ</h2>
              <a href="tel:045-881-9952" className="inline-flex items-center gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:text-brand-accent transition-colors duration-300 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                045-881-9952
              </a>
              <p className="text-gray-400 text-sm">受付時間：毎日 9:00 〜 18:00（年末年始を除く）</p>
           </div>

           {/* Web Form */}
           <div className="p-10 md:p-14">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 border-b-2 border-brand-accent inline-block pb-2 tracking-wide">Webからのお問い合わせ</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                来店相談のご予約、サービスに関するご質問、事業者様からのご提案など、以下のフォームよりお気軽にお送りください。<br/>
                通常、2〜3営業日以内に担当者よりご返信いたします。
              </p>

              {/* Note: This is a static UI. Form action should be handled properly in real app */}
              <form action="#" method="POST" className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-brand-accent text-xs ml-1">必須</span></label>
                  <input type="text" id="name" name="name" required className="block w-full rounded-none border-gray-300 bg-gray-50 border p-4 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow" placeholder="山田 太郎" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-brand-accent text-xs ml-1">必須</span></label>
                    <input type="email" id="email" name="email" required className="block w-full rounded-none border-gray-300 bg-gray-50 border p-4 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow" placeholder="example@seiren-inc.co.jp" />
                  </div>
                  <div>
                    <label htmlFor="tel" className="block text-sm font-bold text-gray-700 mb-2">電話番号</label>
                    <input type="tel" id="tel" name="tel" className="block w-full rounded-none border-gray-300 bg-gray-50 border p-4 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow" placeholder="090-1234-5678" />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ種別</label>
                  <select id="category" name="category" className="block w-full rounded-none border-gray-300 bg-gray-50 border p-4 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow appearance-none">
                     <option value="相談予約">来店相談・オンライン相談のご予約</option>
                     <option value="サービスについて">各サービスについてのご質問</option>
                     <option value="法人の方へ">事業者様・メディア等からのご連絡</option>
                     <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ内容 <span className="text-brand-accent text-xs ml-1">必須</span></label>
                  <textarea id="message" name="message" rows={6} required className="block w-full rounded-none border-gray-300 bg-gray-50 border p-4 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow resize-y" placeholder="ご相談内容やご希望の日時などを入力してください。"></textarea>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200 text-sm text-gray-600 mb-8">
                  送信ボタンを押す前に、当社の<Link href="/privacy" className="text-gray-900 font-bold hover:underline">プライバシーポリシー</Link>をご確認ください。内容にご同意いただいた上で送信をお願いいたします。
                </div>

                <div className="text-center pt-4">
                  <button type="submit" className="inline-block px-12 py-4 bg-gray-900 text-white font-bold rounded-none shadow-md hover:shadow-lg hover:bg-gray-800 transition-all hover:-translate-y-1 w-full md:w-auto text-lg tracking-widest">
                    確認画面へ進む
                  </button>
                  <p className="text-xs text-gray-400 mt-4">※本サイトは静的フォームデザインです。システム連携は別途行われます。</p>
                </div>
              </form>
           </div>
        </div>
      </section>
    </main>
  );
}
