import styled from "styled-components";
import balance from "../assets/balance.svg";
import bubble from "../assets/bubble.svg";
import gear from "../assets/gear.svg";
import lightbulb from "../assets/lightbulb.svg";
import lock from "../assets/lock.svg";
import target from "../assets/target.svg";
import { Reveal } from "../components/Reveal";
import { TechIcon } from "../components/ui/techIcons";
import {
  Card,
  Container,
  Eyebrow,
  SectionLead,
  SectionTitle,
} from "../components/ui/primitives";
import { skillGroups } from "../data/skills";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

/** Mesma ordem do array `howIWork` nos dicionários. */
const HOW_ICONS = [target, bubble, gear, lightbulb, balance, lock];

const Section = styled.section`
  padding-block: clamp(80px, 12vh, 140px);
`;

const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.space(5)};
  margin-top: ${theme.space(12)};

  > * {
    height: 100%;
  }
`;

const GroupCard = styled(Card)`
  height: 100%;
  padding: ${theme.space(6)};
`;

const GroupTitle = styled.h3`
  font-size: ${theme.size.sm};
  font-family: ${theme.font.mono};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.color.accent};
  margin-bottom: ${theme.space(4)};
`;

const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space(2)};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.pill};
  background: rgba(127, 163, 224, 0.05);
  font-size: ${theme.size.xs};
  color: ${theme.color.text};

  img,
  svg {
    width: 16px;
    height: 16px;
    flex: none;
    object-fit: contain;
  }

  /* Glifos monocromaticos herdam o tom de acento; logos coloridos ignoram */
  svg {
    color: ${theme.color.accent};
  }
`;

const HowTitle = styled.h3`
  font-size: ${theme.size.xl};
  margin-top: ${theme.space(16)};
  margin-bottom: ${theme.space(8)};
  color: ${theme.color.text};
`;

const HowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${theme.space(6)};
`;

const HowItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: ${theme.space(4)};
  align-items: start;

  img {
    width: 36px;
    height: 36px;
    /* SVGs originais são escuros: o filtro os traz para o tom de acento */
    filter: brightness(0) saturate(100%) invert(72%) sepia(18%) saturate(1100%)
      hue-rotate(184deg) brightness(96%) contrast(92%);
  }

  h4 {
    font-size: ${theme.size.base};
    color: ${theme.color.text};
    margin-bottom: 4px;
  }

  p {
    font-size: ${theme.size.sm};
    color: ${theme.color.textMuted};
  }
`;

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section id="skills">
      <Container>
        <Reveal>
          <Eyebrow>{t.skills.eyebrow}</Eyebrow>
          <SectionTitle>{t.skills.title}</SectionTitle>
          <SectionLead>{t.skills.subtitle}</SectionLead>
        </Reveal>

        <Groups>
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 80}>
              <GroupCard>
                <GroupTitle>{t.skillGroups[group.id]}</GroupTitle>
                <Chips>
                  {group.items.map((skill) => (
                    <Chip key={skill.name}>
                      {skill.logo ? (
                        <img src={skill.logo} alt="" aria-hidden="true" />
                      ) : (
                        skill.icon && <TechIcon name={skill.icon} />
                      )}
                      {skill.name}
                    </Chip>
                  ))}
                </Chips>
              </GroupCard>
            </Reveal>
          ))}
        </Groups>

        <Reveal>
          <HowTitle>{t.skills.howIWorkTitle}</HowTitle>
        </Reveal>

        <HowGrid>
          {t.howIWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <HowItem>
                <img src={HOW_ICONS[i]} alt="" aria-hidden="true" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </HowItem>
            </Reveal>
          ))}
        </HowGrid>
      </Container>
    </Section>
  );
};
