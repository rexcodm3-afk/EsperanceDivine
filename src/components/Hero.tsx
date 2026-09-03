import { useLanguage } from "../i18n/LanguageContext";
import { img } from "../data/images";
import { ArrowRightIcon, ChevronDownIcon, GlobeIcon } from "./icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      <img
        src={img.heroClassroom}
        alt="Élèves dans une salle de classe à Espérance Divine"
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-navy-700 via-gold-400 to-leaf-500" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gold-200 backdrop-blur">
            <GlobeIcon className="size-4" />
            {t.hero.eyebrow}
          </div>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#apropos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lift transition-all hover:bg-gold-300 hover:-translate-y-0.5 sm:text-base"
            >
              {t.hero.ctaPrimary}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5 sm:text-base"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-10 border-t border-white/15 pt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 sm:text-xs">
            {t.hero.trust}
          </p>
        </div>
      </div>

      <a
        href="#apropos"
        aria-label="Défiler vers le bas"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/70 hover:text-white sm:block"
      >
        <ChevronDownIcon className="size-7" />
      </a>
    </section>
  );
}
