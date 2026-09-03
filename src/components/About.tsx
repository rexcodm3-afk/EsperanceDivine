import { useLanguage } from "../i18n/LanguageContext";
import { img } from "../data/images";
import Reveal from "./Reveal";
import { CapIcon } from "./icons";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy-700/90 sm:text-lg">{t.about.body}</p>
          <p className="mt-4 text-base leading-relaxed text-navy-700/90 sm:text-lg">{t.about.body2}</p>

          <ul className="mt-8 space-y-3">
            {t.about.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="m5 13 4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-navy-800 sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#academique"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lift sm:text-base"
          >
            {t.about.cta}
          </a>
        </Reveal>

        <Reveal delay={1} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-gold-300/70 sm:-right-6 sm:-top-6" />
            <img
              src={img.aboutClassroom}
              alt="Enseignant animant une salle de classe accueillante à Espérance Divine"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-1/2 flex w-[calc(100%-2.5rem)] -translate-x-1/2 items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-lift sm:-bottom-8 sm:left-6 sm:w-auto sm:translate-x-0">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <CapIcon className="size-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-navy-900">
                Bilingue&nbsp;·&nbsp;Structuré&nbsp;·&nbsp;Bienveillant
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
