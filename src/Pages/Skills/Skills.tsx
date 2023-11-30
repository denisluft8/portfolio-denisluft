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
  storybook,
  styledComponent,
  tailwind,
  target,
  ts,
  vue,
} from "../../assets/index";
import { SectionName } from "../../Components/SectionName/SectionName";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../contexts/LanguageContext";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";
import { useContext } from "react";

export const Skills = () => {
  const { language, setLanguage } =
    useContext<LanguageContextProps>(LanguageContext);
  const translations = language === "pt" ? ptTranslations : enTranslations;
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
            <img src={vue} />
            <img src={tailwind} />
            <img src={styledComponent} />
            <img src={storybook} />
          </ChildrenContainer>
        </ContainerStyled>
        <ContainerStyled2>
          <h2>Soft Skills</h2>
          <ChildrenContainer>
            <SoftContainer>
              <img src={target} />
              <p>{translations.softA}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={eraser} />
              <p>{translations.softB}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={gear} />
              <p>{translations.softC}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={lightbulb} />
              <p>{translations.softD}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={lock} />
              <p>{translations.softE}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={book} />
              <p>{translations.softF}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={balance} />
              <p>{translations.softG}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={coffee} />
              <p>{translations.softH}</p>
            </SoftContainer>
            <SoftContainer>
              <img src={bubble} />
              <p>{translations.softI}</p>
            </SoftContainer>
          </ChildrenContainer>
        </ContainerStyled2>
      </SkillsStyled>
    </>
  );
};
