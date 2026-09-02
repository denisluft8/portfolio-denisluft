import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import pt from "./pt.json";
import en from "./en.json";

export type Language = "pt" | "en";
/** O dicionario PT e a fonte da verdade: EN precisa ter exatamente as mesmas chaves. */
export type Dictionary = typeof pt;

const DICTIONARIES: Record<Language, Dictionary> = { pt, en };
const STORAGE_KEY = "portfolio:lang";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // localStorage pode lancar em modo privativo / cookies bloqueados
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // preferencia nao persistida: nao e motivo para quebrar a UI
    }
  }, []);

  // Mantem o <html lang> em sincronia — leitores de tela usam isso para escolher a voz
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: DICTIONARIES[language] }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
