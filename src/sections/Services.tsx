import styled from "styled-components";
import { Reveal } from "../components/Reveal";
import {
  Card,
  Container,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "../components/ui/primitives";
import { services } from "../data/services";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

const Section = styled.section`
  padding-block: clamp(80px, 12vh, 140px);
`;

const Grid = styled.div`
  display: grid;
  /* 2x2 no desktop: com 4 colunas os cards ficam estreitos demais para o texto */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.space(5)};
  margin-top: ${theme.space(12)};

  /* O Reveal fica entre o grid e o card, então precisa esticar junto */
  > * {
    height: 100%;
  }

  ${theme.bp.md} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Cell = styled.div<{ $wide?: boolean }>`
  height: 100%;
  grid-column: ${(p) => (p.$wide ? "span 2" : "auto")};

  /* Cell -> Reveal -> Card: a altura precisa atravessar as tres camadas */
  > * {
    height: 100%;
  }

  ${theme.bp.md} {
    grid-column: auto;
  }
`;

const ServiceCard = styled(Card)<{ $highlight?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.space(4)};
  padding: ${theme.space(7)};
  height: 100%;
  border-color: ${(p) =>
    p.$highlight ? theme.color.borderStrong : theme.color.border};
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.color.accent};
    box-shadow: ${theme.shadow.lift};
  }
`;

const IconBadge = styled.div<{ $highlight?: boolean }>`
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: ${theme.radius.md};
  background: ${(p) =>
    p.$highlight ? "rgba(99, 32, 56, .35)" : "rgba(71, 103, 164, .22)"};
  color: ${(p) => (p.$highlight ? theme.color.wine : theme.color.accent)};
`;

const CardTitle = styled.h3`
  font-size: ${theme.size.xl};
  color: ${theme.color.text};
`;

const CardText = styled.p`
  color: ${theme.color.textMuted};
  font-size: ${theme.size.sm};
`;

const Bullets = styled.ul`
  list-style: none;
  margin: auto 0 0;
  padding: ${theme.space(4)} 0 0;
  border-top: 1px dashed ${theme.color.border};
  display: grid;
  gap: ${theme.space(2)};

  li {
    display: flex;
    gap: ${theme.space(2)};
    font-size: ${theme.size.sm};
    color: ${theme.color.textFaint};
  }

  li::before {
    content: "▹";
    color: ${theme.color.accent};
    flex: none;
  }
`;

export const Services = () => {
  const { t } = useTranslation();

  return (
    <Section id="services">
      <Container>
        <Reveal>
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <SectionTitle>{t.services.title}</SectionTitle>
          <SectionLead>{t.services.subtitle}</SectionLead>
        </Reveal>

        <Grid>
          {services.map((service, i) => {
            const copy = t.serviceList[service.id];
            return (
              <Cell key={service.id} $wide={service.wide}>
                <Reveal delay={i * 90}>
                  <ServiceCard $highlight={service.highlight}>
                    <IconBadge $highlight={service.highlight}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={service.icon} />
                      </svg>
                    </IconBadge>
                    <CardTitle>{copy.title}</CardTitle>
                    <CardText>{copy.description}</CardText>
                    <Bullets>
                      {copy.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </Bullets>
                  </ServiceCard>
                </Reveal>
              </Cell>
            );
          })}
        </Grid>

      </Container>
    </Section>
  );
};
