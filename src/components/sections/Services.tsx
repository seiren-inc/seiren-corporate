import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import {
  SERVICES,
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "@/lib/content";

const categoryAccent: Record<
  ServiceCategory,
  { dot: string; label: string; ring: string }
> = {
  memorial: {
    dot: "bg-brand-primary",
    label: "text-brand-hover",
    ring: "ring-brand-teal-light",
  },
  scattering: {
    dot: "bg-brand-secondary",
    label: "text-brand-secondary",
    ring: "ring-brand-lime-light",
  },
  support: {
    dot: "bg-brand-accent",
    label: "text-brand-accent",
    ring: "ring-brand-pink-light",
  },
};

export function Services(): JSX.Element {
  return (
    <Section id="services" surface="muted" ariaLabel="サービス">
      <Container>
        <header className="max-w-2xl">
          <p className="font-sans text-xs tracking-[0.3em] text-brand-hover">
            SERVICES
          </p>
          <h2
            className="mt-3 font-serif font-semibold leading-tight tracking-wider text-neutral-text"
            style={{ fontSize: "clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)" }}
          >
            供養のすべてを、ひとつの窓口で。
          </h2>
          <p className="mt-5 font-sans leading-loose text-neutral-text/80">
            お墓に関するご相談から散骨・手元供養まで、ご家族のご事情に合わせて12の専門サービスをご用意しています。
            まずはご相談だけでも構いません。
          </p>
        </header>

        <div className="mt-14 space-y-16">
          {SERVICE_CATEGORIES.map((category) => {
            const items = SERVICES.filter((s) => s.category === category.id);
            const accent = categoryAccent[category.id];
            return (
              <div key={category.id}>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${accent.dot}`}
                  />
                  <h3
                    className={`font-serif text-lg font-semibold tracking-[0.2em] ${accent.label}`}
                  >
                    {category.label}
                  </h3>
                </div>

                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, idx) => (
                    <li
                      key={service.id}
                      className={`group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ${accent.ring} transition-all duration-300 ease-premium hover:shadow-lg hover:shadow-brand-primary/5`}
                    >
                      <span
                        aria-hidden="true"
                        className="font-serif text-xs tracking-[0.3em] text-neutral-muted"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-3 font-serif text-lg font-semibold tracking-wider text-neutral-text">
                        {service.name}
                      </h4>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-text/80">
                        {service.shortDescription}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
