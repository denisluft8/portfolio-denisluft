import styled, { css, keyframes } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 48px);
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${theme.space(2)};
  font-family: ${theme.font.mono};
  font-size: ${theme.size.sm};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.color.accent};
  margin-bottom: ${theme.space(3)};

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    background: ${theme.color.wine};
    flex: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.size.h2};
  color: ${theme.color.text};
  max-width: 18ch;
`;

export const SectionLead = styled.p`
  margin-top: ${theme.space(4)};
  max-width: 62ch;
  color: ${theme.color.textMuted};
  font-size: ${theme.size.lg};
`;

/* Visível para leitores de tela, invisível na tela. */
export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space(2)};
  padding: ${theme.space(3)} ${theme.space(6)};
  border-radius: ${theme.radius.pill};
  font-family: ${theme.font.mono};
  font-size: ${theme.size.base};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.18s ease, background-color 0.18s ease,
    border-color 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const primaryStyles = css`
  ${buttonBase};
  background: linear-gradient(
    135deg,
    ${theme.color.brand},
    ${theme.color.brandDeep}
  );
  color: #fff;
  box-shadow: ${theme.shadow.glow};

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #5679bb, ${theme.color.brand});
  }
`;

const ghostStyles = css`
  ${buttonBase};
  background: transparent;
  color: ${theme.color.text};
  border-color: ${theme.color.borderStrong};

  &:hover:not(:disabled) {
    border-color: ${theme.color.accent};
    background: rgba(127, 163, 224, 0.08);
  }
`;

/* styled-components v6 removeu `withComponent` da tipagem, entao botao e link
   compartilham os estilos por `css` em vez de derivarem um do outro. */
export const PrimaryButton = styled.button`${primaryStyles}`;
export const PrimaryLink = styled.a`${primaryStyles}`;
export const GhostButton = styled.button`${ghostStyles}`;
export const GhostLink = styled.a`${ghostStyles}`;

export const Card = styled.div`
  background: linear-gradient(
    180deg,
    ${theme.color.surfaceRaised},
    ${theme.color.surface}
  );
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.lg};
  box-shadow: ${theme.shadow.card};
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .35; transform: scale(1.6); }
`;
