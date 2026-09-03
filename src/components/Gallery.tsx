import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { gallery } from "../data/images";
import Reveal from "./Reveal";
import { XIcon } from "./icons";

export default function Gallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  return (
    <section id="galerie" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700/90 sm:text-lg">
            {t.gallery.subtitle}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={close}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <XIcon className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Photo précédente"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>
          <button
            type="button"
            aria-label="Photo suivante"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <span className="text-2xl leading-none">›</span>
          </button>

          <figure
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              className="max-h-[85vh] w-full object-contain"
            />
          </figure>
        </div>
      )}
    </section>
  );
}
