"use client";

import { useEffect, useState, type ReactNode } from "react";
import { contact, content, type Locale } from "@/app/lib/content";

/* ---------------------------------------------------------------- */
/* Root                                                              */
/* ---------------------------------------------------------------- */

export default function Site() {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("locale") as Locale | null)
        : null;

    if (stored === "en" || stored === "es") {
      setLocale(stored);
    } else if (
      typeof navigator !== "undefined" &&
      navigator.language.toLowerCase().startsWith("es")
    ) {
      setLocale("es");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale, mounted]);

  const t = content[locale];

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-2xl px-6 sm:px-8">
      <TopBar t={t} locale={locale} onChange={setLocale} />
      <Hero t={t} />
      <About t={t} />
      <CurrentFocus t={t} />
      <HowIThink t={t} />
      <OtherOutput t={t} />
      <Footer t={t} />
    </main>
  );
}

type T = (typeof content)[Locale];

/* ---------------------------------------------------------------- */
/* Shared primitives                                                 */
/* ---------------------------------------------------------------- */

/** A single quiet section heading that sits above its content. */
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 text-xs uppercase tracking-wideish text-fg-mute">
      {children}
    </h2>
  );
}

/** A subtle inline link (used for contact + Tracevault). */
function QuietLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group inline-flex items-baseline gap-1.5 text-fg"
    >
      <span className="border-b border-fg-sub pb-[3px] transition-colors group-hover:border-fg-dim">
        {children}
      </span>
      <span
        aria-hidden
        className="translate-y-[1px] text-fg-sub transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-mute"
      >
        ↗
      </span>
    </a>
  );
}

/* ---------------------------------------------------------------- */
/* Top bar — name left, language toggle right                        */
/* ---------------------------------------------------------------- */

function TopBar({
  t,
  locale,
  onChange,
}: {
  t: T;
  locale: Locale;
  onChange: (l: Locale) => void;
}) {
  return (
    <header className="flex items-center justify-between gap-4 py-10 sm:py-12">
      <a
        href="#top"
        className="text-sm tracking-tightish text-fg-dim transition-colors hover:text-fg"
      >
        Brian Cabrera
      </a>

      <LangToggle
        locale={locale}
        onChange={onChange}
        ariaLabel={t.toggle.aria}
      />
    </header>
  );
}

function LangToggle({
  locale,
  onChange,
  ariaLabel,
}: {
  locale: Locale;
  onChange: (l: Locale) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center gap-1 text-sm tracking-tightish"
    >
      <LangButton active={locale === "en"} onClick={() => onChange("en")}>
        EN
      </LangButton>
      <span aria-hidden className="text-fg-sub">
        ·
      </span>
      <LangButton active={locale === "es"} onClick={() => onChange("es")}>
        ES
      </LangButton>
    </div>
  );
}

function LangButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "px-1 transition-colors " +
        (active ? "text-fg" : "text-fg-mute hover:text-fg-dim")
      }
    >
      {children}
    </button>
  );
}

/* ---------------------------------------------------------------- */
/* 1. Hero                                                           */
/* ---------------------------------------------------------------- */

