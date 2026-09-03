import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { BellIcon, CalendarIcon, MegaphoneIcon } from "./icons";

const ICONS = [MegaphoneIcon, CalendarIcon, BellIcon];

export default function News() {
  const { t } = useLanguage();

  return (
    <section id="actualites" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            {t.news.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            {t.news.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700/90 sm:text-lg">{t.news.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.news.cards.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="flex h-full flex-col rounded-2xl border-2 border-dashed border-navy-200 bg-cream-50 p-7 transition-colors hover:border-gold-300">
                  <span className="flex size-13 items-center justify-center rounded-xl bg-navy-100 text-navy-700">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy-950">{card.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-700/85">{card.text}</p>
                  <span className="mt-5 inline-flex w-fit items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-800">
                    {t.news.tag}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
