import { useLanguage } from "../i18n/LanguageContext";
import { img } from "../data/images";
import Reveal from "./Reveal";

const IMAGES = [img.learning, img.activities, img.community, img.personalGrowth];

export default function SchoolLife() {
  const { t } = useLanguage();

  return (
    <section id="vie-scolaire" className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
            {t.life.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
            {t.life.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{t.life.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.life.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="group w-full overflow-hidden rounded-2xl bg-navy-900 shadow-lift">
                <img
                  src={IMAGES[i]}
                  alt={card.title}
                  loading="lazy"
                  className="aspect-video w-full bg-navy-950 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:text-sm">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
