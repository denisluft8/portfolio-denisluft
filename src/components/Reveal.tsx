import styled from "styled-components";
import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { theme } from "../styles/theme";

const Wrapper = styled.div<{ $visible: boolean; $delay: number }>`
  /* Herda a altura quando o pai (um grid) estica este wrapper */
  > * {
    height: inherit;
  }

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? "0" : "20px")});
  transition: opacity 0.6s ease ${(p) => p.$delay}ms,
    transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1) ${(p) => p.$delay}ms;

  ${theme.bp.motion} {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms, para escalonar itens de uma lista. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

export const Reveal = ({ children, delay = 0, as, className }: RevealProps) => {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <Wrapper
      ref={ref}
      as={as}
      className={className}
      $visible={isVisible}
      $delay={delay}
    >
      {children}
    </Wrapper>
  );
};
