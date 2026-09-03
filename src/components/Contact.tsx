import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const PHONE_DISPLAY = "+237 6 90 41 45 71";
const PHONE_TEL = "tel:+237690414571";
const PHONE_WA = "https://wa.me/237690414571";
const EMAIL = "espdivine@gmail.com";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Groupe Scolaire Bilingue Espérance Divine, Bonabéri, Douala 4ème, Cameroun");

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-leaf-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {t.contact.subtitle}
            </p>

            <div className="mt-9 space-y-4">
              <InfoRow icon={<MapPinIcon className="size-5" />} label={t.contact.addressLabel} value={t.location} />
              <InfoRow icon={<PhoneIcon className="size-5" />} label={t.contact.phoneLabel} value={PHONE_DISPLAY} />
              <InfoRow icon={<MailIcon className="size-5" />} label={t.contact.emailLabel} value={EMAIL} />
            </div>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-lift transition-all hover:-translate-y-0.5 hover:bg-gold-300"
              >
                <PhoneIcon className="size-4.5" />
                {t.contact.call}
              </a>
              <a
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-leaf-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-leaf-600"
              >
                <WhatsAppIcon className="size-4.5" />
                {t.contact.whatsapp}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <MailIcon className="size-4.5" />
                {t.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-lift">
              <div className="relative h-48 overflow-hidden bg-navy-50 sm:h-56">
                <MapDecoration />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-navy-900 text-gold-400 shadow-lift ring-8 ring-white/70">
                    <MapPinIcon className="size-7" />
                  </span>
                </div>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-heading text-lg font-semibold text-navy-950">{t.contact.formTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/85">{t.schoolName}</p>
                <p className="text-sm leading-relaxed text-navy-700/85">{t.location}</p>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
                >
                  <MapPinIcon className="size-4.5" />
                  {t.contact.mapCta}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-300">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wide text-white/50">{label}</span>
        <span className="block truncate text-sm font-semibold text-white sm:text-base">{value}</span>
      </span>
    </div>
  );
}

function MapDecoration() {
  return (
    <svg viewBox="0 0 400 200" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="#eef2f8" />
      <g stroke="#c7d4e6" strokeWidth="1.5">
        <path d="M0 40h400M0 90h400M0 140h400" />
        <path d="M60 0v200M150 0v200M250 0v200M340 0v200" />
      </g>
      <path d="M-10 60 Q120 20 200 100 T410 130" stroke="#f5db8b" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M-10 150 Q100 170 200 120 T410 60" stroke="#8ecf9c" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}
