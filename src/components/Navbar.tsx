import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Dictionary } from "../i18n/translations";
import { MenuIcon, XIcon } from "./icons";

const NAV_ITEMS: { key: keyof Dictionary["nav"]; href: string }[] = [
  { key: "home", href: "#accueil" },
  { key: "about", href: "#apropos" },
  { key: "academics", href: "#academique" },
  { key: "schoolLife", href: "#vie-scolaire" },
  { key: "gallery", href: "#galerie" },
  { key: "news", href: "#actualites" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onGalleryPage = window.location.pathname.replace(/\/+$/, "") === "/gallery";
  const homeHref = (href: string) => (onGalleryPage ? `/${href}` : href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream-50/95 shadow-soft backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={homeHref("#accueil")} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={`flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-soft ring-2 transition-colors ${
              scrolled || open ? "ring-navy-100" : "ring-white/50"
            }`}
          >
            <img src="/logo.jpg" alt="Logo Groupe Scolaire Bilingue Espérance Divine" className="size-full object-cover" />
          </span>
          <span className="min-w-0 leading-tight">
            <span
              className={`block truncate font-heading text-base font-semibold sm:text-lg ${
                scrolled || open ? "text-navy-900" : "text-white"
              }`}
            >
              Espérance Divine
            </span>
            <span
              className={`hidden text-[11px] uppercase tracking-wide sm:block ${
                scrolled || open ? "text-navy-500" : "text-white/75"
              }`}
            >
              Groupe Scolaire Bilingue
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={homeHref(item.href)}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                scrolled ? "text-navy-800" : "text-white/90"
              }`}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch scrolled={scrolled} lang={lang} setLang={setLang} />
          <a
            href={homeHref("#contact")}
            className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-soft transition-all hover:bg-gold-300 hover:shadow-lift"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch scrolled={scrolled || open} lang={lang} setLang={setLang} compact />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex size-10 items-center justify-center rounded-full transition-colors ${
              scrolled || open ? "bg-navy-100 text-navy-900" : "bg-white/15 text-white"
            }`}
          >
            {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden ${open ? "max-h-[32rem]" : "max-h-0"} overflow-hidden bg-cream-50 shadow-soft transition-all duration-300`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4 pt-2 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={homeHref(item.href)}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50 hover:text-navy-950"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <a
            href={homeHref("#contact")}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gold-400 px-5 py-3 text-center text-base font-semibold text-navy-950 shadow-soft transition-colors hover:bg-gold-300"
          >
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

function LangSwitch({
  scrolled,
  lang,
  setLang,
  compact = false,
}: {
  scrolled: boolean;
  lang: "fr" | "en";
  setLang: (l: "fr" | "en") => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center rounded-full border p-0.5 text-xs font-semibold ${
        scrolled ? "border-navy-200 text-navy-700" : "border-white/40 text-white"
      }`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "fr" ? "bg-gold-400 text-navy-950" : "opacity-80 hover:opacity-100"
        } ${compact ? "px-2" : ""}`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-gold-400 text-navy-950" : "opacity-80 hover:opacity-100"
        } ${compact ? "px-2" : ""}`}
      >
        EN
      </button>
    </div>
  );
}
