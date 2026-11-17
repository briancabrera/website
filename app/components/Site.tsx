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
      <Status t={t} />
      <Projects t={t} />
      <HowIThink t={t} />
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

/** A subtle inline link (used for contact links). */
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
        {t.hero.title}
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
/* 3. Current status — availability, read before the proof of work   */
/* ---------------------------------------------------------------- */

function Status({ t }: { t: T }) {
  return (
    <section id="status" className="py-16 sm:py-20">
      <SectionHeading>{t.sections.status}</SectionHeading>
      <p className="text-2xl font-medium leading-snug tracking-tightish text-fg sm:text-3xl">
        {t.status.lead}
      </p>
      <div className="mt-6 space-y-6 text-lg leading-relaxed text-fg-dim sm:text-xl">
        {t.status.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 4. Projects — same typographic material, no cards                 */
/* ---------------------------------------------------------------- */

function Projects({ t }: { t: T }) {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeading>{t.sections.projects}</SectionHeading>

      <div className="space-y-16">
        {t.projects.map((project) => (
          <article key={project.href}>
            <h3 className="text-3xl font-medium leading-tight tracking-tighter2 text-fg sm:text-4xl">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-2"
              >
                <span>{project.title}</span>
                <span
                  aria-hidden
                  className="text-lg text-fg-sub transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-mute sm:text-xl"
                >
                  ↗
                </span>
              </a>
            </h3>
            <p className="mt-3 text-sm text-fg-mute">{project.tag}</p>
            <p className="mt-6 text-lg leading-relaxed text-fg-dim">
              {project.body}
            </p>
            {project.note && (
              <p className="mt-4 text-base leading-relaxed text-fg-mute">
                {project.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 5. How I think                                                    */
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
