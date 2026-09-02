import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

/**
 * O arquivo anterior tinha `* { height: 100% }`, que forcava altura total em
 * todo elemento da pagina, e um @font-face cujo `src` apontava para uma URL de
 * CSS do Google Fonts (nunca carregava a fonte). As fontes agora vem por <link>
 * no index.html e o reset foi reescrito.
 */
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  ${theme.bp.motion} {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }

  body {
    margin: 0;
    min-height: 100dvh;
    background: ${theme.color.bg};
    color: ${theme.color.text};
    font-family: ${theme.font.sans};
    font-size: ${theme.size.base};
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    font-family: ${theme.font.mono};
    line-height: 1.15;
    margin: 0;
    letter-spacing: -0.02em;
  }

  p { margin: 0; }

  img, video, svg { display: block; max-width: 100%; }

  a { color: inherit; }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  /* Foco visivel apenas para navegacao por teclado */
  :focus-visible {
    outline: 2px solid ${theme.color.accentStrong};
    outline-offset: 3px;
    border-radius: ${theme.radius.sm};
  }

  /* Ancoras nao ficam escondidas atras do header fixo */
  section[id], div[id] {
    scroll-margin-top: calc(${theme.layout.headerHeight} + 16px);
  }

  ::selection {
    background: ${theme.color.brand};
    color: #fff;
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: ${theme.color.bg}; }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.brandDeep};
    border-radius: ${theme.radius.pill};
    border: 2px solid ${theme.color.bg};
  }
  ::-webkit-scrollbar-thumb:hover { background: ${theme.color.brand}; }
`;
