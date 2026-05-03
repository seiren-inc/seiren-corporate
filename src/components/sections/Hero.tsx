import Image from "next/image";
import { Container } from "@/components/common/Container";
import { COMPANY_INFO } from "@/lib/content";

export function Hero() {
  return (
    <section
      aria-label="ヒーロー"
      className="relative flex min-h-[calc(100vh-var(--header-height))] items-center overflow-hidden"
    >
      <Image
        src="/assets/img/hero-sea.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/40 to-white/75"
      />

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <p className="mb-6 inline-block rounded-full bg-brand-teal-light px-4 py-1.5 font-sans text-xs tracking-[0.2em] text-brand-hover">
            お墓・供養トータルサポート
          </p>
          <h1
            className="font-serif font-semibold leading-tight tracking-wider text-neutral-text"
            style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3.75rem)" }}
          >
            お墓と供養のすべてを、
            <br />
            中立な専門家とともに。
          </h1>
          <p
            className="mt-8 max-w-xl font-sans text-neutral-text/85"
            style={{ fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)" }}
          >
            お墓探しから永代供養・樹木葬・墓じまい・海洋散骨まで。
            <br className="hidden sm:inline" />
            横浜・戸塚を拠点に、特定の寺院・霊園に偏らない中立な立場でご相談を承ります。
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={COMPANY_INFO.phoneTelLink}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-primary px-8 font-sans text-base font-medium tracking-wide text-white shadow-lg shadow-brand-primary/15 transition-colors duration-300 ease-premium hover:bg-brand-hover"
            >
              無料相談する（お電話）
            </a>
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-brand-primary/40 bg-white/80 px-8 font-sans text-base font-medium tracking-wide text-brand-hover backdrop-blur transition-colors duration-300 ease-premium hover:bg-white"
            >
              サービス一覧を見る
            </a>
          </div>

          <p className="mt-6 font-sans text-sm text-neutral-muted">
            営業時間 {COMPANY_INFO.hours}・初回相談無料
          </p>
        </div>
      </Container>
    </section>
  );
}
