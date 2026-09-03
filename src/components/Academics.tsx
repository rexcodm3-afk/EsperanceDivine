import { useLanguage } from "../i18n/LanguageContext";
import { img } from "../data/images";
import Reveal from "./Reveal";

const IMAGES = [img.earlyYears, img.primaryCycle, img.bilingual];

export default function Academics() {
  const { t } = useLanguage();

  return (
    <section id="academique" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            {t.academics.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            {t.academics.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700/90 sm:text-lg">
            {t.academics.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.academics.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group h-full overflow-hidden rounded-2xl border border-navy-100 bg-cream-50 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="h-52 overflow-hidden">
                  <img
                    src={IMAGES[i]}
                    alt={card.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-lg font-semibold text-navy-950">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-700/85">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mx-auto max-w-2xl text-sm italic leading-relaxed text-navy-600/80">
            {t.academics.note}
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center justify-center rounded-full border-2 border-navy-900 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-navy-900 hover:text-white sm:text-base"
          >
            {t.academics.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
