'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/img/logo.webp"
              alt="株式会社清蓮ロゴ"
              width="48"
              height="48"
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
            <span
              className={`font-bold tracking-widest text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-gray-800'
              }`}
            >
              株式会社 清蓮
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'TOP', href: '/' },
            { label: '事業紹介', href: '/business' },
            { label: '強み', href: '/strength' },
            { label: '提携', href: '/partner' },
            { label: '会社情報', href: '/company' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-primary ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-brand-primary text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#257582] hover:shadow-lg hover:-translate-y-0.5"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {[
              { label: 'TOP', href: '/' },
              { label: '事業紹介', href: '/business' },
              { label: '強み', href: '/strength' },
              { label: '提携', href: '/partner' },
              { label: '会社情報', href: '/company' },
            ].map((item) => (
               <Link
                 key={item.label}
                 href={item.href}
                 className="text-base font-medium text-gray-800 py-2 border-b border-gray-50"
                 onClick={() => setIsMenuOpen(false)}
               >
                 {item.label}
               </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-brand-primary text-white text-center px-6 py-4 rounded-lg font-bold shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
