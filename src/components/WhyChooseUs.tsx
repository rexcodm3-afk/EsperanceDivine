import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { CapIcon, GlobeIcon, HeartHandIcon, ShieldIcon } from "./icons";

const ICONS = [GlobeIcon, CapIcon, ShieldIcon, HeartHandIcon];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            {t.why.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700/90 sm:text-lg">{t.why.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.cards.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-lift">
                  <span className="flex size-13 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy-950">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-700/85">{card.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
