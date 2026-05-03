import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { COMPANY_INFO, NAV_ITEMS } from "@/lib/content";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] w-full border-b border-neutral-line bg-white/85 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${COMPANY_INFO.name} ホーム`}
          className="flex items-center gap-3"
        >
          <Image
            src="/assets/img/logo.webp"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-serif text-lg font-semibold tracking-[0.25em] text-neutral-text">
            清蓮
          </span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-neutral-text transition-colors hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={COMPANY_INFO.phoneTelLink}
          aria-label={`電話で相談する ${COMPANY_INFO.phone}`}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-primary px-5 text-sm font-medium tracking-wide text-white transition-colors duration-300 ease-premium hover:bg-brand-hover"
        >
          <PhoneIcon />
          <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
          <span className="sm:hidden">無料相談</span>
        </a>
      </Container>
    </header>
  );
}
