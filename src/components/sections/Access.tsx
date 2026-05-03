import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { COMPANY_INFO } from "@/lib/content";

type Row = { label: string; value: string; href?: string };

const rows: Row[] = [
  { label: "社名", value: COMPANY_INFO.name },
  { label: "所在地", value: `〒${COMPANY_INFO.postalCode} ${COMPANY_INFO.addressLine}` },
  { label: "電話", value: COMPANY_INFO.phone, href: COMPANY_INFO.phoneTelLink },
  { label: "メール", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  { label: "営業時間", value: COMPANY_INFO.hours },
];

export function Access(): JSX.Element {
  return (
    <Section id="access" surface="default" ariaLabel="アクセス">
      <Container>
        <header className="max-w-2xl">
          <p className="font-sans text-xs tracking-[0.3em] text-brand-hover">
            ACCESS
          </p>
          <h2
            className="mt-3 font-serif font-semibold leading-tight tracking-wider text-neutral-text"
            style={{ fontSize: "clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)" }}
          >
            横浜・戸塚からご相談を承ります。
          </h2>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <dl className="divide-y divide-neutral-line">
              {rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <dt className="font-serif text-sm tracking-[0.2em] text-neutral-muted">
                    {row.label}
                  </dt>
                  <dd className="font-sans text-base text-neutral-text">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-brand-hover underline-offset-4 transition-colors hover:text-brand-primary hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={COMPANY_INFO.phoneTelLink}
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-primary px-6 font-sans text-sm font-medium tracking-wide text-white transition-colors duration-300 ease-premium hover:bg-brand-hover"
              >
                電話で相談する
              </a>
              <a
                href={COMPANY_INFO.mapQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand-primary/40 bg-white px-6 font-sans text-sm font-medium tracking-wide text-brand-hover transition-colors duration-300 ease-premium hover:bg-brand-teal-light"
              >
                Google マップで開く
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-line">
            <iframe
              src={COMPANY_INFO.mapEmbedQuery}
              width="100%"
              height="100%"
              className="h-80 w-full lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${COMPANY_INFO.name}の地図`}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
