import type { Dictionary } from "../i18n/LanguageContext";

export interface Service {
  id: keyof Dictionary["serviceList"];
  /** Path de um icone 24x24 desenhado inline (sem arquivo, sem request extra). */
  icon: string;
  highlight?: boolean;
  /** Ocupa as duas colunas do grid — usado para destacar o diferencial. */
  wide?: boolean;
}

export const services: Service[] = [
  {
    id: "landing",
    // raio
    icon: "M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l1-8Z",
    highlight: true,
  },
  {
    id: "webapp",
    // janela de aplicacao
    icon: "M3 5h18v14H3V5Zm0 4h18M7 7h.01M10 7h.01",
  },
  {
    id: "ai",
    // chip / circuito
    icon: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M6 6h12v12H6z",
    highlight: true,
    wide: true,
  },
  {
    id: "designSystem",
    // blocos de componentes
    icon: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z",
  },
  {
    id: "performance",
    // ponteiro de velocimetro
    icon: "M12 21a9 9 0 1 1 9-9M12 12l5-4",
  },
];
