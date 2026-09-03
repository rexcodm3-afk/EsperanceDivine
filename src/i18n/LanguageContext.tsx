import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { fr, en, type Dictionary } from "./translations";

export type Lang = "fr" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    const saved = window.localStorage.getItem("esperance-lang");
    return saved === "en" ? "en" : "fr";
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("esperance-lang", next);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const value = useMemo<LanguageContextValue>(() => {
    const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");
    return { lang, setLang, toggleLang, t: lang === "fr" ? fr : en };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
