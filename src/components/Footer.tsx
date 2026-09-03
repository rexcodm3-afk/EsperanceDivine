import { useLanguage } from "../i18n/LanguageContext";
import type { Dictionary } from "../i18n/translations";
import { CapIcon, FacebookIcon, MailIcon, PhoneIcon } from "./icons";

const QUICK_LINKS: { key: keyof Dictionary["nav"]; href: string }[] = [
  { key: "home", href: "#accueil" },
  { key: "about", href: "#apropos" },
  { key: "academics", href: "#academique" },
  { key: "gallery", href: "#galerie" },
  { key: "news", href: "#actualites" },
  { key: "contact", href: "#contact" },
];

const FACEBOOK_URL =
  "https://www.facebook.com/search/top?q=" +
  encodeURIComponent("Groupe Scolaire Bilingue Espérance Divine");

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 pb-8 pt-16 text-white sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#accueil" className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                <CapIcon className="size-6" />
              </span>
              <span className="font-heading text-lg font-semibold">{t.schoolName}</span>
            </a>
            <p className="mt-5 max-w-xs text-sm italic leading-relaxed text-white/65">
              &ldquo;{t.footer.tagline}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-400 hover:text-navy-950"
              >
                <FacebookIcon className="size-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>{t.location}</li>
              <li>
                <a href="tel:+237690414571" className="inline-flex items-center gap-2 hover:text-white">
                  <PhoneIcon className="size-4" />
                  +237 6 90 41 45 71
                </a>
              </li>
              <li>
                <a
                  href="mailto:espdivine@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <MailIcon className="size-4" />
                  espdivine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-xs text-white/55 sm:text-sm">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
