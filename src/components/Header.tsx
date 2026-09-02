import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { LanguageToggle } from "./LanguageToggle";
import { Container } from "./ui/primitives";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

const SECTION_IDS = ["home", "services", "projects", "about", "skills", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

/**
 * `transform` e `backdrop-filter` transformam o elemento em containing block
 * para descendentes `position: fixed`. Se ficassem aqui, o painel do menu
 * mobile passaria a se posicionar em relacao a esta barra de 68px em vez da
 * viewport — o menu abria cortado no topo da tela. Por isso a barra anima por
 * `top` e o vidro fosco mora num pseudo-elemento.
 */
const Bar = styled.header<{ $hidden: boolean; $atTop: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: ${(p) => (p.$hidden ? `calc(-1 * ${theme.layout.headerHeight})` : "0")};
  z-index: 1000;
  height: ${theme.layout.headerHeight};
  display: flex;
  align-items: center;
  transition: top 0.32s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${(p) => (p.$atTop ? "transparent" : "rgba(5, 7, 12, 0.72)")};
    backdrop-filter: ${(p) => (p.$atTop ? "none" : "blur(14px)")};
    border-bottom: 1px solid
      ${(p) => (p.$atTop ? "transparent" : theme.color.border)};
    transition: background-color 0.32s ease, border-color 0.32s ease;
  }
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space(4)};
`;

const Logo = styled.a`
  font-family: ${theme.font.mono};
  font-size: ${theme.size.lg};
  font-weight: 700;
  text-decoration: none;
  color: ${theme.color.text};
  white-space: nowrap;

  span {
    color: ${theme.color.accent};
  }
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.space(7)};

  ${theme.bp.md} {
    position: fixed;
    inset: 0 0 0 auto;
    width: min(320px, 84vw);
    flex-direction: column;
    justify-content: center;
    gap: ${theme.space(9)};
    padding: ${theme.space(12)} ${theme.space(8)};
    background: rgba(8, 11, 18, 0.97);
    backdrop-filter: blur(18px);
    border-left: 1px solid ${theme.color.border};
    transform: translateX(${(p) => (p.$open ? "0" : "100%")});
    transition: transform 0.32s cubic-bezier(0.2, 0.7, 0.3, 1);
    visibility: ${(p) => (p.$open ? "visible" : "hidden")};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.space(7)};
  list-style: none;
  margin: 0;
  padding: 0;

  ${theme.bp.md} {
    flex-direction: column;
    gap: ${theme.space(6)};
  }
`;

const NavLink = styled.a<{ $active: boolean }>`
  position: relative;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.sm};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${(p) => (p.$active ? theme.color.accentStrong : theme.color.textMuted)};
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: ${(p) => (p.$active ? "100%" : "0")};
    background: ${theme.color.wine};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${theme.color.text};
  }
  &:hover::after {
    width: 100%;
  }

  ${theme.bp.md} {
    font-size: ${theme.size.lg};
  }
`;

const Burger = styled.button<{ $open: boolean }>`
  display: none;
  position: relative;
  z-index: 1;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid ${theme.color.borderStrong};
  border-radius: ${theme.radius.md};
  background: rgba(5, 7, 12, 0.6);
  cursor: pointer;

  ${theme.bp.md} {
    display: grid;
    place-items: center;
  }

  span,
  span::before,
  span::after {
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: ${theme.color.accentStrong};
    transition: transform 0.28s ease, opacity 0.2s ease;
  }

  span {
    background: ${(p) => (p.$open ? "transparent" : theme.color.accentStrong)};
  }
  span::before,
  span::after {
    content: "";
    position: absolute;
  }
  span::before {
    transform: ${(p) =>
      p.$open ? "rotate(45deg)" : "translateY(-6px)"};
  }
  span::after {
    transform: ${(p) =>
      p.$open ? "rotate(-45deg)" : "translateY(6px)"};
  }
`;

const Scrim = styled.div<{ $open: boolean }>`
  display: none;

  ${theme.bp.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    opacity: ${(p) => (p.$open ? 1 : 0)};
    pointer-events: ${(p) => (p.$open ? "auto" : "none")};
    transition: opacity 0.3s ease;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translate(-50%, -200%);
  padding: 10px 18px;
  border-radius: ${theme.radius.pill};
  background: ${theme.color.brand};
  color: #fff;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.sm};
  text-decoration: none;
  z-index: 1001;

  &:focus-visible {
    transform: translate(-50%, 0);
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isHidden, isAtTop } = useScrollDirection();
  const { t } = useTranslation();
  const sectionIds = useMemo(() => [...SECTION_IDS], []);
  const active = useActiveSection(sectionIds);

  const close = useCallback(() => setIsOpen(false), []);

  // Esc fecha o menu e o scroll do fundo trava enquanto ele está aberto
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  const labels: Record<SectionId, string> = {
    home: t.nav.home,
    services: t.nav.services,
    projects: t.nav.projects,
    about: t.nav.about,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  return (
    <>
      <SkipLink href="#main">{t.nav.home}</SkipLink>
      <Bar $hidden={isHidden && !isOpen} $atTop={isAtTop && !isOpen}>
        <Inner>
          <Logo href="#home" onClick={close}>
            <span>&lt;</span>DL<span>/&gt;</span>
          </Logo>

          <Scrim $open={isOpen} onClick={close} aria-hidden="true" />

          <Nav id="primary-navigation" $open={isOpen} aria-label={t.nav.menu}>
            <NavList>
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <NavLink
                    href={`#${id}`}
                    $active={active === id}
                    aria-current={active === id ? "true" : undefined}
                    onClick={close}
                  >
                    {labels[id]}
                  </NavLink>
                </li>
              ))}
            </NavList>
            <LanguageToggle />
          </Nav>

          <Burger
            type="button"
            $open={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? t.nav.close : t.nav.menu}
          >
            <span />
          </Burger>
        </Inner>
      </Bar>
    </>
  );
};
