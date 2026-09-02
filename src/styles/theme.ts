/**
 * Tokens de design.
 *
 * A identidade original (azul #4767a4 + vinho #632038 sobre fundo quase preto)
 * foi mantida como cor de marca, mas os tons usados em texto foram clareados:
 * #4767a4 sobre #020202 rende ~4.0:1 de contraste, abaixo do minimo AA (4.5:1)
 * para texto. Os tons `accent`/`wine` abaixo passam AA sobre as superficies escuras.
 */
export const theme = {
  color: {
    // marca (bordas, preenchimentos, elementos decorativos)
    brand: "#4767a4",
    brandDeep: "#2f4a7a",
    wineDeep: "#632038",

    // acentos legiveis sobre fundo escuro
    accent: "#7fa3e0",
    accentStrong: "#a9c4ee",
    wine: "#e0708f",

    // superficies
    bg: "#05070c",
    surface: "#0b0f18",
    surfaceRaised: "#121826",
    border: "rgba(127, 163, 224, 0.16)",
    borderStrong: "rgba(127, 163, 224, 0.38)",

    // texto
    text: "#e8ecf4",
    textMuted: "#9aa6bd",
    textFaint: "#8d97ab",

    onAccent: "#05070c",
    success: "#5fd0a0",
    danger: "#ff8a8a",
  },

  font: {
    mono: "'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  // escala tipografica fluida: encolhe sozinha no mobile, sem media query
  size: {
    xs: "clamp(0.75rem, 0.72rem + 0.15vw, 0.82rem)",
    sm: "clamp(0.86rem, 0.83rem + 0.18vw, 0.95rem)",
    base: "clamp(0.97rem, 0.93rem + 0.22vw, 1.08rem)",
    lg: "clamp(1.1rem, 1.03rem + 0.35vw, 1.3rem)",
    xl: "clamp(1.35rem, 1.2rem + 0.7vw, 1.75rem)",
    h2: "clamp(1.75rem, 1.45rem + 1.5vw, 2.75rem)",
    h1: "clamp(2.4rem, 1.6rem + 3.9vw, 5rem)",
  },

  space: (n: number) => `${n * 4}px`,

  radius: { sm: "6px", md: "12px", lg: "20px", pill: "999px" },

  shadow: {
    card: "0 1px 2px rgba(0,0,0,.4), 0 12px 32px -12px rgba(0,0,0,.7)",
    lift: "0 2px 4px rgba(0,0,0,.4), 0 24px 48px -16px rgba(0,0,0,.8)",
    glow: "0 0 0 1px rgba(127,163,224,.35), 0 18px 44px -18px rgba(71,103,164,.75)",
  },

  layout: {
    maxWidth: "1180px",
    headerHeight: "68px",
  },

  bp: {
    sm: "@media (max-width: 560px)",
    md: "@media (max-width: 860px)",
    lg: "@media (max-width: 1120px)",
    motion: "@media (prefers-reduced-motion: reduce)",
  },
} as const;

export type Theme = typeof theme;
