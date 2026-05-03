import Link from "next/link";
import { Container } from "@/components/common/Container";
import {
  COMPANY_INFO,
  NAV_ITEMS,
  SERVICES,
  SERVICE_CATEGORIES,
} from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white">
      <Container as="div" className="py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl font-semibold tracking-[0.25em]">
              清蓮
            </p>
            <p className="mt-2 font-sans text-xs tracking-[0.3em] text-white/60">
              SEIREN INC.
            </p>
            <address className="mt-6 not-italic font-sans text-sm leading-loose text-white/85">
              〒{COMPANY_INFO.postalCode}
              <br />
              {COMPANY_INFO.addressLine}
              <br />
              <a
                href={COMPANY_INFO.phoneTelLink}
                className="text-white underline-offset-4 hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
              {" / "}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-white underline-offset-4 hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </address>
            <p className="mt-3 font-sans text-sm text-white/70">
              営業時間 {COMPANY_INFO.hours}
            </p>
          </div>

          <nav
            aria-label="フッターナビゲーション"
            className="lg:col-span-3"
          >
            <p className="font-serif text-xs tracking-[0.3em] text-white/60">
              MENU
            </p>
            <ul className="mt-5 space-y-3 font-sans text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="font-serif text-xs tracking-[0.3em] text-white/60">
              SERVICES
            </p>
            <div className="mt-5 space-y-4 font-sans text-sm">
              {SERVICE_CATEGORIES.map((category) => (
                <div key={category.id}>
                  <p className="text-white/60">{category.label}</p>
                  <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1.5 text-white/85">
                    {SERVICES.filter((s) => s.category === category.id).map(
                      (service) => (
                        <li key={service.id}>{service.name}</li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 font-sans text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>&copy; {year} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>{COMPANY_INFO.nameEn}</p>
        </div>
      </Container>
    </footer>
  );
}
