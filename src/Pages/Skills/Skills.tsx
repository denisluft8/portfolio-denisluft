import {
  ChildrenContainer,
  ContainerStyled,
  ContainerStyled2,
  SkillsStyled,
  SoftContainer,
} from "./SkillsStyled";
import {
  balance,
  book,
  bubble,
  coffee,
  css,
  eraser,
  gear,
  html,
  js,
  lightbulb,
  lock,
  react,
  styledComponent,
  tailwind,
  target,
  ts,
} from "../../assets/index";
import { SectionName } from "../../Components/SectionName/SectionName";

export const Skills = () => {
  return (
    <>
      <SectionName text="Skills" />
      <SkillsStyled id="skills">
        <ContainerStyled>
          <h2>Hard Skills</h2>
          <ChildrenContainer>
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={ts} />
            <img src={react} />
            <img src={tailwind} />
            <img src={styledComponent} />
          </ChildrenContainer>
        </ContainerStyled>
        <ContainerStyled2>
          <h2>Soft Skills</h2>
          <ChildrenContainer>
            <SoftContainer>
              <img src={target} />
              <p>Focado</p>
            </SoftContainer>
            <SoftContainer>
              <img src={eraser} />
              <p>Flexível</p>
            </SoftContainer>
            <SoftContainer>
              <img src={gear} />
              <p>Proativo</p>
            </SoftContainer>
            <SoftContainer>
              <img src={lightbulb} />
              <p>Criativo</p>
            </SoftContainer>
            <SoftContainer>
              <img src={lock} />
              <p>Confiável</p>
            </SoftContainer>
            <SoftContainer>
              <img src={book} />
              <p>Autodidata</p>
            </SoftContainer>
            <SoftContainer>
              <img src={balance} />
              <p>Ético</p>
            </SoftContainer>
            <SoftContainer>
              <img src={coffee} />
              <p>Motivado</p>
            </SoftContainer>
            <SoftContainer>
              <img src={bubble} />
              <p>Comunicativo</p>
            </SoftContainer>
          </ChildrenContainer>
        </ContainerStyled2>
      </SkillsStyled>
    </>
  );
};
