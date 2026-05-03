import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { ABOUT_PILLARS } from "@/lib/content";

export function About() {
  return (
    <Section id="about" surface="default" ariaLabel="私たちについて">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-surface">
              <Image
                src="/assets/img/about-office.webp"
                alt="株式会社清蓮のオフィス"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs tracking-[0.3em] text-brand-hover">
              ABOUT US
            </p>
            <h2
              className="mt-3 font-serif font-semibold leading-tight tracking-wider text-neutral-text"
              style={{ fontSize: "clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)" }}
            >
              供養という人生の節目に、
              <br />
              中立で誠実な伴走者であるために。
            </h2>
            <p className="mt-6 font-sans leading-loose text-neutral-text/85">
              株式会社清蓮は、お墓や供養の選択を「業者の都合」ではなく「ご家族の想い」から組み立て直すために生まれました。
              特定の寺院・霊園・石材店に専属しないからこそ、最適な選択肢を中立な立場でお示しします。
            </p>

            <ul className="mt-10 space-y-6">
              {ABOUT_PILLARS.map((pillar, index) => (
                <li
                  key={pillar.title}
                  className="flex gap-5 rounded-xl border border-neutral-line bg-neutral-surface/50 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary font-serif text-sm font-semibold text-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold tracking-wider text-neutral-text">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-text/80">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
