import { Container } from "../../Components/Container/Container";
import { SkillsStyled } from "./SkillsStyled";
import {
  css,
  html,
  js,
  react,
  styledComponent,
  tailwind,
  ts,
} from "../../assets/index";

export const Skills = () => {
  return (
    <SkillsStyled id="skills">
      <Container title="Hard Skills">
        <img src={html} />
        <img src={css} />
        <img src={js} />
        <img src={ts} />
        <img src={react} />
        <img src={tailwind} />
        <img src={styledComponent} />
      </Container>
      <Container title="Soft Skills">
        <p>Focado</p>
        <p>Comunicativo</p>
        <p>Flexível</p>
        <p>Proativo</p>
        <p>Confiável</p>
        <p>Autodidata</p>
        <p>Ético</p>
        <p>Motivado</p>
      </Container>
    </SkillsStyled>
  );
};
