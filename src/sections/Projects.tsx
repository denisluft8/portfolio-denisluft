import styled from "styled-components";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import {
  Container,
  Eyebrow,
  GhostLink,
  SectionLead,
  SectionTitle,
} from "../components/ui/primitives";
import { projects } from "../data/projects";
import { GITHUB_URL } from "../data/contact";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

const Section = styled.section`
  padding-block: clamp(80px, 12vh, 140px);
  background:
    radial-gradient(80% 60% at 50% 0%, rgba(71, 103, 164, 0.12), transparent 70%),
    ${theme.color.surface};
  border-block: 1px solid ${theme.color.border};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.space(6)};
  margin-top: ${theme.space(12)};

  > * {
    height: 100%;
  }
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.space(12)};
`;

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <Eyebrow>{t.projects.eyebrow}</Eyebrow>
          <SectionTitle>{t.projects.title}</SectionTitle>
          <SectionLead>{t.projects.subtitle}</SectionLead>
        </Reveal>

        <Grid>
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </Grid>

        <Reveal>
          <More>
            <GhostLink
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.github} ↗
            </GhostLink>
          </More>
        </Reveal>
      </Container>
    </Section>
  );
};
