import styled from "styled-components";
import profile from "../assets/projects/profile.jpg";
import { Reveal } from "../components/Reveal";
import { Container, Eyebrow, SectionTitle } from "../components/ui/primitives";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

const Section = styled.section`
  padding-block: clamp(80px, 12vh, 140px);
`;

/**
 * A foto flutua à esquerda em vez de ocupar uma coluna de grid: o texto corre
 * ao lado dela enquanto ela existe e, quando ela acaba, volta a usar a largura
 * inteira. Com grid, os parágrafos finais ficavam presos na coluna estreita e
 * sobrava uma faixa vazia embaixo da imagem.
 */
const PhotoFloat = styled.div`
  float: left;
  width: min(300px, 38%);
  margin: 6px clamp(28px, 4vw, 48px) 24px 0;
  /* acompanha o cantinho arredondado ao envolver o texto */
  shape-outside: inset(0 round ${theme.radius.lg});

  ${theme.bp.md} {
    float: none;
    width: min(300px, 64vw);
    margin: 0 auto ${theme.space(8)};
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${theme.radius.lg};
  padding: 6px;
  background: linear-gradient(
    140deg,
    ${theme.color.brand},
    ${theme.color.wineDeep}
  );

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: calc(${theme.radius.lg} - 4px);
  }
`;

/**
 * `flow-root` cria um contexto de formatação próprio: o cabeçalho fica na
 * coluna ao lado da foto inteiro, em vez de contornar o float e quebrar o
 * título no meio ("Who" de um lado, o resto do outro). Só os parágrafos
 * contornam.
 */
const Head = styled.header`
  display: flow-root;

  h2 {
    max-width: none;
  }
`;

const Body = styled.div`
  /* contém o float: sem isto, a seção seguinte subiria por baixo da foto */
  &::after {
    content: "";
    display: block;
    clear: both;
  }

  p {
    color: ${theme.color.textMuted};
    margin-top: ${theme.space(5)};
    text-wrap: pretty;
  }

  p:first-of-type {
    color: ${theme.color.text};
    font-size: ${theme.size.lg};
    margin-top: ${theme.space(6)};
  }
`;

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Container>
        <Reveal>
          <Body>
            <PhotoFloat>
              <PhotoFrame>
                <img
                  src={profile}
                  alt={t.about.photoAlt}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                />
              </PhotoFrame>
            </PhotoFloat>

            <Head>
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <SectionTitle>{t.about.title}</SectionTitle>
            </Head>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Body>
        </Reveal>
      </Container>
    </Section>
  );
};
