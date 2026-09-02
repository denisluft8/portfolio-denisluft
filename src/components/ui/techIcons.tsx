import type { ReactElement } from "react";

/**
 * Icones desenhados inline em vez de arquivos SVG: nao geram request, escalam
 * sem perda e os monocromaticos herdam a cor do chip via currentColor.
 *
 * Marcas com forma geometrica reconhecivel usam as cores oficiais. Para
 * conceitos (nao-produtos, como "Design Systems" ou "CI/CD") e para marcas cujo
 * logo nao sobrevive a 16px (o elefante do PostgreSQL, o urso do Zustand), o
 * icone e um glifo de traco em currentColor — um glifo generico legivel comunica
 * mais que um logo irreconhecivel.
 */
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const TECH_ICONS = {
  nextjs: (
    <>
      <circle cx="12" cy="12" r="10.2" fill="#fff" />
      <path
        d="M9 8.2v7.6M9 8.2l6.2 8.2M15.4 8.2v5.2"
        fill="none"
        stroke="#0b0f18"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </>
  ),

  nodejs: (
    <>
      <path d="M12 1.9l8.75 5.05v10.1L12 22.1 3.25 17.05V6.95z" fill="#539E43" />
      <path
        d="M12 8.6v6.9c0 .8-.9 1.2-1.6.8l-2.2-1.3"
        fill="none"
        stroke="#0b0f18"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),

  express: (
    <>
      <path d="M3 6h18M3 12h12M3 18h18" {...s} />
      <circle cx="18.5" cy="12" r="2.2" {...s} />
    </>
  ),

  graphql: (
    <>
      <path
        d="M12 2.4l8.3 4.8v9.6L12 21.6 3.7 16.8V7.2z"
        fill="none"
        stroke="#E535AB"
        strokeWidth="1.5"
      />
      <path d="M12 3.2L4.4 16.4h15.2z" fill="none" stroke="#E535AB" strokeWidth="1.2" />
      <circle cx="12" cy="3" r="1.7" fill="#E535AB" />
      <circle cx="20.2" cy="7.4" r="1.7" fill="#E535AB" />
      <circle cx="20.2" cy="16.6" r="1.7" fill="#E535AB" />
      <circle cx="12" cy="21" r="1.7" fill="#E535AB" />
      <circle cx="3.8" cy="16.6" r="1.7" fill="#E535AB" />
      <circle cx="3.8" cy="7.4" r="1.7" fill="#E535AB" />
    </>
  ),

  rest: (
    <>
      <path d="M4 8.5h13l-3.2-3.2M20 15.5H7l3.2 3.2" {...s} />
    </>
  ),

  mongodb: (
    <>
      <path
        d="M12 1.8c3.3 4.3 5.3 7 5.3 10.4 0 3.9-2.6 6.4-5.3 9.9-2.7-3.5-5.3-6-5.3-9.9C6.7 8.8 8.7 6.1 12 1.8z"
        fill="#47A248"
      />
      <path
        d="M12 5.5v14"
        fill="none"
        stroke="#0b0f18"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </>
  ),

  postgresql: (
    <>
      <ellipse cx="12" cy="6" rx="7.2" ry="3.1" fill="none" stroke="#5B9BD5" strokeWidth="1.7" />
      <path
        d="M4.8 6v12c0 1.7 3.2 3.1 7.2 3.1s7.2-1.4 7.2-3.1V6M4.8 12c0 1.7 3.2 3.1 7.2 3.1s7.2-1.4 7.2-3.1"
        fill="none"
        stroke="#5B9BD5"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </>
  ),

  tanstack: (
    <>
      <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6M20.5 3.5v4.2h-4.2" {...s} />
      <path d="M12 8.4v4l2.6 1.6" {...s} />
    </>
  ),

  zustand: (
    <>
      <path d="M12 2.8l8.6 4.6L12 12 3.4 7.4z" {...s} />
      <path d="M3.4 12.2L12 16.8l8.6-4.6M3.4 16.6L12 21.2l8.6-4.6" {...s} />
    </>
  ),

  vite: (
    <>
      <path
        d="M2.6 5.1l8.7 15.4c.35.6 1.2.6 1.55 0l8.7-15.4c.38-.68-.22-1.5-1-1.36L12 5.3 3.6 3.74c-.78-.14-1.38.68-1 1.36z"
        fill="#646CFF"
      />
      <path d="M14.8 6.6l-5.4 9.1h2.9l-.6 3.9 5-8.1h-2.9z" fill="#FFC517" />
    </>
  ),

  git: (
    <>
      <path d="M12 1.4l10.6 10.6L12 22.6 1.4 12z" fill="#F05032" />
      <path
        d="M9 15l6-6M11 12.4h3.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="15" r="1.7" fill="#fff" />
      <circle cx="15.2" cy="8.8" r="1.5" fill="#fff" />
      <circle cx="14.6" cy="12.4" r="1.4" fill="#fff" />
    </>
  ),

  githubActions: (
    <>
      <circle cx="12" cy="12" r="9.2" fill="none" stroke="#2088FF" strokeWidth="1.8" />
      <path
        d="M10.2 8.6l5.4 3.4-5.4 3.4z"
        fill="#2088FF"
      />
    </>
  ),

  cicd: (
    <>
      <path d="M20.4 12a8.4 8.4 0 1 1-2.6-6.1M20.4 3.6v4.2h-4.2" {...s} />
      <path d="M9 12.2l2.1 2.1 4.2-4.2" {...s} />
    </>
  ),

  electron: (
    <>
      <circle cx="12" cy="12" r="2.2" fill="#9FEAF9" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="#9FEAF9"
        strokeWidth="1.5"
        transform="rotate(30 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.4"
        fill="none"
        stroke="#9FEAF9"
        strokeWidth="1.5"
        transform="rotate(-30 12 12)"
      />
    </>
  ),

  testing: (
    <>
      <path d="M9.2 2.8h5.6M10.2 2.8v6.1l-4 8.2a2.1 2.1 0 0 0 1.9 3h7.8a2.1 2.1 0 0 0 1.9-3l-4-8.2V2.8" {...s} />
      <path d="M9.4 15.4h5.2" {...s} />
    </>
  ),

  aiReview: (
    <>
      <path
        d="M9 2.8v2.6M15 2.8v2.6M9 18.6v2.6M15 18.6v2.6M2.8 9h2.6M2.8 15h2.6M18.6 9h2.6M18.6 15h2.6M6.4 6.4h11.2v11.2H6.4z"
        {...s}
      />
      <path d="M10.6 12.6l1.6 1.6 3-3.4" {...s} />
    </>
  ),

  agile: (
    <>
      <path d="M3.6 4.4h4.2v11H3.6zM9.9 4.4h4.2v7.4H9.9zM16.2 4.4h4.2v13.2h-4.2z" {...s} />
      <path d="M3.6 19.6h16.8" {...s} />
    </>
  ),

  designSystem: (
    <>
      <path d="M3.8 3.8h6.6v6.6H3.8zM13.6 3.8h6.6v6.6h-6.6zM3.8 13.6h6.6v6.6H3.8z" {...s} />
      <circle cx="16.9" cy="16.9" r="3.3" {...s} />
    </>
  ),

  a11y: (
    <>
      <circle cx="12" cy="12" r="9.4" {...s} />
      <circle cx="12" cy="7" r="1.4" fill="currentColor" />
      <path d="M6.8 10.1h10.4M12 10.1v4.4M12 14.5l-2.4 4.6M12 14.5l2.4 4.6" {...s} />
    </>
  ),

  figma: (
    <>
      <path d="M8.6 2.2H12v6.6H8.6a3.3 3.3 0 0 1 0-6.6z" fill="#F24E1E" />
      <path d="M12 2.2h3.4a3.3 3.3 0 0 1 0 6.6H12z" fill="#FF7262" />
      <path d="M8.6 8.8H12v6.6H8.6a3.3 3.3 0 0 1 0-6.6z" fill="#A259FF" />
      <path d="M12 8.8h.1a3.3 3.3 0 1 1-.1 6.6z" fill="#1ABCFE" />
      <path d="M8.6 15.4H12v3.3a3.3 3.3 0 1 1-3.4-3.3z" fill="#0ACF83" />
    </>
  ),
} satisfies Record<string, ReactElement>;

export type TechIconName = keyof typeof TECH_ICONS;

export const TechIcon = ({ name }: { name: TechIconName }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
    {TECH_ICONS[name]}
  </svg>
);
