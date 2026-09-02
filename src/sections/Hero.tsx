import styled, { keyframes } from "styled-components";
import codeBg from "../assets/code-bg.jpg";
import {
  Container,
  GhostLink,
  PrimaryLink,
  pulse,
} from "../components/ui/primitives";
import { useTranslation } from "../hooks/useTranslation";
import { useTypewriter } from "../hooks/useTypewriter";
import { WHATSAPP_URL } from "../data/contact";
import { theme } from "../styles/theme";

const Section = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: ${theme.layout.headerHeight};
  overflow: hidden;

  /* Brilho de marca + grade técnica sobre o screenshot de código */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(60% 55% at 78% 22%, rgba(71, 103, 164, 0.3), transparent 70%),
      radial-gradient(45% 45% at 12% 78%, rgba(99, 32, 56, 0.28), transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(127, 163, 224, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(127, 163, 224, 0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(70% 60% at 50% 40%, #000, transparent 100%);
    pointer-events: none;
  }
`;

/**
 * O screenshot de código desfocado que era o fundo do hero original, agora como
 * camada à direita: entra por trás do texto com fade, em vez de ocupar a tela
 * inteira e disputar legibilidade com o conteúdo.
 */
const CodeBackdrop = styled.div`
  position: absolute;
  inset: 0 0 0 auto;
  width: min(62%, 900px);
  background: url(${codeBg}) no-repeat right center;
  background-size: cover;
  /* O JPEG tem fundo preto no lugar do alpha do PNG original (230 KB -> 26 KB).
     O blend "screen" faz o preto nao pintar nada, entao so o codigo aparece. */
  mix-blend-mode: screen;
  opacity: 0.85;
  pointer-events: none;
  mask-image: linear-gradient(
      to right,
      transparent 0%,
      #000 42%,
      #000 78%,
      transparent 100%
    ),
    linear-gradient(to bottom, transparent 0%, #000 22%, #000 74%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-composite: source-in;

  /* No mobile o texto ocupa a largura toda, entao o fundo recua para nao
     competir com a leitura nem com os botoes de acao. */
  ${theme.bp.md} {
    width: 100%;
    opacity: 0.18;
    mask-image: linear-gradient(to bottom, #000 0%, #000 42%, transparent 72%);
  }
`;

const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: ${theme.space(20)} ${theme.space(24)};
`;

const Availability = styled.p`
  display: inline-flex;
  align-items: center;
  gap: ${theme.space(2)};
  padding: 6px 14px 6px 10px;
  border: 1px solid rgba(95, 208, 160, 0.35);
  border-radius: ${theme.radius.pill};
  background: rgba(95, 208, 160, 0.08);
  color: ${theme.color.success};
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
    animation: ${pulse} 2.4s ease-in-out infinite;
  }
`;

const Greeting = styled.p`
  margin-top: ${theme.space(7)};
  font-family: ${theme.font.mono};
  font-size: ${theme.size.lg};
  color: ${theme.color.textMuted};
`;

const Name = styled.h1`
  margin-top: ${theme.space(1)};
  font-size: ${theme.size.h1};
  color: ${theme.color.text};

  span {
    color: ${theme.color.accent};
  }
`;

const caretBlink = keyframes`
  0%, 45% { opacity: 1; }
  50%, 95% { opacity: 0; }
  100% { opacity: 1; }
`;

const Role = styled.p`
  margin-top: ${theme.space(3)};
  min-height: 1.6em;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xl};
  color: ${theme.color.wine};

  &::after {
    content: "";
    display: inline-block;
    width: 2px;
    height: 1em;
    margin-left: 4px;
    vertical-align: text-bottom;
    background: currentColor;
    animation: ${caretBlink} 1.1s steps(1) infinite;
  }
`;

const Tagline = styled.p`
  margin-top: ${theme.space(6)};
  max-width: 58ch;
  font-size: ${theme.size.lg};
  color: ${theme.color.textMuted};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space(4)};
  margin-top: ${theme.space(10)};

  ${theme.bp.sm} {
    width: 100%;
    a {
      flex: 1 1 100%;
    }
  }
`;

export const Hero = () => {
  const { t } = useTranslation();
  const typed = useTypewriter(t.hero.roles);

  return (
    <Section id="home">
      <CodeBackdrop aria-hidden="true" />
      <Inner>
        <Availability>{t.hero.available}</Availability>
        <Greeting>{t.hero.greeting}</Greeting>
        <Name>
          <span>&lt;</span>Dênis Luft<span>/&gt;</span>
        </Name>
        {/* aria-live off: o efeito é decorativo, não deve ser lido letra a letra */}
        <Role aria-label={t.hero.roles.join(", ")}>
          <span aria-hidden="true">{typed}</span>
        </Role>
        <Tagline>{t.hero.tagline}</Tagline>
        <Actions>
          <PrimaryLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.ctaPrimary}
          </PrimaryLink>
          <GhostLink href="#projects">{t.hero.ctaSecondary}</GhostLink>
        </Actions>
      </Inner>
    </Section>
  );
};
