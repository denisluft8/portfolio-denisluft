import { useContext } from "react";
import { LanguageContext, type LanguageContextValue } from "../i18n/LanguageContext";

/**
 * Substitui o bloco de `useContext` + import dos dois JSON + ternario que estava
 * duplicado em seis componentes.
 */
export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation precisa estar dentro de <LanguageProvider>");
  }
  return ctx;
}
