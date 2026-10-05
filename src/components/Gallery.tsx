import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { fullGallery, gallery } from "../data/images";
import Reveal from "./Reveal";
import { XIcon } from "./icons";

function getFullResolutionSrc(src: string) {
  return src.replace("&ctp=s206x206", "");
}

export default function Gallery({ fullPage = false }: { fullPage?: boolean }) {
  const { t } = useLanguage();
  const galleryPhotos = fullPage ? fullGallery : gallery;
  const photos = galleryPhotos.filter(
    (photo, index) => galleryPhotos.findIndex((candidate) => candidate.src === photo.src) === index,
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
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
            {fullPage ? t.gallery.pageSubtitle : t.gallery.subtitle}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <img
                  src={getFullResolutionSrc(photo.src)}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Reveal>

        {!fullPage && (
          <div className="mt-10 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift sm:text-base"
            >
              {t.gallery.seeMore}
            </a>
          </div>
        )}
        {fullPage && (
          <div className="mt-10 text-center">
            <a
              href="/#galerie"
              className="inline-flex items-center justify-center rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift sm:text-base"
            >
              {t.gallery.backToGallery}
            </a>
          </div>
        )}
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
            className="aspect-[4/3] w-[min(100%,113.333vh)] max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getFullResolutionSrc(photos[activeIndex].src)}
              alt={photos[activeIndex].alt}
              loading="lazy"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </figure>
        </div>
      )}
    </section>
  );
}
