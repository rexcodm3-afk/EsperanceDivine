type IconProps = { className?: string };

const base = "none";

export function GlobeIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  );
}

export function CapIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="m12 4 9.5 4.5L12 13 2.5 8.5 12 4Z" strokeLinejoin="round" />
      <path d="M6.5 10.8v4.4c0 1.6 2.5 3.3 5.5 3.3s5.5-1.7 5.5-3.3v-4.4" strokeLinejoin="round" />
      <path d="M21.5 8.5v6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 3.5 4.5 6.2v5.4c0 4.6 3.2 8 7.5 9.9 4.3-1.9 7.5-5.3 7.5-9.9V6.2L12 3.5Z" strokeLinejoin="round" />
      <path d="m8.7 12.2 2.3 2.3 4.3-4.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        d="M12 3.5c.6 3 2 4.9 5 5.5-3 .6-4.4 2.5-5 5.5-.6-3-2-4.9-5-5.5 3-.6 4.4-2.5 5-5.5Z"
        strokeLinejoin="round"
      />
      <path d="M18.5 15c.3 1.4.9 2.2 2.3 2.5-1.4.3-2 1.1-2.3 2.5-.3-1.4-.9-2.2-2.3-2.5 1.4-.3 2-1.1 2.3-2.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function BookIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 6.5c-1.7-1.3-4-2-6.5-2v12c2.5 0 4.8.7 6.5 2 1.7-1.3 4-2 6.5-2v-12c-2.5 0-4.8.7-6.5 2Z" strokeLinejoin="round" />
      <path d="M12 6.5v12" />
    </svg>
  );
}

export function UsersIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.7-3 2.8-4.8 5.5-4.8s4.8 1.8 5.5 4.8" strokeLinecap="round" />
      <circle cx="17" cy="8.8" r="2.3" />
      <path d="M15.7 14.5c2.3.3 4 1.9 4.6 4.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeartHandIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        d="M12 20s-6.5-4-9-8.2C1.3 8.4 3 5.5 6 5.5c1.7 0 3 .9 4 2.3 1-1.4 2.3-2.3 4-2.3 3 0 4.7 2.9 3 6.3-2.5 4.2-9 8.2-9 8.2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.7} className={className}>
      <path
        d="M7 3.5 9.5 8l-2 2.2c1 2.3 2.9 4.2 5.3 5.3L15 13l4.5 2.5V19c0 1.1-.9 2-2 2-6.9-.5-12.5-6.1-13-13-.1-1.1.9-2 2-2Z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.4 9.1 10 8 9.8 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z" />
      <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17l-1.1 4 4.2-1.1A9.5 9.5 0 1 0 12 2.5Zm0 1.6a7.9 7.9 0 1 1-4.4 14.5l-.3-.2-2.5.7.7-2.4-.2-.3A7.9 7.9 0 0 1 12 4.1Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        d="M12 21s7-6.3 7-11.6A7 7 0 0 0 5 9.4C5 14.7 12 21 12 21Z"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.4" r="2.4" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21.5v-8.1h2.7l.4-3.2h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7v3.2h2.7v8.1h3.1Z" />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function XIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BellIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M6 10.5a6 6 0 1 1 12 0c0 4 1.2 5.3 1.5 5.8H4.5c.3-.5 1.5-1.8 1.5-5.8Z" strokeLinejoin="round" />
      <path d="M10 19.5a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
    </svg>
  );
}

export function MegaphoneIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M3 10v4a1 1 0 0 0 1 1h1.8L11 19v-3.5M3 10l8-4.5v13L3 14M3 10v4" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M14 8.3a5 5 0 0 1 0 7.4M17 6a8.5 8.5 0 0 1 0 12" strokeLinecap="round" />
    </svg>
  );
}