function Hero({ t }: { t: T }) {
  return (
    <section id="top" className="pt-16 pb-28 sm:pt-24 sm:pb-36">
      <p className="text-sm text-fg-mute">{t.hero.eyebrow}</p>

      <h1 className="mt-10 text-5xl font-medium leading-[1.04] tracking-tighter3 text-fg sm:text-6xl md:text-[72px]">
        {t.hero.titleLead} Biolink{t.hero.titleEnd}
      </h1>

      <p className="mt-10 text-lg leading-relaxed text-fg-dim sm:text-xl">
        {t.hero.subtitle}
      </p>

      <nav
        aria-label="Primary contact"
        className="mt-14 flex flex-wrap items-baseline gap-x-8 gap-y-3 text-base"
      >
        <QuietLink href={contact.linkedin}>{t.hero.links.linkedin}</QuietLink>
        <QuietLink href={contact.github}>{t.hero.links.github}</QuietLink>
        <QuietLink href={`mailto:${contact.email}`}>
          {t.hero.links.email}
        </QuietLink>
      </nav>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 2. About                                                          */
/* ---------------------------------------------------------------- */

function About({ t }: { t: T }) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading>{t.sections.about}</SectionHeading>
      <div className="space-y-6 text-lg leading-relaxed text-fg-dim sm:text-xl">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 3. Current focus — Biolink (no card, no italic, same material)    */
/* ---------------------------------------------------------------- */

function CurrentFocus({ t }: { t: T }) {
  return (
    <section id="focus" className="py-16 sm:py-20">
      <SectionHeading>{t.sections.focus}</SectionHeading>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-4xl font-medium leading-none tracking-tighter2 text-fg sm:text-5xl">
          <a
            href={contact.biolink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-2"
          >
            <span>Biolink</span>
            <span
              aria-hidden
              className="text-xl text-fg-sub transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-mute sm:text-2xl"
            >
              ↗
            </span>
          </a>
        </h3>
        <span className="text-sm text-fg-mute">{t.focus.inProgress}</span>
      </div>

      <p className="mt-6 text-xl leading-snug text-fg sm:text-2xl">
        {t.focus.tagline}
      </p>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-fg-dim">
        {t.focus.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <dl className="mt-12 space-y-2 text-sm">
        {t.focus.meta.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[120px_1fr] gap-6"
          >
            <dt className="text-fg-mute">{row.label}</dt>
            <dd className="text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 4. How I think                                                    */
/* ---------------------------------------------------------------- */

function HowIThink({ t }: { t: T }) {
  return (
    <section id="how-i-think" className="py-16 sm:py-20">
      <SectionHeading>{t.sections.how}</SectionHeading>
      <div className="space-y-10">
        {t.principles.map((p) => (
          <div key={p.title}>
            <h3 className="text-xl font-medium leading-snug tracking-tightish text-fg sm:text-2xl">
              {p.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-fg-dim sm:text-lg">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 5. Other output — Tracevault mentioned inline                     */
/* ---------------------------------------------------------------- */

function OtherOutput({ t }: { t: T }) {
  return (
    <section id="other" className="py-16 sm:py-20">
      <SectionHeading>{t.sections.other}</SectionHeading>
      <div className="space-y-6 text-lg leading-relaxed text-fg-dim sm:text-xl">
        {t.other.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>
          <QuietLink href={contact.tracevault}>Tracevault</QuietLink>
          <span className="text-fg-dim">{t.other.tracevaultAfter}</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 6. Footer                                                         */
/* ---------------------------------------------------------------- */

function Footer({ t }: { t: T }) {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="mt-16 border-t border-line py-16 sm:mt-20 sm:py-20">
      <p className="text-2xl font-medium leading-tight tracking-tightish text-fg sm:text-3xl">
        {t.footer.headline}
      </p>
      <p className="mt-4 text-base text-fg-dim sm:text-lg">{t.footer.sub}</p>

      <div className="mt-10 space-y-3 text-base">
        <div>
          <a
            href={`mailto:${contact.email}`}
            className="text-fg underline decoration-fg-sub underline-offset-[5px] transition-colors hover:decoration-fg-dim"
          >
            {contact.email}
          </a>
        </div>
        <nav
          aria-label="Elsewhere"
          className="flex flex-wrap items-baseline gap-x-8 gap-y-3"
        >
          <QuietLink href={contact.linkedin}>{t.hero.links.linkedin}</QuietLink>
          <QuietLink href={contact.github}>{t.hero.links.github}</QuietLink>
        </nav>
      </div>

      <div className="mt-16 flex items-center justify-between text-sm text-fg-mute">
        <span>© {year} · Brian Cabrera</span>
        <span>{t.footer.signature}</span>
      </div>
    </footer>
  );
}
